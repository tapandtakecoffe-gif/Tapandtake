import { useState, useMemo } from 'react';
import { products as bohoProducts, categoryNames as bohoCategoryNames } from '@/data/bohoProducts';
import { ProductCard } from '@/components/ProductCard';
import { CartSheet } from '@/components/CartSheet';
import { AdminAccessDialog } from '@/components/AdminAccessDialog';
import { useCart } from '@/hooks/useCart';
import { useOrders } from '@/hooks/useOrders';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { ShoppingBag, LayoutDashboard, Search, User, LogOut, History, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/types/product';
import { generateOrderId } from '@/utils/orderUtils';
import bohoBohoLogo from '@/assets/Logo Boho Boho.png';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';

const BohoMenu = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [adminDialogOpen, setAdminDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veggie' | 'non-veggie'>('all');
  const [categorySheetOpen, setCategorySheetOpen] = useState(false);
  const { items, addItem, clearCart, getTotal } = useCart();
  const { addOrder } = useOrders();
  const { user, isAuthenticated, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const ensureAuthenticated = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login required",
        description: "Please sign in or create an account to keep track of your orders.",
        variant: "destructive",
      });
      navigate('/boho/login');
      return false;
    }
    return true;
  };

  const handleAddToCart = (product: Product, selectedAddOns?: string[]) => {
    if (!ensureAuthenticated()) return;

    addItem(product, selectedAddOns);
    const addOnNames = selectedAddOns && selectedAddOns.length > 0
      ? ` with ${selectedAddOns.length} add-on${selectedAddOns.length > 1 ? 's' : ''}`
      : '';
    toast({
      title: "Added to cart",
      description: `${product.name}${addOnNames} added successfully`,
    });
  };

  const handleCheckout = () => {
    if (!ensureAuthenticated()) return;

    const order = {
      id: generateOrderId(),
      items: [...items],
      total: getTotal(),
      status: 'pending' as const,
      customerName: user?.name || 'Guest Customer',
      userId: user?.id,
      timestamp: new Date()
    };
    
    addOrder(order);
    clearCart();
    
    toast({
      title: "Order placed!",
      description: `Your order #${order.id} has been received. Share this link to track your order!`,
      duration: 5000,
    });
    
    navigate(`/boho/order/${order.id}`);
  };

  const handleAdminAccess = () => {
    const hasAccess = localStorage.getItem('admin_access') === 'true';
    if (hasAccess) {
      navigate('/boho/admin');
    } else {
      setAdminDialogOpen(true);
    }
  };

  const handleAdminSuccess = () => {
    navigate('/chafa/admin');
  };

  const categories = Object.entries(bohoCategoryNames).map(([value, label]) => ({
    value,
    label
  }));

  const filteredProducts = useMemo(() => {
    return bohoProducts.filter(product => {
      if (product.isAddOn) return false;
      
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower);
      
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      
      const matchesDiet = dietFilter === 'all' || 
        (dietFilter === 'veggie' && product.isVeggie === true) ||
        (dietFilter === 'non-veggie' && product.isVeggie === false);
      
      return matchesSearch && matchesCategory && matchesDiet;
    });
  }, [searchQuery, selectedCategory, dietFilter]);

  const groupedProducts = useMemo(() => {
    if (selectedCategory !== '') {
      return { [selectedCategory]: filteredProducts };
    }
    
    const groups: Record<string, typeof filteredProducts> = {};
    filteredProducts.forEach(product => {
      if (!groups[product.category]) {
        groups[product.category] = [];
      }
      groups[product.category].push(product);
    });
    
    const orderedGroups: Record<string, typeof filteredProducts> = {};
    categories.forEach(({ value }) => {
      if (groups[value] && groups[value].length > 0) {
        orderedGroups[value] = groups[value];
      }
    });
    
    return orderedGroups;
  }, [filteredProducts, selectedCategory, categories]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-card border-b shadow-md backdrop-blur-md bg-card/95">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/')}
                className="h-9 w-9"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <img 
                src={bohoBohoLogo} 
                alt="Boho Boho Logo" 
                className="h-20 w-20 object-contain cursor-pointer"
                onClick={() => navigate('/')}
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-base font-bold leading-tight" style={{ color: '#000000' }}>Boho Boho</h1>
                <p className="text-xs text-muted-foreground mt-0.5">Boho Boho - Koregaon Park</p>
              </div>
            </div>

            <div className="relative flex-1 max-w-lg mx-8 hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11 text-sm w-full"
              />
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="hidden lg:flex items-center gap-2 bg-white px-2 py-2 rounded-lg border">
                <Button
                  variant={dietFilter === 'veggie' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setDietFilter(dietFilter === 'veggie' ? 'all' : 'veggie')}
                  className={`h-8 px-3 text-xs font-medium ${
                    dietFilter === 'veggie' 
                      ? 'bg-green-300 text-green-900 hover:bg-green-400' 
                      : 'hover:bg-muted'
                  }`}
                >
                  Veggie
                </Button>
                <Button
                  variant={dietFilter === 'non-veggie' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setDietFilter(dietFilter === 'non-veggie' ? 'all' : 'non-veggie')}
                  className={`h-8 px-3 text-xs font-medium ${
                    dietFilter === 'non-veggie' 
                      ? 'bg-amber-700 text-white hover:bg-amber-800' 
                      : 'hover:bg-muted'
                  }`}
                >
                  Non Veggie
                </Button>
              </div>

              <div className="flex items-center gap-2">
                {isAuthenticated ? (
                  <>
                    <Button 
                      onClick={() => navigate('/boho/order-history')}
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 text-muted-foreground hover:text-green-600"
                      title="Order history"
                    >
                      <History className="h-5 w-5" />
                    </Button>
                    <Button 
                      onClick={() => {
                        logout();
                        toast({
                          title: "Logged out",
                          description: "You have been logged out successfully",
                        });
                      }}
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 text-muted-foreground hover:text-green-600"
                      title="Logout"
                    >
                      <LogOut className="h-5 w-5" />
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={() => navigate('/boho/login')}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-muted-foreground hover:text-primary"
                    title="Login"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                )}
                <Button 
                  onClick={handleAdminAccess}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-muted-foreground hover:text-primary hidden lg:flex"
                  title="Admin panel"
                >
                  <LayoutDashboard className="h-5 w-5" />
                </Button>
              </div>

              <Button 
                onClick={() => setCartOpen(true)}
                size="default"
                className="relative gap-2 h-11 px-4 shadow-lg hover:shadow-xl transition-shadow bg-green-600 hover:bg-green-700 text-white"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
                <span className="hidden sm:inline font-semibold">Cart</span>
              </Button>
            </div>
          </div>

          <div className="lg:hidden space-y-3 mt-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-sm w-full rounded-2xl"
              />
            </div>
            <div className="flex items-center justify-between rounded-2xl border px-4 py-3 bg-card">
              <div>
                <p className="text-sm font-semibold text-foreground">Veg only</p>
                <p className="text-xs text-muted-foreground">Show vegetarian menu</p>
              </div>
              <Switch
                checked={dietFilter === 'veggie'}
                onCheckedChange={(checked) => setDietFilter(checked ? 'veggie' : 'all')}
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {isAuthenticated ? (
                  <>
                    <Button 
                      onClick={() => navigate('/boho/order-history')}
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 text-muted-foreground hover:text-green-600"
                      title="Order history"
                    >
                      <History className="h-5 w-5" />
                    </Button>
                    <Button 
                      onClick={() => {
                        logout();
                        toast({
                          title: "Logged out",
                          description: "You have been logged out successfully",
                        });
                      }}
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 text-muted-foreground hover:text-green-600"
                      title="Logout"
                    >
                      <LogOut className="h-5 w-5" />
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={() => navigate('/boho/login')}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-muted-foreground hover:text-primary"
                    title="Login"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                )}
              </div>
              <Button 
                onClick={() => setCartOpen(true)}
                size="default"
                className="relative gap-2 h-11 px-4 shadow-lg hover:shadow-xl transition-shadow flex-1 justify-center bg-green-600 hover:bg-green-700 text-white"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
                <span className="font-semibold">Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Sidebar - Categories */}
        <aside className="hidden lg:block w-48 bg-transparent flex-shrink-0 overflow-y-auto sticky top-[116px] h-[calc(100vh-116px)]">
          <div className="p-4 pr-6">
            <h2 className="text-base font-semibold text-foreground mb-4">Menu</h2>
            <nav className="space-y-1 [&_button]:!bg-transparent [&_button:hover]:!bg-transparent [&_button:hover]:!text-muted-foreground [&_button:active]:!bg-transparent">
              <button
                onClick={() => setSelectedCategory('')}
                className={`w-full text-left px-3 py-2.5 text-sm rounded-lg relative ${
                  selectedCategory === ''
                    ? 'text-foreground font-medium !bg-green-100'
                    : 'text-muted-foreground !bg-transparent'
                }`}
              >
                {selectedCategory === '' && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-green-600 rounded-r" />
                )}
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`w-full text-left px-3 py-2.5 text-sm rounded-lg relative ${
                    selectedCategory === category.value
                      ? 'text-foreground font-medium !bg-green-100'
                      : 'text-muted-foreground !bg-transparent'
                  }`}
                >
                  {selectedCategory === category.value && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-green-600 rounded-r" />
                  )}
                  {category.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8 w-full max-w-5xl mx-auto">
            {selectedCategory && (
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {categories.find(c => c.value === selectedCategory)?.label || 'All Products'}
              </h2>
            )}
            
            {Object.keys(groupedProducts).length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found</p>
              </div>
            ) : (
              <div className="space-y-6">
                {Object.entries(groupedProducts).map(([categoryId, categoryProducts]) => (
                  <div key={categoryId} className="space-y-3">
                    <h2 className="text-xl font-bold text-foreground">
                      {bohoCategoryNames[categoryId as keyof typeof bohoCategoryNames] || categoryId}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {categoryProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={handleAddToCart}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} onCheckout={handleCheckout} />
      <AdminAccessDialog 
        open={adminDialogOpen} 
        onOpenChange={setAdminDialogOpen}
        onSuccess={handleAdminSuccess}
      />

      {/* Floating menu for mobile */}
      <div className="lg:hidden fixed bottom-6 right-4 z-30">
        <Button
          className="rounded-full h-16 w-16 shadow-2xl flex items-center justify-center text-xs font-semibold tracking-wide bg-green-600 hover:bg-green-700 text-white"
          onClick={() => setCategorySheetOpen(true)}
        >
          Menu
        </Button>
      </div>

      <Sheet open={categorySheetOpen} onOpenChange={setCategorySheetOpen}>
        <SheetContent side="bottom" className="max-h-[70vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Categories</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-2">
            <button
              onClick={() => {
                setSelectedCategory('');
                setCategorySheetOpen(false);
              }}
                className={`w-full text-left px-4 py-3 rounded-xl border ${
                selectedCategory === '' ? 'border-green-600 text-green-700 font-semibold' : 'border-border text-foreground'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={`sheet-${category.value}`}
                onClick={() => {
                  setSelectedCategory(category.value);
                  setCategorySheetOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl border ${
                  selectedCategory === category.value ? 'border-green-600 text-green-700 font-semibold' : 'border-border text-foreground'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BohoMenu;

