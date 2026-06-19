export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  photo: string;
  rating: number;
  review: string;
  project: string;
  featured: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Homeowner",
    location: "Karachi",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    review: "AR Interior completely transformed our home into a sanctuary of calm. Every detail, from the book-matched marble to the hidden closet hardware, was thoughtfully considered and executed flawlessly. What impressed us most was how clearly they communicated through every single phase of our DHA villa renovation.",
    project: "Residential Villa — DHA Karachi",
    featured: true
  },
  {
    id: 2,
    name: "Zayn Malik",
    role: "Chief Operating Officer",
    location: "Karachi",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    review: "The commercial fit-out for our FinTech headquarters was an outstanding experience. AR Interior balanced strict acoustic rating demands for our corporate boardrooms with a warm, beautiful contemporary industrial atmosphere. Highly efficient timeline management that respected our strict launch date.",
    project: "Corporate Office Lounge — I.I. Chundrigar Road",
    featured: true
  },
  {
    id: 3,
    name: "Mariam Durrani",
    role: "Restaurateur",
    location: "Karachi",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    review: "Implementing our bohemian chic restaurant design was extremely complex because of our open kitchen smoke and humidity constraints. AR Interior delivered an immersive dining environment using fire-treated cane structures and custom Multani tiles. Our customers constantly rave about the ambiance!",
    project: "The Banyan Bistro — E Street, Clifton",
    featured: true
  },
  {
    id: 4,
    name: "Dr. Farhan Qureshi",
    role: "Physician",
    location: "Islamabad",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    review: "We are deeply in love with our double-height Atrium Lounge. The acoustic wooden slats did absolute wonders to control sound echo, and the floating Nero Marquina marble fireplace fireplace is incredibly majestic. Absolute design mastery that speaks of pure elite craft.",
    project: "The Atrium Lounge — Sector F-7, Islamabad",
    featured: true
  },
  {
    id: 5,
    name: "Aisha Khan",
    role: "Fashion Designer",
    location: "Lahore",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    review: "AR Interior designed our master bedroom Japandi suite, and the spatial optimization is brilliant. The custom low bed, slatted oak partitions, and bedsides popup sockets are amazing details. I recommend them to anyone who appreciates absolute, clean minimalism.",
    project: "Minimalist Master Sanctuary — DHA Lahore",
    featured: false
  },
  {
    id: 6,
    name: "Omar Tarrar",
    role: "Property Investor",
    location: "Karachi",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    review: "From concept boards and photorealistic 3D virtual renderings to the sourcing of premium Turkish stones and German oak wood, the team executed our luxury penthouse with flawless quality. It has completely changed how we live.",
    project: "The Skyline Penthouse — Clifton Beach Towers",
    featured: false
  },
  {
    id: 7,
    name: "Nida Butt",
    role: "Tech Startup Founder",
    location: "Karachi",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    review: "As a tech professional, I wanted an intelligent, automated home office environment. AR Interior engineered bespoke workstations with integrated charging grids, anti-glare task lights, and clean cable trays. Minimalist aesthetic execution at its very best.",
    project: "Zen Workstation Suite — Clifton Block 4",
    featured: false
  },
  {
    id: 8,
    name: "Sikander Bakht",
    role: "Corporate Executive",
    location: "Karachi",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    review: "Renovating our kitchen was an experience we dreaded, but AR Interior made it frictionless. Our chef's island, anti-scratch Fenix panels, and high-performance blower extraction channels operate beautifully. Excellent team of highly disciplined designers.",
    project: "Gourmet Kitchen Remodel — KDA Scheme 1",
    featured: false
  }
];
