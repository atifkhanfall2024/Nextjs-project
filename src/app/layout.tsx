import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./_components/Nav";

export const metadata: Metadata = {
  title: "Contact Managment App",
  description: "My First Next Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="bg-white min-h-screen">
          < Navbar/>
       <main className="container mx-auto px-4 py-12"> {children}</main>
      </div>
      </body>
    </html>
  );
}
