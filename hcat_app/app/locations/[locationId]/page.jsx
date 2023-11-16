import { location, planTypes } from "/data/locationData.json";
import Header from "/components/header";

export default function Locations({ params }) {
  const found = location.find((element) => element.id == params.locationId);

  if (!found) {
    return <h1>404 - Page Not Found</h1>;
  }

  console.log(found);

  return (
    <>
      <Header />
      <h1>{found.name}</h1>
      <p>{found.sport}</p>
      <p>{found.address}</p>
    </>
  );
}
