import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import RevenueChart from "@/components/dashboard/RevenueChart";
import DonutChart from "@/components/dashboard/DonutChart";
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Eye } from "lucide-react";

const stats = [
  { label: "إجمالي الإيرادات", value: "125,430 ر.س", change: "+12.5%", isPositive: true, icon: DollarSign },
  { label: "الزوار الجدد", value: "2,340", change: "+8.2%", isPositive: true, icon: Users },
  { label: "المبيعات", value: "1,245", change: "-3.1%", isPositive: false, icon: ShoppingCart },
  { label: "معدل التحويل", value: "3.2%", change: "+0.8%", isPositive: true, icon: Eye },
];

const DashboardStats = () => {
  return (
    <div className="min-h-screen bg-background flex" dir="rtl">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">الإحصائيات</h1>
              <p className="text-muted-foreground">تحليل شامل لأداء المنصة</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${stat.isPositive ? 'text-success' : 'text-destructive'}`}>
                    {stat.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            <DonutChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardStats;
