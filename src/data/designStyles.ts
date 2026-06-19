export interface DesignStyle {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const designStylesData: DesignStyle[] = [
  {
    id: 1,
    name: "Modern",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    description: "Crisp architectural lines, warm neutral backdrops, and an emphasis on architectural geometry."
  },
  {
    id: 2,
    name: "Contemporary",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    description: "Curved edges, high-contrast balances, and bespoke artistic furniture accents."
  },
  {
    id: 3,
    name: "Minimalist",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    description: "Quiet luxury surfaces, concealed spaces, and stripping away visual noise entirely."
  },
  {
    id: 4,
    name: "Luxury",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    description: "Premium book-matched gold marble slabs, bespoke velvet fabrics, and gold trimmings."
  },
  {
    id: 5,
    name: "Scandinavian",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80",
    description: "Lightweight ash woods, cozy linen layering, and abundant natural botanical elements."
  },
  {
    id: 6,
    name: "Industrial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    description: "Distressed metallic grids, heavy walnut desks, exposed ceilings, and raw wire panels."
  },
  {
    id: 7,
    name: "Traditional",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    description: "Grand elegant moldings, geometric wooden lattices, and historic floral motifs."
  },
  {
    id: 8,
    name: "Bohemian",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    description: "Woven rattan lanterns, hand-textured warm clay walls, and cozy terracotta tiling."
  }
];
