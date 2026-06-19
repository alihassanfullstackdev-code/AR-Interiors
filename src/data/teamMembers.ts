export interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string;
  bio: string;
  linkedin: string;
}

export const teamMembersData: TeamMember[] = [
  {
    id: 1,
    name: "Architect Omar Rizwan",
    role: "Founder & Lead Designer",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "With over 14 years of professional architectural interior experience across Pakistan and Dubai, Omar crafts bespoke luxury spaces where architecture meets fine artistry.",
    linkedin: "https://linkedin.com/in/omarrizwan"
  },
  {
    id: 2,
    name: "Ayesha Siddiqui",
    role: "Senior Interior Architect",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Ayesha specializes in premium high-end residential interiors, integrating custom textures and biological foliage elements into deeply relaxing home sanctuaries.",
    linkedin: "https://linkedin.com/in/ayeshasiddiqui"
  },
  {
    id: 3,
    name: "Adeel Chaudhry",
    role: "Technical Project Manager",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Adeel oversees our on-site micro-execution, managing premium carpenters, stonemasons, and engineers to guarantee project deliveries strictly on-schedule.",
    linkedin: "https://linkedin.com/in/adeelchaudhry"
  },
  {
    id: 4,
    name: "Hamza Malik",
    role: "3D Visualization Lead",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Hamza converts floor blueprints into state-of-the-art photorealistic 3D renders, allowing our clients to virtually walk through spaces before physical construction.",
    linkedin: "https://linkedin.com/in/hamzamalik"
  }
];
