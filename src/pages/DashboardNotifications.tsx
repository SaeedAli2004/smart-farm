import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { Bell, CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const notifications = [
  { id: 1, title: "طلب جديد", message: "تم استلام طلب جديد رقم #1234", time: "منذ 5 دقائق", type: "info", read: false },
  { id: 2, title: "تم الشحن", message: "تم شحن الطلب رقم #1230 بنجاح", time: "منذ ساعة", type: "success", read: false },
  { id: 3, title: "تنبيه المخزون", message: "المنتج 'هاتف ذكي' على وشك النفاذ", time: "منذ 2 ساعة", type: "warning", read: true },
  { id: 4, title: "فشل الدفع", message: "فشل في معالجة الدفع للطلب #1228", time: "منذ 3 ساعات", type: "error", read: true },
  { id: 5, title: "مستخدم جديد", message: "قام مستخدم جديد بالتسجيل في المنصة", time: "منذ 5 ساعات", type: "info", read: true },
];

const getIcon = (type: string) => {
  switch (type) {
    case "success": return <CheckCircle className="w-5 h-5 text-success" />;
    case "warning": return <AlertCircle className="w-5 h-5 text-chart-4" />;
    case "error": return <XCircle className="w-5 h-5 text-destructive" />;
    default: return <Info className="w-5 h-5 text-primary" />;
  }
};

const DashboardNotifications = () => {
  return (
    <div className="min-h-screen bg-background flex" dir="rtl">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">الإشعارات</h1>
                <p className="text-muted-foreground">جميع الإشعارات والتنبيهات</p>
              </div>
            </div>
            <Button variant="outline">
              تحديد الكل كمقروء
            </Button>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`bg-card rounded-2xl p-6 border transition-shadow hover:shadow-md ${
                  notification.read ? 'border-border' : 'border-primary/30 bg-primary/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    notification.type === "success" ? "bg-success/10" :
                    notification.type === "warning" ? "bg-chart-4/10" :
                    notification.type === "error" ? "bg-destructive/10" : "bg-primary/10"
                  }`}>
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{notification.title}</h3>
                      <span className="text-sm text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="text-muted-foreground mt-1">{notification.message}</p>
                  </div>
                  {!notification.read && (
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardNotifications;
