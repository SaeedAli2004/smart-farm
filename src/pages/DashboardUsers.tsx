import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { Users, Search, Filter, MoreVertical, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const users = [
  { id: 1, name: "أحمد محمد", email: "ahmed@example.com", role: "مدير", status: "نشط", avatar: "أ" },
  { id: 2, name: "سارة علي", email: "sara@example.com", role: "محرر", status: "نشط", avatar: "س" },
  { id: 3, name: "محمد خالد", email: "mohamed@example.com", role: "مستخدم", status: "غير نشط", avatar: "م" },
  { id: 4, name: "فاطمة أحمد", email: "fatma@example.com", role: "مستخدم", status: "نشط", avatar: "ف" },
  { id: 5, name: "عمر حسن", email: "omar@example.com", role: "محرر", status: "نشط", avatar: "ع" },
];

const DashboardUsers = () => {
  return (
    <div className="min-h-screen bg-background flex" dir="rtl">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">إدارة المستخدمين</h1>
                <p className="text-muted-foreground">إدارة ومتابعة جميع المستخدمين</p>
              </div>
            </div>
            <Button className="gap-2">
              <UserPlus className="w-4 h-4" />
              إضافة مستخدم
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="البحث عن مستخدم..." className="pr-10" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              تصفية
            </Button>
          </div>

          {/* Users Table */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">المستخدم</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">البريد الإلكتروني</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">الدور</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">الحالة</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {user.avatar}
                        </div>
                        <span className="font-medium text-foreground">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        user.status === "نشط" 
                          ? "bg-success/10 text-success" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardUsers;
