import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export function CartSheet({ isOpen, onClose, onCheckout }: CartSheetProps) {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + " so'm";
  };

  const getItemEmoji = (category: string, name: string) => {
    if (category === 'salatlar') return '🥗';
    if (category === 'ichimliklar') {
      if (name.toLowerCase().includes('choy')) return '🍵';
      if (name.toLowerCase().includes('qahva')) return '☕';
      return '🥤';
    }
    if (name.toLowerCase().includes('somsa')) return '🥟';
    if (name.toLowerCase().includes('mastava') || name.toLowerCase().includes('chuchvara')) return '🍲';
    return '🍽️';
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md bg-background border-border flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2 text-xl">
              <ShoppingBag className="w-6 h-6 text-primary" />
              Savat
            </SheetTitle>
            {items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Tozalash
              </Button>
            )}
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Savat bo'sh</h3>
              <p className="text-muted-foreground">Menyudan taom tanlang</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border animate-slide-up"
                >
                  <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center text-2xl shrink-0">
                    {getItemEmoji(item.category, item.name)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground truncate">{item.name}</h4>
                    <p className="text-sm text-primary font-medium">{formatPrice(item.price)}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg bg-secondary hover:bg-secondary/80"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-6 text-center font-semibold">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-secondary hover:bg-secondary/80"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border pt-4 space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-muted-foreground">Jami:</span>
              <span className="font-bold text-2xl text-primary">{formatPrice(totalPrice)}</span>
            </div>
            <Button
              onClick={onCheckout}
              className="w-full h-14 text-lg font-semibold rounded-xl gradient-warm hover:opacity-90 shadow-glow transition-all"
            >
              Buyurtma berish
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
