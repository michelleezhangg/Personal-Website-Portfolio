import React from 'react';
import "./globals.css";

export const metadata = {
  title: "PORTFOLIO | Michelle Zhang",
  description: "Michelle Zhang (Software Engineer) Personal Website Portfolio",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/favicon/site.webmanifest' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon/favicon-16x16.png' sizes='16x16' type='image/png' />
        <link rel='icon' href='/favicon/favicon-32x32.png' sizes='32x32' type='image/png' />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel='apple-touch-icon' href='/favicon/apple-touch-icon.png' sizes='180x180' type='image/png' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <meta name='theme-color' content='#ebf1ff' />
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
