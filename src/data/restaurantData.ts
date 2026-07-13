export interface Dish {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

export interface ChefSpecial extends Dish {
  story: string;
  ingredients: string[];
  notes: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  spanClass: string; // Tailored for masonry
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export const featuredDishes: Dish[] = [
  {
    id: "fd-1",
    title: "A5 Dry-Aged Wagyu Ribeye",
    category: "Mains",
    price: "₹6,500",
    description: "A5 Grade Wagyu ribeye aged 45 days, paired with black truffle potato purée, charred heirloom carrots, and smoked bone marrow jus.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200"
  },
  {
    id: "fd-2",
    title: "Caviar & Diver Scallop",
    category: "Starters",
    price: "₹3,200",
    description: "Pan-seared Hokkaido sea scallops bedded in white asparagus mousse, topped with Imperial Oscietra Caviar and a lemon-verbena emulsion.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200"
  },
  {
    id: "fd-3",
    title: "Saffron Patagonian Sea Bass",
    category: "Mains",
    price: "₹4,800",
    description: "Butter-poached Patagonian sea bass resting on saffron-infused fennel cream, garnished with sea beans and cold-pressed Meyer lemon oil.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200"
  }
];

export const chefSpecials: ChefSpecial[] = [
  {
    id: "cs-1",
    title: "The Golden Truffle Sphere",
    category: "Dessert",
    price: "₹2,400",
    description: "A fragile Valrhona 70% dark chocolate dome that collapses table-side under warm, smoked sea salt caramel, revealing black truffle gelato and a hazelnut feuilletine crunch.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200",
    story: "Designed by Pastry Chef Marc Laurent, this dessert marries the earthy luxury of Perigord truffles with the rich complexity of single-origin dark chocolate.",
    ingredients: [
      "Valrhona 70% Single-Origin Chocolate",
      "Perigord Black Truffle Infusion",
      "Applewood Smoked Caramel",
      "24k Edible Gold Leaf"
    ],
    notes: "Pairs exquisitely with our aged 20-year tawny port."
  },
  {
    id: "cs-2",
    title: "Applewood Smoked Duck Breast",
    category: "Signature Main",
    price: "₹5,200",
    description: "Maple-cured Challans duck breast, roasted pink and smoked table-side with applewood chips, accompanied by wild parsnip cream and a tart Morello cherry reduction.",
    image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?q=80&w=1200",
    story: "Born out of Chef de Cuisine's childhood memories of woodsmoke in autumn, this signature dish represents the delicate balance between smoke, sweet, and game.",
    ingredients: [
      "Aged Challans Duck Breast",
      "Wild Parsnip & Nutmeg Purée",
      "Morello Cherry Glaze",
      "Smoked Herb Infusion"
    ],
    notes: "Poured with an elegant, cool-climate Oregon Pinot Noir."
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "The Grand Salon",
    category: "Ambiance",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200",
    spanClass: "md:col-span-2 md:row-span-2"
  },
  {
    id: "g-2",
    title: "Whiskey Pouring",
    category: "Bar",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
    spanClass: "md:col-span-1 md:row-span-1"
  },
  {
    id: "g-3",
    title: "Culinary Precision",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800",
    spanClass: "md:col-span-1 md:row-span-2"
  },
  {
    id: "g-4",
    title: "Artisanal Bread",
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800",
    spanClass: "md:col-span-1 md:row-span-1"
  },
  {
    id: "g-5",
    title: "Wine Vault",
    category: "Ambiance",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800",
    spanClass: "md:col-span-1 md:row-span-1"
  },
  {
    id: "g-6",
    title: "Intimate Seating",
    category: "Ambiance",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200",
    spanClass: "md:col-span-2 md:row-span-1"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Elena Rostova",
    role: "Culinary Critic, Elite Traveler",
    comment: "L'Étoile delivers an experience that is both intellectually stimulating and deeply satisfying. The dry-aged wagyu is easily one of the finest preparations I have tasted globally.",
    rating: 5
  },
  {
    id: "t-2",
    name: "Vikram Malhotra",
    role: "Michelin Guide Reviewer",
    comment: "The table-side applewood smoke on the duck breast isn't just theatrical—it imparts a profound depth. A masterclass in luxury dining, with impeccable dark-mode atmosphere.",
    rating: 5
  },
  {
    id: "t-3",
    name: "Charlotte Dubois",
    role: "Gastronomic Journalist",
    comment: "From the first sip of the vintage champagne to the final bite of the Golden Truffle Sphere, L'Étoile proves that haute cuisine is a high art. A must-visit destination.",
    rating: 5
  }
];
