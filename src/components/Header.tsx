import { ShoppingCart, Sun, Moon, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { totalItems } = useCart();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center shadow-glow">
            <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Restaurant de SENOZA</h1>
            <p className="text-xs text-muted-foreground">Mazali taomlar</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-xl hover:bg-secondary"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-accent" />
            ) : (
              <Moon className="w-5 h-5 text-muted-foreground" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onCartClick}
            className="rounded-xl hover:bg-secondary relative"
          >
            <ShoppingCart className="w-5 h-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 gradient-warm rounded-full text-xs font-bold text-primary-foreground flex items-center justify-center animate-scale-in">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
