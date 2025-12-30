import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { Package, Search, Filter, MoreVertical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const products = [
  { id: 1, name: "منتج إلكتروني 1", category: "إلكترونيات", price: "299 ر.س", stock: 45, status: "متوفر" },
  { id: 2, name: "منتج ملابس 1", category: "ملابس", price: "150 ر.س", stock: 120, status: "متوفر" },
  { id: 3, name: "منتج إلكتروني 2", category: "إلكترونيات", price: "599 ر.س", stock: 0, status: "نفذ" },
  { id: 4, name: "منتج رياضي", category: "رياضة", price: "89 ر.س", stock: 30, status: "متوفر" },
  { id: 5, name: "منتج منزلي", category: "منزل", price: "199 ر.س", stock: 8, status: "قليل" },
];

const DashboardProducts = () => {
  return (
    <div className="min-h-screen bg-background flex" dir="rtl">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">إدارة المنتجات</h1>
                <p className="text-muted-foreground">عرض وإدارة جميع المنتجات</p>
              </div>
            </div>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              إضافة منتج
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="البحث عن منتج..." className="pr-10" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              تصفية
            </Button>
          </div>

          {/* Products Table */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">المنتج</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">الفئة</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">السعر</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">المخزون</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">الحالة</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Package className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{product.category}</td>
                    <td className="px-6 py-4 font-semibold text-foreground">{product.price}</td>
                    <td className="px-6 py-4 text-muted-foreground">{product.stock}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        product.status === "متوفر" 
                          ? "bg-success/10 text-success" 
                          : product.status === "قليل"
                          ? "bg-chart-4/10 text-chart-4"
                          : "bg-destructive/10 text-destructive"
                      }`}>
                        {product.status}
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

export default DashboardProducts;
