// Product Types
export interface BeerProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  type: string;
  alcohol: string;
  ibu: string;
  flavor: string[];
  color: string;
  price: number;
  image?: string;
  variants: BeerVariant[];
}

export interface BeerVariant {
  id: string;
  packSize: number; // 4, 6, 12
  price: number;
  inStock: boolean;
}

export interface MerchandiseProduct {
  id: string;
  name: string;
  description: string;
  category: 'apparel' | 'accessories' | 'glassware' | 'other';
  price: number;
  images: string[];
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
}

// Cart Types
export interface CartItem {
  id: string;
  productId: string;
  productType: 'beer' | 'merchandise';
  name: string;
  price: number;
  quantity: number;
  variant?: {
    packSize?: number;
    size?: string;
    color?: string;
  };
  image?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

// Order Types
export interface ShippingDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: CartItem[];
  shippingDetails: ShippingDetails;
  payment: {
    method: string;
    status: 'pending' | 'completed' | 'failed';
  };
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  image: string;
  category: string;
  tags: string[];
}

// Digital ID Tap Types
export interface TapUser {
  id: string;
  name: string;
  credits: number;
  recentPours: Pour[];
}

export interface Pour {
  id: string;
  beerName: string;
  volume: number; // in ml
  timestamp: string;
  cost: number;
}
