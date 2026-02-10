export type ProductType = 'RENTAL' | 'SALE';
export type ProductTheme = 'Anime' | 'Wedding' | 'Formal' | 'Accessories';

export interface Product {
    id: string;
    name: string;
    description: string;
    type: ProductType;
    price: number;
    securityDeposit?: number; // Only for RENTAL
    theme: ProductTheme;
    sizes: string[]; // e.g., ["S", "M", "L"]
    images: string[];
    status: 'AVAILABLE' | 'RENTED';
    inStock: boolean; // redundancy for status, maybe deprecate later
    featured?: boolean;
    tags?: string[];
}
