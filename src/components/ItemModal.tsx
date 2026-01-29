import { X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MenuItem } from '@/types/menu';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { useState } from 'react';

interface ItemModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ItemModal({ item, isOpen, onClose }: ItemModalProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + " so'm";
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(item);
    }
    toast.success(`${quantity}x ${item.name} savatga qo'shildi!`, {
      position: 'bottom-center',
      duration: 2000,
    });
    setQuantity(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-4 rounded-3xl bg-card border-border p-0 overflow-hidden">
        <div className="relative">
          <div className="w-full h-48 bg-secondary overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold text-foreground">{item.name}</DialogTitle>
          </DialogHeader>

          {item.description && (
            <p className="text-muted-foreground mb-6">{item.description}</p>
          )}

          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold text-primary">{formatPrice(item.price)}</span>
            
            <div className="flex items-center gap-3 bg-secondary rounded-xl p-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg hover:bg-background"
              >
                <Minus className="w-5 h-5" />
              </Button>
              <span className="w-8 text-center font-bold text-lg">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg hover:bg-background"
              >
                <Plus className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full h-14 text-lg font-semibold rounded-xl gradient-warm hover:opacity-90 shadow-glow transition-all"
          >
            Savatga qo'shish - {formatPrice(item.price * quantity)}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
