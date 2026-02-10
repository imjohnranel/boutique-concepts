# Design System Master File

> **LOGIC:** This is the source of truth for "The Elegant Otaku" design system.
> All UI components must adhere to these tokens and patterns.

---

**Project:** Boutique Concepts (Elegant Otaku)
**Generated:** 2024-02-14
**Category:** E-commerce / Boutique

---

## Global Rules

### Color Palette (OKLCH)

| Role | Token | Value | CSS Variable |
|------|-------|-------|--------------|
| Primary | `primary` | `oklch(0.4650 0.1470 24.9381)` | `--primary` |
| Secondary | `secondary` | `oklch(0.9625 0.0385 89.0943)` | `--secondary` |
| Accent | `accent` | `oklch(0.9619 0.0580 95.6174)` | `--accent` |
| Background | `background` | `oklch(0.9779 0.0042 56.3756)` | `--background` |
| Foreground | `foreground` | `oklch(0.2178 0 0)` | `--foreground` |
| Muted | `muted` | `oklch(0.96 0 0)` | `--muted` |
| Destructive | `destructive` | `oklch(0.577 0.245 27.325)` | `--destructive` |

**Color Notes:**
- Strictly use OKLCH for perceptually uniform colors.
- Primary is a deep, rich red-orange ("Otaku Passion").
- Background is slightly warm off-white, not pure #FFFFFF.

### Typography

- **Heading Font:** Libre Baskerville (Serif) - `font-serif` / `--font-libre-baskerville`
- **Body Font:** Poppins (Sans-serif) - `font-sans` / `--font-poppins`
- **Code Font:** IBM Plex Mono - `font-mono` / `--font-ibm-plex-mono`

**Mood:** elegant, curated, modern, passionate.

### Radius & Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `0.375rem` | Buttons, Cards, Inputs |
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Default card state |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1)` | Hover state |

---

## Component Specs

### Buttons

```tsx
// Variant: Default (Primary)
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Shop Collection
</Button>

// Variant: Outline
<Button variant="outline" className="border-input hover:bg-accent hover:text-accent-foreground">
  View Details
</Button>

// Variant: Ghost (Icon only)
<Button variant="ghost" size="icon">
  <Heart className="h-4 w-4" />
</Button>
```

### Cards

```tsx
<Card className="rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
  <CardHeader>
    <CardTitle className="font-serif text-2xl">Product Name</CardTitle>
  </CardHeader>
  <CardContent>
    ...
  </CardContent>
</Card>
```

### Badges

```tsx
// Rental Item
<Badge variant="secondary">RENTAL</Badge>

// Sale Item
<Badge variant="default">SALE</Badge>
```

---

## Layout Patterns

### Page Pattern
**Pattern Name:** Hero + Featured Grid + CTA

- **Structure:**
  1. Sticky Header (Logo + Nav + Search + Cart)
  2. Hero Section (Gradient Background + Serif Heading + Search + CTAs)
  3. Featured Collections Grid (Product Cards)
  4. Footer
- **CTA Placement:** Primary ("Shop Collection") above the fold in Hero.
- **Mobile:** Navigation collapses into a Sheet (Side Drawer).

---

## Anti-Patterns (Do NOT Use)

- ❌ **System Fonts:** Do not use Arial/Helvetica. Always use Poppins/Libre Baskerville.
- ❌ **Hex Colors:** Do not use raw Hex codes like `#ff0000`. Use the `--primary` variables.
- ❌ **Boxy Shadows:** Avoid harsh shadows. Use `shadow-sm` and `shadow-md` from Tailwind.
- ❌ **Capitals in Body:** Do not use all-caps for body text. Only for Badges or small labels.
