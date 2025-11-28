import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useOrders } from '@/hooks/useOrders';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { OrderStatusBadge } from '@/components/OrderStatusBadge';
import { CountdownTimer } from '@/components/CountdownTimer';
import { ArrowLeft, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Order } from '@/types/product';

const ChafaOrderHistory = () => {
  const { user, isAuthenticated } = useAuth();
  const { getUserOrders, loadOrders } = useOrders();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/chafa/login');
    } else {
      loadOrders();
    }
  }, [isAuthenticated, navigate, loadOrders]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const userOrders = getUserOrders(user.id);
  const sortedOrders = [...userOrders].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-card border-b shadow-sm backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/chafa/menu')}>
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-bold tracking-tight text-amber-700">Order History</h1>
          </div>
          <div className="text-sm text-muted-foreground">
            {user.name}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {sortedOrders.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground mb-4">No orders yet</p>
              <Button onClick={() => navigate('/chafa/menu')}>Browse Menu</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {sortedOrders.map((order: Order) => (
              <Card key={order.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate(`/chafa/order/${order.id}`)}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Clock className="h-4 w-4" />
                        {order.timestamp.toLocaleString('en-US')}
                      </div>
                    </div>
                    <OrderStatusBadge status={order.status} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {order.items.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.name} x{item.quantity}</span>
                        <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <p className="text-xs text-muted-foreground">+{order.items.length - 3} more items</p>
                    )}
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-lg font-bold text-amber-700">₹{order.total.toFixed(2)}</span>
                  </div>
                  {order.estimatedPickupTime && !['completed', 'cancelled', 'ready'].includes(order.status) && (
                    <div className="mt-4 pt-4 border-t">
                      <CountdownTimer 
                        targetTime={order.estimatedPickupTime}
                        onComplete={() => {}}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ChafaOrderHistory;

