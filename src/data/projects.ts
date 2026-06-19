export interface Project {
  id: number;
  slug: string;
  name: string;
  category: string;
  location: string;
  country: string;
  style: string;
  area: string;
  duration: string;
  year: number;
  status: string;
  client: string;
  featured: boolean;
  heroImage: string;
  thumbnailImage: string;
  galleryImages: string[];
  beforeImage: string;
  afterImage: string;
  shortDescription: string;
  overview: string[];
  challenge: {
    description: string;
    requirements: string[];
  };
  solution: {
    description: string;
    keyDecisions: { icon: string; title: string; description: string }[];
  };
  materials: { name: string; category: string; origin: string }[];
  tags: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "the-serene-villa-karachi",
    name: "The Serene Villa",
    category: "Luxury Villa",
    location: "DHA Phase 6, Karachi",
    country: "Pakistan",
    style: "Contemporary Luxury",
    area: "6,200 sq ft",
    duration: "14 weeks",
    year: 2023,
    status: "Completed",
    client: "Anonymized Private Client",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "A 6,200 sq ft contemporary villa transformed into a sanctuary of calm luxury and fluid spatial connections.",
    overview: [
      "The Serene Villa project redefines high-end living in DHA Karachi. Our studio was commissioned to orchestrate the complete architectural interior architecture and bespoke styling of this newly constructed custom villa. The client, a prominent business leader, requested an environment that is grand for hosting guests, yet intimately comforting for family life.",
      "By stripping down non-structural partitions, we optimized natural circulation paths and daylight, welcoming cross ventilation and views over the landscaped gardens. The design aesthetic revolves around soft, organic textures, sophisticated natural marble slabs, and custom wood details designed by AR Interior.",
      "The result is a harmonious synthesis of functional spaces that flow seamlessly into one another, creating an ongoing experience of relaxed luxury that is both warm and visually captivating."
    ],
    challenge: {
      description: "The primary challenge lay in balancing the monumental scale of the double-height ceilings with the warmth required for a cozy family residence. Additionally, the marine-humid climate of Karachi necessitated a selection of materials that are premium yet resistant to environmental weathering.",
      requirements: [
        "Open-plan entertaining lounge capable of hosting up to 80 guests.",
        "A private master wing with a custom walk-in closet and spa-like bathroom.",
        "Integration of an industrial-grade prep-kitchen alongside an open show-kitchen.",
        "Severe humidity resistance for all custom millwork and panelling.",
        "Full smart home lighting automation integrated invisibly into classic drop-ceilings."
      ]
    },
    solution: {
      description: "AR Interior approached this challenge by dividing the floorplan into clear programmatic zones unified by a single neutral-colored plaster wall finish. Double-glazed architectural glass was deployed to harness Karachi's sea-breeze while keeping ambient heat out. Premium European materials were treated and sealed locally with advanced moisture-protective frames.",
      keyDecisions: [
        { icon: "palette", title: "Monochrome Base Palette", description: "Utilized customized light beige limestone plaster paired with dark graphite oak accents to ground the heights." },
        { icon: "layout", title: "Zone-Based Spatial Planning", description: "Created pivot doors and sliding brass-accented wood screens to easily partition formal lounges from private areas." },
        { icon: "sun", title: "Layered Lighting Design", description: "Integrated hidden trimless warm LED coves (2700K) running along structural beams to emphasize form and volume at night." }
      ]
    },
    materials: [
      { name: "Calacatta Gold Quartzite", category: "Flooring & Surfaces", origin: "Italy" },
      { name: "Smoked Oak Veneer Slabs", category: "Wall Panelling", origin: "Germany" },
      { name: "Brushed Champagne Brass Trim", category: "Hardware & Accents", origin: "Turkey" },
      { name: "Bespoke Linen-Tex Upholstery", category: "Soft Furnishings", origin: "Belgium" }
    ],
    tags: ["Luxury", "Villa", "Contemporary", "Karachi", "Award-Winning"]
  },
  {
    id: 2,
    slug: "modernist-penthouse-clifton",
    name: "Modernist Penthouse",
    category: "Apartment",
    location: "Clifton, Karachi",
    country: "Pakistan",
    style: "Modern Minimalism",
    area: "3,800 sq ft",
    duration: "10 weeks",
    year: 2023,
    status: "Completed",
    client: "Corporate Executive",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1617806118233-18e1db207faf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "A minimalist apartment looking over the Clifton shoreline, celebrating clean geometry and premium stonework.",
    overview: [
      "Hovering above Clifton with premium views of the ocean, the Modernist Penthouse is a masterclass in quiet minimalism. The original flat was dark, over-segmented, and lacked a unified design direction.",
      "We gutted the interior space completely to establish a fluid, column-free dining and double living lounge. White matte lacquer cabinets form seamless storage walls that conceal doors to private utility rooms, preserving visual serenity.",
      "A limited color spectrum of limestone beige, matte charcoal, and raw travertine results in an aesthetic that is incredibly calming and sophisticated, serving as a gallery-like backdrop for the owner's art collection."
    ],
    challenge: {
      description: "The challenges included standard low ceiling clearances of 9.2 feet throughout the shell and the integration of a massive central columns matrix that disrupted visual flow.",
      requirements: [
        "Unify apartment structural concrete columns cleanly into the layout.",
        "Increase perceived height utilizing specialized design elements.",
        "Bespoke storage systems that hide all everyday clutter completely.",
        "Full soundproofing from traffic noise along the Clifton strip."
      ]
    },
    solution: {
      description: "We clad the structural columns in raw silver travertine, turning an obstacle into majestic natural design features. Floor-to-ceiling doors with hidden frames and micro-recessed baseboards elevate the perceived roof heights.",
      keyDecisions: [
        { icon: "layers", title: "Travertine Framing", description: "Clad awkward structural columns in hand-picked Turkish Silver Travertine slab layers." },
        { icon: "eye-off", title: "Concealed Portals", description: "Built flush-mount pivot doors that align perfectly with custom timber cladding sheets." }
      ]
    },
    materials: [
      { name: "Silver Travertine Slabs", category: "Column Cladding", origin: "Turkey" },
      { name: "Ultra-Matte Lacquer Paint", category: "Millwork", origin: "Italy" },
      { name: "Seamless Polished Microcement", category: "Flooring", origin: "Spain" }
    ],
    tags: ["Minimalist", "Penthouse", "Apartment", "Clifton", "Travertine"]
  },
  {
    id: 3,
    slug: "summit-executive-lounge",
    name: "Summit Executive Lounge",
    category: "Office",
    location: "I.I. Chundrigar, Karachi",
    country: "Pakistan",
    style: "Contemporary Industrial",
    area: "4,500 sq ft",
    duration: "11 weeks",
    year: 2022,
    status: "Completed",
    client: "Summit FinTech",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "A sophisticated office space designed with a warm, industrial edge to motivate leading financial experts.",
    overview: [
      "AR Interior redefined corporate work spaces for Summit FinTech on I.I. Chundrigar Road, industrial core of Karachi. The brief requested a workspace that breaks away from dry corporate cubicles, replacing them with a lounge feel.",
      "We crafted an interior using a rich palette of steel, natural solid walnut desks, and premium distressed brickwork, balanced by plush architectural acoustic wall panels.",
      "The layout incorporates fluid work benches, telephone pods, and cozy breakout areas, culminating in an amazing main boardroom framed in custom black iron and glass."
    ],
    challenge: {
      description: "Ensuring top-tier sound isolation in an active financial setting with high ceilings, while maintaining glass-partitioned transparency.",
      requirements: [
        "Create privacy for focus spaces without making rooms dark.",
        "Acoustic ratings (STC 45+) for boardrooms and calling booths.",
        "Showcase corporate financial history through elegant design art."
      ]
    },
    solution: {
      description: "We deployed double-glazed glass panels with thin, acoustic rubber gaskets and ceiling-integrated sound absorption fibers wrapped in custom wool textiles.",
      keyDecisions: [
        { icon: "volume-x", title: "Acoustic Insulation", description: "Bespoke fabric-wrapped micro-perforated acoustic timber backing panels." },
        { icon: "shield", title: "Industrial Frame", description: "Powder-coated anodized black charcoal framing grids." }
      ]
    },
    materials: [
      { name: "Solid American Walnut Wood", category: "Consultant Desks", origin: "USA" },
      { name: "Acoustic Felt Cladding", category: "Ceiling & Walls", origin: "Sweden" },
      { name: "Anodized Architectural Steel", category: "Office Partitions", origin: "Local" }
    ],
    tags: ["Office", "Corporate", "Industrial", "Karachi", "Fintech"]
  },
  {
    id: 4,
    slug: "the-banyan-bistro",
    name: "The Banyan Bistro",
    category: "Restaurant",
    location: "E Street, Clifton, Karachi",
    country: "Pakistan",
    style: "Bohemian Chic",
    area: "3,200 sq ft",
    duration: "9 weeks",
    year: 2023,
    status: "Completed",
    client: "E-Street Hospitality Group",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "An immersive dining experience on E-Street, incorporating natural wood reeds, terracotta tiles, and custom woven wicker lanterns.",
    overview: [
      "The Banyan Bistro is an elite culinary sanctuary. The hospitality clients wanted a luxurious yet organic Bohemian theme that feels like an escaping tropical retreat.",
      "Our team built custom cane-woven lanterns, natural rattan room separators, and finished the walls in a dynamic, hand-textured warm clay plaster.",
      "Greenery is incorporated organically into custom-welded brass planters, highlighting cozy dining nooks designed for intimate conversations."
    ],
    challenge: {
      description: "Managing heavy culinary-oil aerosols and water moisture on natural fibers (wicker, linen, plaster) in a high-intensity operating kitchen.",
      requirements: [
        "Aesthetic must be highly clean while featuring raw bohemian materials.",
        "Woven fibers must be easily washable and fire-retardant treated.",
        "Seating optimized for high-turnover service while feeling highly exclusive."
      ]
    },
    solution: {
      description: "We sealed all custom timber surfaces in clear antimicrobial matte finishes and deep-treated cane fabrics with invisible fireproof coatings.",
      keyDecisions: [
        { icon: "leaf", title: "Bio-Mimetic Plaster", description: "Textured natural clay lime wash finish that naturally breathes with ventilation." },
        { icon: "coffee", title: "Intimate Nooking", description: "Bespoke high-backed built-in banquettes upholstered in water-repellent performance weave." }
      ]
    },
    materials: [
      { name: "Hand-Crafted Rattan Panels", category: "Banquettes & Dividers", origin: "Indonesia" },
      { name: "Terracotta Clay Tiles", category: "Floor tiling", origin: "Multan, Pakistan" },
      { name: "Linen-weave Waterproof Canvas", category: "Cushioning", origin: "Italy" }
    ],
    tags: ["Restaurant", "Bohemian", "Clifton", "Bespoke", "Hospitality"]
  },
  {
    id: 5,
    slug: "minimalist-master-bedroom",
    name: "Minimalist Sanctuary",
    category: "Bedroom",
    location: "DHA Phase 8, Karachi",
    country: "Pakistan",
    style: "Japandi Style",
    area: "1,100 sq ft",
    duration: "5 weeks",
    year: 2024,
    status: "Completed",
    client: "Design-conscious Couple",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "A restorative master bedroom suite combining raw Scandinavian oak panelling with Japanese sliding washi-inspired glass panels.",
    overview: [
      "This private bedroom sanctuary in DHA Karachi is a serene escape. Blending minimalist Zen tranquility with Scandinavian functional warmth (Japandi), the project was meticulously custom tailored.",
      "The bed is low-slung, designed in solid oak and hovering above a custom woven wool tatami-like rug. Acoustic slatted timber runs behind the bed to sound-isolate the room perfectly.",
      "The custom wardrobe incorporates back-lit paper-finish glass sliding panels to produce a soft, warm candle-like glowing illumination when opened."
    ],
    challenge: {
      description: "Dealing with intense heat and western sun glare from raw exterior windows that made sleep uncomfortable during daytime.",
      requirements: [
        "Incorporate highly efficient double-layer insulating thermal window treatments.",
        "Zero visible electronic sockets next to nightstands, prioritizing clean lines.",
        "A quiet, hidden air conditioning vent solution integrated invisibly."
      ]
    },
    solution: {
      description: "Constructed vertical custom-valanced raw linen curtains embedded with 99% light-blocking thermal linings, and hid air ducts under slatted wood paneling.",
      keyDecisions: [
        { icon: "moon", title: "Bedside Automation", description: "Bespoke flush metal panels with USB ports pop up mechanically inside the woodwork." },
        { icon: "wind", title: "Hidden Climate Vent", description: "Integrated ceiling air vents along joinery lines for draft-free air distribution." }
      ]
    },
    materials: [
      { name: "Solid Light White Oak Wood", category: "Bedframe & Panels", origin: "Norway" },
      { name: "Washi-Style Tempered Glass", category: "Closet Doors", origin: "Japan" },
      { name: "Organic Coarse Linen Curtains", category: "Drapery", origin: "France" }
    ],
    tags: ["Bedroom", "Japandi", "Minimalism", "Karachi", "Bespoke"]
  },
  {
    id: 6,
    slug: "elegant-atrium-lounge",
    name: "The Atrium Lounge",
    category: "Living Room",
    location: "Sector F-7, Islamabad",
    country: "Pakistan",
    style: "Contemporary Luxury",
    area: "2,200 sq ft",
    duration: "7 weeks",
    year: 2023,
    status: "Completed",
    client: "Diplomatic Envoy Family",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1db207faf?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "A majestic double-height living room featuring custom fluted timber columns, full-bleed marble fireplace, and luxury velvet velvet styling.",
    overview: [
      "Set in the scenic foothills of Islamabad, The Atrium Lounge is the central social hub of a grandiose modernized estate. The client requested a room that pays homage to the green natural landscape outside.",
      "We framed the scenic mountain view with tall steel minimalist window frameworks. The central fireplace was shaped out of a single book-matched Italian Nero Marquina marble slab.",
      "Plush deep green boucle couches, warm customized leather armchair details, and subtle brass accents give this space an elite yet welcoming design profile."
    ],
    challenge: {
      description: "Severe echo and sound bounce issues owing to the double-story high concrete vertical surfaces.",
      requirements: [
        "Control echoing without cluttering the beautiful double-height walls.",
        "Integrate majestic focal fireplace element reflecting absolute elite craft.",
        "Provide rich seating modules for both intimate discussions and formal hosting."
      ]
    },
    solution: {
      description: "Installed wood-slatted backing behind the central lounge walls to trap sound, and laid thick, hand-woven wool rugs on the polished marble floor.",
      keyDecisions: [
        { icon: "smile", title: "Bespoke Acoustic Wall", description: "Clad the rear double-height wall with custom micro-perforated sound absorbing oak panels." },
        { icon: "anchor", title: "Monumental Fireplace", description: "Suspended a floating Nero Marquina marble hearth that commands the central wall." }
      ]
    },
    materials: [
      { name: "Nero Marquina Marble", category: "Fireplace Hearth", origin: "Spain" },
      { name: "Smoked Oak Slatting", category: "Wall Acoustics", origin: "Germany" },
      { name: "High-Pile Tibetan Silk Carpet", category: "Flooring Detail", origin: "Nepal" }
    ],
    tags: ["Living Room", "Islamabad", "Luxury", "Marble", "Atrium"]
  },
  {
    id: 7,
    slug: "culinary-arts-kitchen",
    name: "Epicurean Chef's Kitchen",
    category: "Kitchen",
    location: "Gulberg, Lahore",
    country: "Pakistan",
    style: "Modern Transition",
    area: "850 sq ft",
    duration: "6 weeks",
    year: 2023,
    status: "Completed",
    client: "Passionate Home-Chef",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "A gourmet high-end kitchen with a massive central quartz island, touch-to-open seamless oak flat cabinets, and smart built-in ovens.",
    overview: [
      "This high-performance kitchen in Lahore's Gulberg neighborhood is a seamless synthesis of high-end gastronomy and luxury interior detailing.",
      "The client wanted a professional workspace that operates effortlessly, but doubles as a clean, luxurious social breakfast spot. The centerpiece is a 14-foot slab of Calacatta Quartz serving as island, dining counter, and storage center.",
      "Cabinets are designed in waterproof marine-grade marine ply covered in matte black anti-fingerprint Fenix material."
    ],
    challenge: {
      description: "Integrating professional, high-heat cooking zones and industrial-grade high-draw chimney vents into standard household duct outlines.",
      requirements: [
        "Flawless Integration of a commercial stove burners core.",
        "Seating for 6 people around the central prep island seamlessly.",
        "Completely scratch-proof, oil-proof kitchen countertop surfaces."
      ]
    },
    solution: {
      description: "Carved hidden ceiling pathways to channel heavy blower kitchen hood drafts directly through the building's exterior frame.",
      keyDecisions: [
        { icon: "database", title: "Fenix NTM Tech", description: "Cabinet panels clad in nanotech Fenix coatings that heal minor scratches under heat." },
        { icon: "zap", title: "Quartz Shield", description: "Fitted resilient artificial Quartzite that prevents wine, oil, and spice staining." }
      ]
    },
    materials: [
      { name: "Super-White Calacatta Quartz", category: "Countertops & Backsplash", origin: "Turkey" },
      { name: "Fenix NTM Nero Matte Slabs", category: "Cabinetry Panels", origin: "Italy" },
      { name: "Seamless Porcelain Tile Panels", category: "Kitchen Flooring", origin: "Spain" }
    ],
    tags: ["Kitchen", "Lahore", "Modern", "Quartz", "Fenix"]
  },
  {
    id: 8,
    slug: "urban-oasis-apartment",
    name: "Urban Oasis Apartment",
    category: "Apartment",
    location: "Bahria Town, Karachi",
    country: "Pakistan",
    style: "Scandinavian Comfort",
    area: "1,800 sq ft",
    duration: "6 weeks",
    year: 2024,
    status: "Completed",
    client: "Young Tech Professional",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "A warm, natural apartment designed with organic ash woods, plant walls, and cozy beige linen custom furniture.",
    overview: [
      "This apartment in Bahria Town, Karachi, is a botanical haven in a busy metropolis. Designed with a clean, light-colored Scandinavian approach, we prioritized maximum space occupancy.",
      "The layout incorporates multi-functional storage benches and custom wall panels, complete with dedicated biological shelf structures fitted with automatic hydroponic plant growth micro-lights.",
      "The result is a refreshing breathing room that regulates indoor air beautifully while looking outstandingly photogenic."
    ],
    challenge: {
      description: "Standard narrow corridors and low window ratios resulting in dull corridors in the middle of the flat.",
      requirements: [
        "Unveil visual brightness across internal transit rooms.",
        "Establish natural soil plant life with zero maintenance spills or smell.",
        "Convert extra box-room into functional, peaceful work office."
      ]
    },
    solution: {
      description: "Placed mirror panels in dark corridors to bounce light around corners and mounted sealed water-tight planter tubs under light channels.",
      keyDecisions: [
        { icon: "sun", title: "Full-Spectrum Light", description: "Concealed 5500K natural sunlight tubes that activate in the evening." },
        { icon: "minimize", title: "Smart Storage Bespoke", description: "Constructed window benches with internal deep slide-out storage drawers." }
      ]
    },
    materials: [
      { name: "Bleached Natural Ash Wood", category: "Joinery & Flooring", origin: "Sweden" },
      { name: "Performance Oatmeal Linen", category: "Sofa Custom Upholstery", origin: "Belgium" },
      { name: "Sealed Bio-Soil Hydro Troughs", category: "Planters Framing", origin: "Local" }
    ],
    tags: ["Apartment", "Scandinavian", "Ashwood", "Karachi", "Comfort"]
  },
  {
    id: 9,
    slug: "the-monochrome-executive-suite",
    name: "Apex Law Boardroom",
    category: "Office",
    location: "DHA Phase 5, Karachi",
    country: "Pakistan",
    style: "Bespoke Minimalist",
    area: "2,400 sq ft",
    duration: "8 weeks",
    year: 2023,
    status: "Completed",
    client: "Apex Legal Partners",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "A stark yet highly elegant premium law firm office with monolithic concrete tables and charcoal-grey partitions.",
    overview: [
      "An intellectual courtroom feel refined with modern high-end office standards. This suite for regional legal leaders exudes immense authority, quiet confidence, and sophisticated discretion.",
      "We framed the boardroom with a giant 16-foot poured monolithic microcement table floating over hidden brass legs. Sound absorption is embedded to guarantee conversation absolute confidentiality."
    ],
    challenge: {
      description: "Managing heavy sound leaking over glass walls into external reception waiting lounges during high-stakes corporate discussions.",
      requirements: [
        "Acoustic isolation layer with high STC rating above 52.",
        "Incorporate a secure server closet with automatic exhaust and cooling.",
        "Incorporate deep secure archives storage seamlessly into design panels."
      ]
    },
    solution: {
      description: "Utilized dual-glazed acoustic-layered safety glass pane modules and constructed thick double-drywall walls stuffed with heavy mineral insulation slabs.",
      keyDecisions: [
        { icon: "lock", title: "Discreet Chambers", description: "Designed full-height doors that lock mechanically using hidden biomagnetic locking plates." },
        { icon: "database", title: "Hidden Archives", description: "Crafted rolling oak wood panels that reveal high-density legal volume archives." }
      ]
    },
    materials: [
      { name: "Poured Silk-Grey Microcement", category: "Boardroom Table", origin: "Spain" },
      { name: "Smoked Matte Black Glass", category: "Office Enclosures", origin: "Turkey" },
      { name: "Distressed Full-Grain Leather", category: "Executive Seating", origin: "Italy" }
    ],
    tags: ["Office", "Karachi", "Minimalist", "Acoustics", "Corporate"]
  },
  {
    id: 10,
    slug: "the-bosphorus-restaurant",
    name: "The Bosphorus Dining Room",
    category: "Restaurant",
    location: "Sindhi Muslim, Karachi",
    country: "Pakistan",
    style: "Traditional Fusion",
    area: "3,500 sq ft",
    duration: "10 weeks",
    year: 2023,
    status: "Completed",
    client: "Bosphorus Cuisine Ltd",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "A Turkish specialty restaurant featuring authentic patterned arches, geometric brass lattices, and bespoke clay lamps.",
    overview: [
      "Bringing the historical charm of Istanbul into Karachi's Sindhi Muslim culinary district. The Bosphorus Dining Room project pairs authentic Turkish architecture with contemporary luxury comfort.",
      "We crafted soft, round brick arches lined with back-lit gold bands, throwing beautiful shadows over the custom blue and white traditional Turkish ceramic tile base tiles."
    ],
    challenge: {
      description: "Replicating complex historic Islamic dome brick geometries with absolute fidelity utilizing local modern framing carpenters.",
      requirements: [
        "Craft structurally sound double-curved interior plaster arches.",
        "Integrate historical patterned copper hoods above open kebab grills.",
        "High acoustic comfort despite hard, reflective concrete tile surfaces."
      ]
    },
    solution: {
      description: "We modeled the entire ceiling geometry in full 3D CAD before cutting templates on-site using modular structural steel support hangers.",
      keyDecisions: [
        { icon: "shuffle", title: "CAD Arch Templates", description: "Precision pre-fabricated light steel frames lined with flexible high-density plasterboards." },
        { icon: "image", title: "Handmade Glazes", description: "Directly imported custom hand-painted traditional tiles from Kutahya, Turkey." }
      ]
    },
    materials: [
      { name: "Glazed Kutahya Ceramics", category: "Wall Panel Borders", origin: "Turkey" },
      { name: "Aged Hammered Copper Slabs", category: "Kitchen Grill Hoods", origin: "Local" },
      { name: "Washed Limestone Cement Plaster", category: "Arches Coating", origin: "Multan, Pakistan" }
    ],
    tags: ["Restaurant", "Traditional", "Karachi", "Turkish", "Hospitality"]
  },
  {
    id: 11,
    slug: "grand-foyer-residence",
    name: "Grand Entrance Residence",
    category: "Luxury Villa",
    location: "Cantt, Lahore",
    country: "Pakistan",
    style: "Neoclassical",
    area: "8,000 sq ft",
    duration: "18 weeks",
    year: 2022,
    status: "Completed",
    client: "Heritage Lahore Family",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "A magnificent neoclassical villa foyer in Lahore Cantt, celebrating grand double spiral stairs, marble columns, and crystal chandeliers.",
    overview: [
      "The Cantt Palace entrance showcases classic majesty. Reflecting neoclassical architecture, we built a sprawling double spiral stair framed in custom hand-forged black iron scrolls wrapped in luxury solid teak rails."
    ],
    challenge: {
      description: "Hanging a 380kg triple-tier custom-crafted crystal chandelier securely from a hollow pre-cast concrete roof slab.",
      requirements: [
        "Incorporate a direct structural iron chassis anchor through the roof floor slab.",
        "Absolute stability of double-height historical wall plaster trims.",
        "Incorporate premium floor patterns featuring multiple types of colored marble."
      ]
    },
    solution: {
      description: "Drilled and cast a dedicated heavy steel load distribution plate on the roof, securing it with commercial structural chemical bolts.",
      keyDecisions: [
        { icon: "anchor", title: "Heavy Structural Rig", description: "Crafted a ceiling structural distribution chassis to secure the heavy imported crystal lighting safe." },
        { icon: "layers", title: "Intricate Stone Marquetry", description: "Precision CNC cut floor central medallion pattern using Italian Crema Marfil and Portuguese Dark Emperador." }
      ]
    },
    materials: [
      { name: "Crema Marfil Marble", category: "Main Foyer Floors", origin: "Spain" },
      { name: "Dark Emperador Stone", category: "Flooring Insets", origin: "Portugal" },
      { name: "Forged Heavy Wrought Iron", category: "Staircase Balustrade", origin: "Local" }
    ],
    tags: ["Luxury Villa", "Neoclassical", "Lahore", "Foyer", "Stairs"]
  },
  {
    id: 12,
    slug: "the-terrace-penthouse",
    name: "The Skyline Terrace",
    category: "Apartment",
    location: "Clifton, Karachi",
    country: "Pakistan",
    style: "Contemporary Luxury",
    area: "4,200 sq ft",
    duration: "12 weeks",
    year: 2024,
    status: "Completed",
    client: "Venture Capitalist",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    thumbnailImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "A glorious penthouse overlooking the Arabian Sea, featuring a glazed lounge, indoor pool bar, and monolithic marble vanity.",
    overview: [
      "Stretched across the top blocks of Clifton shoreline towers, this penthouse offers an immersive luxury experience. The layout features seamless floorboards, polished bronze details, and an expansive teak terrace lounge."
    ],
    challenge: {
      description: "Direct exposure to saltwater-laden marine wind that corrodes standard steel fixtures within months.",
      requirements: [
        "Deploy exclusively marine-grade stainless steel (316) for all terrace accents.",
        "Incorporate a fully weather-sealed double-glazed structural glass facade.",
        "A premium modular outdoor-ready chef's cocktail counter."
      ]
    },
    solution: {
      description: "All outdoor hardware was specified in 316 grade stainless steel and treated with advanced marine anti-corrosion clear coatings from Norway.",
      keyDecisions: [
        { icon: "shield-alert", title: "Anti-Corrosion Shield", description: "Specified sandblasted premium Marine-grade stainless steel with specialized epoxy sealing." },
        { icon: "sun", title: "UV Insulating Glass", description: "Imported double-layered argon-filled clear insulating glass frames." }
      ]
    },
    materials: [
      { name: "316 Marine Stainless Steel", category: "External Accents", origin: "Germany" },
      { name: "Polished Burmese Teak Wood", category: "Terrace Decking", origin: "Myanmar" },
      { name: "Arabescato Marble Slab", category: "Indoor Pool Bar", origin: "Italy" }
    ],
    tags: ["Apartment", "Clifton", "Penthouse", "Luxury", "Sea-View"]
  }
];
