/**
 * Shop Component Integration Contract
 * Defines the interface for integrating shop components into main application
 */

export interface ShopComponentContract {
  /**
   * Initialize shop component with main app context
   * @param config - Shop configuration and context
   */
  initialize(config: ShopConfig): Promise<void>;

  /**
   * Render shop component
   * @param props - Shop component props
   * @returns React component
   */
  render(props: ShopProps): React.ComponentType;

  /**
   * Clean up shop component resources
   */
  cleanup(): Promise<void>;

  /**
   * Get shop component health status
   * @returns Component health information
   */
  getHealthStatus(): ShopHealthStatus;
}

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

export interface ShopProps {
  // Optional initial category filter
  initialCategory?: string;
  
  // Optional search query
  searchQuery?: string;
  
  // Event handlers
  onProductSelect?: (productId: string) => void;
  onCategoryChange?: (category: string) => void;
  onNavigationRequest?: (route: string) => void;
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

export type AssetLoaderFunction = (assetPath: string) => Promise<string>;

/**
 * Shop Component Events
 */
export type ShopComponentEvent = 
  | { type: 'COMPONENT_INITIALIZED'; payload: { config: ShopConfig } }
  | { type: 'PRODUCT_SELECTED'; payload: { productId: string } }
  | { type: 'CATEGORY_CHANGED'; payload: { category: string } }
  | { type: 'SEARCH_PERFORMED'; payload: { query: string } }
  | { type: 'ASSETS_LOADED'; payload: { count: number } }
  | { type: 'ERROR_OCCURRED'; payload: { error: string } };

/**
 * Test Contract - Component behaviors that must be tested
 */
export interface ShopComponentTestContract {
  // Initialization
  'should initialize with valid config': (config: ShopConfig) => Promise<void>;
  'should fail initialization with invalid config': () => Promise<void>;
  'should load all required assets': () => Promise<void>;
  
  // Rendering
  'should render with default props': () => Promise<void>;
  'should render with initial category': (category: string) => Promise<void>;
  'should handle missing assets gracefully': () => Promise<void>;
  
  // Interaction
  'should emit product selection events': (productId: string) => Promise<void>;
  'should emit category change events': (category: string) => Promise<void>;
  'should handle navigation requests': (route: string) => Promise<void>;
  
  // Cleanup
  'should cleanup resources properly': () => Promise<void>;
  'should handle multiple cleanup calls': () => Promise<void>;
}