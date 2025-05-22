export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
} 