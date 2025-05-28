import { Product } from '@/types';

export const allProducts: Product[] = [
  {
    id: 'geometric-lamp-01',
    name: 'Geometric Table Lamp',
    description: 'A modern geometric 3D printed lamp with customizable LED lighting. Perfect for adding a contemporary touch to any room. The intricate geometric pattern creates beautiful light and shadow play.',
    price: 89.99,
    discount: 0,
    category: 'lamps',
    images: [
      '/dragon-1.png',
      '/dragon-2.png'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 'pendant-light-02',
    name: 'Honeycomb Pendant Light',
    description: 'A stunning 3D printed pendant light with a honeycomb pattern. The intricate design creates an amazing pattern when lit, perfect for dining rooms and entryways.',
    price: 129.99,
    discount: 15,
    category: 'lamps',
    images: [
      'https://images.unsplash.com/photo-1730267252406-e412e23efedf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY3fHwzZCUyMHByaW50aW5nfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1730267244889-d2c89c886262?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'wave-vase-03',
    name: 'Wave Ripple Vase',
    description: 'A fluid, wave-inspired vase 3D printed with eco-friendly PLA. The organic ripple design adds a dynamic natural element to your home décor.',
    price: 49.99,
    discount: 0,
    category: 'vases',
    images: [
      'https://images.unsplash.com/photo-1715592600579-5949748d349f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1706895247302-20d321119c1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 'succulent-planter-04',
    name: 'Geometric Succulent Planter',
    description: 'A set of three geometric planters perfect for succulents and small plants. Each planter features a different geometric pattern and includes drainage holes.',
    price: 34.99,
    discount: 10,
    category: 'vases',
    images: [
      'https://images.unsplash.com/photo-1730267244908-3ba71e34d073?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1730267244889-4ea1d03ff490?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'wall-art-05',
    name: 'Modular Hexagon Wall Art',
    description: 'Customizable hexagonal wall art modules that can be arranged in endless combinations. Create your own wall installation with these 3D printed geometric pieces.',
    price: 59.99,
    discount: 0,
    category: 'decor',
    images: [
      'https://images.unsplash.com/photo-1616427030011-214e41469f40?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1625240752293-00b16d38c512?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'tabletop-sculpture-06',
    name: 'Abstract Tabletop Sculpture',
    description: 'A modern abstract sculpture for your tabletop or shelf. This 3D printed art piece makes a bold statement in any contemporary interior.',
    price: 79.99,
    discount: 0,
    category: 'decor',
    images: [
      'https://images.unsplash.com/photo-1730266450546-11b9ad0132a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHwzZCUyMHByaW50aW5nfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1644936580583-91eb0c32c3db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 'phone-stand-07',
    name: 'Ergonomic Phone Stand',
    description: 'A sleek and ergonomic phone stand with cable management. Perfect for video calls, watching content, or charging your device.',
    price: 24.99,
    discount: 0,
    category: 'tech',
    images: [
      'https://images.unsplash.com/photo-1747228983994-60a79f4b4e2f?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1747228984027-7d922d33899f?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'cable-organizer-08',
    name: 'Desk Cable Organizer Set',
    description: 'Keep your workspace tidy with this set of cable organizers. Includes clips, guides, and covers for managing all your desk cables.',
    price: 19.99,
    discount: 0,
    category: 'tech',
    images: [
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1518728719028-71e4966950e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 'fractal-lamp-09',
    name: 'Fractal Design Floor Lamp',
    description: 'A stunning floor lamp with intricate fractal patterns. This statement piece creates beautiful shadows and is sure to be a conversation starter.',
    price: 199.99,
    discount: 10,
    category: 'lamps',
    images: [
      'https://images.unsplash.com/photo-1702863361902-93c51bfbd923?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1710828530560-2920125ad032?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'spiral-vase-10',
    name: 'Spiral Twist Vase',
    description: 'A mesmerizing spiral vase with a continuous twist design. This 3D printed vase combines form and function in a beautiful way.',
    price: 39.99,
    discount: 0,
    category: 'vases',
    images: [
      'https://images.unsplash.com/photo-1730266567064-9024d4abc95f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      'https://images.unsplash.com/photo-1703221561813-cdaa308cf9e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 'floating-shelf-11',
    name: 'Minimalist Floating Shelf Set',
    description: 'A set of minimalist floating shelves with hidden brackets. These 3D printed shelves are perfect for displaying small plants, photos, or collectibles.',
    price: 49.99,
    discount: 0,
    category: 'decor',
    images: [
      'https://images.unsplash.com/photo-1730267252387-4c488d9aa47d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1730267252278-37738efd2561?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'desk-organizer-12',
    name: 'Modular Desk Organizer',
    description: 'A customizable desk organizer system with multiple modules for pens, cards, paper clips, and more. Create your perfect organization solution.',
    price: 29.99,
    discount: 0,
    category: 'tech',
    images: [
      'https://images.unsplash.com/photo-1739018778132-e27e7ba760ba?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1739018778104-d41ea0ec9519?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    isNew: false,
    inStock: true
  }
];

export const featuredProducts: Product[] = allProducts.filter((product, index) => index < 8);