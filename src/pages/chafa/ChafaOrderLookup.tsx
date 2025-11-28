import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ArrowLeft } from 'lucide-react';
import { useOrders } from '@/hooks/useOrders';

const ChafaOrderLookup = () => {
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();
  const { getOrderById, loadOrders } = useOrders();

  const handleSearch = () => {
    if (!orderId.trim()) return;
    
    loadOrders();
    const order = getOrderById(orderId.trim());
    
    if (order) {
      navigate(`/chafa/order/${orderId.trim()}`);
    } else {
      alert(`Order #${orderId.trim()} not found. Please check the order ID and try again.`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-0"
            onClick={() => navigate('/chafa/menu')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex justify-center mb-2">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">C</span>
            </div>
          </div>
          <CardTitle className="text-2xl mb-2 text-amber-700">Track Your Order</CardTitle>
          <CardDescription>
            Enter your order ID to view the current status
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Order ID (e.g., ORD-123456)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              onKeyPress={handleKeyPress}
              className="text-center text-lg"
            />
          </div>
          <Button 
            onClick={handleSearch} 
            className="w-full bg-amber-600 hover:bg-amber-700"
          >
            <Search className="h-4 w-4 mr-2" />
            Track Order
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate('/chafa/menu')}
            className="w-full"
          >
            Back to Menu
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChafaOrderLookup;

