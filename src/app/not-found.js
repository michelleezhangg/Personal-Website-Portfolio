import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lightblue">
      <h1 className="title text-6xl mb-4">404</h1>
      <h3 className="title text-3xl mb-6">Page Not Found</h3>
      <p className="mb-4">Oops! The page you are looking for does not exist.</p>
      <Link href="/" className="button blue-button px-8">
        Home Page
      </Link>
    </div>
  );
}
