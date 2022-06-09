import images from './images';

const wines = [
  {
    title: 'Asahi',
    price: '$25',
    tags: 'IE | 750 mL',
  },
  {
    title: 'Chapel Hill Shiraz',
    price: '$35',
    tags: 'AU | Bottle',
  },
  {
    title: 'Domaine de la Romanee Conti',
    price: 'Req',
    tags: 'FR | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$48 ',
    tags: 'FR | 750 mL',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$50 ',
    tags: 'CA | 750 mL',
  },
];

const cocktails = [
  {
    title: 'Bellini',
    price: '$15',
    tags: 'Prosecco | White Peach Purée ',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$17',
    tags: 'Dark rum | Ginger Beer | Slice of Lime',
  },
  {
    title: 'Old Fashioned',
    price: '$19',
    tags: 'Bourbon | Brown Sugar | Angostura Bitters',
  },
  {
    title: 'Passion Fruit Martini',
    price: '$21',
    tags: 'Vodka | Passoa | Lime Juice | Sugar',
  },
  {
    title: 'Rum Punch',
    price: '$23',
    tags: 'Golden Rum | Citrus Juice | Pineapple and Cherry Garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
