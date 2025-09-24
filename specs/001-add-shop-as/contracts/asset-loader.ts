/**
 * Asset Loader Contract
 * Defines the interface for loading and managing shop assets
 */

export interface AssetLoaderContract {
  /**
   * Initialize asset loader with configuration
   * @param config - Asset loader configuration
   */
  initialize(config: AssetLoaderConfig): Promise<void>;

  /**
   * Load a single asset
   * @param assetPath - Path to asset file
   * @returns Promise that resolves to asset URL or data
   */
  loadAsset(assetPath: string): Promise<string>;

  /**
   * Load multiple assets in batch
   * @param assetPaths - Array of asset paths
   * @returns Promise that resolves to map of asset paths to URLs
   */
  loadAssets(assetPaths: string[]): Promise<Record<string, string>>;

  /**
   * Preload assets for better performance
   * @param assetPaths - Array of asset paths to preload
   */
  preloadAssets(assetPaths: string[]): Promise<void>;

  /**
   * Get asset metadata
   * @param assetPath - Path to asset file
   * @returns Asset metadata
   */
  getAssetMetadata(assetPath: string): Promise<AssetMetadata>;

  /**
   * Clear asset cache
   */
  clearCache(): void;

  /**
   * Get cache statistics
   * @returns Cache usage information
   */
  getCacheStats(): AssetCacheStats;
}

export interface AssetLoaderConfig {
  // Base path for assets
  basePath: string;
  
  // Cache configuration
  enableCache: boolean;
  cacheSize: number; // Maximum number of cached assets
  cacheTTL: number; // Time to live in milliseconds
  
  // Loading configuration
  timeout: number; // Load timeout in milliseconds
  retryAttempts: number;
  retryDelay: number; // Delay between retries in milliseconds
  
  // Optimization settings
  enablePreload: boolean;
  preloadStrategy: 'eager' | 'lazy' | 'visible';
  
  // Error handling
  fallbackImage?: string;
  onError?: (error: AssetLoadError) => void;
}

export interface AssetMetadata {
  filename: string;
  path: string;
  type: string;
  size: number;
  dimensions?: {
    width: number;
    height: number;
  };
  lastModified: Date;
  hash?: string; // For cache busting
}

export interface AssetCacheStats {
  totalAssets: number;
  cachedAssets: number;
  cacheHits: number;
  cacheMisses: number;
  cacheSize: number; // Current cache size in bytes
  maxCacheSize: number; // Maximum cache size in bytes
}

export interface AssetLoadError {
  assetPath: string;
  error: Error;
  attempts: number;
  timestamp: Date;
}

/**
 * Asset Loading Events
 */
export type AssetLoaderEvent = 
  | { type: 'ASSET_LOAD_START'; payload: { assetPath: string } }
  | { type: 'ASSET_LOAD_SUCCESS'; payload: { assetPath: string; url: string } }
  | { type: 'ASSET_LOAD_ERROR'; payload: AssetLoadError }
  | { type: 'ASSETS_PRELOADED'; payload: { count: number } }
  | { type: 'CACHE_CLEARED'; payload: {} }
  | { type: 'CACHE_FULL'; payload: { evictedAssets: string[] } };

/**
 * Asset Discovery Contract
 * For discovering available assets from the shop directory
 */
export interface AssetDiscoveryContract {
  /**
   * Discover all assets in shop assets directory
   * @returns Array of discovered assets
   */
  discoverAssets(): Promise<AssetMetadata[]>;

  /**
   * Filter assets by type
   * @param type - Asset type (e.g., 'image/png')
   * @returns Filtered assets
   */
  filterByType(type: string): Promise<AssetMetadata[]>;

  /**
   * Search assets by filename pattern
   * @param pattern - Search pattern (regex or glob)
   * @returns Matching assets
   */
  searchAssets(pattern: string): Promise<AssetMetadata[]>;

  /**
   * Get asset categories based on filename or metadata
   * @returns Available categories
   */
  getAssetCategories(): Promise<string[]>;
}

/**
 * Test Contract - Asset loading behaviors that must be tested
 */
export interface AssetLoaderTestContract {
  // Basic loading
  'should load single asset successfully': (assetPath: string) => Promise<void>;
  'should load multiple assets in batch': (assetPaths: string[]) => Promise<void>;
  'should handle missing assets gracefully': (assetPath: string) => Promise<void>;
  
  // Caching
  'should cache loaded assets': (assetPath: string) => Promise<void>;
  'should serve assets from cache': (assetPath: string) => Promise<void>;
  'should respect cache size limits': () => Promise<void>;
  'should clear cache when requested': () => Promise<void>;
  
  // Error handling
  'should retry failed loads': (assetPath: string) => Promise<void>;
  'should timeout slow loads': (assetPath: string) => Promise<void>;
  'should use fallback for failed loads': (assetPath: string) => Promise<void>;
  
  // Performance
  'should preload assets when configured': (assetPaths: string[]) => Promise<void>;
  'should report accurate cache statistics': () => Promise<void>;
  
  // Discovery
  'should discover all shop assets': () => Promise<void>;
  'should filter assets by type correctly': (type: string) => Promise<void>;
  'should search assets by pattern': (pattern: string) => Promise<void>;
}