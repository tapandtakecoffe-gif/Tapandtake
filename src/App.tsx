import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoSelector from "./pages/DemoSelector";
import Menu from "./pages/Menu";
import OrderStatus from "./pages/OrderStatus";
import OrderLookup from "./pages/OrderLookup";
import OrderHistory from "./pages/OrderHistory";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ChafaMenu from "./pages/chafa/ChafaMenu";
import ChafaLogin from "./pages/chafa/ChafaLogin";
import ChafaOrderStatus from "./pages/chafa/ChafaOrderStatus";
import ChafaOrderHistory from "./pages/chafa/ChafaOrderHistory";
import ChafaOrderLookup from "./pages/chafa/ChafaOrderLookup";
import ChafaAdmin from "./pages/chafa/ChafaAdmin";
import BohoMenu from "./pages/boho/BohoMenu";
import BohoLogin from "./pages/boho/BohoLogin";
import BohoOrderStatus from "./pages/boho/BohoOrderStatus";
import BohoOrderHistory from "./pages/boho/BohoOrderHistory";
import BohoOrderLookup from "./pages/boho/BohoOrderLookup";
import BohoAdmin from "./pages/boho/BohoAdmin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Demo Selector - Landing Page */}
          <Route path="/" element={<DemoSelector />} />
          
          {/* The Voyage Cafe Routes */}
          <Route path="/voyage/menu" element={<Menu />} />
          <Route path="/voyage/login" element={<Login />} />
          <Route path="/voyage/order/:orderId" element={<OrderStatus />} />
          <Route path="/voyage/track-order" element={<OrderLookup />} />
          <Route path="/voyage/order-history" element={<OrderHistory />} />
          <Route path="/voyage/admin" element={<Admin />} />
          
          {/* Chafa Cafe Routes */}
          <Route path="/chafa/menu" element={<ChafaMenu />} />
          <Route path="/chafa/login" element={<ChafaLogin />} />
          <Route path="/chafa/order/:orderId" element={<ChafaOrderStatus />} />
          <Route path="/chafa/track-order" element={<ChafaOrderLookup />} />
          <Route path="/chafa/order-history" element={<ChafaOrderHistory />} />
          <Route path="/chafa/admin" element={<ChafaAdmin />} />
          
          {/* Boho Boho Routes */}
          <Route path="/boho/menu" element={<BohoMenu />} />
          <Route path="/boho/login" element={<BohoLogin />} />
          <Route path="/boho/order/:orderId" element={<BohoOrderStatus />} />
          <Route path="/boho/track-order" element={<BohoOrderLookup />} />
          <Route path="/boho/order-history" element={<BohoOrderHistory />} />
          <Route path="/boho/admin" element={<BohoAdmin />} />
          
          {/* Legacy routes for backward compatibility */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order/:orderId" element={<OrderStatus />} />
          <Route path="/track-order" element={<OrderLookup />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/admin" element={<Admin />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
