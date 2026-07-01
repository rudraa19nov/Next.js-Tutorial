import type { ReactNode } from 'react';
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
       <section style={{ backgroundColor: '#e0e0e0', padding: '20px', minHeight: '100vh' }}>
        <aside style={{ backgroundColor: '#c0c0c0', padding: '15px', marginBottom: '20px' }}>
            <h2>Dashboard Sidebar</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><a href="/dashboard/overview" style={{ textDecoration: 'none', color: '#333' }}>Overview</a></li>
                <li><a href="/dashboard/settings" style={{ textDecoration: 'none', color: '#333' }}>Settings</a></li>
                <li><a href="/dashboard/analytics" style={{ textDecoration: 'none', color: '#333' }}>Analytics</a></li>
            </ul>
        </aside>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
            {children}
        </div>
       </section>
    );
}