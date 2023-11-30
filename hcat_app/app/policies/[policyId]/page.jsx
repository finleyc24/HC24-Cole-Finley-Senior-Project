// Creates the page for policies
import React from "react";
import { policies } from "/data/policyData.json";
import Header from "/components/header";

export default function Policies({ params }) {
  const found = policies.find((element) => element.id == params.policyId);

  if (!found) {
    return <h1>404 - Page Not Found</h1>;
  }

  return (
    <>
      <Header />
      <h1>{found.name}</h1>
      <p>{found.description}</p>
    </>
  );
}
