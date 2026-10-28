export type Platform = 'all' | 'mercadolivre' | 'shopee';

export type Category = 
  | 'todos'
  | 'tech'
  | 'casa'
  | 'moda'
  | 'beleza'
  | 'gamer';

export interface AffiliateProduct {
  id: string;
  title: string;
  platform: 'mercadolivre' | 'shopee';
  category: Category;
  originalPrice: number;
  discountPrice: number;
  discountPercent: number;
  couponCode?: string;
  affiliateUrl: string;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  freeShipping: boolean;
  installments?: string;
  badge?: string;
  stockLeft?: number;
  verifiedMinutesAgo: number;
}

export interface AffiliateConfig {
  whatsappGroupUrl: string;
  whatsappGroupEletronicosUrl: string;
  whatsappGroupCasaUrl: string;
  whatsappGroupName: string;
  shopeeAffiliateCode: string;
  mercadolivreAffiliateCode: string;
  announcementText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatarText: string;
  savedAmount: string;
  comment: string;
  recentPurchase: string;
  platform: 'mercadolivre' | 'shopee';
  stars: number;
}
