import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me Blog",
  description: "A list of travel destinations on my about route.",
};

type travelSearchQuery = {
  sortBy: string;
};

type locationType = {
  name: string;
  id: number;
};

let locations: locationType[] = [
  {
    name: "Paris, France",
    id: 0,
  },
  {
    name: "Kyoto, Japan",
    id: 1,
  },
  {
    name: "Santorini, Greece",
    id: 2,
  },
  {
    name: "Marrakech, Morocco",
    id: 3,
  },
  {
    name: "New York City, USA",
    id: 4,
  },
  {
    name: "Rome, Italy",
    id: 5,
  },
  {
    name: "Cape Town, South Africa",
    id: 6,
  },
  {
    name: "Bora Bora, French Polynesia",
    id: 7,
  },
  {
    name: "Barcelona, Spain",
    id: 8,
  },
  {
    name: "Istanbul, Turkey",
    id: 9,
  },
  {
    name: "Queenstown, New Zealand",
    id: 10,
  },
  {
    name: "Amsterdam, Netherlands",
    id: 11,
  },
  {
    name: "Bali, Indonesia",
    id: 12,
  },
];

function compareLocations(a: locationType, b: locationType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function Page({
  searchParams,
}: {
  searchParams: travelSearchQuery;
}) {
  let sortedLocations = [...locations];

  if (searchParams.sortBy == "asc") {
    sortedLocations.sort(compareLocations);
  } else if (searchParams.sortBy == "desc") {
    sortedLocations.sort(compareLocations).reverse();
  }

  return (
    <div>
      <h2>
        Travel Destinations: List of places i would like to go in the future
      </h2>
      <p>{searchParams.sortBy}</p>
      <br />
      <Link href="/about/travel">Remove the sort</Link>
      <br />
      <Link href="/about/travel?sortBy=asc">Sort by ascending</Link>
      <br />
      <Link href="/about/travel?sortBy=desc">Sort by descending</Link>
      <br />
      <br />
      <br />
      {sortedLocations.map((location) => {
        return (
          <div key={location.id}>
            <Link href={`/about/travel/${location.name.toLowerCase()}`}>
              {location.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
