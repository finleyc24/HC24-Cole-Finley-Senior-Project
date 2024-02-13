/**
 * React component that makes the home page of the web app.
 * Creates two list groups that creates a locations and policy selection area.
 *
 * @returns {JSX.Element} - The React component for the home page
 */

import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Header from "/components/header";
import ListGroup from "/components/ListGroup";
import { location, planTypes } from "/data/locationData.json";
import { policies } from "/data/policyData.json";

const Home = () => {
  // Creates an array of links to location pages using locationData.json
  const locations = location.map((loc) => (
    <Link
      className="location"
      key={loc.id}
      href={`/locations/${encodeURIComponent(loc.id)}`}
    >
      {loc.name}
    </Link>
  ));

  // Creates an array of links to policy pages using policyData.json
  const policy = policies.map((pol) => (
    <Link
      className="policies"
      key={pol.id}
      href={`/policies/${encodeURIComponent(pol.id)}`}
    >
      {pol.name}
    </Link>
  ));

  // Create the home page with the header component,
  //location and policy lists, and the EMS action plan button

  return (
    <>
      <Header />
      <ListGroup className="locations" items={locations} heading="Locations" />
      <ListGroup className="policies" items={policy} heading="Policies" />
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
};

export default Home;
