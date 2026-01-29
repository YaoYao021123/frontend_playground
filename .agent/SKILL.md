---
name: frontend-playground
description: Use when working in the frontend-playground repository to build or extend the animation playground, manage effect showcases, apply project-wide UI/architecture conventions, or add new animation examples.
---

# Frontend Playground (Main Skill)

## Scope

- This is the project-level skill for the frontend-playground workspace.
- Use this skill as the entry point for any work in this repo.
- Use sub-skills in `.agent/skills` for deeper workflows or specialized guidance.

## Project Sub-Skills (Use as Needed)

- `.agent/skills/frontend-design` for UI structure and layout patterns.
- `.agent/skills/ui-ux-pro-max` for high-fidelity UI/UX decisions.
- `.agent/skills/web-artifacts-builder` for bundling deliverables and artifacts.
- `.agent/skills/webapp-testing` for browser automation and UI validation.
- `.agent/skills/canvas-design` for canvas-based visuals and typography.
- `.agent/skills/algorithmic-art` for generative effects and visual systems.
- `.agent/skills/systematic-debugging` for root-cause debugging workflows.
- `.agent/skills/verification-before-completion` for final QA discipline.
- `.agent/skills/test-driven-development` for skill TDD discipline when editing skills.
- `.agent/skills/writing-skills` for skill authoring rules and test-first edits. References: `references/` for detailed guides, `scripts/` for tools.
- `.agent/skills/theme-factory` for cohesive theme and styling systems.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Build:** Vite

## Core Pattern (Animation Playground)

- **Registry Source of Truth:** Use a data-driven array for effect metadata and imports.
- **Wrapper Isolation:** Wrap effects in a generic card to handle replay/reset and visual framing.
- **Key-Based Reset:** Use the parent `key` prop to force-remount components instead of internal state.
- **Code Export:** Every effect must export its source code as a string for the copy feature.

## Directory Structure

```text
src/
  ├── components/
  │   ├── UI/
  │   │   └── EffectCard.tsx      # Generic wrapper with replay & code copy
  │   └── Effects/                # Atomic effects (isolated)
  │       ├── FadeInScale.tsx
  │       ├── StaggerContainer.tsx
  │       ├── SpringBounce.tsx
  │       ├── TextReveal.tsx
  │       ├── LoadingSpinner.tsx
  │       ├── MorphingShape.tsx
  │       └── index.ts            # Barrel exports
  ├── data/
  │   └── registry.ts             # Effect registry
  ├── App.tsx                     # Main app with category filter
  └── main.tsx
```

## Quick Reference

| Task | How |
|------|-----|
| Add new effect | Create `src/components/Effects/EffectName.tsx` → Export component + code string → Add to `registry.ts` |
| Replay animation | Click play button or change `key` prop on component |
| Copy code | Click code button → shows code panel → click copy button |
| Filter effects | Use category tabs in header |

## Adding a New Effect (Step-by-Step)

### 1. Create Effect Component

Create a new file in `src/components/Effects/EffectName.tsx`:

```tsx
import { motion } from 'framer-motion';

// The animated component
export const EffectName = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 bg-blue-500 rounded-xl"
      />
    </div>
  );
};

// The source code as a string (for copy feature)
export const EffectNameCode = \`import { motion } from 'framer-motion';

export const EffectName = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 bg-blue-500 rounded-xl"
      />
    </div>
  );
};\`;
```

### 2. Update Barrel Export

Add to `src/components/Effects/index.ts`:

```typescript
export { EffectName, EffectNameCode } from './EffectName';
```

### 3. Register in Registry

Add to `src/data/registry.ts`:

```typescript
import { EffectName, EffectNameCode } from '../components/Effects/EffectName';

export const effects: EffectItem[] = [
  // ... existing effects
  {
    id: 'effect-name',           // kebab-case unique ID
    title: 'Effect Name',        // Display title
    description: 'Brief description of what this effect does.',
    category: 'entrance',        // One of: entrance | interaction | loading | text | continuous
    component: EffectName,       // The component reference
    code: EffectNameCode,        // The code string for copy feature
  },
];
```

### 4. Effect Requirements

**MUST have:**
- Centered content: `w-full h-full flex items-center justify-center`
- Self-contained: No external props needed
- Replayable: Animation runs on mount (uses `initial` + `animate`)
- Code export: Export the source code as a string variable

**SHOULD have:**
- Gradient colors: `bg-gradient-to-br from-X to-Y`
- Smooth easing: Use `ease` array or named easing
- Interactive variants: `whileHover`, `whileTap` where appropriate

## Effect Categories

| Category | Use For | Examples |
|----------|---------|----------|
| `entrance` | Page load animations | Fade in, slide up, scale |
| `interaction` | User-triggered animations | Hover, tap, drag |
| `loading` | Loading states | Spinners, skeletons |
| `text` | Typography animations | Reveal, typewriter |
| `continuous` | Background/ambient | Loops, morphing |

## Implementation Details

### The Card Wrapper (EffectCard)

Handles replay and code display:

```tsx
// Key change forces remount
<Component key={triggerKey} />

// Suspense for lazy loading
<Suspense fallback={<span>Loading...</span>}>
  <Component />
</Suspense>
```

### CSS Isolation Rules

- Preview container: `relative overflow-hidden`
- Effect content: Must fit within bounds
- No global CSS: Use Tailwind classes only

### Code Copy Feature

- Code stored as string in component file
- Displayed in collapsible panel
- Copy to clipboard via `navigator.clipboard.writeText()`

## Stop Signs - STOP and Refactor

- **Missing code export:** If effect doesn't export code string → **STOP**. Add `EffectNameCode` export.
- **Props drilling:** If effect requires props → **STOP**. Make it self-contained.
- **Hardcoded in App:** If effect imported directly into App → **STOP**. Use registry pattern.
- **No category:** If effect has no category → **STOP**. Assign to appropriate category.
