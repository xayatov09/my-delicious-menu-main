import { MenuItem } from '@/types/menu';

// Import all menu images
import mastavaImg from '@/assets/menu/mastava.jpg';
import lagmonImg from '@/assets/menu/lagmon.jpg';
import golupsiyImg from '@/assets/menu/golupsiy.jpg';
import chuchvaraImg from '@/assets/menu/chuchvara.jpg';
import qovurilganLagmonImg from '@/assets/menu/qovurilgan-lagmon.jpg';
import perashkiImg from '@/assets/menu/perashki.jpg';
import bilishiImg from '@/assets/menu/bilishi.jpg';
import cheburekImg from '@/assets/menu/cheburek.jpg';
import somsaImg from '@/assets/menu/somsa.jpg';
import tuxumImg from '@/assets/menu/tuxum.jpg';
import sosiskaImg from '@/assets/menu/sosiska.jpg';
import yangiSalatImg from '@/assets/menu/yangi-salat.jpg';
import sezarImg from '@/assets/menu/sezar.jpg';
import oliviaImg from '@/assets/menu/olivia.jpg';
import chakkaTurpImg from '@/assets/menu/chakka-turp.jpg';
import choponchaImg from '@/assets/menu/choponcha.jpg';
import vitaminkaImg from '@/assets/menu/vitaminka.jpg';
import qahvaImg from '@/assets/menu/qahva.jpg';
import limonliChoyImg from '@/assets/menu/limonli-choy.jpg';
import kokChoyImg from '@/assets/menu/kok-choy.jpg';
import fuseteaImg from '@/assets/menu/fusetea.jpg';
import liptonImg from '@/assets/menu/lipton.jpg';
import colaImg from '@/assets/menu/cola.jpg';
import flavisImg from '@/assets/menu/flavis.jpg';
import tropicImg from '@/assets/menu/tropic.jpg';
import moxitoImg from '@/assets/menu/moxito.jpg';
import flashImg from '@/assets/menu/flash.jpg';
import energy18Img from '@/assets/menu/energy-18.jpg';
import pepsiImg from '@/assets/menu/pepsi.jpg';
import fantaImg from '@/assets/menu/fanta.jpg';

export const menuItems: MenuItem[] = [
  // Taomlar
  { id: 't1', name: 'Mastava', price: 30000, category: 'taomlar', description: "An'anaviy o'zbek sho'rva", popular: true, image: mastavaImg },
  { id: 't2', name: "Lag'mon", price: 35000, category: 'taomlar', description: "Qo'lda tortilgan uy lag'moni", popular: true, image: lagmonImg },
  { id: 't3', name: 'Golupsiy (yarim pors)', price: 20000, category: 'taomlar', description: 'Mazali golupsiy yarim porsiya', image: golupsiyImg },
  { id: 't4', name: 'Golupsiy (non+choy)', price: 35000, category: 'taomlar', description: "To'liq to'plam: golupsiy, non va choy", image: golupsiyImg },
  { id: 't5', name: 'Chuchvara', price: 35000, category: 'taomlar', description: "Uy chuchvarasi sho'rva bilan", popular: true, image: chuchvaraImg },
  { id: 't6', name: "Qovurilgan lag'mon", price: 35000, category: 'taomlar', description: "Qovurilgan lag'mon sabzavotlar bilan", image: qovurilganLagmonImg },
  { id: 't7', name: 'Perashki', price: 3000, category: 'taomlar', description: 'Mazali uy perashkisi', image: perashkiImg },
  { id: 't8', name: 'Bilishi', price: 5000, category: 'taomlar', description: "Issiq va shirinlik", image: bilishiImg },
  { id: 't9', name: 'Cheburek', price: 5000, category: 'taomlar', description: "Go'shtli cheburek", image: cheburekImg },
  { id: 't10', name: 'Somsa', price: 8000, category: 'taomlar', description: "Tandirda pishirilgan somsa", popular: true, image: somsaImg },
  { id: 't11', name: 'Tuxum', price: 3000, category: 'taomlar', description: 'Qaynatilgan tuxum', image: tuxumImg },
  { id: 't12', name: 'Sosiska', price: 4000, category: 'taomlar', description: 'Qaynatilgan sosiska', image: sosiskaImg },

  // Salatlar
  { id: 's1', name: 'Yangi salat', price: 25000, category: 'salatlar', description: 'Yangi sabzavotlardan salat', popular: true, image: yangiSalatImg },
  { id: 's2', name: 'Sezar', price: 30000, category: 'salatlar', description: 'Klassik Sezar salat', popular: true, image: sezarImg },
  { id: 's3', name: 'Olivia', price: 20000, category: 'salatlar', description: "An'anaviy Olivia salat", image: oliviaImg },
  { id: 's4', name: 'Chakka turp', price: 15000, category: 'salatlar', description: 'Chakka va turp bilan salat', image: chakkaTurpImg },
  { id: 's5', name: "Cho'poncha", price: 25000, category: 'salatlar', description: "Cho'poncha salat", image: choponchaImg },
  { id: 's6', name: 'Vitaminka', price: 25000, category: 'salatlar', description: "Vitaminlarga boy salat", image: vitaminkaImg },

  // Ichimliklar
  { id: 'i1', name: 'Qahva', price: 5000, category: 'ichimliklar', description: 'Issiq qahva', image: qahvaImg },
  { id: 'i2', name: 'Limonli choy', price: 5000, category: 'ichimliklar', description: 'Limon bilan choy', image: limonliChoyImg },
  { id: 'i3', name: "Ko'k choy", price: 5000, category: 'ichimliklar', description: "An'anaviy ko'k choy", popular: true, image: kokChoyImg },
  { id: 'i4', name: 'Fusetea', price: 8000, category: 'ichimliklar', description: 'Sovuq choy', image: fuseteaImg },
  { id: 'i5', name: 'Lipton 0.5l', price: 12000, category: 'ichimliklar', description: 'Lipton sovuq choy', image: liptonImg },
  { id: 'i6', name: 'Cola 0.5l', price: 8000, category: 'ichimliklar', description: 'Coca-Cola 0.5 litr', popular: true, image: colaImg },
  { id: 'i7', name: 'Flavis', price: 7000, category: 'ichimliklar', description: 'Flavis suvi', image: flavisImg },
  { id: 'i8', name: 'Tropic', price: 12000, category: 'ichimliklar', description: 'Tropik sharbat', image: tropicImg },
  { id: 'i9', name: 'Moxito', price: 12000, category: 'ichimliklar', description: 'Sovuq moxito', image: moxitoImg },
  { id: 'i10', name: 'Flash', price: 10000, category: 'ichimliklar', description: 'Energetik ichimlik', image: flashImg },
  { id: 'i11', name: '18+', price: 11000, category: 'ichimliklar', description: 'Energetik ichimlik', image: energy18Img },
  { id: 'i12', name: 'Pepsi 0.5l', price: 12000, category: 'ichimliklar', description: 'Pepsi 0.5 litr', image: pepsiImg },
  { id: 'i13', name: 'Lipton 1l', price: 11000, category: 'ichimliklar', description: 'Lipton sovuq choy 1 litr', image: liptonImg },
  { id: 'i14', name: 'Cola 1l', price: 12000, category: 'ichimliklar', description: 'Coca-Cola 1 litr', image: colaImg },
  { id: 'i15', name: 'Fanta 1l', price: 12000, category: 'ichimliklar', description: 'Fanta 1 litr', image: fantaImg },
];

export const categories = [
  { id: 'taomlar', name: 'Taomlar', icon: '🍲' },
  { id: 'salatlar', name: 'Salatlar', icon: '🥗' },
  { id: 'ichimliklar', name: 'Ichimliklar', icon: '🥤' },
] as const;
