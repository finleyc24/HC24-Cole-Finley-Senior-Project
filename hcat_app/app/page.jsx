// Creates the home page
import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Header from "/components/header";
import ListGroup from "/components/ListGroup";
import { location, planTypes } from "/data/locationData.json";
import { policies } from "/data/policyData.json";

const Home = () => {
  const locations = location.map((loc) => (
    <Link
      className="location"
      key={loc.id}
      href={`/locations/${encodeURIComponent(loc.id)}`}
    >
      {loc.name}
    </Link>
  ));

  const policy = policies.map((pol) => (
    <Link
      className="policies"
      key={pol.id}
      href={`/policies/${encodeURIComponent(pol.id)}`}
    >
      {pol.name}
    </Link>
  ));

  return (
    <>
      <Header />
      <ListGroup className="locations" items={locations} heading="Locations" />
      <ListGroup className="policies" items={policy} heading="Policies" />
      <a class="btn btn-primary" href="/emsPlan/page.jsx" role="button">
        EMS Action Plan
      </a>
    </>
  );
};

export default Home;
