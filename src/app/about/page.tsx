import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Background</h2>
      <p className="text-gray-700">
        I have a background in Psychology, and I graduated from the University
        of Manchester with a degree in Psychology.
      </p>
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <p className="text-gray-700">
        I am currently enrolled in Tech Educator Full Stack MERN bootcamp,
        training to become a software developer. My journey started in September
        2023, where I became full involved for the next 3 months creating
        projects and learning how to code.
      </p>
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <p className="text-gray-700">
        Frontend: HTML, CSS, Javascript, React Backend: Express.js Database:
        MongoDB Other: Github
      </p>
      <h2 className="text-3xl font-bold mb-4">Interests and Hobbies</h2>
      <p className="text-gray-700">
        When I'm not coding, you can find me at home cooking a dish or baking a
        cake. I love Baking, and I'm always up for making all types of cakes for
        my family and friends.
      </p>
      <Link href="about/me" className="text-gray-700 bg-blue-300 aspect-square">
        Next Page
      </Link>
      <br />
    </div>
  );
}
