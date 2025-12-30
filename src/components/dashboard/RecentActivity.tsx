import { ShoppingCart, UserPlus, Package, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    icon: ShoppingCart,
    title: "طلب جديد #1234",
    description: "تم استلام طلب جديد من أحمد محمد",
    time: "منذ 5 دقائق",
    color: "bg-primary-light text-primary",
  },
  {
    id: 2,
    icon: UserPlus,
    title: "مستخدم جديد",
    description: "سارة أحمد انضمت للمنصة",
    time: "منذ 15 دقيقة",
    color: "bg-accent text-accent-foreground",
  },
  {
    id: 3,
    icon: Package,
    title: "شحن منتج",
    description: "تم شحن الطلب #1230",
    time: "منذ 30 دقيقة",
    color: "bg-warning/10 text-warning",
  },
  {
    id: 4,
    icon: CreditCard,
    title: "دفعة مستلمة",
    description: "تم استلام 1,500 ر.س",
    time: "منذ ساعة",
    color: "bg-success/10 text-success",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in" style={{ animationDelay: '400ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">النشاط الأخير</h3>
          <p className="text-sm text-muted-foreground">آخر التحديثات والأحداث</p>
        </div>
        <button className="text-sm text-primary hover:underline font-medium">
          عرض الكل
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div 
            key={activity.id} 
            className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
            style={{ animationDelay: `${500 + index * 100}ms` }}
          >
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", activity.color)}>
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-foreground truncate">{activity.title}</h4>
              <p className="text-xs text-muted-foreground truncate">{activity.description}</p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
