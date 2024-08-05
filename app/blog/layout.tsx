export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-start w-full h-full min-h-screen gap-4">
      <div className="flex flex-col items-center w-full h-full">
        {children}
      </div>
    </section>
  );
}
