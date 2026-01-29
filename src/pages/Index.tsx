import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { CategoryTabs } from '@/components/CategoryTabs';
import { MenuCard } from '@/components/MenuCard';
import { CartSheet } from '@/components/CartSheet';
import { ItemModal } from '@/components/ItemModal';
import { OrderModal } from '@/components/OrderModal';
import { menuItems } from '@/data/menuData';
import { MenuItem } from '@/types/menu';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>('taomlar');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsOrderOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      <CategoryTabs 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <main className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <MenuCard 
                item={item} 
                onItemClick={setSelectedItem}
              />
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Bu kategoriyada taom topilmadi</p>
          </div>
        )}
      </main>

      <CartSheet 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <ItemModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
      />
    </div>
  );
};

export default Index;
