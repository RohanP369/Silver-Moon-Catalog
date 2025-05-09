import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '220px', background: '#111', color: '#fff', padding: '20px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Admin Panel</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/products">Products</Link>
          <Link href="/admin/collections">Collections</Link>
          <Link href="/admin/clients">Clients</Link>
          <Link href="/admin/settings">Settings</Link>
        </nav>
      </aside>
      <main style={{ flexGrow: 1, padding: '30px' }}>
        {children}
      </main>
    </div>
  );
}
