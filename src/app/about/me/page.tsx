import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>About Me</p>
      <Link href="/about/family">Next Page</Link>
    </div>
  );
}
