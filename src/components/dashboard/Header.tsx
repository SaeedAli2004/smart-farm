import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="البحث..."
              className="pr-10 bg-secondary/50 border-0 focus-visible:ring-1"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative w-10 h-10 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="text-left hidden sm:block">
              <p className="text-sm font-medium text-foreground">أحمد محمد</p>
              <p className="text-xs text-muted-foreground">مدير النظام</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
