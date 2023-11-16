import { location, planTypes } from "/data/locationData.json";

export default function PlanType({ params }) {
  return (
    <h1>
      PlanType {params.planTypeId} for location {params.locationId}
    </h1>
  );
}
