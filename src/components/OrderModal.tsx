import { useState } from 'react';
import { Check, Phone, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + " so'm";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate order submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      clearCart();
      setName('');
      setPhone('');
      setNotes('');
      setIsSuccess(false);
      onClose();
      toast.success("Buyurtmangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.");
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-4 rounded-3xl bg-card border-border">
        {isSuccess ? (
          <div className="py-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/20 flex items-center justify-center animate-scale-in">
              <Check className="w-10 h-10 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Rahmat!</h2>
            <p className="text-muted-foreground">Buyurtmangiz qabul qilindi</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">Buyurtma berish</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                <div className="text-sm text-muted-foreground mb-2">Buyurtma:</div>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.quantity}x {item.name}</span>
                      <span className="text-primary font-medium">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold">
                  <span>Jami:</span>
                  <span className="text-primary">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Ismingiz"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-11 h-12 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Telefon raqam"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-11 h-12 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Textarea
                    placeholder="Izoh (ixtiyoriy)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="pl-11 min-h-[80px] rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-semibold rounded-xl gradient-warm hover:opacity-90 shadow-glow transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Yuborilmoqda...
                  </div>
                ) : (
                  `Tasdiqlash - ${formatPrice(totalPrice)}`
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
