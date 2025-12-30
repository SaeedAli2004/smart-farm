import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardUsers from "./pages/DashboardUsers";
import DashboardStats from "./pages/DashboardStats";
import DashboardProducts from "./pages/DashboardProducts";
import DashboardReports from "./pages/DashboardReports";
import DashboardNotifications from "./pages/DashboardNotifications";
import DashboardSettings from "./pages/DashboardSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<DashboardUsers />} />
          <Route path="/dashboard/stats" element={<DashboardStats />} />
          <Route path="/dashboard/products" element={<DashboardProducts />} />
          <Route path="/dashboard/reports" element={<DashboardReports />} />
          <Route path="/dashboard/notifications" element={<DashboardNotifications />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
