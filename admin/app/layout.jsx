export const metadata = {
  title: 'Admin Portal',
  description: 'Silver Moon Catalog Admin',
};

export default function AdminRootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
