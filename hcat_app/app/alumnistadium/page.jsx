// Creates the page for the Alumni Stadium EAPs
//Dynamically updates EAP information with a List Group

import data from "/components/data/data.json";
import Header from "/components/header";
import ListGroup from "/components/ListGroup";

let eaps = ["Head Injury", "Neck Injury", "Back Injury"];

const AlumniStadium = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div>Venue: {data.venue}</div>
        <div>Sport: {data.sport}</div>
        <div>Address: {data.address}</div>
        <div>
          <ListGroup
            className="eaps"
            items={eaps}
            heading="Emergency Action Plans"
          />
        </div>
      </div>
    </>
  );
};

export default AlumniStadium;
