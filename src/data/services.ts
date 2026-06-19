export interface Service {
  id: number;
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  included: string[];
  image: string;
  featured: boolean;
}

export const servicesData: Service[] = [
  {
    id: 1,
    slug: "residential-interior-design",
    icon: "Home",
    title: "Residential Interior Design",
    shortDescription: "Personalized luxury living spaces designed around your unique lifestyle.",
    fullDescription: "Your home is the most personal space you will ever inhabit. AR Interior's residential design service begins with a deep understanding of how you live — your routines, your family structure, and your aesthetic sensibilities. We translate this organic brief into spaces that are not only visually stunning but functionally intuitive, highly durable, and emotionally resonant.",
    included: [
      "Full scale spatial consultation and lifestyle mapping",
      "Custom handcrafted furniture design and procurement",
      "Material and pristine finish selection (local and international sourcing)",
      "Bespoke lighting layouts and advanced electrical coordination",
      "Curated art selections and decorative accessory styling",
      "Final expert staging and turn-key project handover"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    slug: "commercial-interior-design",
    icon: "Briefcase",
    title: "Commercial Interior Design",
    shortDescription: "Brand-aligned commercial environments that inspire productivity and leave lasting impressions.",
    fullDescription: "First impressions define businesses. AR Interior creates commercial environments that embody your brand values, impress high-end visitors, and energize the people who work within them. From luxury retail boutiques to premium hospitality environments, we design under the highest standards of traffic durability, regulatory safety, and aesthetic beauty.",
    included: [
      "Brand-aligned interior concept and experiential rendering",
      "High-traffic material durability planning and slip prevention",
      "Expert wayfinding, customer psychology, and spatial flow mapping",
      "Custom integrated commercial millwork and sleek signage placement",
      "Accurate contractor bidding and thorough vendor coordination",
      "Compliance audits for commercial building fire and structural standards"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 3,
    slug: "living-room-design",
    icon: "Compass",
    title: "Living Room Design",
    shortDescription: "The focal gathering center of your home, balancing statement beauty with everyday comfort.",
    fullDescription: "The living room is where life happens — conversations, family celebrations, and quiet evenings. AR Interior designs living rooms that balance striking statement aesthetics with everyday warmth, anchoring your home with a central environment that feels both grand for hosting and genuinely livable for the family.",
    included: [
      "Intelligent spatial planning and conversational furniture mapping",
      "Bespoke focal walls featuring custom fireplaces or media centers",
      "Curated luxury textiles, rugs, and curtain drapes",
      "Custom coffee tables, console tables, and plush couch designs",
      "Three-layer warm ambient lighting design",
      "Color theory consultation for elevated comfort and mood"
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 4,
    slug: "bedroom-design",
    icon: "Moon",
    title: "Bedroom Design",
    shortDescription: "Custom restorative chambers calibrated to your sleep habits and inner peace.",
    fullDescription: "A bedroom should be your most restorative private space. We design master bedroom suites as secure personal sanctuaries — perfectly calibrated to your sleep habits, morning routines, and general sense of calm. Every isolated element from custom bed orientation to blackout drape linings is designed with profound intention.",
    included: [
      "Master suite, guest bedroom, and children's room customization",
      "Custom wood headboards, walk-in closets, and built-in dressing tables",
      "Thermal and 100% blackout double-layer fabric drapery systems",
      "Bedside automation integration and concealed charging fixtures",
      "Soundproofing wall backed timber slats and fabric wraps",
      "Mattress comfort mapping and soft textile curation"
    ],
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 5,
    slug: "kitchen-design",
    icon: "Utensils",
    title: "Kitchen Design",
    shortDescription: "High-performance culinary workspaces combining workflow efficiency with stunning aesthetics.",
    fullDescription: "Kitchens are the heart of the home and among the most technically complex spaces to design. AR Interior balances optimal cooking workflow efficiency with visual excellence — creating custom kitchens that are an absolute pleasure to cook in and an amazing showpiece to exhibit to your guests.",
    included: [
      "Gold standard work-triangle kitchen layout optimization",
      "Anti-scratch and heat-proof Quartzite or Dekton countertops",
      "Concealed soft-close drawers and heavy built-in pantry pulls",
      "Seamless integration of professional grade appliances",
      "Under-cabinet LED task panels and smart multi-zone lighting",
      "Premium moisture-resistant carcass construction and sealing"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 6,
    slug: "office-design",
    icon: "Layout",
    title: "Office & Workspace Design",
    shortDescription: "Calibrating posture, focus, and corporate culture into premium productivity centers.",
    fullDescription: "The right workplace environment measurably improves focus, cognitive comfort, and brand perception. AR Interior designs corporate suites and home office zones that reflect elite professionalism — mixing custom ergonomics with highly integrated electronics management to elevate output.",
    included: [
      "Ergonomic workstation drafting and seating consult",
      "Power management and invisible wiring tracks",
      "Acoustic felt panels and sound dampening drywall casings",
      "Custom wall libraries, archives, and trophy casework",
      "High-CRI eye-care office task lighting setups",
      "Corporate lounge modules for executive meetings"
    ],
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 7,
    slug: "space-planning",
    icon: "Grid",
    title: "Space Planning & Layout Optimization",
    shortDescription: "Reimagining footprints for maximum function and perfect spatial balance.",
    fullDescription: "Great design begins with intelligent planning. Our space planning service analyzes your existing footprint and reimagines it for maximum human functionality, natural walk traffic flow, and absolute spatial balance — before a single financial purchase is committed on furniture or materials.",
    included: [
      "Laser precision on-site site dimension measurement and logging",
      "Highly detailed 2D AutoCAD layout variations",
      "Human-traffic walkthrough and collision-preventative zone mapping",
      "Strategic structural wall removal analyses and support consults",
      "Zoning strategies for multi-generational or co-working layouts",
      "Furniture scale assessments relative to actual room volumes"
    ],
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 8,
    slug: "furniture-consultation",
    icon: "Armchair",
    title: "Furniture Consultation & Procurement",
    shortDescription: "Sourcing luxury international and elite local furniture items to fit your theme.",
    fullDescription: "Furniture defines a space. AR Interior provides expert guidance on high-end furniture selection — navigating local premium master artisans as well as international suppliers across Dubai, Turkey, and Italy to curate pieces that fit your vision perfectly.",
    included: [
      "Bespoke sketch development for custom wood and fabric items",
      "Direct supplier sourcing network access (local + European designer lines)",
      "Strict millwork dimensional sizing inspect and joinery verification",
      "Import logistics management, customs filing, and freight checks",
      "Expert on-site installation, balancing, and textile steaming",
      "Lifetime maintenance consult for woods, metals, and leathers"
    ],
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 9,
    slug: "renovation-planning-management",
    icon: "Wrench",
    title: "Renovation Planning & Management",
    shortDescription: "Complete site management, taking your space from demolition to stunning reveal.",
    fullDescription: "Renovation projects carry high structural and vendor complexity. AR Interior provides full renovation management — from initial structural health assessment through masonry, electrical mapping, and carpentry to the final hand-polished coat of paint. We coordinate all craftsmen so you enjoy a stress-free transformation.",
    included: [
      "Rigorous pre-purchase existing site condition assessment",
      "Detailed structural modification drafting and permit consults",
      "Strict project schedule drafting (Gantt timeline management)",
      "On-site micro-supervision of masons, carpenters, and painters",
      "Material quality check and supply chain audit",
      "Snagging report production and complete rectification"
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 10,
    slug: "3d-visualization",
    icon: "Tv",
    title: "3D Visualization & Rendering",
    shortDescription: "Photorealistic 3D renders that allow you to walk through your design before building.",
    fullDescription: "See your space before it exists. AR Interior's state-of-the-art 3D visualization division generates high-fidelity photorealistic renders. You can walk through your rooms digitally, see how materials reflect under morning and evening lighting, and make edits prior to any physical construction.",
    included: [
      "Complete 3D digital scene construction based on floorplans",
      "Accurate material texture modeling (wood grain, marble veining)",
      "Photorealistic environment renders under diverse daylight (sun/shade/lamps)",
      "Multi-angle high-resolution rendering packs",
      "Dynamic digital fly-through video animations (on request)",
      "Virtual Reality (VR) spherical panorama scenes"
    ],
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];
