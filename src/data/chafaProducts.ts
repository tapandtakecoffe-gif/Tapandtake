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
import croissantCheeseImg from '@/assets/4.jpg';
import croissantPeanutImg from '@/assets/5.jpg';
import croissantMushroomsImg from '@/assets/6.jpg';
import croissantHamCheeseImg from '@/assets/7.jpg';
import croissantChickenCheeseImg from '@/assets/8.jpg';
import croissantSmokedSalmonImg from '@/assets/10.jpg';
import hashBrownAvocadoImg from '@/assets/11.jpg';
import napolitanaImg from '@/assets/napolitana.jpg';
import bolloSuizoImg from '@/assets/bollo-suizo.jpg';
import magdalenaImg from '@/assets/magdalena.jpg';
import sandwichImg from '@/assets/sandwich.jpg';
import avocadoToastImg from '@/assets/avocado-toast.jpg';
import parisienneEggsImg from '@/assets/1.jpg';
import cheeseOmeletteImg from '@/assets/2.jpg';
import cheeseScrambledImg from '@/assets/3.jpg';

// Available images array
const images = [
  espressoImg, cappuccinoImg, latteImg, americanoImg, icedLatteImg,
  frappuccinoImg, orangeJuiceImg, croissantImg, napolitanaImg,
  bolloSuizoImg, magdalenaImg, sandwichImg, avocadoToastImg,
  croissantCheeseImg, croissantPeanutImg, croissantMushroomsImg,
  croissantHamCheeseImg, croissantChickenCheeseImg, croissantSmokedSalmonImg,
  hashBrownAvocadoImg, parisienneEggsImg, cheeseOmeletteImg, cheeseScrambledImg
];

// Helper function to get a consistent image based on product ID
const getImage = (productId: string) => {
  // Simple hash function to convert string ID to number
  let hash = 0;
  for (let i = 0; i < productId.length; i++) {
    const char = productId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  // Use absolute value and modulo to get index
  const index = Math.abs(hash) % images.length;
  return images[index];
};

export const chafaCategoryNames = {
  'all-day-breakfast': 'All Day Breakfast',
  'smoothie-bowls': 'Smoothie Bowls',
  'buon-appetito': 'Buon Appetito',
  'open-zen-sandwiches': 'Open Zen Sandwiches',
  'ciabatta-sandwich': 'Ciabatta Sandwich',
  'bagel': 'Bagel',
  'charcoal-burgers': 'Charcoal Burgers',
  'thin-crust-pizza': 'Pizza Thin Crust',
  'grilled-sandwich': 'Grilled Sandwich',
  'salad-a-day': 'Salad A Day',
  'homemade-soups': 'Soups',
  'croissant': 'Croissant',
  'beverages': 'Beverages',
  'balls-bites': 'Balls & Bites'
};

export const chafaProducts: Product[] = [
  // ========== ALL DAY BREAKFAST ==========
  {
    id: 'all-day-breakfast-1',
    name: 'Smoked Salmon with Cream Cheese Crepes',
    description: 'Ragi crepes, cream cheese, smoked salmon, pickled onions, Capers, 2 poached eggs, salad',
    price: 750,
    image: getImage('all-day-breakfast-1'),
    category: 'all-day-breakfast',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'all-day-breakfast-2',
    name: 'Pesto Mushroom Ragi Crepes',
    description: 'Ragi crepes, pesto sauce, sautéed herbs mushroom, in-house salad, sweet potato chips',
    price: 475,
    image: getImage('all-day-breakfast-2'),
    category: 'all-day-breakfast',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'all-day-breakfast-3',
    name: 'Scrambled Tofu w/ Spinach Mushroom',
    description: 'Onion, garlic, tomato, mushroom, sautéed spinach, toasted bread, Fresh cut fruits',
    price: 475,
    image: getImage('all-day-breakfast-3'),
    category: 'all-day-breakfast',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'all-day-breakfast-4',
    name: 'Tofu Akuri and Toast',
    description: 'Onion, tomato, moringa hash, toasted bread, in-house sriracha sauce',
    price: 425,
    image: getImage('all-day-breakfast-4'),
    category: 'all-day-breakfast',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'all-day-breakfast-5',
    name: 'Super Cereal Porridge',
    description: 'Quinoa, oats, chia seeds, flaxseed, roasted hazelnut, coconut flakes, coconut milk, honey',
    price: 425,
    image: getImage('all-day-breakfast-5'),
    category: 'all-day-breakfast',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'all-day-breakfast-6',
    name: 'Whole wheat Banana Pancakes',
    description: 'Fresh banana, whole wheat batter, banana, chocolate ganache, cocoa nibs, jaggery (Contains Eggs)',
    price: 375,
    image: getImage('all-day-breakfast-6'),
    category: 'all-day-breakfast',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'all-day-breakfast-7',
    name: 'Sweet Crepes',
    description: 'Ragi crepes, coconut milk, banana, desiccated coconut, honey, chocolate ganache, Peanut Butter',
    price: 375,
    image: getImage('all-day-breakfast-7'),
    category: 'all-day-breakfast',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'all-day-breakfast-8',
    name: 'French Toast',
    description: 'Brioche Bread, Whipped Cream, Berries, Banana, Maple Syrup, Almond Flakes (Contains Eggs)',
    price: 375,
    image: getImage('all-day-breakfast-8'),
    category: 'all-day-breakfast',
    isVeggie: false,
    isAddOn: false
  },
  
  // ========== SMOOTHIE BOWLS ==========
  {
    id: 'smoothie-bowls-1',
    name: 'Chocolate and Avocado Bowl',
    description: 'Avocado, frozen banana, dates, cocoa powder, almond milk, granola, cocoa nibs, coconut flakes',
    price: 575,
    image: getImage('smoothie-bowls-1'),
    category: 'smoothie-bowls',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'smoothie-bowls-2',
    name: 'Chocolate and Peanut Butter Bowl',
    description: 'Frozen Banana, almond milk, peanut butter, cocoa powder, chocolate ganache, granola, cocoa nibs',
    price: 450,
    image: getImage('smoothie-bowls-2'),
    category: 'smoothie-bowls',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'smoothie-bowls-3',
    name: 'Pink Bowl',
    description: 'Beet, cashew, kefir, banana, honey, mixed berries, seasonal berries, granola, Seeds, dragon fruits',
    price: 450,
    image: getImage('smoothie-bowls-3'),
    category: 'smoothie-bowls',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'smoothie-bowls-4',
    name: 'Pinna Colada Smoothie Bowl',
    description: 'Frozen Banana/Pineapple, Orange Segment, Coconut Milk, honey, granola, Pumpkin Seeds',
    price: 450,
    image: getImage('smoothie-bowls-4'),
    category: 'smoothie-bowls',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'smoothie-bowls-5',
    name: 'Tropical Mango Coconut Smoothie Bowl',
    description: 'Mango Pulp, Frozen Banana/Pineapple, Coconut Milk, honey, granola, Chia Seeds',
    price: 475,
    image: getImage('smoothie-bowls-5'),
    category: 'smoothie-bowls',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== BUON APPETITO ==========
  {
    id: 'buon-appetito-1',
    name: 'Mexican Seven Layer Dip with Chips',
    description: 'Refried beans, Guacamole, Sour Cream, salsa, Pico de gallo, Olive, iceberg, spring onion, cheddar',
    price: 525,
    image: getImage('buon-appetito-1'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-2',
    name: 'Tacos Chicken',
    description: 'Ragi flour shell, Mexican refried beans, corn, Jalapeno, Sour Cream, Monterey jack cheese, salsa, Chicken',
    price: 475,
    image: getImage('buon-appetito-2'),
    category: 'buon-appetito',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'buon-appetito-3',
    name: 'Tacos Veg',
    description: 'Ragi flour shell, Mexican refried beans, corn, Jalapeno, Sour Cream, Monterey jack cheese, salsa',
    price: 445,
    image: getImage('buon-appetito-3'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-4',
    name: 'Nachos Chicken Over Loaded',
    description: 'Ragi chips, Diced Grilled Chicken, refried beans, Sour Cream, Monterey jack cheese, salsa',
    price: 550,
    image: getImage('buon-appetito-4'),
    category: 'buon-appetito',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'buon-appetito-5',
    name: 'Nachos VegOver Loaded',
    description: 'Ragi chips, refried beans, corn, Jalapeno, Sour Cream, Monterey jack cheese, salsa',
    price: 495,
    image: getImage('buon-appetito-5'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-6',
    name: 'Nachos with Cheese sauce',
    description: 'Ragi flour tortillas chips, Monterey jack cheese, beetroot tomato salsa',
    price: 425,
    image: getImage('buon-appetito-6'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-7',
    name: 'Cottage Cheese Crackling Spinach',
    description: 'Diced Cottage Cheese, Spinach Cream Sauce, Crackling Spinach, White Sesame',
    price: 425,
    image: getImage('buon-appetito-7'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-8',
    name: 'Sweet Potato Chaat',
    description: 'Charcoal Crackers, Sweet potato Patty, Sprout, Onion, Tomato, Coriander, Tamarind, Mint',
    price: 350,
    image: getImage('buon-appetito-8'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-9',
    name: 'Fajita Chicken Pocket',
    description: 'Whole Wheat Pita pocket, Onion, Bell pepper, Indian Spiced, Tabbouleh Sauce, Greek Yoghurt',
    price: 475,
    image: getImage('buon-appetito-9'),
    category: 'buon-appetito',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'buon-appetito-10',
    name: 'Falafal Pita Pocket',
    description: 'Whole Wheat Pita pocket, Onion, Tomato, Veg Falafel, Hummus, Tahini Sauce, Lettuce',
    price: 425,
    image: getImage('buon-appetito-10'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-11',
    name: 'Mediterranean Pita Platter',
    description: 'Whole Wheat Pita Bread, 3 different kinds of Hummus, Olives, Olive Oil',
    price: 425,
    image: getImage('buon-appetito-11'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-12',
    name: 'Arabic Bowl',
    description: 'Whole Wheat Charcoal Crisps, Falafel, 3 different kinds of Hummus, Olives, Olive Oil',
    price: 395,
    image: getImage('buon-appetito-12'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-13',
    name: 'Italian Assorted Platter',
    description: 'Sour Dough Baguette, Cheddar Cheese, Roasted Bell Pepper, Herbs, Mushrooms, Tomato, Olives',
    price: 475,
    image: getImage('buon-appetito-13'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-14',
    name: 'Cheddar Cheese Garlic Bread',
    description: 'Choice of Bread: Sour Dough, Multi Grain, Whole Wheat',
    price: 325,
    image: getImage('buon-appetito-14'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-15',
    name: 'Mozzarella Cheese Garlic Bread',
    description: 'Choice of Bread: Sour Dough, Multi Grain, Whole Wheat',
    price: 275,
    image: getImage('buon-appetito-15'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'buon-appetito-16',
    name: 'Garlic Bread',
    description: 'Choice of Bread: Sour Dough, Multi Grain, Whole Wheat',
    price: 225,
    image: getImage('buon-appetito-16'),
    category: 'buon-appetito',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== OPEN ZEN SANDWICHES ==========
  {
    id: 'open-zen-sandwiches-1',
    name: 'Smoked Salmon and Toast',
    description: 'Smoked Salmon, Served with Sour Cream, Pickled Onions, Capers & Dill',
    price: 725,
    image: getImage('open-zen-sandwiches-1'),
    category: 'open-zen-sandwiches',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'open-zen-sandwiches-2',
    name: 'Pesto Chicken Zenwich',
    description: 'Pesto Sauce, Bell Pepper, Onion, Garnish, Chicken',
    price: 475,
    image: getImage('open-zen-sandwiches-2'),
    category: 'open-zen-sandwiches',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'open-zen-sandwiches-3',
    name: 'Peri – Peri Chicken Zenwich',
    description: 'Peri-Peri Chicken, Bell Pepper, Onion, Sprout, lettuce',
    price: 450,
    image: getImage('open-zen-sandwiches-3'),
    category: 'open-zen-sandwiches',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'open-zen-sandwiches-4',
    name: 'Pesto Bellpepper Paneer Zenwich',
    description: 'Pesto Sauce, Paneer, Bell Pepper, Onion, Sprout, lettuce',
    price: 425,
    image: getImage('open-zen-sandwiches-4'),
    category: 'open-zen-sandwiches',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'open-zen-sandwiches-5',
    name: 'Peri – Peri Paneer Zenwich',
    description: 'Peri-Peri Paneer, Bell Pepper, Onion, Sprout, lettuce',
    price: 425,
    image: getImage('open-zen-sandwiches-5'),
    category: 'open-zen-sandwiches',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'open-zen-sandwiches-6',
    name: 'Pesto Avocado Open Zenwich',
    description: 'Toast Bread, Pesto Sauce, Avocado Slice, Feta Cheese',
    price: 575,
    image: getImage('open-zen-sandwiches-6'),
    category: 'open-zen-sandwiches',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'open-zen-sandwiches-7',
    name: 'Avocado and Beetroot Hummus Zenwich',
    description: 'Toast Bread, Beet Hummus, Avocado Slice, Garnished with Alpha Sprouts',
    price: 575,
    image: getImage('open-zen-sandwiches-7'),
    category: 'open-zen-sandwiches',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'open-zen-sandwiches-8',
    name: 'Avocado on Toast',
    description: 'Toast Bread, Guacamole Topped with Olive Oil and Feta Cheese',
    price: 550,
    image: getImage('open-zen-sandwiches-8'),
    category: 'open-zen-sandwiches',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'open-zen-sandwiches-9',
    name: 'Crispy Tofu Zenwich (Vegan)',
    description: 'Crispy Tofu, Spring Onion, Lettuce, Bean Sprouts, Hot Sauce',
    price: 425,
    image: getImage('open-zen-sandwiches-9'),
    category: 'open-zen-sandwiches',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'open-zen-sandwiches-10',
    name: 'Mediterranean Zenwich',
    description: 'Toast Bread, Hummus, Tahina, Roasted Eggplant, Grilled Tomato',
    price: 425,
    image: getImage('open-zen-sandwiches-10'),
    category: 'open-zen-sandwiches',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'open-zen-sandwiches-11',
    name: 'Italian Zenwich',
    description: 'Toast Bread, In-house Pesto Sauce, Roasted Bell Pepper, Feta Cheese',
    price: 425,
    image: getImage('open-zen-sandwiches-11'),
    category: 'open-zen-sandwiches',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'open-zen-sandwiches-12',
    name: 'Mushroom Zenwich with Herbed Ricotta',
    description: 'Onions, Garlic, Thyme, Rosemary, Ricotta Cheese, Arugula Leaves, Feta Cheese',
    price: 425,
    image: getImage('open-zen-sandwiches-12'),
    category: 'open-zen-sandwiches',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== CIABATTA SANDWICH ==========
  {
    id: 'ciabatta-sandwich-1',
    name: 'Smoked Turkey Ham Ciabatta',
    description: 'Pimento sauce, turkey ham, fresh mozzarella, lettuce',
    price: 575,
    image: getImage('ciabatta-sandwich-1'),
    category: 'ciabatta-sandwich',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'ciabatta-sandwich-2',
    name: 'Smokey Barbeque Chicken Ciabatta',
    description: 'Boneless Chicken, Lettuce, Onion, Bell pepper',
    price: 575,
    image: getImage('ciabatta-sandwich-2'),
    category: 'ciabatta-sandwich',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'ciabatta-sandwich-3',
    name: 'Pesto Caprese Ciabatta',
    description: 'Pesto sauce, Fresh Mozzarella, Grilled tomato, Basil Leave',
    price: 575,
    image: getImage('ciabatta-sandwich-3'),
    category: 'ciabatta-sandwich',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'ciabatta-sandwich-4',
    name: 'Spicy Jalapeno Hummus Ciabatta',
    description: 'Jalapeno hummus, slice avocado, fresh tomato, pickle onion',
    price: 575,
    image: getImage('ciabatta-sandwich-4'),
    category: 'ciabatta-sandwich',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'ciabatta-sandwich-5',
    name: 'Poached Apple Cheese Ciabatta',
    description: 'Poached Apple, Cream cheese, Fresh Mozzarella, Caramelized Onion, Feta Cheese',
    price: 575,
    image: getImage('ciabatta-sandwich-5'),
    category: 'ciabatta-sandwich',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'ciabatta-sandwich-6',
    name: 'Fresh Mozzarella Pesto Bell Pepper',
    description: 'Pesto sauce, roasted bell pepper, grilled zucchini, fresh mozzarella, pickle onion',
    price: 525,
    image: getImage('ciabatta-sandwich-6'),
    category: 'ciabatta-sandwich',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== BAGEL ==========
  {
    id: 'bagel-1',
    name: 'Smoked Salmon Cream Cheese Bagel',
    description: 'Whole Wheat Bagel, Cream Cheese Smoked Salmon, Inhouse Salad, Sweet Potato Chips',
    price: 725,
    image: getImage('bagel-1'),
    category: 'bagel',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'bagel-2',
    name: 'Barbeque Chicken Bagel',
    description: 'Whole Wheat Bagel, Barbeque Chicken, Inhouse Salad, Sweet Potato Chips',
    price: 450,
    image: getImage('bagel-2'),
    category: 'bagel',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'bagel-3',
    name: 'Pesto Mushroom Bagel',
    description: 'Whole Wheat Bagel, Pesto Sauce Garlic Mushroom, Inhouse Salad, Sweet Potato Chips',
    price: 425,
    image: getImage('bagel-3'),
    category: 'bagel',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== CHARCOAL BURGERS ==========
  {
    id: 'charcoal-burgers-1',
    name: 'Activated Charcoal Chicken Burger',
    description: 'Chicken Patty, Whole Wheat Charcoal Bun, Sriracha Sauce, Cucumber, Cheddar Cheese',
    price: 475,
    image: getImage('charcoal-burgers-1'),
    category: 'charcoal-burgers',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'charcoal-burgers-2',
    name: 'Plant Based Chicken Kheema Burger (Vegan)',
    description: 'Charcoal Bun, Chicken minced Patty (Plant Based), Sriracha Sauce, Vegan Cheese, Salad',
    price: 475,
    image: getImage('charcoal-burgers-2'),
    category: 'charcoal-burgers',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'charcoal-burgers-3',
    name: 'Activated Charcoal Veg Burger',
    description: 'Whole Wheat Charcoal Bun, Veg and Sweet Potato Patty, Sriracha Sauce, Cucumber, Cheddar',
    price: 425,
    image: getImage('charcoal-burgers-3'),
    category: 'charcoal-burgers',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== PIZZA THIN CRUST ==========
  {
    id: 'thin-crust-pizza-1',
    name: 'Pesto Chicken Pizza',
    description: 'Thin Crust Base, Homemade Fresh Pesto Sauce, Mozzarella Cheese, Pesto Chicken, Black Olives, Basil',
    price: 625,
    image: getImage('thin-crust-pizza-1'),
    category: 'thin-crust-pizza',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'thin-crust-pizza-2',
    name: 'Chicken Pizza with Arugula',
    description: 'Thin Crust Base, Fresh Tomato Sauce, Mozzarella Cheese, Grilled Chicken, Arugula Leaf',
    price: 625,
    image: getImage('thin-crust-pizza-2'),
    category: 'thin-crust-pizza',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'thin-crust-pizza-3',
    name: 'Vegan Cheese Pizza with grilled vegetable',
    description: 'Whole Wheat Base, Fresh Tomato Sauce, Vegan Cheese, Broccoli, Bell pepper, Zucchini',
    price: 625,
    image: getImage('thin-crust-pizza-3'),
    category: 'thin-crust-pizza',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'thin-crust-pizza-4',
    name: 'Vegan Cheese Plant Based Chicken Pizza',
    description: 'Whole Wheat Base, Fresh Tomato Sauce, Vegan Cheese, Mock meat Sausages',
    price: 625,
    image: getImage('thin-crust-pizza-4'),
    category: 'thin-crust-pizza',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'thin-crust-pizza-5',
    name: 'Spicy Paneer Pizza (Spicy*)',
    description: 'Thin Crust Base, Fresh Tomato Sauce, Mozzarella Cheese, Onion, Capsicum, Spicy Paneer',
    price: 595,
    image: getImage('thin-crust-pizza-5'),
    category: 'thin-crust-pizza',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'thin-crust-pizza-6',
    name: 'La Sicilia Pizza (Spicy*)',
    description: 'Thin Crust Base, Fresh Tomato Sauce, Mozzarella, Sauteed Mushroom, Sundried Tomato, Pickle Onion, Basil',
    price: 595,
    image: getImage('thin-crust-pizza-6'),
    category: 'thin-crust-pizza',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'thin-crust-pizza-7',
    name: 'Vegetarian Pizza with Pesto',
    description: 'Thin Crust Base, Fresh Tomato Sauce, Mozzarella, Roasted Bell Pepper, Zucchini, Broccoli, Pesto',
    price: 550,
    image: getImage('thin-crust-pizza-7'),
    category: 'thin-crust-pizza',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'thin-crust-pizza-8',
    name: 'Margherita Pizza',
    description: 'Thin Crust Base, Homemade Fresh Tomato Sauce, Mozzarella Cheese, Sliced Tomato, Fresh Basil',
    price: 475,
    image: getImage('thin-crust-pizza-8'),
    category: 'thin-crust-pizza',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== GRILLED SANDWICH ==========
  {
    id: 'grilled-sandwich-1',
    name: 'Barbeque Grilled Chicken Bagel Sandwich',
    description: 'Grilled Chicken Patty, Barbeque Sauce, Sliced Cheese',
    price: 475,
    image: getImage('grilled-sandwich-1'),
    category: 'grilled-sandwich',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'grilled-sandwich-2',
    name: 'Spicy Chicken Grilled Sandwich',
    description: 'Spicy Chicken, Onion, Capsicum, Indian Spiced, Cream Cheese',
    price: 475,
    image: getImage('grilled-sandwich-2'),
    category: 'grilled-sandwich',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'grilled-sandwich-3',
    name: 'Spicy Paneer Grilled Sandwich',
    description: 'Cottage cheese, Onion, Capsicum, Indian Spiced, Cream Cheese',
    price: 425,
    image: getImage('grilled-sandwich-3'),
    category: 'grilled-sandwich',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'grilled-sandwich-4',
    name: 'Grilled Vegetables with Mustard Sauce',
    description: 'Grilled Broccoli, Bell pepper, zucchini, Olives, Jalapeno, Cream Sauce, mustard sauce',
    price: 425,
    image: getImage('grilled-sandwich-4'),
    category: 'grilled-sandwich',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== SALAD A DAY ==========
  {
    id: 'salad-a-day-1',
    name: 'Smoked Salmon Salad w/ Lemon Dressing',
    description: 'Lettuce, Cream Cheese, Capers and Pickled Onion, Smoked Salmon',
    price: 675,
    image: getImage('salad-a-day-1'),
    category: 'salad-a-day',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'salad-a-day-2',
    name: 'Prawns Chimichurri Salad',
    description: 'Grilled Prawns, Mix Lettuce, Chimichurri Dressing',
    price: 625,
    image: getImage('salad-a-day-2'),
    category: 'salad-a-day',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'salad-a-day-3',
    name: 'Chicken Chimichurri Salad',
    description: 'Mix Lettuce, Cherry Tomatoes, Onion, Couscous, Grilled chicken, Chimichurri sauce',
    price: 455,
    image: getImage('salad-a-day-3'),
    category: 'salad-a-day',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'salad-a-day-4',
    name: 'Grilled Chicken Salad w/ Pomegranate',
    description: 'Mix lettuce, kale, carrot, beetroot, couscous, Roasted Chickpea, Pomegranate reduction',
    price: 455,
    image: getImage('salad-a-day-4'),
    category: 'salad-a-day',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'salad-a-day-5',
    name: 'Classic Caesar Salad Chicken',
    description: 'Iceberg lettuce, Roman Lettuce, in-house Caesar dressing, Parmesan, Croutons, Chicken',
    price: 455,
    image: getImage('salad-a-day-5'),
    category: 'salad-a-day',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'salad-a-day-6',
    name: 'Classic Caesar Salad Veg',
    description: 'Iceberg lettuce, Roman Lettuce, in-house Caesar dressing, Parmesan, Croutons',
    price: 425,
    image: getImage('salad-a-day-6'),
    category: 'salad-a-day',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'salad-a-day-7',
    name: 'Kale and Arugula Salad',
    description: 'Beetroot, sweet potato, roasted pumpkin, pumpkin seeds, Roasted Chickpeas, sliced orange, almonds, feta',
    price: 425,
    image: getImage('salad-a-day-7'),
    category: 'salad-a-day',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'salad-a-day-8',
    name: 'Moroccan Salad with Cumin and Lemon',
    description: 'Mix lettuce, fresh mint, almond flakes, black raisins, carrots, zucchini, bell pepper, couscous, chickpeas',
    price: 425,
    image: getImage('salad-a-day-8'),
    category: 'salad-a-day',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'salad-a-day-9',
    name: 'Crispy Fried Goat Cheese and Quinoa Salad',
    description: 'Baby spinach, blanched beet, quinoa, sunflower seeds, pesto dressing, goat cheese patty',
    price: 425,
    image: getImage('salad-a-day-9'),
    category: 'salad-a-day',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'salad-a-day-10',
    name: 'Roasted Pumpkin Feta Salad',
    description: 'Mix lettuce, pumpkin, jalapeno, pomegranate, walnut, pumpkin seeds, balsamic vinaigrette',
    price: 425,
    image: getImage('salad-a-day-10'),
    category: 'salad-a-day',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'salad-a-day-11',
    name: 'Water Melon Cucumber Feta Salad',
    description: 'Mix lettuce, watermelon, cucumber, feta Cheese, mint leaves, watermelon Seeds, honey mustard',
    price: 425,
    image: getImage('salad-a-day-11'),
    category: 'salad-a-day',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'salad-a-day-12',
    name: 'Mediterranean Avocado Salad',
    description: 'Mix lettuce, avocado, cucumber, cherry tomato, roasted walnuts, feta cheese, lemon vinaigrette',
    price: 550,
    image: getImage('salad-a-day-12'),
    category: 'salad-a-day',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'salad-a-day-13',
    name: 'Kale Bhel Salad',
    description: 'Sweet potato, roasted peanuts, split chickpeas, puffed rice, tamarind dressing, charred lime',
    price: 375,
    image: getImage('salad-a-day-13'),
    category: 'salad-a-day',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== SOUPS ==========
  {
    id: 'homemade-soups-1',
    name: 'Canadian Chowder Soup Chicken',
    description: 'Cream Sauce, Fresh Herbs, Dry Herbs, Dijon Mustard, Vegetable Chunks, Fresh Basil, Chicken',
    price: 325,
    image: getImage('homemade-soups-1'),
    category: 'homemade-soups',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'homemade-soups-2',
    name: 'Canadian Chowder Soup Veg',
    description: 'Cream Sauce, Fresh Herbs, Dry Herbs, Dijon Mustard, Vegetable Chunks, Fresh Basil',
    price: 295,
    image: getImage('homemade-soups-2'),
    category: 'homemade-soups',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'homemade-soups-3',
    name: 'Cream of Chicken with Fresh Herb Soup',
    description: 'Garlic, Fresh Herbs, Fresh Cream, Chicken Chunks',
    price: 295,
    image: getImage('homemade-soups-3'),
    category: 'homemade-soups',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'homemade-soups-4',
    name: 'Tom kha Soup Prawns',
    description: 'Thai Spiced, Vegetable, Mushrooms, Coconut Flavoured, Prawns',
    price: 325,
    image: getImage('homemade-soups-4'),
    category: 'homemade-soups',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'homemade-soups-5',
    name: 'Tom kha Soup Chicken',
    description: 'Thai Spiced, Vegetable, Mushrooms, Coconut Flavoured, Chicken',
    price: 295,
    image: getImage('homemade-soups-5'),
    category: 'homemade-soups',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'homemade-soups-6',
    name: 'Tom kha Soup Veg',
    description: 'Thai Spiced, Vegetable, Mushrooms, Coconut Flavoured',
    price: 275,
    image: getImage('homemade-soups-6'),
    category: 'homemade-soups',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'homemade-soups-7',
    name: 'Clear Soup Prawns',
    description: 'Vegetable broth, fresh herbs, seasoning, Prawns',
    price: 305,
    image: getImage('homemade-soups-7'),
    category: 'homemade-soups',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'homemade-soups-8',
    name: 'Clear Soup Chicken',
    description: 'Vegetable broth, fresh herbs, seasoning, Chicken',
    price: 275,
    image: getImage('homemade-soups-8'),
    category: 'homemade-soups',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'homemade-soups-9',
    name: 'Clear Soup Veg',
    description: 'Vegetable broth, fresh herbs, seasoning',
    price: 250,
    image: getImage('homemade-soups-9'),
    category: 'homemade-soups',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'homemade-soups-10',
    name: 'Cream of Mushroom Soup',
    description: 'Fresh Mushroom, Garlic, Herbs, Fresh Cream, Seasoning',
    price: 275,
    image: getImage('homemade-soups-10'),
    category: 'homemade-soups',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'homemade-soups-11',
    name: 'Roasted Pumpkin Ginger Soup',
    description: 'Pumpkin Paste, Roasted Ginger Flakes, Fresh cream, Bread Croutons',
    price: 250,
    image: getImage('homemade-soups-11'),
    category: 'homemade-soups',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'homemade-soups-12',
    name: 'Broccoli and Kale Soup',
    description: 'Broccoli Paste, Kale Paste, Coconut Milk, Bread Croutons, Roasted Almond Flakes',
    price: 250,
    image: getImage('homemade-soups-12'),
    category: 'homemade-soups',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== CROISSANT ==========
  {
    id: 'croissant-1',
    name: 'Chocolate Banana Croissant',
    description: 'Toasted Croissant, dark chocolate, chocolate ganache, sliced banana',
    price: 425,
    image: getImage('croissant-1'),
    category: 'croissant',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'croissant-2',
    name: 'Smoked Salmon Cream cheese Croissant',
    description: 'Toasted Croissant, cream cheese, Norwegian smoked salmon, caper, seasoning',
    price: 775,
    image: getImage('croissant-2'),
    category: 'croissant',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'croissant-3',
    name: 'Turkey Ham and Cheese Croissant',
    description: 'Toasted Croissant, grilled smoked turkey ham, mozzarella cheese, pimentos sauce',
    price: 675,
    image: getImage('croissant-3'),
    category: 'croissant',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'croissant-4',
    name: 'Spicy BBQ Chicken Croissant',
    description: 'Toasted Croissant, spicy BBQ tossed chicken, Onion, bell pepper, sprouts',
    price: 525,
    image: getImage('croissant-4'),
    category: 'croissant',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'croissant-5',
    name: 'Peri Peri Chicken Croissant',
    description: 'Toasted Croissant, peri peri tossed chicken, onion, bell pepper',
    price: 525,
    image: getImage('croissant-5'),
    category: 'croissant',
    isVeggie: false,
    isAddOn: false
  },
  {
    id: 'croissant-6',
    name: 'Avocado Cheese Croissant',
    description: 'Toasted Croissant, spread pesto sauce, sliced avocado, fresh mozzarella',
    price: 625,
    image: getImage('croissant-6'),
    category: 'croissant',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'croissant-7',
    name: 'Pesto Mushroom Croissant',
    description: 'Toasted Croissant, spread pesto, filled sautéed mushroom and feta cheese',
    price: 475,
    image: getImage('croissant-7'),
    category: 'croissant',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== BEVERAGES ==========
  {
    id: 'beverages-1',
    name: 'Ginger Ale Hibiscus Flavoured',
    description: '',
    price: 250,
    image: getImage('beverages-1'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-2',
    name: 'Ginger Honey Kombucha',
    description: '',
    price: 250,
    image: getImage('beverages-2'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-3',
    name: 'Blueberry Rose Kombucha',
    description: '',
    price: 250,
    image: getImage('beverages-3'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-4',
    name: 'Apricot Cinnamon Kombucha',
    description: '',
    price: 250,
    image: getImage('beverages-4'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-5',
    name: 'Classic Kombucha',
    description: '',
    price: 225,
    image: getImage('beverages-5'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-6',
    name: 'Spiced Kairi Kombucha',
    description: '',
    price: 225,
    image: getImage('beverages-6'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-7',
    name: 'Salad Bar Kombucha',
    description: '',
    price: 225,
    image: getImage('beverages-7'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-8',
    name: 'Coffee Orange Kombucha',
    description: '',
    price: 225,
    image: getImage('beverages-8'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-9',
    name: 'Apple Cinnamon Kombucha',
    description: '',
    price: 225,
    image: getImage('beverages-9'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-10',
    name: 'Pineapple Spice Kombucha',
    description: '',
    price: 225,
    image: getImage('beverages-10'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-11',
    name: 'Kokum Ginger Kombucha',
    description: '',
    price: 225,
    image: getImage('beverages-11'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-12',
    name: 'Fresh Lime Soda',
    description: '',
    price: 160,
    image: getImage('beverages-12'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-13',
    name: 'Fresh Lime Water',
    description: '',
    price: 140,
    image: getImage('beverages-13'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-14',
    name: 'Fresh Coconut Water',
    description: '',
    price: 160,
    image: getImage('beverages-14'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-15',
    name: 'Himalayan Sparkling Water (300ml)',
    description: '',
    price: 150,
    image: getImage('beverages-15'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-16',
    name: 'Himalayan Sparkling Water (750ml)',
    description: '',
    price: 275,
    image: getImage('beverages-16'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'beverages-17',
    name: 'Himalayan Still Water (750ml)',
    description: '',
    price: 250,
    image: getImage('beverages-17'),
    category: 'beverages',
    isVeggie: true,
    isAddOn: false
  },
  
  // ========== BALLS & BITES ==========
  {
    id: 'balls-bites-1',
    name: 'Gluten Free Choco Chips Cookies',
    description: 'Served 2 Cookies',
    price: 60,
    image: getImage('balls-bites-1'),
    category: 'balls-bites',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'balls-bites-2',
    name: 'Chocolate and Nut Balls',
    description: '',
    price: 50,
    image: getImage('balls-bites-2'),
    category: 'balls-bites',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'balls-bites-3',
    name: 'Fig and Nut Balls',
    description: '',
    price: 50,
    image: getImage('balls-bites-3'),
    category: 'balls-bites',
    isVeggie: true,
    isAddOn: false
  },
  {
    id: 'balls-bites-4',
    name: 'Peanut Butter Chocolate Bar',
    description: '',
    price: 99,
    image: getImage('balls-bites-4'),
    category: 'balls-bites',
    isVeggie: true,
    isAddOn: false
  }
];
