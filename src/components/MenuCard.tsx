import { Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MenuItem } from '@/types/menu';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface MenuCardProps {
  item: MenuItem;
  onItemClick: (item: MenuItem) => void;
}

export function MenuCard({ item, onItemClick }: MenuCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(item);
    toast.success(`${item.name} savatga qo'shildi!`, {
      position: 'bottom-center',
      duration: 2000,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + " so'm";
  };

  return (
    <div 
      onClick={() => onItemClick(item)}
      className="group bg-card rounded-2xl p-4 shadow-soft hover:shadow-glow transition-all duration-300 cursor-pointer animate-slide-up border border-border/50 hover:border-primary/30"
    >
      <div className="relative mb-3">
        <div className="w-full h-24 rounded-xl bg-secondary overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        {item.popular && (
          <div className="absolute -top-2 -right-2 w-8 h-8 gradient-warm rounded-full flex items-center justify-center shadow-glow">
            <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
          </div>
        )}
      </div>

      <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{item.name}</h3>
      {item.description && (
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
      )}

      <div className="flex items-center justify-between">
        <span className="font-bold text-primary">{formatPrice(item.price)}</span>
        <Button
          size="icon"
          onClick={handleAddToCart}
          className="w-9 h-9 rounded-xl gradient-warm hover:opacity-90 shadow-glow transition-all"
        >
          <Plus className="w-5 h-5 text-primary-foreground" />
        </Button>
      </div>
    </div>
  );
}
