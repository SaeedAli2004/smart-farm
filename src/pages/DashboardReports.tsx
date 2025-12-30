import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { FileText, Download, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  { id: 1, name: "تقرير المبيعات الشهري", date: "2024-01-15", type: "مبيعات", size: "2.4 MB" },
  { id: 2, name: "تقرير المستخدمين النشطين", date: "2024-01-14", type: "مستخدمين", size: "1.2 MB" },
  { id: 3, name: "تقرير الإيرادات الربع سنوي", date: "2024-01-10", type: "مالي", size: "3.8 MB" },
  { id: 4, name: "تقرير أداء المنتجات", date: "2024-01-08", type: "منتجات", size: "1.5 MB" },
  { id: 5, name: "تقرير التحليلات الأسبوعي", date: "2024-01-05", type: "تحليلات", size: "0.8 MB" },
];

const DashboardReports = () => {
  return (
    <div className="min-h-screen bg-background flex" dir="rtl">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">التقارير</h1>
                <p className="text-muted-foreground">عرض وتحميل جميع التقارير</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                التاريخ
              </Button>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                تصفية
              </Button>
            </div>
          </div>

          {/* Reports List */}
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="bg-card rounded-2xl p-6 border border-border flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{report.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>{report.date}</span>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                        {report.type}
                      </span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  تحميل
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardReports;
