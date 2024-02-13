/**
 * This is a React component that creates the page for all the policies.
 * It Imports the data from a Policy JSON file using each policies correct ID.
 * After it imports it organizes the data from the JSON file onto the page for the user to view it
 *
 * @param {Object} params - The parameter passed to this component.
 * @param {string} param.policyId - The ID of the policy that is meant to be displayed
 *
 * @returns {JSX.Element} - The React Component that is the policies page.
 */
import React from "react";
import { policies } from "/data/policyData.json";
import Header from "/components/header";

export default function Policies({ params }) {
  // Finds the policy witht the specific ID from the PolicyData.json file.
  const found = policies.find((element) => element.id == params.policyId);

  // If a mathing policy isnt found the NextJS error page is returned.
  if (!found) {
    return <ErrorPage statusCode={404} />;
  }

  // Creates the policy page using the policy details found in polisyData.json
  return (
    <>
      <Header />
      <h1 className="policy-name">{found.name}</h1>
      <p className="policy-description">{found.description}</p>
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
