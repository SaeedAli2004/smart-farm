import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  FileText, 
  Bell,
  LogOut,
  ChevronLeft,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const menuItems = [
  { icon: LayoutDashboard, label: "الرئيسية", path: "/dashboard" },
  { icon: Users, label: "المستخدمين", path: "/dashboard/users" },
  { icon: BarChart3, label: "الإحصائيات", path: "/dashboard/stats" },
  { icon: Package, label: "المنتجات", path: "/dashboard/products" },
  { icon: FileText, label: "التقارير", path: "/dashboard/reports" },
  { icon: Bell, label: "الإشعارات", path: "/dashboard/notifications" },
  { icon: Settings, label: "الإعدادات", path: "/dashboard/settings" },
];

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "h-screen gradient-primary flex flex-col transition-all duration-300 sticky top-0",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-6 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sidebar-foreground/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-sidebar-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-sidebar-foreground">لوحة التحكم</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 rounded-lg bg-sidebar-foreground/10 hover:bg-sidebar-foreground/20 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className={cn(
            "w-5 h-5 text-sidebar-foreground transition-transform",
            collapsed && "rotate-180"
          )} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                    isActive 
                      ? "bg-sidebar-foreground text-sidebar-background shadow-lg" 
                      : "text-sidebar-foreground/80 hover:bg-sidebar-foreground/10"
                  )}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sidebar-foreground/80 hover:bg-sidebar-foreground/10 transition-colors"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span className="font-medium">تسجيل الخروج</span>}
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
