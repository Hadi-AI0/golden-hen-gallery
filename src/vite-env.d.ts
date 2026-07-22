// Google Analytics environment variable
interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Image imports
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';
declare module '*.webp';

// CSS imports
declare module '*.css';

// Crypto polyfill type
interface Crypto {
  randomUUID?: () => string;
}