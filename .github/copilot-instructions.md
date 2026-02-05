# SkillVector Project Rules & Coding Standards

## ⚠️ CRITICAL: Completeness & Thoroughness Rules

### When Processing Multiple Files/Items
**ABSOLUTE REQUIREMENT: Complete every single item without skipping**

When the user says:
- **"the whole folder"** → Process EVERY file in that folder, literally one by one
- **"every file, one by one"** → Process ALL files individually, no exceptions
- **"find x or similar and do y"** → Find EVERY instance of x and perform y on each one
- **"all components/files/variables"** → Process 100% of them, not a subset

### Execution Standards
- **DO NOT skip files** - Process every single one
- **DO NOT miss variables** - Find and update all occurrences
- **DO NOT assume** - If you think you're done, double-check you got everything
- **DO NOT batch** when asked for "one by one" - Process individually
- **DO verify completeness** - After finishing, confirm all items were processed

### If You Miss Items
- User has noticed files/variables are frequently skipped
- This is unacceptable - 100% completion is required
- If uncertain about scope, ask before starting
- Better to over-deliver than under-deliver

**Example:**
```
❌ WRONG: User says "update all Button components" → You update 3 out of 5
✅ CORRECT: User says "update all Button components" → You find all 5 and update each one

❌ WRONG: User says "the whole folder" → You process half the files
✅ CORRECT: User says "the whole folder" → You list all files first, then process 100%
```

## Code Style & Readability

### Human-Readable Code Philosophy
- **Always prioritize readability over brevity**
- Use detailed comments explaining WHY, not just WHAT
- Add intermediate variables instead of chaining function calls
- Include generous vertical spacing between logical sections
- Never use placeholder comments like `...existing code...`

### Function Declarations
- **ALWAYS use arrow functions** instead of function declarations
  ```typescript
  // ✅ Correct
  const myFunction = (params) => { ... }
  export const MyComponent = (props) => { ... }

  // ❌ Incorrect
  function myFunction(params) { ... }
  export function MyComponent(props) { ... }
  ```

### Component Documentation Pattern
Every component should have:
1. **Component-level documentation** explaining purpose
2. **Variant/size explanations** with pixel values (16px, 24px, etc.)
3. **Use cases** for when to use each variant
4. **Intermediate variables** for clarity
   ```typescript
   // ✅ Good
   const variantClass = variantClasses[variant];
   const combinedClassName = cn(variantClass, className);

   // ❌ Bad
   className={cn(variantClasses[variant], className)}
   ```

### Comments Style
- Use `/** */` for component/function documentation (green comments)
- Use `//` for inline explanations
- Always include pixel values when mentioning sizes: `text-sm (14px)`
- Explain semantic meaning: `// Primary badge - bold and prominent`

## Project Structure

### Atomic Design System
Follow strict hierarchy:
1. **1-ions**: Design tokens (colors, spacing, sizing, etc.)
2. **2-atoms**: Primitive UI components (Text, Button, Input, etc.)
3. **3-molecules**: Composite components (Card, Hero, SearchBar, etc.)
4. **4-organisms**: Complex compositions (Header, Footer, CardGrid, etc.)
5. **5-templates**: Page layouts (PageTemplate, InfoTemplate, etc.)
6. **6-pages**: Full pages (SearchPage, BrowsePage, etc.)

### Atomic Hierarchy Composition Rules
**CRITICAL: Each level must ONLY use components from previous levels as building blocks**

- **Atoms (Level 2)**: Use only ions (design tokens) - no custom styling
- **Molecules (Level 3)**: Build from atoms + ions ONLY - no custom base components
- **Organisms (Level 4)**: Compose molecules + atoms + ions ONLY
- **Templates (Level 5)**: Combine organisms + molecules + atoms + ions
- **Pages (Level 6)**: Use ALL previous levels (templates + organisms + molecules + atoms + ions)

**DO NOT:**
- ❌ Create custom components at higher levels that should exist at lower levels
- ❌ Skip levels (e.g., organism using ions directly instead of using an atom)
- ❌ Reinvent existing lower-level components
- ❌ Hardcode styles that should use ions

**EXCEPTIONS:**
- ✅ Documentation components can use custom code when needed
- ✅ Utility/helper components outside the atomic structure
- ✅ One-off components with clear justification in comments

**⚠️ IMPORTANT: If you think a component needs to be "special" or requires an exception to these rules, STOP and discuss with the user first. Do not implement exceptions without approval.**

**Example:**
```typescript
// ✅ CORRECT - Molecule using atoms
const Card = () => (
  <Div variant="card">  {/* Atom */}
    <Heading level={2}> {/* Atom */}
      <Text>Title</Text> {/* Atom */}
    </Heading>
  </Div>
);

// ❌ WRONG - Molecule reinventing atom functionality
const Card = () => (
  <div className="p-4 rounded-lg"> {/* Should use Div atom */}
    <h2 className="text-2xl">Title</h2> {/* Should use Heading atom */}
  </div>
);
```

### UI Folder Exclusion
- **NEVER modify files in `frontend/src/components/ui/` folder**
- This folder contains shadcn/ui components - leave them as-is
- Only modify our custom components in atoms/molecules/organisms/templates/pages

### Component Philosophy: Streamlined & Fully-Featured
**CRITICAL: Consistency and simplicity are paramount**

**Pages (Level 6) - Template-First Approach:**
- **Pages should be lightweight** - delegate layout/structure to templates
- **Always use PageTemplate** as the wrapper: `<PageTemplate title="Page Name">` (only title prop required, no other props unless specifically needed)
- **Never add width constraints in pages** - PageTemplate handles all width/padding/spacing
- Pages should contain ONLY content and business logic, not layout concerns
- Leverage template components (PageTemplate, InfoTemplate, SearchTemplate, etc.) extensively

**Molecules/Organisms/Templates (Levels 3-5) - Fully-Featured:**
- Components must be **complete and production-ready**
- Include all necessary variants, states, and configurations
- Should work out-of-the-box with minimal props
- Favor robust, reusable components over one-off solutions

**Consistency Rules:**
- Default usage should require minimal props: `<PageTemplate title="Page Name">`, `<Card>`, `<Button>`
- Only specify props when deviating from defaults
- Same pattern applies to ALL components, not just templates
- Predictable, simple API surfaces across the entire component library

**Example - Page Structure:**
```typescript
// ✅ CORRECT - Clean page using template
export const MyPage = () => (
  <PageTemplate title="My Page">
    <Hero title="Welcome" subtitle="Description" />
    <Section>
      <Card>Content here</Card>
    </Section>
  </PageTemplate>
);

// ❌ WRONG - Page handling layout concerns
export const MyPage = () => (
  <PageTemplate title="My Page" maxWidth="lg" className="w-full px-4">
    <div className="max-w-4xl mx-auto">  {/* Don't add width in pages */}
      <Hero title="Welcome" subtitle="Description" />
      <div className="container">  {/* Template should handle containers */}
        <Card>Content here</Card>
      </div>
    </div>
  </PageTemplate>
);
```

**This principle is CRITICAL - consistency and simplicity matter more than flexibility.**

## Design Tokens & Styling

### Use Ion Constants for Design Decisions
**Tokenize design system values, keep Tailwind utilities for layout:**

**✅ USE IONS FOR:**
- Spacing values (gap, padding, margin)
- Colors (background, text, border)
- Shadows and effects
- Border radius
- Font sizes (when part of design scale)

**✅ KEEP TAILWIND UTILITIES FOR:**
- Layout composition (flex, grid, block, inline)
- Alignment (items-center, justify-between)
- Positioning (relative, absolute, sticky)
- Display utilities (hidden, overflow-hidden)
- Text alignment (text-center, text-left)

```typescript
import { SPACING, BORDERS, SIZING, COLORS, SHADOWS } from "../1-ions";

// ✅ Correct - Design tokens + layout utilities
className={cn(
  SPACING.GAP.md,           // gap-4 → Use ion (design value)
  BORDERS.RADIUS.lg,        // rounded-lg → Use ion (design value)
  "flex flex-col",          // Keep Tailwind (layout)
  "items-center"            // Keep Tailwind (alignment)
)}

// ❌ Incorrect - Hardcoded design values
className="gap-4 rounded-lg flex flex-col items-center"

// ✅ Also correct - Pure layout utilities are fine
className="flex items-center justify-between"
```

**Rule of thumb:** If changing it affects your design system (spacing scale, colors, etc.), use ions. If it's compositional structure, use Tailwind directly.

### Glassmorphism Pattern
When using glassmorphism effects:
```typescript
<Glass variant="card" className="...">
  // Content with backdrop-blur-sm bg-white/40 dark:bg-black/30
</Glass>
```

### Responsive Design
- Mobile-first approach
- Use `lg:` prefix for desktop breakpoints
- Document both mobile and desktop sizes in comments
  ```typescript
  // Mobile: text-sm (14px), Desktop: text-base (16px)
  className="text-sm lg:text-base"
  ```

## Code Reusability & Modularity

### DRY Principle (Don't Repeat Yourself)
- **Extract reusable logic into shared utilities/hooks**
- **Create reusable components instead of duplicating markup**
- **Use design tokens (ions) instead of repeating values**
- If you copy-paste code, you're doing it wrong

### Component Reusability
- Design components to be flexible and reusable
- Use props for variations instead of creating duplicate components
- Leverage variant systems for different visual states
- Share common logic through hooks or utility functions

### Avoid Redundancy
- Don't duplicate color values - use ion constants
- Don't duplicate spacing logic - use ion constants
- Don't duplicate styling patterns - create reusable components
- Don't duplicate business logic - extract to shared functions

### Examples
```typescript
// ✅ Good - Reusable with variants
const Button = ({ variant = "primary" }) => {
  const variantClass = variantClasses[variant];
  return <button className={cn(baseClass, variantClass)} />;
};

// ❌ Bad - Creating separate components for each variant
const PrimaryButton = () => <button className="bg-primary" />;
const SecondaryButton = () => <button className="bg-secondary" />;
```

## Code Reusability & Modularity

### DRY Principle (Don't Repeat Yourself)
- **Extract reusable logic into shared utilities/hooks**
- **Create reusable components instead of duplicating markup**
- **Use design tokens (ions) instead of repeating values**
- If you copy-paste code, you're doing it wrong

### Component Reusability
- Design components to be flexible and reusable
- Use props for variations instead of creating duplicate components
- Leverage variant systems for different visual states
- Share common logic through hooks or utility functions

### Avoid Redundancy
- Don't duplicate color values - use ion constants
- Don't duplicate spacing logic - use ion constants
- Don't duplicate styling patterns - create reusable components
- Don't duplicate business logic - extract to shared functions

## Component Patterns

### Props Interface
- Always define TypeScript interfaces in separate `.types.ts` files
- Use descriptive prop names
- Include JSDoc comments for complex props

### Variant Systems
Document all variants with:
- Visual description
- Use cases
- Size specifications
- Example usage

Example:
```typescript
/**
 * Variant styles mapping
 * Each variant serves a different semantic purpose:
 * - default: Primary color badge for emphasis
 * - secondary: Neutral badge for secondary information
 * - destructive: Red badge for errors or warnings
 * - outline: Subtle outlined badge for less emphasis
 */
```

### State Management
- Use explicit state variables with descriptive names
- Document state purpose and lifecycle
- Explain side effects in comments

## File Organization

### Imports Order
1. External libraries (React, etc.)
2. Internal hooks
3. Components (atoms → molecules → organisms)
4. Types
5. Utilities
6. Styles/CSS

### Exports
- Use named exports for components
- Export types alongside components
- Group related exports together

## Backend Standards

### Already Following Best Practices
- Backend (`src/`) already uses arrow functions ✅
- Maintains clean separation of concerns ✅
- Uses proper TypeScript interfaces ✅

## Scripts & Tooling

### Package Manager
- **ALWAYS use Bun** for both frontend and backend
- Never use npm, yarn, or pnpm
- Commands: `bun install`, `bun run`, `bun dev`, etc.

### Terminal Commands & File Paths
- **Use absolute paths** in terminal commands to avoid directory navigation issues
- Format: `d:/Programming/Projects/SkillVector/frontend` (forward slashes, full path)
- Prevents `cd` failures and saves on prompt tokens
- Example: `cd "d:/Programming/Projects/SkillVector/frontend" && bun run build`
- Use quotes around paths with spaces

### Script Style
- Use arrow functions in all scripts
- Document script purpose at top of file
- Include usage examples in comments
- Handle errors gracefully

## Testing & Validation

### Frontend Quality Checks
**ALWAYS run these commands after making frontend changes:**
```bash
cd frontend
bun run build    # Check for build errors
bun run lint     # Check for linting issues
```
- Fix all errors before considering work complete
- Build errors indicate TypeScript or bundling issues
- Lint errors show code quality problems

### Before Committing
- Ensure all components have proper documentation
- Verify intermediate variables are used
- Check for inline function calls (should be extracted)
- Confirm arrow functions are used throughout
- Validate design tokens are imported and used
- **Run `bun run build` and `bun run lint` in frontend**

## Specific Don'ts
11. **Create unnecessary .md files or documentation files**
12. **Use npm, yarn, or pnpm instead of Bun**
13. **Skip build/lint checks after frontend changes**

### ❌ NEVER DO:
1. Use function declarations instead of arrow functions
2. Modify files in `frontend/src/components/ui/` folder
3. Use inline cn() calls without intermediate variables
4. Omit pixel values in size/spacing comments
5. Write "slop" code without explanatory comments
6. Use `...existing code...` placeholder comments
7. Hardcode design system values (spacing, colors, shadows, borders) instead of using ion constants
8. Skip component documentation
9. Chain multiple function calls inline
10. Omit use cases in variant documentation
11. **Create unnecessary .md files or documentation files**
12. **Use npm, yarn, or pnpm instead of Bun**
13. **Skip build/lint checks after frontend changes**
14. **Duplicate code or logic** - extract to reusable functions/components
15. **Hardcode values that appear multiple times** - use constants/ions
16. **Create multiple similar components** - use variants instead
17. **Skip atomic levels** - molecules must use atoms, organisms must use molecules, etc.
18. **Reinvent lower-level components** at higher levels without justification
19. **Implement exceptions or "special" components** without discussing with user first
20. **Add width/layout constraints in pages** - templates handle all layout
19. **Implement exceptions or "special" components** without discussing with user first

### ✅ ALWAYS DO:
1. Use arrow functions for all functions/components
2. Add detailed comments explaining purpose and decisions
3. Create intermediate variables for clarity
4. Include pixel values in size comments
5. Document all variants with use cases
6. Use design token constants from ions
7. Maintain generous vertical spacing
8. Explain WHY, not just WHAT
9. Break down complex expressions into readable steps
10. Follow atomic design hierarchy
11. **Use Bun as package manager** (both frontend & backend)
12. **Run `bun run build` and `bun run lint` after frontend changes**
13. **Keep output concise** - avoid creating unnecessary files
14. **Extract reusable logic** into shared utilities/hooks/components
15. **Use variant systems** instead of creating duplicate components
16. **Apply DRY principle** - Don't Repeat Yourself
17. **Build from lower levels** - use existing atoms in molecules, molecules in organisms
18. **Check for existing components** before creating new ones at any level
19. **Discuss with user** if a component seems to need special treatment or exceptions
20. **Keep pages simple** - use `<PageTemplate title="Page Name">` with only title prop unless instructed otherwise

## Quality Checklist

Before considering any component complete:
- [ ] Uses arrow functions
- [ ] Has component-level documentation
- [ ] Variants documented with pixel values
- [ ] Intermediate variables used (no inline cn() calls)
- [ ] Design tokens imported and used
- [ ] Comments explain WHY not just WHAT
- [ ] Use cases documented
- [ ] Proper TypeScript types defined
- [ ] Generous vertical spacing
- [ ] No "slop" code
- [ ] **Frontend: `bun run build` passes**
- [ ] **Frontend: `bun run lint` passes**
- [ ] No unnecessary files created
- [ ] **No duplicate code** - reusable logic extracted
- [ ] **Uses variants** instead of creating similar components
- [ ] **DRY principle applied** - no repeated values or logic
- [ ] **Respects atomic hierarchy** - only uses components from previous levels
- [ ] **No reinvented components** - checked for existing lower-level components first
- [ ] **Pages are lightweight** - templates handle layout, pages contain only content

## Philosophy

> "Code should be written for humans first, machines second. Every future developer (including yourself) should be able to understand the code's purpose and decisions at a glance. Clarity and maintainability trump brevity every time."

> "Modularity and reusability are not optional - they are fundamental. Extract, refactor, and unify. Redundant code is technical debt that compounds with every change."

> "Write reusable, modular code. If you find yourself copying code, stop and extract it into a shared function or component. Redundant code is a maintenance nightmare and a sign of poor architecture."

---

**Last Updated:** February 4, 2026
**Maintained By:** Development Team
**Applies To:** All code in SkillVector repository except `frontend/src/components/ui/`
