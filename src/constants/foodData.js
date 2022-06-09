import images from './images';

const appetizers = [
  {
    title: 'Szechuan Chicken Lettuce Wraps',
    price: '$20',
    tags: 'sweet and spicy szechuan chicken, peanuts, wontons, korean chili sauce, spicy yogurt',
  },
  {
    title: 'Truffle Fries',
    price: '$12',
    tags: 'truffle, herbs, grana padano, garlic aioli',
  },
  {
    title: 'Ravioli & Prawn Trio',
    price: '$16',
    tags: ' butternut squash and mascarpone ravioli, truffle butter, sautéed jumbo prawns, pine nuts, crispy sage',
  },
  {
    title: 'Crispy Calamari',
    price: '$12 ',
    tags: 'served with house made tzatziki and red onion',
  },
  {
    title: 'Edamame',
    price: '$10 ',
    tags: 'steamed soybeans, sea salt',
  },
  {
    title: 'Blue Cheese Steak Crostini',
    price: '$17 ',
    tags: 'sliced baguette, blue cheese, butter, milk, garlic, balsamic vinegar, fresh herbs',
  },
  {
    title: 'New England Clam Chowder',
    price: '$15',
    tags: 'cream, bacon, thyme',
  }, 
  {
    title: 'Classic Brown Derby Cobb',
    price: '$22',
    tags: 'chicken, blue cheese, bacon, tomato, egg, avocado',
  }, 
  
];

const mainCourse = [
  {
    title: 'Spaghetti Portofino',
    price: '$27',
    tags: 'sautéed jumbo prawns, lobster lemon butter sauce, roasted gem tomatoes, corn, fennel chili crumb, garlic crostini',
  },
  {
    title: 'Oysters Rockefeller',
    price: '$27',
    tags: 'local oysters, spinach, pernod, hollandaise',
  }, 
  {
    title: "Hunter Chicken",
    price: '$30',
    tags: 'shiitake, portobello, button and crimini mushroom demi-glace, buttered mashed potatoes, roasted asparagus',
  },
  {
    title: 'Creole Steak + Prawns',
    price: '$42',
    tags: '8oz certified angus beef® sirloin, cajun spices, spicy creole butter, white wine sautéed creole jumbo prawns, buttered mashed potatoes, roasted asparagus',
  },
  {
    title: 'Four Mushroom Steak',
    price: '$38',
    tags: '8oz certified angus beef® sirloin, shiitake, portobello, button and crimini mushroom demi-glace, buttered mashed potatoes, roasted asparagus',
  },
  {
    title: 'Impossible Burger',
    price: '$22',
    tags: 'impossible™ plant-based patty, red relish, vegan mayo, ketchup, mustard, vegan bun, sea salted fries',
  },
  {
    title: 'Baja Fish Tacos',
    price: '$18',
    tags: 'beer battered ocean wise™ pacific cod, pico de gallo, pickled cabbage, valentina garlic mayo, avocado crema, flour tortilla',
  },
  {
    title: 'Pesto Chicken Quesidilla',
    price: '$17',
    tags: 'blended cheeses, basil pesto, sundried cranberries, honey-lime dip',
  },  
  {
    title: 'Crispy Tofo Extravagenza',
    price: '$22',
    tags: '100% plant-based. soy chili tofu, jasmine rice, mango, cucumber, avocado, edamame, ginger, radish',
  },  
  {
    title: 'Baby Back Ribs',
    price: '$31',
    tags: 'Bulleit™ BBQ sauce, creamy coleslaw & endless signature Kennebec fries',
  },  
  {
    title: 'Fish & Chips',
    price: '$18',
    tags: 'two pieces of crispy tempura cod. Creamy coleslaw & endless signature Kennebec fries',
  },  
  {
    title: 'Wu’s Beef Dip',
    price: '$20',
    tags: 'slow-roasted & tender Canadian Certified Angus Beef® piled high on garlic panini. Served with au jus',
  },  
  {
    title: 'Farro Power Salad',
    price: '$19',
    tags: 'local artisan greens, spinach, farro, broccoli, radish, cucumber, edamame, gala apple, cherry tomatoes & red onion. Garnished with gingered pecans, feta & dried fruit. Avocado crema',
  },  
  {
    title: 'Teriyaki Chicken Donburi Bowl',
    price: '$21',
    tags: 'fresh BC chicken breast, served with broccoli, red pepper, carrots, mushrooms & edamame sautéed in our house-made teriyaki sauce. Jasmine rice',
  },
  {
    title: 'West Coast Platter',
    price: '$99',
    tags: '1.5lb lobster, snow crab, grilled steelhead, jumbo scallops & prawns, oysters rockefeller, steamed mussels',
  },
];

const desserts = [
  {
    title: 'Apple Tart',
    price: '$11',
    tags: 'flaky pie crust, caramelized apples, tahitian vanilla ice cream, caramel sauce',
  },  
  {
    title: 'Chocolate Lava Cake',
    price: '$11',
    tags: 'molten dark chocolate cake, tahitian vanilla ice cream',
  },  
  {
    title: 'Key Lime Pie',
    price: '$11',
    tags: 'freshly squeezed key limes, graham cracker crust, hand whipped cream',
  },  
  {
    title: 'Berry Cheesecake',
    price: '$10',
    tags: 'blueberry or fresh strawberry topping & whipped cream',
  },  
  {
    title: 'Salted Caramel Brownie',
    price: '$10',
    tags: 'ghirardelli triple chocolate chip brownie, premium vanilla bean ice cream, whipped cream & salted caramel',
  },  
  {
    title: 'Tahitian Vanilla Crème Brûlée',
    price: '$14',
    tags: 'house-made biscotti, whipped cream',
  }, 
  {
    title: 'Traditional Tiramisu',
    price: '$14',
    tags: 'mascarpone cream, lady fingers, espresso, kahlua, baileys',
  }, 
  {
    title: 'Coconut Jelly with Mango Pomelo Sago',
    price: '$14',
    tags: 'two layers of coconut jelly topped with mango pomelo sago',
  }, 
  
];

export default { appetizers, mainCourse, desserts };
