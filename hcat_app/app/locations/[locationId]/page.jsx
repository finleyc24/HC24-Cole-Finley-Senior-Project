import { location, planTypes } from "/data/locationData.json";

export default function Locations({ params }) {
  const found = location.find((element) => element.id == params.locationId);

  if (!found) {
    return <h1>404 - Page Not Found</h1>;
  }

  console.log(found);

  return <h1>{JSON.stringify(found)}</h1>;
}
