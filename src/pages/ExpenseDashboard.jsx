import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  PieChart,
  ArrowUpRight,
  Calendar,
  RefreshCw,
  Filter,
  CreditCard,
  Tag,
  Activity,
  Plus,
  X,
  Search, // Added
  ChevronDown, // Added
  RotateCcw, // Added
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../components/Navbar";

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------
const API_URL =
  "https://script.google.com/macros/s/AKfycbzFYxw5MrQdyxGscB5qMsnOMtuOHmHfQOncfGEp-cK2kX3xHkusG0FVMoeb-LM92Oop/exec";

export default function ExpenseDashboard() {
  // STATE
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [availableMonths, setAvailableMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- NEW: ADVANCED FILTERS STATE ---
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [modeFilter, setModeFilter] = useState("All");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  // Metrics
  const [summary, setSummary] = useState({ income: 0, expense: 0, balance: 0 });
  const [categoryStats, setCategoryStats] = useState([]);
  const [chartData, setChartData] = useState([]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0], // Default to Today
    type: "Expense",
    amount: "",
    category: "Food",
    sub_category: "",
    description: "",
    mode: "UPI",
  });

  // DATA FETCHING
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      const json = await response.json();

      if (json.status === "success") {
        setAllData(json.data);
        const uniqueMonths = [
          ...new Set(json.data.map((item) => item.SheetName)),
        ];
        uniqueMonths.sort((a, b) => new Date(b) - new Date(a));
        setAvailableMonths(uniqueMonths);

        if (!selectedMonth && uniqueMonths.length > 0) {
          setSelectedMonth(uniqueMonths[0]);
        }
      } else {
        throw new Error("Failed to load data");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // MONTH & FILTER LOGIC
  useEffect(() => {
    if (!selectedMonth || allData.length === 0) return;
    const monthData = allData.filter(
      (item) => item.SheetName === selectedMonth,
    );
    const sortedData = monthData.sort(
      (a, b) => new Date(b.Date) - new Date(a.Date),
    );
    setFilteredData(sortedData);
    calculateSummary(sortedData);
    prepareChartData(sortedData);

    // Reset filters when month changes
    resetFilters();
  }, [selectedMonth, allData]);

  // --- DYNAMIC FILTER LISTS ---
  const uniqueCategories = [
    "All",
    ...new Set(filteredData.map((item) => item.Category).filter(Boolean)),
  ];
  const uniqueModes = [
    "All",
    ...new Set(
      filteredData.map((item) => item["Payment Mode"]).filter(Boolean),
    ),
  ];

  // --- LEDGER FILTER FUNCTION ---
  const getLedgerData = () => {
    return filteredData.filter((item) => {
      // 1. Search
      const matchesSearch =
        (item.Description &&
          item.Description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.Category &&
          item.Category.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item["Sub-Category"] &&
          item["Sub-Category"]
            .toLowerCase()
            .includes(searchQuery.toLowerCase()));

      // 2. Filters
      const matchesType = typeFilter === "All" || item.Type === typeFilter;
      const matchesCategory =
        categoryFilter === "All" || item.Category === categoryFilter;
      const matchesMode =
        modeFilter === "All" || item["Payment Mode"] === modeFilter;

      // 3. Date Range
      let matchesDate = true;
      if (dateRange.start) {
        matchesDate =
          matchesDate && new Date(item.Date) >= new Date(dateRange.start);
      }
      if (dateRange.end) {
        matchesDate =
          matchesDate && new Date(item.Date) <= new Date(dateRange.end);
      }

      return (
        matchesSearch &&
        matchesType &&
        matchesCategory &&
        matchesMode &&
        matchesDate
      );
    });
  };

  const resetFilters = () => {
    setSearchQuery("");
    setTypeFilter("All");
    setCategoryFilter("All");
    setModeFilter("All");
    setDateRange({ start: "", end: "" });
  };

  const calculateSummary = (data) => {
    let income = 0;
    let expense = 0;
    const catMap = {};
    data.forEach((item) => {
      const amount = parseFloat(item.Amount) || 0;
      const type = item.Type || "Expense";
      const category = item.Category || "Uncategorized";
      if (type.toLowerCase() === "income") income += amount;
      else {
        expense += amount;
        if (!catMap[category]) catMap[category] = 0;
        catMap[category] += amount;
      }
    });
    setSummary({ income, expense, balance: income - expense });
    setCategoryStats(
      Object.keys(catMap)
        .map((key) => ({ name: key, value: catMap[key] }))
        .sort((a, b) => b.value - a.value),
    );
  };

  const prepareChartData = (data) => {
    const dailyMap = {};
    data.forEach((item) => {
      if (item.Type === "Expense") {
        const dayKey = new Date(item.Date).getDate();
        if (!dailyMap[dayKey]) dailyMap[dayKey] = 0;
        dailyMap[dayKey] += parseFloat(item.Amount);
      }
    });
    const chartArray = [];
    for (let i = 1; i <= 31; i++)
      chartArray.push({ day: i, amount: dailyMap[i] || 0 });
    setChartData(chartArray);
  };

  const handleAddTransaction = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(API_URL, { method: "POST", body: JSON.stringify(formData) });
      setIsModalOpen(false);
      setFormData({
        date: new Date().toISOString().split("T")[0],
        type: "Expense",
        amount: "",
        category: "Food",
        sub_category: "",
        description: "",
        mode: "UPI",
      });
      await fetchData();
    } catch (err) {
      alert("Failed to save transaction.");
    } finally {
      setSubmitting(false);
    }
  };

  const getCategoryStyle = (category) => {
    const cat = category?.toLowerCase() || "";
    if (cat.includes("high" || "loan"))
      return {
        badge: "text-red-500 bg-red-500/10 border-red-500/20",
        bar: "bg-red-500",
        text: "text-red-500",
      };
    if (cat.includes("salary"))
      return {
        badge: "text-green-500 bg-green-500/10 border-green-500/20",
        bar: "bg-green-500",
        text: "text-green-500",
      };
    if (cat.includes("shopping"))
      return {
        badge: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
        bar: "bg-yellow-500",
        text: "text-yellow-500",
      };
    return {
      badge:
        "text-gray-400 bg-white/5 border-white/5 group-hover:border-white/10",
      bar: "bg-gradient-to-r from-gray-600 to-gray-400 group-hover:from-[#d6f928] group-hover:to-green-400",
      text: "text-gray-300",
    };
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });

  const ledgerTransactions = getLedgerData();

  if (loading && allData.length === 0)
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-gray-400">
        <RefreshCw className="animate-spin text-[#d6f928]" size={32} />
      </div>
    );

  return (
    <div>
      <Navbar />

      <div className="min-h-screen pt-24 bg-[#050505] text-white font-sans selection:bg-[#d6f928] selection:text-black relative overflow-hidden">
        <div
          className="fixed inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-white/10 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-[#d6f928] animate-pulse"></span>
                Live Financial System
              </div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                Expense <span className="text-gray-500">Analytics</span>
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <Calendar size={14} />
                </div>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="appearance-none bg-[#0a0a0a] border border-white/10 text-white py-2.5 pl-10 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all cursor-pointer hover:bg-white/5 min-w-[180px]"
                >
                  {availableMonths.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <ChevronDown size={12} />
                </div>
              </div>
              <button
                onClick={fetchData}
                className="p-2.5 bg-[#0a0a0a] border border-white/10 text-gray-400 hover:text-white hover:border-white/30 rounded-lg transition-all group"
              >
                <RefreshCw
                  size={18}
                  className={
                    loading
                      ? "animate-spin"
                      : "group-hover:rotate-180 transition-transform duration-500"
                  }
                />
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-white text-black px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-[#d6f928] transition-colors shadow-lg shadow-white/5"
              >
                <Plus size={18} />
                <span>Add</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Card 1: Income */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:border-white/20 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp size={20} className="text-green-400" />
                    </div>
                    <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded">
                      + Inflow
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">Total Income</p>
                  <h2 className="text-3xl font-bold text-green-500 font-mono tracking-tight group-hover:scale-105 transition-transform origin-left">
                    {formatCurrency(summary.income)}
                  </h2>
                </div>

                {/* Card 2: Expense */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:border-white/20 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center">
                      <TrendingDown size={20} className="text-red-400" />
                    </div>
                    <span className="text-xs font-mono text-red-400 bg-red-500/10 px-2 py-1 rounded">
                      - Outflow
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">Total Expenses</p>
                  <h2 className="text-3xl font-bold text-red-500 font-mono tracking-tight group-hover:scale-105 transition-transform origin-left">
                    {formatCurrency(summary.expense)}
                  </h2>
                </div>

                {/* Card 3: Balance */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none"></div>

                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                      <Wallet size={20} className="text-blue-400" />
                    </div>
                    <span
                      className={`text-xs font-mono px-2 py-1 rounded ${summary.balance >= 0 ? "text-blue-400 bg-blue-500/10" : "text-red-400 bg-red-500/10"}`}
                    >
                      Net Position
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-1 relative z-10">
                    Available Balance
                  </p>
                  <h2
                    className={`text-3xl font-bold font-mono tracking-tight relative z-10 ${summary.balance >= 0 ? "text-white" : "text-red-400"}`}
                  >
                    {formatCurrency(summary.balance)}
                  </h2>
                </div>
              </div>
              <div className=" bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:border-white/20  p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Activity size={18} className="text-[#d6f928]" />
                    <h3 className="font-bold text-lg text-white">
                      Daily Burn Rate
                    </h3>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                    Trend
                  </span>
                </div>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={chartData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorSplit"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#d6f928"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#d6f928"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        vertical={false}
                        stroke="rgba(255,255,255,0.05)"
                      />
                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#6b7280", fontSize: 12 }}
                        dy={10}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#6b7280", fontSize: 12 }}
                      />
                      <Tooltip
                        content={({ active, payload, label }) =>
                          active && payload ? (
                            <div className="bg-[#0a0a0a] border border-white/10 p-3 rounded-lg shadow-xl">
                              <p className="text-gray-400 text-xs mb-1 font-mono">
                                Day {label}
                              </p>
                              <p className="text-white font-bold text-sm font-mono">
                                {formatCurrency(payload[0].value)}
                              </p>
                            </div>
                          ) : null
                        }
                        cursor={{
                          stroke: "rgba(255,255,255,0.1)",
                          strokeWidth: 1,
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#d6f928"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorSplit)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:border-white/20  p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <PieChart size={18} className="text-gray-400" />
                  <h3 className="font-bold text-lg text-white">Allocation</h3>
                </div>

                <div className="space-y-6">
                  {categoryStats.length === 0 ? (
                    <div className="text-center py-10">
                      <p className="text-gray-500 text-sm">No data recorded.</p>
                    </div>
                  ) : (
                    categoryStats.map((cat, idx) => {
                      const styles = getCategoryStyle(cat.name);
                      return (
                        <div key={idx} className="group">
                          <div className="flex justify-between items-end mb-2">
                            <span
                              className={`text-sm font-medium transition-colors ${styles.text}`}
                            >
                              {cat.name}
                            </span>
                            <span className="font-mono text-xs text-gray-500 group-hover:text-white transition-colors">
                              {formatCurrency(cat.value)}
                            </span>
                          </div>
                          <div className="w-full bg-white/5 rounded-sm h-1.5 overflow-hidden">
                            <div
                              className={`h-full rounded-sm transition-all duration-1000 ease-out ${styles.bar}`}
                              style={{
                                width: `${(cat.value / summary.expense) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* LEDGER ROW - WITH ADVANCED FILTERS */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden min-h-[500px] flex flex-col">
            {/* LEDGER HEADER & FILTERS */}
            <div className="p-6 border-b border-white/5 space-y-6 bg-white/[0.02]">
              {/* Top Bar: Title + Search */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <ArrowUpRight size={18} className="text-purple-400" />
                  <h3 className="font-bold text-lg text-white">Ledger</h3>
                  <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded bg-black ml-2">
                    {ledgerTransactions.length} RECORDS
                  </span>
                </div>

                {/* Search Bar */}
                <div className="relative group w-full md:w-64">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#d6f928] transition-colors"
                    size={14}
                  />
                  <input
                    type="text"
                    placeholder="Search ledger..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-full py-2 pl-9 pr-4 text-xs text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Filter Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {/* Type Filter */}
                <div className="relative">
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg py-2 pl-3 pr-8 text-xs text-gray-300 focus:outline-none focus:border-white/30 focus:text-white transition-colors cursor-pointer"
                  >
                    <option value="All">All Types</option>
                    <option value="Income">Income Only</option>
                    <option value="Expense">Expense Only</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <ChevronDown size={12} />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg py-2 pl-3 pr-8 text-xs text-gray-300 focus:outline-none focus:border-white/30 focus:text-white transition-colors cursor-pointer"
                  >
                    <option value="All">All Categories</option>
                    {uniqueCategories.map(
                      (c) =>
                        c !== "All" && (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ),
                    )}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <ChevronDown size={12} />
                  </div>
                </div>

                {/* Payment Mode Filter */}
                <div className="relative">
                  <select
                    value={modeFilter}
                    onChange={(e) => setModeFilter(e.target.value)}
                    className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg py-2 pl-3 pr-8 text-xs text-gray-300 focus:outline-none focus:border-white/30 focus:text-white transition-colors cursor-pointer"
                  >
                    <option value="All">All Modes</option>
                    {uniqueModes.map(
                      (m) =>
                        m !== "All" && (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ),
                    )}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <ChevronDown size={12} />
                  </div>
                </div>

                {/* Date Start */}
                <div className="relative">
                  <input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) =>
                      setDateRange({ ...dateRange, start: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 px-3 text-xs text-gray-300 focus:outline-none focus:border-white/30 focus:text-white transition-colors min-h-[34px]"
                  />
                </div>

                {/* Date End & Reset */}
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={dateRange.end}
                    onChange={(e) =>
                      setDateRange({ ...dateRange, end: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 px-3 text-xs text-gray-300 focus:outline-none focus:border-white/30 focus:text-white transition-colors min-h-[34px]"
                  />
                  <button
                    onClick={resetFilters}
                    className="px-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white text-gray-400 transition-colors"
                    title="Reset Filters"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/[0.02] text-xs uppercase text-gray-500 font-mono">
                  <tr>
                    <th className="px-6 py-4 font-normal tracking-wider w-32">
                      Date
                    </th>
                    <th className="px-6 py-4 font-normal tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 font-normal tracking-wider">
                      Details
                    </th>
                    <th className="px-6 py-4 font-normal tracking-wider text-right">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {ledgerTransactions.map((t, idx) => {
                    const styles = getCategoryStyle(t.Category);
                    return (
                      <tr
                        key={idx}
                        className="group hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="px-6 py-3 whitespace-nowrap align-center">
                          <span className="font-mono text-gray-400 text-xs group-hover:text-white transition-colors">
                            {formatDate(t.Date)}
                          </span>
                        </td>
                         <td className="px-6 py-3 text-right align-center">
                             <div className="flex flex-wrap items-center gap-2">
                            <div
                              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium border ${styles.badge}`}
                            >
                              <Tag size={10} /> {t.Category}
                            </div>
                           
                          </div>
                        </td>
                        <td className="px-6 py-3 align-center">
                          <div className="text-gray-200 font-medium mb-1.5 flex items-center gap-2">
                            {t["Sub-Category"] || "Unspecified"}
                          </div>
                          {t["Sub-Category"] && (
                              <span className="text-[10px] text-gray-600">
                                {t.Description}
                              </span>
                            )}
                        </td>
                       

                        <td className="px-6 py-3 text-right align-center">
                          <span
                            className={`font-mono text-sm font-bold tracking-tight ${t.Type === "Income" ? "text-[#d6f928]" : "text-white"}`}
                          >
                            {t.Type === "Income" ? "+" : ""}
                            {formatCurrency(t.Amount)}
                          </span>
                          <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-gray-600 uppercase tracking-wide">
                            <CreditCard size={10} /> {t["Payment Mode"]}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {ledgerTransactions.length === 0 && (
                    <tr>
                      <td
                        colSpan="3"
                        className="px-6 py-16 text-center text-gray-600 italic"
                      >
                        No transactions found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <h2 className="text-xl font-bold text-white mb-6">
                Add Transaction
              </h2>
              <form onSubmit={handleAddTransaction} className="space-y-4">
                {/* DATE PICKER (CRITICAL FIX) */}
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full bg-black border border-white/10 rounded-lg py-2 px-3 text-white focus:border-white/40 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {["Expense", "Income"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, type })}
                      className={`py-2 rounded-lg text-sm font-bold border transition-all ${formData.type === type ? (type === "Expense" ? "bg-red-500/10 border-red-500 text-red-500" : "bg-green-500/10 border-green-500 text-green-500") : "bg-white/5 border-transparent text-gray-400 hover:bg-white/10"}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        ₹
                      </span>
                      <input
                        type="number"
                        required
                        value={formData.amount}
                        onChange={(e) =>
                          setFormData({ ...formData, amount: e.target.value })
                        }
                        className="w-full bg-black border border-white/10 rounded-lg py-2 pl-7 pr-3 text-white focus:border-white/40 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full bg-black border border-white/10 rounded-lg py-2 px-3 text-white focus:border-white/40 focus:outline-none appearance-none"
                    >
                      {[
                        "Food",
                        "Transport",
                        "Shopping",
                        "Bills",
                        "Family",
                        "Investment",
                        "Salary",
                        "High",
                        "Misc",
                      ].map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Swiggy, Uber"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full bg-black border border-white/10 rounded-lg py-2 px-3 text-white focus:border-white/40 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Payment Mode
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) =>
                        setFormData({ ...formData, mode: e.target.value })
                      }
                      className="w-full bg-black border border-white/10 rounded-lg py-2 px-3 text-white focus:border-white/40 focus:outline-none"
                    >
                      {[
                        "UPI",
                        "Credit Card",
                        "Debit Card",
                        "Cash",
                        "Net Banking",
                      ].map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Sub Category
                    </label>
                    <input
                      type="text"
                      placeholder="Optional"
                      value={formData.sub_category}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sub_category: e.target.value,
                        })
                      }
                      className="w-full bg-black border border-white/10 rounded-lg py-2 px-3 text-white focus:border-white/40 focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-[#d6f928] transition-colors mt-2 disabled:opacity-50"
                >
                  {submitting ? "Saving..." : "Save Transaction"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
