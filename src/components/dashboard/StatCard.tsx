import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  delay?: number;
}

const StatCard = ({ title, value, icon: Icon, trend, className, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className={cn(
        "bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {trend && (
          <div className={cn(
            "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
            trend.isPositive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
          )}>
            {trend.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>
      <h3 className="text-3xl font-bold text-foreground mb-1">{value}</h3>
      <p className="text-muted-foreground text-sm">{title}</p>
    </div>
  );
};

export default StatCard;
