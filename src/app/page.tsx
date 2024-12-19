export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-[auto_1fr_auto] min-h-screen px-20 py-20 ">
      {/* Navigation */}
      <nav className="col-span-2 row-span-3 bg-yellow-400 p-4 flex items-center justify-center border-4 border-white">
        <p className="text-lg font-semibold">Nav</p>
      </nav>

      {/* Header */}
      <header className="col-span-10 bg-yellow-400 p-4 flex items-center justify-center border-4 border-white">
        <p className="text-lg font-semibold">Header</p>
      </header>

      {/* Main */}
      <main className="col-span-8 bg-yellow-400 p-4 flex items-center justify-center border-4 border-white">
        <p className="text-lg font-semibold">Article</p>
      </main>

      {/* Ads  */}
      <aside className="col-span-2 bg-yellow-400 p-4 flex items-center justify-center border-4 border-white">
        <p className="text-lg font-semibold">Ads</p>
      </aside>

      {/* Footer */}
      <footer className="col-span-10 bg-yellow-400 p-4 flex items-center justify-center border-4 border-white">
        <p className="text-lg font-semibold">Footer</p>
      </footer>
    </div>
  );
}
