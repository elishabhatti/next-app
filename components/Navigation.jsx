import Link from "next/link";

export default function Navigation() {
  return (
    <header className="grid grid-cols-2">
      <div className="">Elisha</div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/clientcomp">Client Component</Link>
          </li>
          <li>
            <Link href="/servercomp">Server Component</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
