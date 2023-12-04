import images from "./images";

const wines = [
  {
    title: "Saffron-Spiced Chicken Tikka Masala",
    price: "$42.99",
    tags: "Tender chicken tikka in a rich saffron-infused tomato curry, served with basmati rice. | Ingredients : Chicken tikka, Saffron curry, Basmati rice, Naan bread",
  },
  {
    title: "Chimichurri-Infused Argentinian Ribeye",
    price: "$56.99",
    tags: "Grilled ribeye steak marinated in zesty chimichurri sauce, served with sweet potato puree. | Ingredients : Ribeye steak, Chimichurri sauce Sweet potato pure, Grilled vegetables",
  },
  
];

const cocktails = [
  {
    title: "Mango Tango Ceviche",
    price: "$32.99",
    tags: "Fresh ceviche with mango, avocado, and citrus-infused seafood medley. | Ingredients : Sea bass, Shrimp, Mango",
  },
  {
    title: "Truffle Butter Escargot",
    price: "$28.99",
    tags: "Escargot baked in truffle butter, served with garlic-infused baguette. | Ingredients : Escargot, Truffle butter, Baguette, Garlic",
  },
  
];
const cocktails1 = [
  {
    title: "Passion Fruit Cheesecake",
    price: "$18.99",
    tags: "Creamy cheesecake with a tropical twist of passion fruit, topped with mango coulis. | Ingredients : Cream Cheese, Passion Fruit, mango coulis, Graham Cracker Crust ",
  },
  {
    title: "Chocolate Hazelnut Decadence",
    price: "$24.99",
    tags: "Decadent chocolate hazelnut mousse layered with hazelnut praline, served with espresso gelato. | Ingredients :Chocolate hazelnut mousse, Hazelnut praline, Espresso gelato ",
  },
  
];
const cocktails2 = [
  {
    title: "Butternut Squash Sage Risotto",
    price: "$36.99",
    tags: "Creamy risotto with roasted butternut squash, sage, and Parmesan cheese. | Ingredients : Arborio rice, Butternut squash, Sage, Parmesan cheese ",
  },
  {
    title: "Mango Coconut Basil Sorbet",
    price: "$14.99",
    tags: "Refreshing sorbet with the tropical combination of mango, coconut, and fresh basil. | Ingredients : Mango, Coconut Milk, Basil, Simple Syrup",
  },
  
];
const awards = [
  {
    imgUrl: images.award01,
    title: "Farm-to-Table",
    subtitle:
      "We source our ingredients locally to support farmers and ensure the freshest, seasonal produce in our dishes.",
  },
  {
    imgUrl: images.award02,
    title: "Waste Reduction",
    subtitle:
      "We prioritize reducing food waste through careful portioning, composting, and recycling practices.",
  },
  {
    imgUrl: images.award03,
    title: "Ocean-Friendly Seafood",
    subtitle:
      "We are committed to serving sustainably sourced seafood to promote the health of our oceans and marine life.",
  },
];
const events = [
  {
    imgUrl: images.award01,
    title: "Culinary Artistry Showcase 2023-12-15 ",
    subtitle:
      "Join us for a night of culinary artistry as Chef Isabella presents her latest creations in an exclusive tasting event.",
  },
  {
    imgUrl: images.award02,
    title: "Wine and Dine Pairing Night 2024-01-20",
    subtitle:
      "Indulge in an evening of exquisite wine and food pairings, curated by our sommelier and Chef Isabella.",
  },
];
const initiatives = [
  {
    title: "Farm-To-Table",
    subtitle:
      "We source our ingredients locally to support farmers and ensure the freshest, seasonal produce in our dishes.",
  },
  {
    title: "Waste Reduction",
    subtitle:
      "We prioritize reducing food waste through careful portioning, composting, and recycling practices.",
  },
  {
    title: "Ocean-Friendly Seafood",
    subtitle:
      "We are committed to serving sustainably sourced seafood to promote the health of our oceans and marine life.",
  },
];

export default { wines, cocktails,cocktails1,cocktails2, awards, initiatives, events };
