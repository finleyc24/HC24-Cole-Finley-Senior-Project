"use client";
import { location, planTypes } from "/data/locationData.json";
import Header from "/components/header";
import Link from "next/link";
import ListGroup from "/components/ListGroup";
import ErrorPage from "next/error";

export default function Locations({ params }) {
  const found = location.find((element) => element.id == params.locationId);

  if (!found) {
    return <ErrorPage statusCode={404} />;
  }
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
      <h1 className="location-name">{found.name}</h1>
      <p className="location-sport">Sport: {found.sport}</p>
      <p className="location-address">Address: {found.address}</p>

      <ListGroup
        className="planTypes"
        items={planType}
        heading="Emergency Action Plans"
      />
    </>
  );
}
