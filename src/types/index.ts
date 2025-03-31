
export interface Product {
  id: string;
  name: string;
  price: number;
  discountPercentage?: number;
  images: string[];
  description: string;
  category: Category;
  activity: Activity[];
  brand: Brand;
  variants?: ProductVariant[];
  featured?: boolean;
  rating: number;
  stock: number;
}

export interface ProductVariant {
  id: string;
  color?: string;
  size?: string;
  weight?: string;
  images?: string[];
}

export type Category = 
  | 'gym_equipment'
  | 'cardio_machines'
  | 'sportswear'
  | 'yoga_meditation'
  | 'outdoor_adventure'
  | 'recovery_wellness';

export type Activity = 'gym' | 'running' | 'yoga' | 'outdoor';

export type Brand = 'nike' | 'adidas' | 'under_armour' | 'reebok' | 'puma' | 'new_balance' | 'fitgear';

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: ProductVariant;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
}

export interface ContactLocation {
  country: string;
  address: string;
  phone: string;
}
