// Creates the home page
import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Header from "/components/header";
import ListGroup from "/components/ListGroup";

const Home = () => {
  let locations = [
    <Link key="alumnistadium" className="location" href="locations/1">
      Alumni Stadium
    </Link>,
    <Link key="horner" className="location" href="locations/2">
      Horner Center
    </Link>,
  ];

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
