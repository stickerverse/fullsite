# Data Model: Shop Integration

**Feature**: Integrate Shop Directory as Sticker Shop
**Phase**: 1 - Design & Contracts
**Date**: 2025-01-25

## Entity Definitions

### ShopProduct
**Purpose**: Represents a sticker product available in the shop
**Source**: Derived from shop assets and component structure

**Attributes**:
- `id`: string - Unique identifier (derived from asset filename)
- `name`: string - Product display name
- `imageUrl`: string - Path to product image asset
- `category`: string - Product category for filtering
- `description`: string - Product description (optional)
- `tags`: string[] - Search and filtering tags

**Validation Rules**:
- `id` must be unique across all products
- `imageUrl` must point to valid asset in shop assets directory
- `name` must be non-empty string
- `category` must be from predefined category list

**State Transitions**: N/A (static product data)

**Example**:
```typescript
interface ShopProduct {
  id: string; // "087307cb4b3e88d2d5fb660b0e548391434bfee6"
  name: string; // "Cute Cat Sticker"
  imageUrl: string; // "/src/assets/shop/stickers/087307cb4b3e88d2d5fb660b0e548391434bfee6.png"
  category: string; // "animals"
  description?: string; // "Adorable cat design perfect for laptops"
  tags: string[]; // ["cat", "animal", "cute", "pet"]
}
```

### ShopCategory
**Purpose**: Categorization system for organizing shop products
**Source**: Derived from product analysis and user experience requirements

**Attributes**:
- `id`: string - Unique category identifier
- `name`: string - Display name for category
- `description`: string - Category description
- `productCount`: number - Number of products in category (computed)

**Validation Rules**:
- `id` must be unique and URL-safe
- `name` must be non-empty
- `productCount` is read-only computed value

**Example**:
```typescript
interface ShopCategory {
  id: string; // "animals"
  name: string; // "Animals"
  description: string; // "Cute animal-themed stickers"
  productCount: number; // 12
}
```

### ShopAsset
**Purpose**: Metadata for shop asset management and loading
**Source**: Asset directory structure and integration requirements

**Attributes**:
- `filename`: string - Original asset filename
- `path`: string - Full path to asset in main app
- `type`: string - Asset type (image/png, etc.)
- `size`: number - File size in bytes (optional)
- `dimensions`: object - Image dimensions (optional)

**Validation Rules**:
- `filename` must match actual file in assets
- `path` must be valid and accessible
- `type` must be supported image format

**Example**:
```typescript
interface ShopAsset {
  filename: string; // "087307cb4b3e88d2d5fb660b0e548391434bfee6.png"
  path: string; // "/src/assets/shop/stickers/087307cb4b3e88d2d5fb660b0e548391434bfee6.png"
  type: string; // "image/png"
  size?: number; // 45632
  dimensions?: { width: number; height: number }; // { width: 512, height: 512 }
}
```

### NavigationState
**Purpose**: Application navigation state including shop integration
**Source**: Existing navigation patterns and routing requirements

**Attributes**:
- `currentRoute`: string - Current route path
- `previousRoute`: string - Previous route for back navigation
- `shopSection`: string - Current shop section/filter (if applicable)
- `navigationHistory`: string[] - Route history stack

**Validation Rules**:
- `currentRoute` must be valid application route
- Route transitions must follow application routing rules

**State Transitions**:
- `navigateToShop()`: Sets currentRoute to "/shop"
- `navigateBack()`: Returns to previousRoute
- `setShopSection(section)`: Updates shopSection filter

**Example**:
```typescript
interface NavigationState {
  currentRoute: string; // "/shop"
  previousRoute: string; // "/"
  shopSection?: string; // "animals"
  navigationHistory: string[]; // ["/", "/shop"]
}
```

## Entity Relationships

```
ShopProduct
├── belongs to ShopCategory (many-to-one)
├── references ShopAsset (one-to-one)
└── filterable by NavigationState.shopSection

ShopCategory
├── contains ShopProduct[] (one-to-many)
└── used by NavigationState for filtering

ShopAsset
├── referenced by ShopProduct (one-to-one)
└── managed by asset loading system

NavigationState
├── affects ShopProduct filtering
└── manages shop section navigation
```

## Data Flow

1. **Initialization**: Load ShopAssets from assets directory
2. **Product Loading**: Create ShopProducts mapped to ShopAssets
3. **Categorization**: Group products by ShopCategory
4. **Navigation**: NavigationState controls shop section display
5. **Filtering**: Apply category and tag filters to product display

## Storage Considerations

**Static Data**: 
- Product information derived from asset filenames and metadata
- Category definitions stored in constants
- No persistent storage required initially

**Runtime Data**:
- NavigationState managed by React Router and component state
- Product filtering state managed by shop components
- Asset loading handled by Vite's asset management

**Future Considerations**:
- Product metadata could be externalized to JSON files
- Category definitions could be made dynamic
- User preferences could be persisted in localStorage

## Integration Points

**Main Application**:
- `types.ts`: Add shop-related type definitions
- `constants.ts`: Add shop configuration and categories
- Asset loading system integration

**Shop Components**:
- Product listing components consume ShopProduct[]
- Category filtering uses ShopCategory definitions
- Navigation integrates with NavigationState

**Testing Data**:
- Mock products based on actual asset files
- Test categories with known product counts
- Navigation state test scenarios

---
**Data Model Complete** | **Next**: API Contracts & Component Interfaces