import React from 'react';
import "./globals.css";

export const metadata = {
  title: "PORTFOLIO | Michelle Zhang",
  description: "Michelle Zhang (Software Engineer) Personal Website Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
