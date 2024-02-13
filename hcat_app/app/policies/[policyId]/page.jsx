// Creates the page for policies
import React from "react";
import { policies } from "/data/policyData.json";
import Header from "/components/header";

export default function Policies({ params }) {
  const found = policies.find((element) => element.id == params.policyId);

  if (!found) {
    return <ErrorPage statusCode={404} />;
  }

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
