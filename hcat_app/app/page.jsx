// Creates the home page
import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Header from "/components/header";
import ListGroup from "/components/ListGroup";
import { location, planTypes } from "/data/locationData.json";

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

  let policies = [
    <Link key="weather" className="policy" href="weather">
      Weather Policies
    </Link>,
  ];

  return (
    <>
      <Header />
      <ListGroup className="locations" items={locations} heading="Locations" />
      <ListGroup className="policies" items={policies} heading="Policies" />
    </>
  );
};

export default Home;
