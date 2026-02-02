// Happy Hues Color Palette
// Source: https://www.happyhues.co/

export const colors = {
  // Backgrounds
  bgDark: '#094067',      // Deep blue - main background
  bgLight: '#d8eefe',     // Light blue - secondary background
  bgCard: '#fffffe',      // White - card background
  
  // Text
  textMain: '#fffffe',    // White - main text on dark
  textDark: '#094067',    // Deep blue - text on light
  textMuted: '#90b4ce',   // Light gray-blue - muted text
  
  // Accents
  primary: '#3da9fc',     // Bright blue - buttons, links
  secondary: '#ef4565',   // Coral/Pink - highlights, CTAs
  tertiary: '#f9bc60',    // Yellow - warnings, special highlights
  
  // Neutrals
  stroke: '#094067',      // Border color
  gray: '#5f6c7b',        // Gray text
} as const;

// Tailwind class mappings
export const happyHues = {
  // Backgrounds
  'bg-deep': 'bg-[#094067]',
  'bg-light': 'bg-[#d8eefe]',
  'bg-white': 'bg-[#fffffe]',
  
  // Text
  'text-main': 'text-[#fffffe]',
  'text-dark': 'text-[#094067]',
  'text-muted': 'text-[#90b4ce]',
  
  // Accents
  'accent-blue': 'bg-[#3da9fc]',
  'accent-coral': 'bg-[#ef4565]',
  'accent-yellow': 'bg-[#f9bc60]',
  'text-blue': 'text-[#3da9fc]',
  'text-coral': 'text-[#ef4565]',
  'text-yellow': 'text-[#f9bc60]',
  
  // Borders
  'border-deep': 'border-[#094067]',
  'border-muted': 'border-[#90b4ce]',
} as const;
