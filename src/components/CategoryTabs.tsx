import { categories } from '@/data/menuData';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-lg py-4">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm whitespace-nowrap
                transition-all duration-300 ease-out
                ${activeCategory === category.id 
                  ? 'gradient-warm text-primary-foreground shadow-glow scale-105' 
                  : 'bg-card text-foreground hover:bg-secondary shadow-soft'
                }
              `}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
