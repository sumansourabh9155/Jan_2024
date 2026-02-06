import React, { useState, useEffect } from 'react';

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------
const API_URL = "https://script.google.com/macros/s/AKfycbzFYxw5MrQdyxGscB5qMsnOMtuOHmHfQOncfGEp-cK2kX3xHkusG0FVMoeb-LM92Oop/exec";

export default function ExpenseDashboard() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [availableMonths, setAvailableMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
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
        setAllData(json.data);
        
        // Extract Unique Months and Sort Newest First
        const uniqueMonths = [...new Set(json.data.map(item => item.SheetName))];
        uniqueMonths.sort((a, b) => new Date(b) - new Date(a));

        setAvailableMonths(uniqueMonths);

        if (uniqueMonths.length > 0) {
          setSelectedMonth(uniqueMonths[0]);
        }
      } else {
        throw new Error("Failed to load data");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data. Check API URL.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --------------------------------------------------------------------
  // FILTER LOGIC
  // --------------------------------------------------------------------
  useEffect(() => {
    if (!selectedMonth || allData.length === 0) return;

    const monthData = allData.filter(item => item.SheetName === selectedMonth);
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
        if (!catMap[category]) catMap[category] = 0;
        catMap[category] += amount;
      }
    });

    setSummary({ income, expense, balance: income - expense });

    const statsArray = Object.keys(catMap)
      .map(key => ({ name: key, value: catMap[key] }))
      .sort((a, b) => b.value - a.value);

    setCategoryStats(statsArray);
  };

  // --------------------------------------------------------------------
  // FORMATTERS
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
    <div className="flex items-center justify-center min-h-[60vh] text-zinc-400">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin h-6 w-6 border-2 border-zinc-800 border-t-transparent rounded-full"></div>
        <span className="text-sm font-medium tracking-wide">LOADING SYSTEM DATA...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="p-6 bg-red-50 text-red-600 rounded-lg border border-red-100 max-w-md text-center">
        <p className="font-medium">System Error</p>
        <p className="text-sm mt-1 opacity-80">{error}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-white min-h-screen font-sans text-zinc-900 selection:bg-zinc-100">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-zinc-100 pb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Financial Logic
          </h1>
          <p className="text-zinc-500 mt-2 text-sm max-w-md leading-relaxed">
            Real-time tracking of personal burn rate and capital allocation.
            <br className="hidden md:block"/> Optimized for transparency and automated entry.
          </p>
        </div>

        <div className="flex items-center gap-4">
           <div className="relative group">
             <select 
               value={selectedMonth}
               onChange={(e) => setSelectedMonth(e.target.value)}
               className="appearance-none bg-zinc-50 border border-zinc-200 text-zinc-700 py-2.5 pl-4 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-300 transition-all cursor-pointer min-w-[160px]"
             >
               {availableMonths.map(month => (
                 <option key={month} value={month}>{month}</option>
               ))}
             </select>
             {/* Custom Chevron Icon */}
             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </div>
           </div>
           
           <button 
             onClick={fetchData}
             className="p-2.5 text-zinc-400 hover:text-zinc-900 border border-transparent hover:border-zinc-200 rounded-lg transition-all"
             title="Refresh Data"
           >
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M23 4v6h-6"></path>
               <path d="M1 20v-6h6"></path>
               <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
             </svg>
           </button>
        </div>
      </div>

      {/* METRICS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Metric Card: Income */}
        <div className="p-6 rounded-xl border border-zinc-100 bg-zinc-50/50">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Inflow</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-semibold text-zinc-900 font-mono tracking-tight">
              {formatCurrency(summary.income)}
            </span>
          </div>
        </div>
        
        {/* Metric Card: Expenses */}
        <div className="p-6 rounded-xl border border-zinc-100 bg-zinc-50/50">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Outflow</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-semibold text-zinc-900 font-mono tracking-tight">
              {formatCurrency(summary.expense)}
            </span>
          </div>
        </div>

        {/* Metric Card: Net */}
        <div className={`p-6 rounded-xl border ${summary.balance >= 0 ? 'border-zinc-100 bg-zinc-50/50' : 'border-red-100 bg-red-50/10'}`}>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Net Position</p>
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl font-semibold font-mono tracking-tight ${summary.balance >= 0 ? 'text-zinc-900' : 'text-red-600'}`}>
              {formatCurrency(summary.balance)}
            </span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT SPLIT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: CATEGORY DISTRIBUTION (4 Columns) */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h3 className="text-base font-semibold text-zinc-900 mb-6">Allocation</h3>
            <div className="space-y-4">
              {categoryStats.length === 0 ? (
                <p className="text-zinc-400 text-sm py-2">No data recorded.</p>
              ) : (
                categoryStats.map((cat, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">
                        {cat.name}
                      </span>
                      <span className="font-mono text-zinc-500 text-xs">
                        {formatCurrency(cat.value)}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-zinc-100 rounded-sm h-1.5 overflow-hidden">
                      <div 
                        className="bg-zinc-800 h-1.5 rounded-sm transition-all duration-700 ease-out" 
                        style={{ width: `${(cat.value / summary.expense) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: TRANSACTION LOG (8 Columns) */}
        <div className="lg:col-span-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-semibold text-zinc-900">Ledger</h3>
            <span className="text-xs font-mono text-zinc-400 bg-zinc-50 px-2 py-1 rounded border border-zinc-100">
              {filteredData.length} RECORDS
            </span>
          </div>
          
          <div className="border border-zinc-100 rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 border-b border-zinc-100">
                <tr>
                  <th className="px-6 py-4 font-medium text-zinc-500 text-xs uppercase tracking-wider w-32">Date</th>
                  <th className="px-6 py-4 font-medium text-zinc-500 text-xs uppercase tracking-wider">Description</th>
                  <th className="px-6 py-4 font-medium text-zinc-500 text-xs uppercase tracking-wider text-right">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50 bg-white">
                {filteredData.map((t, idx) => (
                  <tr key={idx} className="group hover:bg-zinc-50/50 transition-colors">
                    {/* Date Column */}
                    <td className="px-6 py-4 whitespace-nowrap align-top">
                      <span className="font-mono text-zinc-600 text-xs">
                        {formatDate(t.Date)}
                      </span>
                    </td>
                    
                    {/* Description Column */}
                    <td className="px-6 py-4 align-top">
                      <div className="text-zinc-900 font-medium mb-0.5">
                        {t.Description || "Unspecified"}
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-zinc-100 text-zinc-500 border border-zinc-200">
                           {t.Category}
                         </span>
                         {t['Sub-Category'] && (
                            <span className="text-[10px] text-zinc-400">
                              / {t['Sub-Category']}
                            </span>
                         )}
                      </div>
                    </td>

                    {/* Amount Column */}
                    <td className="px-6 py-4 text-right align-top">
                      <span className={`font-mono font-medium ${t.Type === 'Income' ? 'text-emerald-600' : 'text-zinc-900'}`}>
                        {t.Type === 'Income' ? '+' : ''}{formatCurrency(t.Amount)}
                      </span>
                      <div className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wide">
                        {t['Payment Mode']}
                      </div>
                    </td>
                  </tr>
                ))}
                
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan="3" className="px-6 py-12 text-center text-zinc-400 italic">
                      No transactions found for this period.
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