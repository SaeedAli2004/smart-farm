import { Users, ShoppingCart, DollarSign, Package } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import DonutChart from "@/components/dashboard/DonutChart";
import RecentActivity from "@/components/dashboard/RecentActivity";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background flex" dir="rtl">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-2xl font-bold text-foreground mb-1">مرحباً، أحمد! 👋</h1>
            <p className="text-muted-foreground">إليك نظرة عامة على أداء منصتك اليوم</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="إجمالي المستخدمين"
              value="12,450"
              icon={Users}
              trend={{ value: 12.5, isPositive: true }}
              delay={0}
            />
            <StatCard
              title="الطلبات الجديدة"
              value="1,234"
              icon={ShoppingCart}
              trend={{ value: 8.2, isPositive: true }}
              delay={50}
            />
            <StatCard
              title="الإيرادات"
              value="45,600 ر.س"
              icon={DollarSign}
              trend={{ value: 5.4, isPositive: true }}
              delay={100}
            />
            <StatCard
              title="المنتجات"
              value="567"
              icon={Package}
              trend={{ value: 2.1, isPositive: false }}
              delay={150}
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <DonutChart />
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivity />
            
            {/* Quick Stats */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">ملخص سريع</h3>
                <p className="text-sm text-muted-foreground">إحصائيات اليوم</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">طلبات مكتملة</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">156</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <span className="text-sm text-foreground">طلبات معلقة</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">23</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <span className="text-sm text-foreground">طلبات ملغية</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">8</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <span className="text-sm text-foreground">مستخدمين جدد</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">45</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
