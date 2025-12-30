import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { Settings, User, Lock, Bell, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DashboardSettings = () => {
  return (
    <div className="min-h-screen bg-background flex" dir="rtl">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">الإعدادات</h1>
              <p className="text-muted-foreground">إدارة إعدادات حسابك والمنصة</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar Navigation */}
            <div className="bg-card rounded-2xl border border-border p-4">
              <nav className="space-y-2">
                {[
                  { icon: User, label: "الملف الشخصي", active: true },
                  { icon: Lock, label: "الأمان" },
                  { icon: Bell, label: "الإشعارات" },
                  { icon: Palette, label: "المظهر" },
                  { icon: Globe, label: "اللغة" },
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      item.active 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-2 bg-card rounded-2xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">الملف الشخصي</h2>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                  أ
                </div>
                <div>
                  <Button variant="outline" size="sm">تغيير الصورة</Button>
                  <p className="text-sm text-muted-foreground mt-2">JPG, PNG أو GIF. الحد الأقصى 2MB</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">الاسم الأول</label>
                    <Input defaultValue="أحمد" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">الاسم الأخير</label>
                    <Input defaultValue="محمد" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">البريد الإلكتروني</label>
                  <Input type="email" defaultValue="ahmed@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">رقم الهاتف</label>
                  <Input type="tel" defaultValue="+966 50 123 4567" />
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-border">
                  <Button variant="outline">إلغاء</Button>
                  <Button>حفظ التغييرات</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardSettings;
