import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Eye, Download, Users, Clock, MapPin, FileText } from "lucide-react";

interface VisitorData {
  id: string;
  timestamp: string;
  userType: string;
  action: string;
  ip?: string;
  location?: string;
  metadata?: any;
}

export default function AnalyticsDashboard() {
  const [visitors, setVisitors] = useState<VisitorData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading visitor data
    const loadAnalytics = async () => {
      try {
        // In a real app, this would fetch from /api/analytics
        const mockData: VisitorData[] = [
          {
            id: '1',
            timestamp: new Date().toISOString(),
            userType: 'investor',
            action: 'login',
            ip: '192.168.1.1',
            location: 'Santiago, Chile'
          },
          {
            id: '2', 
            timestamp: new Date(Date.now() - 3600000).toISOString(),
            userType: 'investor',
            action: 'view_investment',
            ip: '192.168.1.2',
            location: 'Valparaíso, Chile'
          }
        ];
        
        setVisitors(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading analytics:', error);
        setIsLoading(false);
      }
    };

    loadAnalytics();
  }, []);

  const visitorStats = {
    total: visitors.length,
    today: visitors.filter(v => {
      const today = new Date().toDateString();
      return new Date(v.timestamp).toDateString() === today;
    }).length,
    investors: visitors.filter(v => v.userType === 'investor').length,
    downloads: visitors.filter(v => v.action === 'download').length
  };

  const activityData = [
    { name: 'Logins', value: visitorStats.investors, color: '#f97316' },
    { name: 'Views', value: visitorStats.total - visitorStats.investors, color: '#22d3ee' },
    { name: 'Downloads', value: visitorStats.downloads, color: '#10b981' }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('es-CL', {
      timeZone: 'America/Santiago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-white text-xl">Cargando analytics...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            Analytics Dashboard - INVENOR
          </h1>
          <p className="text-zinc-400">
            Monitoreo de acceso y engagement de inversionistas
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-orange-400" size={24} />
              <span className="text-zinc-400">Total Visitors</span>
            </div>
            <div className="text-2xl font-bold text-white">{visitorStats.total}</div>
          </div>

          <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="text-blue-400" size={24} />
              <span className="text-zinc-400">Today</span>
            </div>
            <div className="text-2xl font-bold text-white">{visitorStats.today}</div>
          </div>

          <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
            <div className="flex items-center gap-3 mb-2">
              <Eye className="text-green-400" size={24} />
              <span className="text-zinc-400">Investors</span>
            </div>
            <div className="text-2xl font-bold text-white">{visitorStats.investors}</div>
          </div>

          <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
            <div className="flex items-center gap-3 mb-2">
              <Download className="text-purple-400" size={24} />
              <span className="text-zinc-400">Downloads</span>
            </div>
            <div className="text-2xl font-bold text-white">{visitorStats.downloads}</div>
          </div>
        </motion.div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="bg-zinc-800 p-6 rounded-xl border border-zinc-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Activity Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={activityData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {activityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            className="bg-zinc-800 p-6 rounded-xl border border-zinc-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {visitors.slice(0, 10).map((visitor) => (
                <div key={visitor.id} className="flex items-center justify-between p-3 bg-zinc-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      visitor.userType === 'investor' ? 'bg-orange-400' : 'bg-blue-400'
                    }`}></div>
                    <div>
                      <div className="text-white font-medium">{visitor.action}</div>
                      <div className="text-zinc-400 text-sm">{visitor.location}</div>
                    </div>
                  </div>
                  <div className="text-zinc-400 text-sm">
                    {formatDate(visitor.timestamp)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visitor Details Table */}
        <motion.div
          className="bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="p-6 border-b border-zinc-700">
            <h3 className="text-xl font-bold text-white">Visitor Log</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-700">
                <tr>
                  <th className="text-left p-4 text-zinc-300">Timestamp</th>
                  <th className="text-left p-4 text-zinc-300">Type</th>
                  <th className="text-left p-4 text-zinc-300">Action</th>
                  <th className="text-left p-4 text-zinc-300">Location</th>
                  <th className="text-left p-4 text-zinc-300">IP</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((visitor) => (
                  <tr key={visitor.id} className="border-b border-zinc-700 hover:bg-zinc-700/50">
                    <td className="p-4 text-zinc-300">{formatDate(visitor.timestamp)}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        visitor.userType === 'investor' 
                          ? 'bg-orange-600/20 text-orange-400' 
                          : 'bg-blue-600/20 text-blue-400'
                      }`}>
                        {visitor.userType}
                      </span>
                    </td>
                    <td className="p-4 text-zinc-300">{visitor.action}</td>
                    <td className="p-4 text-zinc-300">{visitor.location}</td>
                    <td className="p-4 text-zinc-300 font-mono text-sm">{visitor.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}