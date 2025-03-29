import React from 'react';
import { SvgXml } from 'react-native-svg';

const lucideIcons = {
  home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v7a2 2 0 0 1-2 2h-6v4h-4v-4H5a2 2 0 0 1-2-2V9z"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 21l-5.5-5.5M17 10a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 12c-3.866 0-7 1.12-7 4v2h14v-2c0-2.88-3.134-4-7-4z"/></svg>`,
};

export default function LucideIcon({ name, size = 24, color = 'black' }) {
  const icon = lucideIcons[name];
  return <SvgXml xml={icon} width={size} height={size} fill={color} />;
}
