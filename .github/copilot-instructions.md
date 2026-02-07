# SkillVector Project Rules & Coding Standards

## 🎯 PROFESSIONAL GUIDANCE PROTOCOL

**When user asks for advice, recommendations, or "what should I do?":**

### Research-First Approach:
1. **Think like a senior developer** - What would experienced professionals do in this situation?
2. **Search the web for best practices** - Unless you already have authoritative data
3. **Look for industry standards** - Official docs, established patterns, proven approaches
4. **Verify with real-world examples** - Check how popular projects/libraries solve this
5. **Provide evidence-based recommendations** - Back up advice with sources

### When to Search Web:
- ✅ **ALWAYS** when asked for advice on architecture, patterns, organization
- ✅ **ALWAYS** when discussing best practices or "what professionals do"
- ✅ **ALWAYS** when comparing approaches or debating solutions
- ✅ **ALWAYS** for framework-specific conventions (Storybook, React, TypeScript, etc.)
- ❌ **SKIP** only when you have definitive, up-to-date knowledge in your training data

### Authoritative Programming Sources ONLY:

**🏆 PLATINUM TIER - Always Trustworthy:**
- Official framework documentation (React, Next.js, TypeScript, Vite, Vue, Svelte, etc.)
- Official language docs (JavaScript/MDN, TypeScript docs, Python docs)
- Major framework team blogs (React Blog, Vue Blog, Svelte Blog)
- W3C specifications and MDN Web Docs

**🥇 GOLD TIER - Highly Reliable:**
- Popular design system libraries (Material-UI, Chakra UI, Radix UI, shadcn/ui, GitHub Primer, Ant Design)
- Major tech company engineering blogs (Vercel, GitHub, Meta Engineering, Google Developers, Netlify)
- Framework-specific docs (Storybook, TanStack, React Router, etc.)
- Official open-source project repos (React, Vue, Svelte GitHub repos)
- CSS-Tricks, web.dev, Smashing Magazine

**🥈 SILVER TIER - Generally Reliable (Verify Author Credentials):**
- Established developer blogs (Kent C. Dodds, Josh Comeau, Dan Abramov, etc.)
- Medium articles from recognized developers/companies
- Dev.to articles from experienced authors
- Well-maintained open-source project documentation
- Technical conference talks/slides from known speakers

**🥉 BRONZE TIER - Use with Caution (Cross-Reference Required):**
- Stack Overflow answers (check upvotes and date)
- Reddit r/programming, r/reactjs discussions (check community consensus)
- Personal blogs from unknown authors (verify with other sources)
- Tutorial sites (check publication date and author background)

**❌ AVOID - Non-Technical/Irrelevant:**
- Government websites (GOV.UK, .gov sites, etc.)
- Generic business/marketing sites
- Non-programming tutorial mills
- Outdated blog posts (pre-2020 for fast-moving frameworks)
- Sites not focused on software development
- AI-generated content farms
- Sites with poor English or unclear authorship

**Source Selection Priority:**
1. Start with PLATINUM sources for official answers
2. Use GOLD sources for implementation patterns and best practices
3. Consult SILVER sources for specific use cases and real-world examples
4. Only use BRONZE if higher tiers don't cover the topic (and cross-reference)
5. NEVER use sources from the AVOID list

### What Seniors Do:
- Research before deciding (official docs, GitHub discussions, community consensus)
- Follow established conventions over reinventing
- Prioritize maintainability and team understanding
- Consider long-term implications, not just immediate solutions
- Look at how popular libraries/projects solve similar problems
- **Use tech-focused sources** - not random websites

**Think: "What would the React/TypeScript/Storybook team recommend?" - then verify it from programming sources.**

---

## 🚨 RULE #0: ABSOLUTE COMPLETENESS - NON-NEGOTIABLE 🚨

**THIS IS THE MOST IMPORTANT RULE. VIOLATING THIS RULE IS UNACCEPTABLE.**

### WHEN USER SAYS "EVERY FILE" OR "ALL FILES" - YOU PROCESS **EVERY. SINGLE. FILE.**

**NO EXCEPTIONS. NO SHORTCUTS. NO SAMPLING. NO "REPRESENTATIVE EXAMPLES."**

### DEFAULT SCOPE:
- **"all files" = ALL .tsx files in frontend/src/components/** (excluding ui/ and *.stories.tsx)**
- **"every file" = EVERY SINGLE .tsx file in frontend/src/components/** (excluding ui/ and *.stories.tsx)**
- Use `maxResults=500` minimum when searching
- Count MUST match final processed count
- **EXCLUDE .stories.tsx files** - they are auto-generated

### Mandatory Execution Protocol:
1. **SEARCH:** `file_search` with `maxResults=500` for `frontend/src/components/**/*.tsx`
2. **FILTER:** Exclude `frontend/src/components/ui/**` AND `**/*.stories.tsx` files
3. **COUNT:** Tell user exact total: "Found X files to process (excluding ui/ and stories)"
4. **PROCESS:** Go through EVERY SINGLE file - use batch processing/subagent for 50+ files
5. **VERIFY:** Confirm "Processed ALL X/X files" with exact count match

### When User Says:
- **"for each and every file"** → Process ALL .tsx in components (excluding ui/ and stories), not 18 out of 90
- **"yeah do so, for each and every file"** → They mean EVERY file, stop making excuses
- **"all components"** → ALL .tsx component files (excluding ui/ and stories)
- **Context: components folder** → Assume ALL .tsx files unless specified otherwise

### CRITICAL RULES:
1. **NEVER process only 20 files when there are 90+ total** - this is FAILURE
2. **NEVER give excuses** - just process ALL files using subagent or batch tools
3. **ALWAYS verify final count matches initial count** - 90/90 not 20/90
4. **Skip ui/ folder per project rules** - but process EVERYTHING else
5. **Skip *.stories.tsx files** - they are auto-generated
6. **Use batch processing for 50+ files** - don't do one-by-one
7. **NO TALKING - JUST WORK** - User wants results, not explanations

### If You Process Less Than 100% of Non-UI, Non-Stories Files:
- You have **FAILED** this task completely
- User will be frustrated (rightfully so)
- You must START OVER and process **ALL** files
- No excuses about "already processed" or "main files" - do ALL
- **RESULTS NOT WORDS** - shut up and process every single file

## Code Style & Readability

### Human-Readable Code Philosophy
- **Always prioritize readability over brevity**
- Use detailed comments explaining WHY, not just WHAT
- Add intermediate variables instead of chaining function calls
- Include generous vertical spacing between logical sections
- Never use placeholder comments like `...existing code...`

### Inline Comments - MANDATORY for All Code Changes
**CRITICAL: Every code change, refactor, or addition MUST include inline comments**

**When making ANY changes to code:**
- **ALWAYS add inline comments** explaining what each section does
- Group related code logically and comment each group
- Explain the purpose, not just restate the code
- Use inline comments (`//`) to organize and clarify

**Examples:**
```typescript
// ✅ CORRECT - Organized with inline comments
className={cn(
  // Layout & Structure
  "flex items-center justify-between",
  // Spacing
  SPACING.GAP.md,
  SPACING.PADDING.md,
  // Visual Styling
  BORDERS.RADIUS.lg,
  COLORS.SURFACE.card,
  // Interactive States
  "hover:shadow-lg transition-shadow",
)}

// State management
const [isOpen, setIsOpen] = useState(false);

// Handle user click - toggle menu visibility
const handleClick = () => {
  setIsOpen(!isOpen);
};

// ❌ WRONG - No comments explaining code
className={cn("flex items-center justify-between", SPACING.GAP.md, SPACING.PADDING.md, BORDERS.RADIUS.lg)}

const [isOpen, setIsOpen] = useState(false);
const handleClick = () => {
  setIsOpen(!isOpen);
};
```

**This applies to ALL code:**
- Component refactors
- New features
- Bug fixes
- Utility functions
- Type definitions
- Configuration files

**NO EXCEPTIONS - Every change should be self-documenting through inline comments.**

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

### ION TOKENS - ABSOLUTE REQUIREMENT
**CRITICAL: ALL design system values MUST be defined in ions, NEVER hardcoded**

**Ion tokens are the ONLY source of truth for:**
- Colors (background, text, borders, hover states, focus states)
- Spacing (gap, padding, margin)
- Sizing (width, height, button sizes, icon sizes)
- Typography (font sizes, weights, line heights, combinations)
- Borders (radius, width, styles)
- Shadows and effects
- Transitions and animations
- Z-index layers
- Opacity values

**✅ ALWAYS USE ION TOKENS:**

**CRITICAL: Static vs Dynamic Ion Usage**

Ion tokens use CSS custom properties (e.g., `--hover-primary`, `--spacing-gap-md`). How you reference them depends on whether you're writing **static class strings** or **dynamic inline styles**:

**1. STATIC Classes (Tailwind/CVA) - Use CSS vars directly with proper color space:**
```typescript
// ✅ CORRECT - Static class strings (CVA, className templates)
// Match the color space used in CSS (oklch, hsl, rgb, etc.)
const buttonVariants = cva(
  "hover:bg-[oklch(var(--hover-primary))]"      // If CSS uses oklch()
  "hover:bg-[hsl(var(--hover-primary))]"        // If CSS uses hsl()
);

className="hover:bg-[oklch(var(--hover-primary))]"  // ✅ Works with Tailwind (oklch format)
className="text-[hsl(var(--color-primary))]"        // ✅ Works with Tailwind (hsl format)

// ❌ WRONG - Template literals don't work in static contexts
className={`hover:bg-[${COLORS.hover.primary}]`}  // ❌ Tailwind can't process runtime values
const variants = cva(`bg-[${COLORS.primary}]`)    // ❌ CVA needs static strings

// ❌ WRONG - Color space mismatch
className="hover:bg-[hsl(var(--hover-primary))]"  // ❌ If CSS defines it as oklch()
```

**2. DYNAMIC Styles (Inline/Runtime) - Use COLORS constants:**
```typescript
// ✅ CORRECT - Dynamic inline styles or runtime manipulation
import { COLORS } from "../1-ions";

style={{ backgroundColor: COLORS.hover.primary }}  // ✅ Inline styles work
style={{ color: COLORS.primary.foreground }}       // ✅ Runtime values work

const bgColor = COLORS.hover.primary;              // ✅ Dynamic assignment works
```

**Regular Ion Token Usage (Non-Color):**
```typescript
// Spacing
import { SPACING } from "../1-ions";
className={SPACING.GAP.md}                               // ✅ Correct
className="gap-4"                                        // ❌ WRONG - hardcoded spacing

// Sizing
import { SIZING } from "../1-ions";
className={SIZING.BUTTON.md}                             // ✅ Correct
className="h-10 px-4"                                    // ❌ WRONG - hardcoded sizes

// Icon Sizes
import { SIZING } from "../1-ions";
<Icon className={SIZING.ICON.lg} />                      // ✅ Correct - uses size-6 (24px)
<Icon className="h-6 w-6" />                             // ❌ WRONG - hardcoded icon size

// Typography
import { TYPOGRAPHY } from "../1-ions";
className={TYPOGRAPHY.FONT_SIZE.lg}                      // ✅ Correct
className="text-lg font-bold"                            // ❌ WRONG - hardcoded typography
```

**Why This Matters:**
- **Tailwind JIT** (Just-In-Time compiler) needs literal strings at build time
- **CVA** (class-variance-authority) generates static class strings
- **Color space must match** - if CSS uses `oklch()`, Tailwind classes must use `oklch(var(--custom-prop))`
- **Template literals** like `` `hover:bg-[${COLORS.hover.primary}]` `` are runtime values
- Tailwind can't scan runtime variables, only literal strings in your source code
- **Both approaches still use the SAME ion tokens** - just different syntax for different contexts

**❌ NEVER HARDCODE:**
- OKLCH/HSL/RGB color values directly in components
- Icon sizes (`h-4 w-4`, `h-5 w-5`, `h-6 w-6`, etc.) - use SIZING.ICON.*
- Button/input heights and padding - use SIZING.BUTTON.* or SIZING.INPUT.*
- Pixel values for spacing, sizing, or typography
- Arbitrary CSS values that could be reusable
- Hover/focus/active state colors
- Transition durations or easing functions

**✅ ACCEPTABLE TO HARDCODE (Layout Utilities):**
- Flexbox/Grid layout (`flex`, `grid`, `flex-col`, `grid-cols-4`)
- Alignment (`items-center`, `justify-between`, `self-start`)
- Positioning (`relative`, `absolute`, `sticky`, `fixed`)
- Display (`block`, `inline`, `hidden`, `overflow-hidden`)
- Text alignment (`text-center`, `text-left`, `text-right`)
- Flex/Grid utilities (`flex-1`, `grow`, `shrink-0`, `min-w-0`)

**Creating New Ion Tokens:**
When you need a new design value:
1. **Check if it already exists** in ions first
2. **Add it to the appropriate ion file** (colors.ts, spacing.ts, sizing.ts, etc.)
3. **Define CSS custom properties** in index.css if needed
4. **Export from ions/index.ts** for easy import
5. **Document the token** with JSDoc comments explaining usage

**Example - Adding New Hover Colors:**
```typescript
// ✅ CORRECT - Add to ions/colors.ts
export const colors = {
  // ... existing colors
  hover: {
    primary: "hsl(var(--hover-primary))",
    destructive: "hsl(var(--hover-destructive))",
    // ... more hover states
  },
} as const;

// Then in index.css
:root {
  --hover-primary: oklch(0.55 0.24 350);
  --hover-destructive: oklch(0.52 0.26 15);
}

// Usage in components
import { COLORS } from "../1-ions";
hover:bg-[${COLORS.hover.primary}]  // ✅ Uses ion token
```

**Enforcement:**
- Before committing, scan ALL components for hardcoded values
- Use grep to search for violations:
  - Colors: `bg-\[oklch|text-\[oklch|border-\[oklch`
  - Icon sizes: `h-[0-9] w-[0-9]|className="h-\d+ w-\d+"`
  - Spacing: `gap-\d+|p-\d+|px-\d+|py-\d+|m-\d+` (when not layout utilities)
  - Button heights: `h-8|h-10|h-11|h-12` (in button contexts)
- Move ALL violations to appropriate ion files
- Update components to use ion imports
- **When user asks to "rescan" or "check for hardcoded values":**
  1. Search with: `className="[^"]*\b(h|w)-\d+` for size violations
  2. Search with: `bg-\[oklch|text-\[oklch` for color violations
  3. Identify which files violate ion usage rules
  4. Exclude: `.stories.tsx`, `ui/` folder, `.data.tsx` files (icons are OK there)
  5. Report findings and propose fixes

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
21. **Make code changes without inline comments** - every change needs explanation

### ✅ ALWAYS DO:
1. Use arrow functions for all functions/components
2. **Add inline comments to ALL code changes** - explain what each section does
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
21. **Add comments when refactoring** - explain the purpose of each logical group
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
- [ ] **Has inline comments explaining all code changes**
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
