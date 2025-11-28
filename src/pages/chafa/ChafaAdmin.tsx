import { useEffect, useState, useMemo } from 'react';
import { useOrders } from '@/hooks/useOrders';
import { chafaProducts } from '@/data/chafaProducts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { OrderStatusBadge } from '@/components/OrderStatusBadge';
import { ArrowLeft, Search, CheckCircle2, XCircle, TrendingUp, Timer } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Order } from '@/types/product';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ChafaAdmin = () => {
  const { orders, updateOrderStatus, updateEstimatedPickupTime, loadOrders, clearAllOrders } = useOrders();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'status' | 'customer'>('recent');

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const filteredAndSortedOrders = useMemo(() => {
    let filtered = orders;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(order => 
        order.id.toLowerCase().includes(query) ||
        order.customerName.toLowerCase().includes(query)
      );
    }

    if (statusFilter !== 'all') {
      if (statusFilter === 'active') {
        filtered = filtered.filter(o => !['completed', 'cancelled'].includes(o.status));
      } else {
        filtered = filtered.filter(o => o.status === statusFilter);
      }
    }

    filtered = [...filtered].sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      } else if (sortBy === 'status') {
        const statusOrder = ['pending', 'preparing', 'ready', 'completed', 'cancelled'];
        return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
      } else if (sortBy === 'customer') {
        return a.customerName.localeCompare(b.customerName);
      }
      return 0;
    });

    return filtered;
  }, [orders, searchQuery, statusFilter, sortBy]);

  const activeOrders = filteredAndSortedOrders.filter(o => !['completed', 'cancelled'].includes(o.status));
  const totalRevenue = orders
    .filter(o => o.status === 'completed')
    .reduce((sum, order) => sum + order.total, 0);

  const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
    updateOrderStatus(orderId, newStatus);
    toast({
      title: "Status updated",
      description: `Order ${orderId} is now ${newStatus}`,
    });
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all orders? This cannot be undone.')) {
      clearAllOrders();
      toast({
        title: "All orders cleared",
        description: "All orders have been removed",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-card border-b shadow-sm backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/chafa/menu')}>
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold tracking-tight text-amber-700">Chafa Cafe Admin</h1>
          </div>
          <Button variant="destructive" onClick={handleClearAll}>
            Clear All Orders
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-700">₹{totalRevenue.toFixed(2)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeOrders.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{orders.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search orders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="preparing">Preparing</SelectItem>
                  <SelectItem value="ready">Ready</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as typeof sortBy)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                  <SelectItem value="customer">Customer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredAndSortedOrders.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">No orders found</p>
              </CardContent>
            </Card>
          ) : (
            filteredAndSortedOrders.map((order: Order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{order.customerName}</p>
                      <p className="text-xs text-muted-foreground">{order.timestamp.toLocaleString()}</p>
                    </div>
                    <OrderStatusBadge status={order.status} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>{item.name} x{item.quantity}</span>
                          <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center font-bold">
                      <span>Total</span>
                      <span className="text-amber-700">₹{order.total.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {order.status === 'pending' && (
                        <Button size="sm" onClick={() => handleStatusChange(order.id, 'preparing')}>
                          Start Preparing
                        </Button>
                      )}
                      {order.status === 'preparing' && (
                        <Button size="sm" onClick={() => handleStatusChange(order.id, 'ready')}>
                          Mark Ready
                        </Button>
                      )}
                      {order.status === 'ready' && (
                        <Button size="sm" onClick={() => handleStatusChange(order.id, 'completed')}>
                          Complete
                        </Button>
                      )}
                      {!['completed', 'cancelled'].includes(order.status) && (
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => handleStatusChange(order.id, 'cancelled')}
                        >
                          Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default ChafaAdmin;

