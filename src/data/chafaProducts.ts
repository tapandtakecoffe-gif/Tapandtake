import { Product } from '@/types/product';
// Reusing existing images
import espressoImg from '@/assets/espresso.jpg';
import cappuccinoImg from '@/assets/cappuccino.jpg';
import latteImg from '@/assets/latte.jpg';
import americanoImg from '@/assets/americano.jpg';
import icedLatteImg from '@/assets/iced-latte.jpg';
import frappuccinoImg from '@/assets/frappuccino.jpg';
import orangeJuiceImg from '@/assets/orange-juice.jpg';
import croissantImg from '@/assets/croissant.jpg';
import napolitanaImg from '@/assets/napolitana.jpg';
import bolloSuizoImg from '@/assets/bollo-suizo.jpg';
import magdalenaImg from '@/assets/magdalena.jpg';
import sandwichImg from '@/assets/sandwich.jpg';
import avocadoToastImg from '@/assets/avocado-toast.jpg';

// Available images array
const images = [
  espressoImg, cappuccinoImg, latteImg, americanoImg, icedLatteImg,
  frappuccinoImg, orangeJuiceImg, croissantImg, napolitanaImg,
  bolloSuizoImg, magdalenaImg, sandwichImg, avocadoToastImg
];

// Helper function to get a consistent image based on product ID
const getImage = (productId: string) => {
  let hash = 0;
  for (let i = 0; i < productId.length; i++) {
    const char = productId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const index = Math.abs(hash) % images.length;
  return images[index];
};

export const chafaCategoryNames = {
  'coffee': 'Coffee & Espresso',
  'cold-drinks': 'Cold Beverages',
  'pastries': 'Pastries & Bakery',
  'food': 'Food & Snacks',
  'studio-services': 'Studio Services'
};

export const chafaProducts: Product[] = [
  // Coffee & Espresso
  {
    id: 'chafa-espresso',
    name: 'Espresso',
    description: 'Classic Italian espresso, rich and bold',
    price: 2.50,
    category: 'coffee',
    image: espressoImg,
    isVeggie: true,
    isAddOn: false,
  },
  {
    id: 'chafa-cappuccino',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    price: 3.50,
    category: 'coffee',
    image: cappuccinoImg,
    isVeggie: true,
    isAddOn: false,
  },
  {
    id: 'chafa-latte',
    name: 'Caffe Latte',
    description: 'Smooth espresso with steamed milk',
    price: 3.75,
    category: 'coffee',
    image: latteImg,
    isVeggie: true,
    isAddOn: false,
  },
  {
    id: 'chafa-americano',
    name: 'Americano',
    description: 'Espresso with hot water',
    price: 3.00,
    category: 'coffee',
    image: americanoImg,
    isVeggie: true,
    isAddOn: false,
  },
  // Cold Beverages
  {
    id: 'chafa-iced-latte',
    name: 'Iced Latte',
    description: 'Espresso with cold milk over ice',
    price: 4.00,
    category: 'cold-drinks',
    image: icedLatteImg,
    isVeggie: true,
    isAddOn: false,
  },
  {
    id: 'chafa-frappuccino',
    name: 'Frappuccino',
    description: 'Blended coffee drink with ice',
    price: 4.50,
    category: 'cold-drinks',
    image: frappuccinoImg,
    isVeggie: true,
    isAddOn: false,
  },
  {
    id: 'chafa-orange-juice',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice',
    price: 3.50,
    category: 'cold-drinks',
    image: orangeJuiceImg,
    isVeggie: true,
    isAddOn: false,
  },
  // Pastries & Bakery
  {
    id: 'chafa-croissant',
    name: 'Butter Croissant',
    description: 'Flaky, buttery French croissant',
    price: 2.75,
    category: 'pastries',
    image: croissantImg,
    isVeggie: true,
    isAddOn: false,
  },
  {
    id: 'chafa-napolitana',
    name: 'Napolitana',
    description: 'Sweet pastry with chocolate',
    price: 2.50,
    category: 'pastries',
    image: napolitanaImg,
    isVeggie: true,
    isAddOn: false,
  },
  {
    id: 'chafa-bollo-suizo',
    name: 'Bollo Suizo',
    description: 'Swiss bun with sugar glaze',
    price: 2.25,
    category: 'pastries',
    image: bolloSuizoImg,
    isVeggie: true,
    isAddOn: false,
  },
  {
    id: 'chafa-magdalena',
    name: 'Magdalena',
    description: 'Traditional Spanish muffin',
    price: 1.75,
    category: 'pastries',
    image: magdalenaImg,
    isVeggie: true,
    isAddOn: false,
  },
  // Food & Snacks
  {
    id: 'chafa-sandwich',
    name: 'Club Sandwich',
    description: 'Triple-decker sandwich with chicken',
    price: 6.50,
    category: 'food',
    image: sandwichImg,
    isVeggie: false,
    isAddOn: false,
  },
  {
    id: 'chafa-avocado-toast',
    name: 'Avocado Toast',
    description: 'Sourdough toast with avocado and toppings',
    price: 5.50,
    category: 'food',
    image: avocadoToastImg,
    isVeggie: true,
    isAddOn: false,
  },
  // Studio Services (as products)
  {
    id: 'chafa-studio-hour',
    name: 'Studio Hour',
    description: 'One hour of studio space rental',
    price: 15.00,
    category: 'studio-services',
    image: getImage('studio-hour'),
    isVeggie: true,
    isAddOn: false,
  },
  {
    id: 'chafa-photo-session',
    name: 'Photo Session',
    description: 'Professional photo session in studio',
    price: 50.00,
    category: 'studio-services',
    image: getImage('photo-session'),
    isVeggie: true,
    isAddOn: false,
  },
];

