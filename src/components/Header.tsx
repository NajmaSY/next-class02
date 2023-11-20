export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-3xl p-8 font-mono">Najma Saeed</h1>
      <nav>
        <a href="/">
          <span className="mr-4">Home</span>
        </a>
        <a href="/about">
          <span className="mr-4">About</span>
        </a>
        <a href="/about/family">
          <span className="mr-4">Family</span>
        </a>
      </nav>
    </header>
  );
}
