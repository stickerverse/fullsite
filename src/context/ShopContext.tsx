/**
 * ShopContext - React Context for Shop State Management
 * 
 * Provides shop-related state and actions throughout the application.
 * Integrates with ShopService and ShopNavigation for centralized management.
 */

import React, { createContext, useContext, useEffect, useReducer, useCallback } from 'react';
import { ShopProduct, ShopCategory, NavigationState } from '../types';
import { shopService, ShopServiceState } from '../services/ShopService';
import { reactRouterShopNavigation } from '../services/ShopNavigation';

// Context State Interface
export interface ShopContextState {
  // Product and category data
  products: ShopProduct[];
  categories: ShopCategory[];
  filteredProducts: ShopProduct[];
  
  // UI State
  currentCategory: string;
  searchQuery: string;
  selectedProduct: ShopProduct | null;
  
  // Loading and error states
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;
  
  // Navigation state
  navigationState: NavigationState | null;
  
  // Performance metrics
  stats: {
    productsLoaded: number;
    assetsLoaded: number;
    totalAssets: number;
  };
}

// Context Actions Interface
export interface ShopContextActions {
  // Product actions
  selectProduct: (productId: string) => void;
  clearProductSelection: () => void;
  
  // Filtering and search
  setCategory: (categoryId: string) => void;
  setSearchQuery: (query: string) => void;
  clearFilters: () => void;
  
  // Navigation actions
  navigateToShop: (section?: string) => Promise<void>;
  navigateBack: () => Promise<void>;
  
  // Service actions
  refresh: () => Promise<void>;
  clearCache: () => void;
}

// Combined Context Interface
export interface ShopContextValue {
  state: ShopContextState;
  actions: ShopContextActions;
}

// Action Types for Reducer
type ShopAction =
  | { type: 'SET_SERVICE_STATE'; payload: ShopServiceState }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_SELECTED_PRODUCT'; payload: ShopProduct | null }
  | { type: 'SET_NAVIGATION_STATE'; payload: NavigationState }
  | { type: 'SET_FILTERED_PRODUCTS'; payload: ShopProduct[] }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'CLEAR_FILTERS' };

// Initial State
const initialState: ShopContextState = {
  products: [],
  categories: [],
  filteredProducts: [],
  currentCategory: 'all',
  searchQuery: '',
  selectedProduct: null,
  isLoading: true,
  isInitialized: false,
  error: null,
  navigationState: null,
  stats: {
    productsLoaded: 0,
    assetsLoaded: 0,
    totalAssets: 47,
  },
};

// Reducer Function
function shopReducer(state: ShopContextState, action: ShopAction): ShopContextState {
  switch (action.type) {
    case 'SET_SERVICE_STATE':
      return {
        ...state,
        products: action.payload.products,
        categories: action.payload.categories,
        isLoading: action.payload.isLoading,
        isInitialized: action.payload.isLoaded,
        error: action.payload.error,
        stats: {
          ...state.stats,
          productsLoaded: action.payload.products.length,
        },
      };
      
    case 'SET_CATEGORY':
      return {
        ...state,
        currentCategory: action.payload,
      };
      
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
      
    case 'SET_SELECTED_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload,
      };
      
    case 'SET_NAVIGATION_STATE':
      return {
        ...state,
        navigationState: action.payload,
      };
      
    case 'SET_FILTERED_PRODUCTS':
      return {
        ...state,
        filteredProducts: action.payload,
      };
      
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
      
    case 'CLEAR_FILTERS':
      return {
        ...state,
        currentCategory: 'all',
        searchQuery: '',
      };
      
    default:
      return state;
  }
}

// Create Context
const ShopContext = createContext<ShopContextValue | null>(null);

// Context Provider Component
export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  // Utility function to filter products
  const filterProducts = useCallback((products: ShopProduct[], category: string, search: string): ShopProduct[] => {
    let filtered = products;
    
    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }
    
    // Filter by search query
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    return filtered;
  }, []);

  // Update filtered products when filters change
  useEffect(() => {
    const filteredProducts = filterProducts(state.products, state.currentCategory, state.searchQuery);
    dispatch({ type: 'SET_FILTERED_PRODUCTS', payload: filteredProducts });
  }, [state.products, state.currentCategory, state.searchQuery, filterProducts]);

  // Subscribe to shop service updates
  useEffect(() => {
    const unsubscribe = shopService.subscribe((serviceState) => {
      dispatch({ type: 'SET_SERVICE_STATE', payload: serviceState });
    });

    // Get initial state
    dispatch({ type: 'SET_SERVICE_STATE', payload: shopService.getState() });

    return unsubscribe;
  }, []);

  // Subscribe to navigation updates
  useEffect(() => {
    const unsubscribe = reactRouterShopNavigation.onNavigationChange((navState) => {
      dispatch({ type: 'SET_NAVIGATION_STATE', payload: navState });
      
      // Update category if navigation includes shop section
      if (navState.shopSection && navState.shopSection !== state.currentCategory) {
        dispatch({ type: 'SET_CATEGORY', payload: navState.shopSection });
      }
    });

    return unsubscribe;
  }, [state.currentCategory]);

  // Context Actions
  const actions: ShopContextActions = {
    // Product actions
    selectProduct: useCallback((productId: string) => {
      const product = shopService.getProductById(productId);
      dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product || null });
    }, []),

    clearProductSelection: useCallback(() => {
      dispatch({ type: 'SET_SELECTED_PRODUCT', payload: null });
    }, []),

    // Filtering and search
    setCategory: useCallback((categoryId: string) => {
      dispatch({ type: 'SET_CATEGORY', payload: categoryId });
      
      // Update navigation if on shop page
      if (state.navigationState?.currentRoute === '/shop') {
        reactRouterShopNavigation.setShopSection(categoryId);
      }
    }, [state.navigationState]),

    setSearchQuery: useCallback((query: string) => {
      dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    }, []),

    clearFilters: useCallback(() => {
      dispatch({ type: 'CLEAR_FILTERS' });
    }, []),

    // Navigation actions
    navigateToShop: useCallback(async (section?: string) => {
      try {
        await reactRouterShopNavigation.navigateToShop(section);
        if (section) {
          dispatch({ type: 'SET_CATEGORY', payload: section });
        }
      } catch (error) {
        console.error('Failed to navigate to shop:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Navigation failed' });
      }
    }, []),

    navigateBack: useCallback(async () => {
      try {
        await reactRouterShopNavigation.navigateBack();
      } catch (error) {
        console.error('Failed to navigate back:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Navigation failed' });
      }
    }, []),

    // Service actions
    refresh: useCallback(async () => {
      try {
        await shopService.refresh();
        dispatch({ type: 'SET_ERROR', payload: null });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to refresh';
        dispatch({ type: 'SET_ERROR', payload: errorMessage });
      }
    }, []),

    clearCache: useCallback(() => {
      shopService.clearCache();
    }, []),
  };

  const contextValue: ShopContextValue = {
    state,
    actions,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

// Custom Hook for using Shop Context
export const useShop = (): ShopContextValue => {
  const context = useContext(ShopContext);
  
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  
  return context;
};

// Selector hooks for specific data
export const useShopProducts = () => {
  const { state } = useShop();
  return state.filteredProducts;
};

export const useShopCategories = () => {
  const { state } = useShop();
  return state.categories;
};

export const useShopFilters = () => {
  const { state, actions } = useShop();
  return {
    currentCategory: state.currentCategory,
    searchQuery: state.searchQuery,
    setCategory: actions.setCategory,
    setSearchQuery: actions.setSearchQuery,
    clearFilters: actions.clearFilters,
  };
};

export const useShopNavigation = () => {
  const { state, actions } = useShop();
  return {
    navigationState: state.navigationState,
    navigateToShop: actions.navigateToShop,
    navigateBack: actions.navigateBack,
  };
};

export const useShopSelection = () => {
  const { state, actions } = useShop();
  return {
    selectedProduct: state.selectedProduct,
    selectProduct: actions.selectProduct,
    clearSelection: actions.clearProductSelection,
  };
};