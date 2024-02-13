/**
 * React component to create a page for details of a specific plan type.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.params - The parameters passed to the component.
 * @param {string} props.params.locationId - The ID of the location associated with the plan type.
 * @param {string} props.params.planTypeId - The ID of the plan type to be displayed.
 *
 * @returns {JSX.Element} - The React component to create the plan type page.
 */

"use client";
import { location, planTypes } from "/data/locationData.json";
import Header from "/components/header";
import ErrorPage from "next/error";

export default function PlanType({ params }) {
  // Find the plantype using the plantype Id from the json file.
  const foundPlan = planTypes.find(
    (element) => element.id == params.planTypeId
  );

  // Find the location using the location id from the json file.
  const foundLoc = location.find((el) => el.id == params.locationId);

  // If no location or plan type found return the NextJS error page.
  if (!foundLoc) {
    return <ErrorPage statusCode={404} />;
  }

  // Create the plantype page that has a header, locations, and plantype details.
  return (
    <>
      <Header />
      <h1 className="location-name">{foundLoc.name}</h1>
      <p className="location-sport">Sport: {foundLoc.sport}</p>
      <p className="location-address">Address: {foundLoc.address}</p>
      <h2 className="plan-name">{foundPlan.name}</h2>
      <p className="plan-description">{foundPlan.description}</p>
      <a
        id="emsActionBtn"
        className="btn btn-primary"
        href="/emsPlan/page.jsx"
        role="button"
      >
        EMS Action Plan
      </a>
    </>
  );
}
