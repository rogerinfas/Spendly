/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// Paleta de colores basada en web-misti
// Color principal: #0e6749 (Jewel verde)
const tintColorLight = '#0e6749';
const tintColorDark = '#1a8a66';

export const Colors = {
  light: {
    text: '#1f2937', // --foreground (aproximación de oklch(0.129 0.042 264.695))
    background: '#ffffff', // --background (oklch(1 0 0))
    tint: tintColorLight, // --primary
    icon: '#6b7280', // --muted-foreground (aproximación)
    tabIconDefault: '#6b7280', // --muted-foreground
    tabIconSelected: tintColorLight, // --primary
    primary: '#0e6749',
    secondary: '#6ba68a',
    muted: '#f5f5f5', // --muted (aproximación de oklch(0.968 0.007 247.896))
    accent: '#f5f5f5', // --accent
    destructive: '#ef4444', // --destructive (aproximación)
    border: '#e5e7eb', // --border (aproximación de oklch(0.929 0.013 255.508))
  },
  dark: {
    text: '#f9fafb', // --foreground (aproximación de oklch(0.984 0.003 247.858))
    background: '#1f2937', // --background (aproximación de oklch(0.129 0.042 264.695))
    tint: tintColorDark, // --primary (modo oscuro)
    icon: '#9ca3af', // --muted-foreground (aproximación)
    tabIconDefault: '#9ca3af', // --muted-foreground
    tabIconSelected: tintColorDark, // --primary
    primary: '#1a8a66',
    secondary: '#5a8f7d',
    muted: '#374151', // --muted (aproximación de oklch(0.279 0.041 260.031))
    accent: '#374151', // --accent
    destructive: '#f87171', // --destructive (aproximación)
    border: 'rgba(255, 255, 255, 0.1)', // --border
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
