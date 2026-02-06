import React, { useState, useEffect } from 'react';

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------
const API_URL = "https://script.google.com/macros/s/AKfycbzFYxw5MrQdyxGscB5qMsnOMtuOHmHfQOncfGEp-cK2kX3xHkusG0FVMoeb-LM92Oop/exec";

export default function ExpenseDashboard() {
  const [allData, setAllData] = useState([]); // Stores EVERYTHING fetched
  const [filteredData, setFilteredData] = useState([]); // Stores only SELECTED month
  
  const [availableMonths, setAvailableMonths] = useState([]); // List of tabs for Dropdown
  const [selectedMonth, setSelectedMonth] = useState(""); // Current selection

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [summary, setSummary] = useState({ income: 0, expense: 0, balance: 0 });
  const [categoryStats, setCategoryStats] = useState([]);

  // --------------------------------------------------------------------
  // DATA FETCHING
  // --------------------------------------------------------------------
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      const json = await response.json();

      if (json.status === "success") {
        // 1. Store Raw Data
        setAllData(json.data);

        // 2. Extract Unique Months (SheetNames)
        // We use a Set to get unique values like "Jan 2026", "Feb 2026"
        const uniqueMonths = [...new Set(json.data.map(item => item.SheetName))];
        
        // 3. Sort Months (Newest First)
        // We need a helper to turn "Jan 2026" into a Date for sorting
        uniqueMonths.sort((a, b) => new Date(b) - new Date(a));

        setAvailableMonths(uniqueMonths);

        // 4. Default to the newest month if we have data
        if (uniqueMonths.length > 0) {
          setSelectedMonth(uniqueMonths[0]);
        }
      } else {
        throw new Error("Failed to load data");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch. Check internet or API URL.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --------------------------------------------------------------------
  // FILTER LOGIC (Runs when Month changes)
  // --------------------------------------------------------------------
  useEffect(() => {
    if (!selectedMonth || allData.length === 0) return;

    // 1. Filter data by the selected Tab Name
    const monthData = allData.filter(item => item.SheetName === selectedMonth);
    
    // 2. Sort by Date (Newest First within that month)
    const sortedData = monthData.sort((a, b) => new Date(b.Date) - new Date(a.Date));
    
    setFilteredData(sortedData);
    calculateSummary(sortedData);

  }, [selectedMonth, allData]);

  const calculateSummary = (data) => {
    let income = 0;
    let expense = 0;
    const catMap = {};

    data.forEach(item => {
      const amount = parseFloat(item.Amount) || 0;
      const type = item.Type || "Expense";
      const category = item.Category || "Uncategorized";

      if (type.toLowerCase() === 'income') {
        income += amount;
      } else {
        expense += amount;
        // Group by Category
        if (!catMap[category]) catMap[category] = 0;
        catMap[category] += amount;
      }
    });

    setSummary({ income, expense, balance: income - expense });

    // Format for Chart
    const statsArray = Object.keys(catMap)
      .map(key => ({ name: key, value: catMap[key] }))
      .sort((a, b) => b.value - a.value);

    setCategoryStats(statsArray);
  };

  // --------------------------------------------------------------------
  // HELPER FORMATTERS
  // --------------------------------------------------------------------
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };

  // --------------------------------------------------------------------
  // RENDER UI
  // --------------------------------------------------------------------
  if (loading) return (
    <div className="flex items-center justify-center min-h-screen text-blue-600">
      <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
    </div>
  );

  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6 bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* HEADER WITH DROPDOWN */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Expense Tracker</h1>
          <p className="text-sm text-slate-500">Dashboard</p>
        </div>

        <div className="flex items-center gap-3">
           <label className="text-sm font-medium text-slate-600">Select Month:</label>
           <select 
             value={selectedMonth}
             onChange={(e) => setSelectedMonth(e.target.value)}
             className="px-4 py-2 bg-slate-100 border-none rounded-lg text-slate-800 font-semibold focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
           >
             {availableMonths.map(month => (
               <option key={month} value={month}>{month}</option>
             ))}
           </select>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-slate-400 uppercase">Income</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">{formatCurrency(summary.income)}</h2>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-rose-500">
          <p className="text-xs font-bold text-slate-400 uppercase">Expenses</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">{formatCurrency(summary.expense)}</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
          <p className="text-xs font-bold text-slate-400 uppercase">Balance</p>
          <h2 className={`text-3xl font-bold mt-1 ${summary.balance >= 0 ? 'text-slate-900' : 'text-rose-600'}`}>
            {formatCurrency(summary.balance)}
          </h2>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* CHART SECTION */}
        <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-1 h-fit">
          <h3 className="font-bold text-lg mb-6 text-slate-800">Spending by Category</h3>
          <div className="space-y-5">
            {categoryStats.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-4">No expenses this month.</p>
            ) : (
              categoryStats.map((cat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">{cat.name}</span>
                    <span className="text-slate-500">{formatCurrency(cat.value)}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(cat.value / summary.expense) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* TRANSACTIONS LIST */}
        <div className="bg-white rounded-xl shadow-sm lg:col-span-2 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-lg text-slate-800">{selectedMonth} Transactions</h3>
            <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">{filteredData.length} records</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-500">
                <tr>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredData.map((t, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                      {formatDate(t.Date)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900 font-medium">{t.Description || "No Description"}</div>
                      <div className="text-xs text-slate-400">{t['Sub-Category']}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600 font-medium border border-slate-200">
                        {t.Category}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-right font-bold whitespace-nowrap ${t.Type === 'Income' ? 'text-emerald-600' : 'text-slate-900'}`}>
                      {t.Type === 'Income' ? '+' : ''}{formatCurrency(t.Amount)}
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-6 py-12 text-center text-slate-400">
                      No data found for {selectedMonth}.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}