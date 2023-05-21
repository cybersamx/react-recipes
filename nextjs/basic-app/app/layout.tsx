import type { ReactNode } from 'react';

import '@/styles/global.css';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>React Recipes - Basic Next.js (App Dir)</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
