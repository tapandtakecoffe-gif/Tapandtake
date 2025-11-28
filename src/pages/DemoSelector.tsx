import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Store } from 'lucide-react';
import voyageCafeLogo from '@/assets/Voyage Logo.png';
import chafaCafeLogo from '@/assets/Logo Chafa Cafe.png';

const DemoSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Selecciona una Demo</h1>
          <p className="text-muted-foreground">Elige la experiencia que deseas explorar</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* The Voyage Cafe */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={voyageCafeLogo} 
                  alt="The Voyage Cafe Logo" 
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <CardTitle className="text-2xl">The Voyage Cafe</CardTitle>
                  <CardDescription>Demo General</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Sistema completo de pedidos digitales con menú interactivo, carrito de compras y panel de administración.
              </p>
              <Button 
                onClick={() => navigate('/voyage/menu')}
                className="w-full gap-2 group-hover:scale-105 transition-transform"
                size="lg"
              >
                <Coffee className="h-5 w-5" />
                Entrar a The Voyage Cafe
              </Button>
            </CardContent>
          </Card>

          {/* Chafa Cafe And Studio */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={chafaCafeLogo} 
                  alt="Chafa Cafe And Studio Logo" 
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <CardTitle className="text-2xl">Chafa Cafe And Studio</CardTitle>
                  <CardDescription>Demo Especializada</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Experiencia única combinando café y estudio creativo. Menú especializado y ambiente artístico.
              </p>
              <Button 
                onClick={() => navigate('/chafa/menu')}
                variant="outline"
                className="w-full gap-2 group-hover:scale-105 transition-transform border-amber-500 text-amber-700 hover:bg-amber-50"
                size="lg"
              >
                <Store className="h-5 w-5" />
                Entrar a Chafa Cafe
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Ambas demos son funcionales y no requieren autenticación para probar
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoSelector;

