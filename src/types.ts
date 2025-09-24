// Fix: Import React to use React.ReactNode type.
import React from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag?: string;
  tagColor?: string;
  tagTextColor?: string;
}

export interface PriceTier {
  quantity: number;
  price: number;
  discount?: number;
}

export interface Material {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  prices: PriceTier[];
  features: string[];
}

export interface InfoSectionData {
  title: React.ReactNode;
  paragraphs: string[];
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imagePosition?: 'left' | 'right';
}

export interface StickerGridItemData {
  id: number;
  imgSrc: string;
  alt: string;
  name: string;
  size: string;
  price: string;
  url: string;
  description: string;
}

export interface PromoCardData {
  id: number;
  imgSrc: string;
  alt: string;
  supertitle: string;
  title: string;
  description: string;
  url: string;
  gridSpanDesktop: number;
  gridSpanMobile: number;
}

export interface StickerListItemData {
    id: number;
    imgSrc: string;
    alt: string;
    name: string;
    size: string;
    price: string;
    url: string;
}

export interface FooterLink {
    name: string;
    url: string;
}

export interface FooterLinkSectionData {
    id: string;
    title: string;
    links: FooterLink[];
}

export interface DiecutMaterial {
  name: string;
  image: string;
}

export interface StickerShape {
  name: string;
  icon: string;
}

export interface StickerSize {
  name: string;
}

export interface QuantityOption {
  amount: number;
  price: number;
  discount?: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface OtherProduct {
    category: string;
    name: string;
    description: string;
    image: string;
}

export interface CartItem {
  id: string;
  shape: StickerShape;
  material: DiecutMaterial;
  finish: string;
  size: StickerSize;
  quantity: QuantityOption;
  image: string | null;
}

export interface CartItemType {
  id: number;
  name: string;
  description: string[];
  imageUrl: string;
  quantity: number;
  pricePerPiece: number;
}

export interface ShippingFormData {
  name: string;
  attName: string;
  address: string;
  address2: string;
  zip: string;
  city: string;
  state: string;
  country: string;
}

export interface BillingFormData {
  isBusiness: boolean;
  companyName: string;
  vatNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  address2: string;
  zip: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  orderReference: string;
  useDifferentShipping: boolean;
  shipping: ShippingFormData;
}

export type FormErrors = {
  [K in keyof Omit<BillingFormData, 'shipping' | 'isBusiness' | 'useDifferentShipping' | 'address2' | 'vatNumber' | 'orderReference' | 'companyName'>]?: string;
} & {
  companyName?: string;
  shipping?: {
    [K in keyof Omit<ShippingFormData, 'address2' | 'attName'>]?: string;
  }
};

// Shop Integration Types - Added for shop directory integration
export interface ShopProduct {
  id: string; // Unique identifier (derived from asset filename)
  name: string; // Product display name
  imageUrl: string; // Path to product image asset
  category: string; // Product category for filtering
  description?: string; // Product description (optional)
  tags: string[]; // Search and filtering tags
}

export interface ShopCategory {
  id: string; // Unique category identifier
  name: string; // Display name for category
  description: string; // Category description
  productCount: number; // Number of products in category (computed)
}

export interface ShopAsset {
  filename: string; // Original asset filename
  path: string; // Full path to asset in main app
  type: string; // Asset type (image/png, etc.)
  size?: number; // File size in bytes (optional)
  dimensions?: { width: number; height: number }; // Image dimensions (optional)
}

export interface NavigationState {
  currentRoute: string; // Current route path
  previousRoute: string; // Previous route for back navigation
  shopSection?: string; // Current shop section/filter (if applicable)
  navigationHistory: string[]; // Route history stack
}

// Shop configuration and health monitoring
export interface ShopConfig {
  // Asset configuration
  assetsPath: string;
  assetLoader: AssetLoaderFunction;
  
  // Integration configuration
  navigationHandler: ShopNavigationContract;
  themeConfig?: ThemeConfig;
  
  // Feature flags
  enableFiltering: boolean;
  enableSearch: boolean;
  enableQuickView: boolean;
}

export interface ShopHealthStatus {
  isInitialized: boolean;
  assetsLoaded: number;
  totalAssets: number;
  errors: string[];
  performance: {
    initTime: number;
    renderTime: number;
    assetLoadTime: number;
  };
}

export interface ThemeConfig {
  colorScheme: 'light' | 'dark' | 'auto';
  customColors?: Record<string, string>;
  typography?: TypographyConfig;
}

export interface TypographyConfig {
  fontFamily: string;
  fontSize: {
    sm: string;
    md: string;
    lg: string;
  };
}

// Function types for shop integration
export type AssetLoaderFunction = (assetPath: string) => Promise<string>;

// Contract interfaces for shop integration (referenced from contracts/)
export interface ShopNavigationContract {
  navigateToShop(section?: string): Promise<void>;
  navigateBack(): Promise<void>;
  setShopSection(section: string): void;
  getCurrentState(): NavigationState;
  onNavigationChange(callback: (state: NavigationState) => void): () => void;
}

export interface ShopComponentContract {
  initialize(config: ShopConfig): Promise<void>;
  render(props: ShopProps): React.ComponentType;
  cleanup(): Promise<void>;
  getHealthStatus(): ShopHealthStatus;
}

export interface AssetLoaderContract {
  initialize(config: AssetLoaderConfig): Promise<void>;
  loadAsset(assetPath: string): Promise<string>;
  loadAssets(assetPaths: string[]): Promise<Record<string, string>>;
  preloadAssets(assetPaths: string[]): Promise<void>;
  getAssetMetadata(assetPath: string): Promise<AssetMetadata>;
  clearCache(): void;
  getCacheStats(): AssetCacheStats;
}

// Additional interfaces for shop contracts
export interface ShopProps {
  initialCategory?: string;
  searchQuery?: string;
  onProductSelect?: (productId: string) => void;
  onCategoryChange?: (category: string) => void;
  onNavigationRequest?: (route: string) => void;
}

export interface AssetLoaderConfig {
  basePath: string;
  enableCache: boolean;
  cacheSize: number;
  cacheTTL: number;
  timeout: number;
  retryAttempts: number;
  retryDelay: number;
  enablePreload: boolean;
  preloadStrategy: 'eager' | 'lazy' | 'visible';
  fallbackImage?: string;
  onError?: (error: AssetLoadError) => void;
}

export interface AssetMetadata {
  filename: string;
  path: string;
  type: string;
  size: number;
  dimensions?: { width: number; height: number };
  lastModified: Date;
  hash?: string;
}

export interface AssetCacheStats {
  totalAssets: number;
  cachedAssets: number;
  cacheHits: number;
  cacheMisses: number;
  cacheSize: number;
  maxCacheSize: number;
}

export interface AssetLoadError {
  assetPath: string;
  error: Error;
  attempts: number;
  timestamp: Date;
}