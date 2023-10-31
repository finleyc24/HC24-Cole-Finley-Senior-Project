import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Header from "/components/header";
import ListGroup from "/components/ListGroup";

const Home = () => {
  let locations = [
    <Link className="location" href="alumnistadium">
      Alumni Stadium
    </Link>,
    <Link className="location" href="horner">
      Horner Center
    </Link>,
    "Test",
  ];

  let policies = [
    <Link className="policy" href="weather">
      Weather Policies
    </Link>,
    "Test",
  ];

  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <aside className="leftaside">
          <div>
            <ListGroup
              className="locations"
              items={locations}
              heading="Locations"
            />
          </div>
        </aside>
        <aside className="rightaside">
          <div>
            <ListGroup
              className="policies"
              items={policies}
              heading="Policies"
            />
          </div>
        </aside>
      </main>
    </>
  );
};

export default Home;
