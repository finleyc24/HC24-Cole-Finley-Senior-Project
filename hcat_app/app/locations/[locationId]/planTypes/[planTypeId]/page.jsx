"use client";
import { location, planTypes } from "/data/locationData.json";
import Header from "/components/header";
import ErrorPage from "next/error";

export default function PlanType({ params }) {
  const foundPlan = planTypes.find(
    (element) => element.id == params.planTypeId
  );
  const foundLoc = location.find((el) => el.id == params.locationId);

  if (!foundLoc) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Header />
      <h1 className="location-name">{foundLoc.name}</h1>
      <p className="location-sport">Sport: {foundLoc.sport}</p>
      <p className="location-address">Address: {foundLoc.address}</p>
      <h2 className="plan-name">{foundPlan.name}</h2>
      <p className="plan-description">{foundPlan.description}</p>
    </>
  );
}
