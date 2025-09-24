/**
 * Shop Navigation Contract
 * Defines the interface for navigation integration between main app and shop
 */

export interface ShopNavigationContract {
  /**
   * Navigate to shop from main application
   * @param section - Optional shop section to navigate to
   * @returns Promise that resolves when navigation is complete
   */
  navigateToShop(section?: string): Promise<void>;

  /**
   * Navigate back to previous route from shop
   * @returns Promise that resolves when navigation is complete
   */
  navigateBack(): Promise<void>;

  /**
   * Set current shop section/filter
   * @param section - Shop section identifier
   */
  setShopSection(section: string): void;

  /**
   * Get current navigation state
   * @returns Current navigation state
   */
  getCurrentState(): NavigationState;

  /**
   * Subscribe to navigation changes
   * @param callback - Callback function for navigation changes
   * @returns Unsubscribe function
   */
  onNavigationChange(callback: (state: NavigationState) => void): () => void;
}

export interface NavigationState {
  currentRoute: string;
  previousRoute: string;
  shopSection?: string;
  navigationHistory: string[];
}

/**
 * Navigation Events
 */
export type NavigationEvent = 
  | { type: 'NAVIGATE_TO_SHOP'; payload: { section?: string } }
  | { type: 'NAVIGATE_BACK'; payload: {} }
  | { type: 'SET_SHOP_SECTION'; payload: { section: string } }
  | { type: 'ROUTE_CHANGED'; payload: { route: string; previousRoute: string } };

/**
 * Test Contract - Navigation behaviors that must be tested
 */
export interface ShopNavigationTestContract {
  // Navigation from main app to shop
  'should navigate to shop from homepage': () => Promise<void>;
  'should navigate to specific shop section': (section: string) => Promise<void>;
  'should preserve previous route for back navigation': () => Promise<void>;
  
  // Navigation within shop
  'should update shop section without full navigation': (section: string) => Promise<void>;
  'should maintain navigation history': () => Promise<void>;
  
  // Navigation from shop back to main app
  'should navigate back to previous route': () => Promise<void>;
  'should handle navigation to non-existent routes': () => Promise<void>;
}