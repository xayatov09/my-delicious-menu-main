export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'taomlar' | 'salatlar' | 'ichimliklar';
  description?: string;
  image?: string;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  items: CartItem[];
  total: number;
  customerName: string;
  customerPhone: string;
  notes?: string;
}
