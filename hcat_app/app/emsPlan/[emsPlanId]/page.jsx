import React from "react";
import Header from "/components/header";

const page = () => {
  return (
    <>
      <Header />
      <h1>EMS Action Plan</h1>
      <h3>Call 911</h3> <h3>call campus safety 812-866-7999</h3>
      <p>Have someone bring the AED.</p>{" "}
      <p>
        Have someone familiar with the location to direct EMS to the scene.{" "}
      </p>{" "}
      <h2>What to tell 911 dispatcher: </h2>{" "}
      <p>
        Provide name and number of caller. Number and condition of injured
        individuals. First aid treatment administered. Specific directions.
        Other information requested by dispatcher.{" "}
      </p>
      <p>
        ***Next*** Call campus safety (812-866-7999) to open all necessary
        gates.
      </p>
      <p>
        ***Next*** Send personnel to the gate to meet EMS to further direct them
        to the site.
      </p>{" "}
      <h2>Has the AED arrived?</h2>{" "}
      <p>No – Continue providing necessary care.</p>
      <p>Yes – Stop giving care and attach electrodes as instructed.</p>{" "}
      <h2>Has EMS arrived?</h2> <p>No – Continue providing necessary care.</p>{" "}
      <p>
        Yes - provide pertinent information (mechanism of injury, vital signs,
        treatment rendered, patient’s medical history.) EMS PERSONNEL NOW HAVE
        CONTROL OF THE SCENE
      </p>{" "}
      <h2>Is transportation needed? </h2>{" "}
      <p>No – Follow up/refer as appropriate.</p>
      <p>
        {" "}
        Yes - A Hanover College staff member will accompany the patient to the
        hospital. Note: A student worker in athletic training member may
        accompany in place of a college official if there are no other options.
        Head or Assistant coach must go to hospital following the competition.{" "}
      </p>
    </>
  );
};

export default page;
