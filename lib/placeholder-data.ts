import { Product } from "@/types/product";

export const FEATURED_PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Ethereal Starlight Gown",
        description: "A stunning wedding gown with celestial motifs and LED fiber optics woven into the skirt.",
        type: "RENTAL",
        price: 250,
        securityDeposit: 500,
        theme: "Wedding",
        sizes: ["S", "M", "L"],
        images: [
            "https://placehold.co/600x800/46501a/ffffff?text=Ethereal+Starlight+Gown+1",
            "https://placehold.co/600x800/46501a/ffffff?text=Ethereal+Starlight+Gown+2",
            "https://placehold.co/600x800/46501a/ffffff?text=Ethereal+Starlight+Gown+3"
        ],
        status: "AVAILABLE",
        inStock: true,
        featured: true,
        tags: ["LED", "Modern", "Princess"]
    },
    {
        id: "2",
        name: "Cyber-Samurai Armor Set",
        description: "High-detail EVA foam armor for cosplay. Includes localized lighting and helmet.",
        type: "RENTAL",
        price: 150,
        securityDeposit: 300,
        theme: "Anime",
        sizes: ["M", "L"],
        images: [
            "https://placehold.co/600x800/800000/ffffff?text=Cyber-Samurai+Armor+1",
            "https://placehold.co/600x800/800000/ffffff?text=Cyber-Samurai+Armor+2"
        ],
        status: "RENTED",
        inStock: false,
        featured: true,
        tags: ["Armor", "Sci-Fi", "Red"]
    },
    {
        id: "3",
        name: "Victorian Gothic Lolita",
        description: "Authentic tiered lace dress with bonnet and parasol included.",
        type: "RENTAL",
        price: 85,
        securityDeposit: 150,
        theme: "Anime",
        sizes: ["S", "M"],
        images: [
            "https://placehold.co/600x800/1a1a1a/purple?text=Victorian+Gothic+Lolita+1",
            "https://placehold.co/600x800/1a1a1a/purple?text=Victorian+Gothic+Lolita+2"
        ],
        status: "AVAILABLE",
        inStock: true,
        featured: true,
        tags: ["Black", "Lace", "Classic"]
    },
    {
        id: "4",
        name: "Royal Azure Tuxedo",
        description: "Deep blue velvet tuxedo layout with silver embroidery.",
        type: "RENTAL",
        price: 120,
        securityDeposit: 200,
        theme: "Formal",
        sizes: ["L", "XL"],
        images: [
            "https://placehold.co/600x800/000080/ffffff?text=Royal+Azure+Tuxedo+1",
            "https://placehold.co/600x800/000080/ffffff?text=Royal+Azure+Tuxedo+2"
        ],
        status: "AVAILABLE",
        inStock: true,
        featured: true
    },
    {
        id: "5",
        name: "Sakura Kimono Robe",
        description: "Silk kimono with hand-painted cherry blossoms.",
        type: "RENTAL",
        price: 100,
        securityDeposit: 200,
        theme: "Anime",
        sizes: ["One Size"],
        images: [
            "https://placehold.co/600x800/ffc0cb/333333?text=Sakura+Kimono+1",
            "https://placehold.co/600x800/ffc0cb/333333?text=Sakura+Kimono+2"
        ],
        status: "RENTED",
        inStock: false,
        featured: true
    },
    {
        id: "6",
        name: "Steampunk Inventor Rig",
        description: "Vest, goggles, and mechanical arm prop.",
        type: "RENTAL",
        price: 90,
        securityDeposit: 150,
        theme: "Anime",
        sizes: ["M", "L"],
        images: [
            "https://placehold.co/600x800/4b3621/ffffff?text=Steampunk+Rig+1",
            "https://placehold.co/600x800/4b3621/ffffff?text=Steampunk+Rig+2"
        ],
        status: "AVAILABLE",
        inStock: true,
        featured: true
    },
    {
        id: "7",
        name: "Crystal Tiara & Scepter",
        description: "Heavy duty prop set for royalty cosplays.",
        type: "RENTAL",
        price: 45,
        securityDeposit: 100,
        theme: "Accessories",
        sizes: ["One Size"],
        images: [
            "https://placehold.co/600x800/e5e4e2/333333?text=Crystal+Tiara+1",
            "https://placehold.co/600x800/e5e4e2/333333?text=Crystal+Tiara+2"
        ],
        status: "AVAILABLE",
        inStock: true,
        featured: true
    },
    {
        id: "8",
        name: "Forest Spirit Cloak",
        description: "Hand-dyed green cloak with leaf textures.",
        type: "RENTAL",
        price: 60,
        securityDeposit: 100,
        theme: "Anime",
        sizes: ["One Size"],
        images: [
            "https://placehold.co/600x800/228b22/ffffff?text=Forest+Spirit+Cloak+1",
            "https://placehold.co/600x800/228b22/ffffff?text=Forest+Spirit+Cloak+2"
        ],
        status: "AVAILABLE",
        inStock: true,
        featured: true
    }
];

export const REVIEWS = [
    {
        id: "r1",
        author: "Aria Thorne",
        role: "Cosplayer",
        content: "The Cyber-Samurai armor was breathtaking! The details are insane, and the lighting worked perfectly out of the box.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=aria"
    },
    {
        id: "r2",
        author: "Marcus Chen",
        role: "Groom",
        content: "Found the perfect suit for our theme wedding. Professional service and the quality was top-notch.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
        id: "r3",
        author: "Elena Rossi",
        role: "Fashion Blogger",
        content: "Boutique Concepts is the only place I trust for high-fidelity period pieces. The Victorian Gothic dress was a showstopper.",
        rating: 4,
        avatar: "https://i.pravatar.cc/150?u=elena"
    }
];
