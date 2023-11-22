import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog!</h1>
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hi there! 👋 I'm Najma, a passionate developer based in Liverpool.
        <Link href="/about" className="links">
          Click here
        </Link>
        to go to the About page to learn a little bit about me:
      </p>
      <h2 className="text-3xl font-bold mb-4">Background</h2>
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <h2 className="text-3xl font-bold mb-4">Interests and Hobbies</h2>
    </main>
  );
}
