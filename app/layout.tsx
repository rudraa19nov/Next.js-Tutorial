import Link from 'next/link';
import type { ReactNode } from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Rudraa Next.js App',
    template: '%s | Rudraa Next.js App',
  },
  description: 'This is a sample Next.js application created by Rudraa.',
  opensGraph: {
    title: 'Rudraa Next.js App',
    description: 'This is a sample Next.js application created by Rudraa.',
  }
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: '#f5f5f5', padding: '12px', textAlign: 'center' }}>
          <h1>Welcome to Rudraa's Next.js App</h1>
          <nav style={{display:'flex',gap:'12px' ,justifyContent:'center', marginTop:'10px'  }}>
            <Link href="/" style={{ margin: '0 10px' }}>Home</Link>
            <Link href="/about" style={{ margin: '0 10px' }}>About</Link>
            <Link href="/contact" style={{ margin: '0 10px' }}>Contact</Link>
            <Link href="/dashboard" style={{ margin: '0 10px' }}>Dashboard</Link>
            <Link href="/blog" style={{ margin: '0 10px' }}>Blog</Link>
            <Link href="/product" style={{ margin: '0 10px' }}>Product</Link>
            <Link href="/apifront" style={{ margin: '0 10px' }}>ApiPosts</Link>
            <Link href="/apifrontpost" style={{ margin: '0 10px' }}>ApiFrontPost</Link>
          </nav>
          {children}
        </header>

        <footer style={{ backgroundColor: '#f5f5f5', padding: '12px', textAlign: 'center', marginTop: '20px' }}>
          <p>&copy; 2024 Rudraa's Next.js App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}