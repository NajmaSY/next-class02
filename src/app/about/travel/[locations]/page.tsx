import Link from "next/link";

type locationParam = { params: { locations: string } };

export function generateMetadata({ params }: locationParam) {
  const modTitle =
    params.locations[0].toUpperCase() + params.locations.slice(1);
  return {
    title: `Najma's Travel destinations - ${modTitle}`,
    description: `Najma's Travel Destinations - Bucket List ${params.locations}`,
  };
}

export default function Page({ params }: locationParam) {
  return (
    <div>
      <h2>This is my dynamic route paramater: {params.locations} </h2>
      <Link href="/about/travel" className="links">{`<-- Go back`}</Link>
    </div>
  );
}
