import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">My Family</h2>
      <p>
        I have a very large family with 3 brothers, 3 sisters, and many aunts,
        uncles and cousins{" "}
      </p>
      <Link href="/" className="text-gray-700 bg-blue-300 aspect-square">
        Go back to Home
      </Link>
    </div>
  );
}
