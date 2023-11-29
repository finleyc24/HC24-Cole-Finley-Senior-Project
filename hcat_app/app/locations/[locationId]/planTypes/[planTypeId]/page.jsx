import { location, planTypes } from "/data/locationData.json";
import Header from "/components/header";

export default function PlanType({ params }) {
  const foundPlan = planTypes.find(
    (element) => element.id == params.planTypeId
  );
  const foundLoc = location.find((el) => el.id == params.locationId);

  if (!foundPlan) {
    return <h1>404 - Page Not Found</h1>;
  }

  return (
    <>
      <Header />
      <h1>{foundLoc.name}</h1>
      <p>{foundLoc.sport}</p>
      <p>{foundLoc.address}</p>
      <h2>{foundPlan.name}</h2>
      <p>{foundPlan.description}</p>
    </>
  );
}
