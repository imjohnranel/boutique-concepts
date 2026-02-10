# UI System & Design Language

## 1. Color Palette (OKLCH)
Strictly use these variables for all Tailwind/shadcn components. Do not use HSL or Hex.

:root {
  --background: oklch(0.9779 0.0042 56.3756);
  --foreground: oklch(0.2178 0 0);
  --primary: oklch(0.4650 0.1470 24.9381);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9625 0.0385 89.0943);
  --accent: oklch(0.9619 0.0580 95.6174);
  /* Full variables list as provided in user spec */
}

## 2. Typography Rules
- **Headings & Product Titles:** Use `var(--font-serif)` (Libre Baskerville). It represents the "Wedding/Luxury" aspect.
- **UI Elements & Body:** Use `var(--font-sans)` (Poppins). It represents the "Modern/Tech/Otaku" aspect.
- **Code/Status:** Use `var(--font-mono)` (IBM Plex Mono).

## 3. Visual Identity: "The Elegant Otaku"
- **Cards:** Use `--shadow-sm`. On hover, transition to `--shadow-md`.
- **Borders:** Use `--radius: 0.375rem` for a sharp, modern professional look.
- **Navigation:** Mobile-first, but desktop must have a persistent category sidebar for "Wedding," "Cosplay," and "Accessories."