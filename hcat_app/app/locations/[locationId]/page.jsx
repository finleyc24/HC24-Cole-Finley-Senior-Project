import { location, planTypes } from "/data/locationData.json";
import Header from "/components/header";
import Link from "next/link";
import ListGroup from "/components/ListGroup";

export default function Locations({ params }) {
  const found = location.find((element) => element.id == params.locationId);

  if (!found) {
    return <h1>404 - Page Not Found</h1>;
  }

  console.log(found);

  const planType = planTypes.map((plan) => (
    <Link
      className="planTypes"
      key={plan.id}
      href={`/locations/${encodeURIComponent(
        params.locationId
      )}/planTypes/${encodeURIComponent(plan.id)}`}
    >
      {plan.name}
    </Link>
  ));

  return (
    <>
      <Header />
      <h1>{found.name}</h1>
      <p>{found.sport}</p>
      <p>{found.address}</p>

      <ListGroup
        className="planTypes"
        items={planType}
        heading="Emergency Action Plans"
      />
    </>
  );
}
