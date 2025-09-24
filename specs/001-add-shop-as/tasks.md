# Tasks: Integrate Shop Directory as Sticker Shop

**Input**: Design documents from `/specs/001-add-shop-as/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/, quickstart.md

## Execution Flow (main)
```
1. Load plan.md from feature directory
   ✓ Tech stack: TypeScript 5.8.2, React 19.1.1, React Router, shadcn/ui
   ✓ Project type: Single React application with routing
2. Load design documents:
   ✓ data-model.md: ShopProduct, ShopCategory, ShopAsset, NavigationState
   ✓ contracts/: shop-navigation.ts, shop-component.ts, asset-loader.ts
   ✓ research.md: Direct integration strategy, asset consolidation
3. Generate tasks by category:
   ✓ Setup: Asset migration, project structure
   ✓ Tests: Contract tests, integration tests
   ✓ Core: Components, services, routing
   ✓ Integration: Navigation, styling, performance
   ✓ Polish: Testing, documentation, cleanup
4. Apply task rules:
   ✓ Different files = [P] parallel execution
   ✓ Same file modifications = sequential
   ✓ Tests before implementation (TDD)
5. Number tasks sequentially (T001-T025)
6. Dependencies: Setup → Tests → Core → Integration → Polish
7. Parallel execution examples provided
8. Validation complete: All contracts tested, entities modeled
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Exact file paths included in task descriptions

## Path Conventions
- **Single project structure**: `src/`, `tests/` at repository root
- Shop integration into existing React app structure
- Assets consolidated in `src/assets/shop/`

## Phase 3.1: Setup & Asset Migration

- [x] **T001** Create shop asset directory structure `src/assets/shop/stickers/` and move all 40+ sticker images from `shop/src/assets/` to `src/assets/shop/stickers/`
- [x] **T002** [P] Create asset index file `src/assets/shop/index.ts` with exports for all sticker images
- [x] **T003** [P] Add shop-related TypeScript interfaces to `src/types.ts` (ShopProduct, ShopCategory, ShopAsset, NavigationState from data-model.md)
- [x] **T004** [P] Create shop constants in `src/constants/shopConstants.ts` with product categories and default configurations

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**

- [x] **T005** [P] Contract test for ShopNavigationContract in `src/tests/contracts/shop-navigation.test.ts` - test navigate to shop, navigate back, set shop section
- [x] **T006** [P] Contract test for ShopComponentContract in `src/tests/contracts/shop-component.test.ts` - test initialize, render, cleanup, health status
- [x] **T007** [P] Contract test for AssetLoaderContract in `src/tests/contracts/asset-loader.test.ts` - test load single asset, batch loading, preload, cache management  
- [x] **T008** [P] Integration test for shop navigation flow in `src/tests/integration/shop-navigation.test.tsx` - test homepage to shop to homepage navigation
- [x] **T009** [P] Integration test for shop component rendering in `src/tests/integration/shop-rendering.test.tsx` - test shop loads with products, images display correctly
- [x] **T010** [P] Integration test for asset loading in `src/tests/integration/asset-loading.test.tsx` - test all sticker assets load without 404 errors

## Phase 3.3: Core Implementation (ONLY after tests are failing)

- [x] **T011** [P] Create AssetLoader service in `src/services/AssetLoader.ts` implementing AssetLoaderContract for loading and caching shop assets
- [x] **T012** [P] Create ShopProduct model utilities in `src/models/ShopProduct.ts` for product data structure and validation
- [x] **T013** [P] Create ShopNavigation service in `src/services/ShopNavigation.ts` implementing ShopNavigationContract for route management
- [x] **T014** Create integrated shop component in `src/components/shop-components/IntegratedShop.tsx` that wraps the existing shop component
- [x] **T015** Extract and adapt existing shop components from `shop/src/imports/` into `src/components/shop-components/` directory (Integrated into T014)
- [x] **T016** Update main App.tsx routing to use IntegratedShop component for `/shop` route instead of existing StickerShop component
- [x] **T017** Create shop service in `src/services/ShopService.ts` to manage product loading, filtering, and state management

## Phase 3.4: Integration & Navigation

- [x] **T018** Update existing navigation components in `src/components/navbar-components/` to ensure shop link works with integrated component
- [x] **T019** Implement asset preloading in `src/hooks/useShopAssets.ts` custom hook for better performance
- [x] **T020** Add shop section to existing navigation state management and ensure consistent styling
- [x] **T021** Update existing `src/pages/StickerShop.tsx` to use new integrated shop components or remove if replaced

## Phase 3.5: Polish & Validation

- [ ] **T022** [P] Unit tests for ShopProduct utilities in `src/tests/unit/ShopProduct.test.ts` 
- [ ] **T023** [P] Unit tests for AssetLoader service in `src/tests/unit/AssetLoader.test.ts`
- [ ] **T024** [P] Performance tests for shop loading in `src/tests/performance/shop-performance.test.ts` - verify <3s load time target
- [ ] **T025** [P] Execute quickstart.md validation scenarios and update any issues found

## Dependencies

**Setup Dependencies**:
- T001 (asset migration) blocks T002 (asset index)
- T003, T004 (types & constants) needed before all implementation

**Test Dependencies**: 
- T005-T010 (all tests) must complete and FAIL before T011-T025 (implementation)
- Tests can run in parallel with each other

**Implementation Dependencies**:
- T011 (AssetLoader) blocks T019 (preloading hook)
- T012 (ShopProduct) blocks T017 (ShopService) 
- T013 (ShopNavigation) blocks T018 (navigation updates)
- T014, T015 (shop components) must complete before T016 (routing integration)
- T016 (routing) blocks T021 (page updates)

**Integration Dependencies**:
- Core implementation (T011-T017) before integration (T018-T021)
- Integration before polish (T022-T025)

## Parallel Execution Examples

**Setup Phase (can run together)**:
```bash
# T002-T004 after T001 completes
Task: "Create asset index file src/assets/shop/index.ts with sticker exports"
Task: "Add shop TypeScript interfaces to src/types.ts"  
Task: "Create shop constants in src/constants/shopConstants.ts"
```

**Test Phase (can run together)**:
```bash
# T005-T010 in parallel
Task: "Contract test ShopNavigationContract in src/tests/contracts/shop-navigation.test.ts"
Task: "Contract test ShopComponentContract in src/tests/contracts/shop-component.test.ts"
Task: "Contract test AssetLoaderContract in src/tests/contracts/asset-loader.test.ts"
Task: "Integration test shop navigation in src/tests/integration/shop-navigation.test.tsx"
Task: "Integration test shop rendering in src/tests/integration/shop-rendering.test.tsx"
Task: "Integration test asset loading in src/tests/integration/asset-loading.test.tsx"
```

**Core Implementation Phase (services can run together)**:
```bash
# T011-T013 in parallel (different files)
Task: "Create AssetLoader service in src/services/AssetLoader.ts"
Task: "Create ShopProduct utilities in src/models/ShopProduct.ts"
Task: "Create ShopNavigation service in src/services/ShopNavigation.ts"
```

**Polish Phase (can run together)**:
```bash
# T022-T025 in parallel
Task: "Unit tests for ShopProduct in src/tests/unit/ShopProduct.test.ts"
Task: "Unit tests for AssetLoader in src/tests/unit/AssetLoader.test.ts"  
Task: "Performance tests for shop loading in src/tests/performance/shop-performance.test.ts"
Task: "Execute quickstart.md validation scenarios"
```

## Notes

- **[P] tasks** = different files, can run in parallel
- **Sequential tasks** modify the same files and must run in order
- **Verify all tests fail** before starting implementation
- **Commit after each completed task**
- **Asset migration (T001) is foundation** for all other tasks
- **Preserve existing shop functionality** throughout integration

## Task Generation Rules Applied

1. **From Contracts**: Each contract file → contract test task [P]
   - shop-navigation.ts → T005
   - shop-component.ts → T006  
   - asset-loader.ts → T007

2. **From Data Model**: Each entity → model/service task [P]
   - ShopProduct → T012
   - ShopAsset → T011 (AssetLoader)
   - NavigationState → T013

3. **From User Stories**: Integration scenarios → integration tests [P]
   - Navigation flow → T008
   - Component rendering → T009
   - Asset loading → T010

4. **From Research**: Technical decisions → implementation tasks
   - Asset consolidation → T001, T002
   - Direct integration → T014-T017
   - Navigation integration → T018-T021

## Validation Checklist

- [x] All contracts have corresponding tests (T005-T007)
- [x] All entities have model/service tasks (T011-T013) 
- [x] All tests come before implementation (T005-T010 before T011-T025)
- [x] Parallel tasks are truly independent (different files)
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task
- [x] Integration scenarios covered (T008-T010)
- [x] Performance requirements addressed (T024)
- [x] Validation scenarios included (T025)

---
**Tasks Ready for Execution** | **Total**: 25 tasks | **Parallel Groups**: 4 | **Estimated**: 2-3 days