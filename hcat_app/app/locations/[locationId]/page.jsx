/**
 * React component to create a page for displaying location details.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.params - The parameters passed to the component.
 * @param {string} props.params.locationId - The ID of the location from locationData.json.
 *
 * @returns {JSX.Element} - The React component to create location page.
 */

"use client";
import { location, planTypes } from "/data/locationData.json";
import Header from "/components/header";
import Link from "next/link";
import ListGroup from "/components/ListGroup";
import ErrorPage from "next/error";

export default function Locations({ params }) {
  // Find the location using the location ID from locationData.json
  const found = location.find((element) => element.id == params.locationId);

  // if no location is found return the NextJS error page
  if (!found) {
    return <ErrorPage statusCode={404} />;
  }

  // Create an array from links to different plantype pages.
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

  // Create the location page with the header, location details, and the plan types list.
  return (
    <>
      <Header />
      <h1 className="location-name">{found.name}</h1>
      <p className="location-sport">Sport: {found.sport}</p>
      <p className="location-address">Address: {found.address}</p>

      <ListGroup
        className="planTypes"
        items={planType}
        heading="Emergency Action Plans"
      />
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
