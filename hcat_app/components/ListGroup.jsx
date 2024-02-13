/**
 * React component that crates the list group so it can be used on any page
 *
 * @param {Object} props - The properties passed to the compnent
 * @param {string[]} props.items - The array of items that should be displayed in the list
 * @param {string} props.heading - The Title above the lis group
 *
 * @returns {JSX.Element} - The React component for a list group
 */

"use client";
import { useState } from "react";

function ListGroup({ items, heading }) {
  // State to keep track of the seceted item
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // create the list group with the items and selection function
  return (
    <div>
      <h1 style={{ color: "white" }}>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={{
              "list-group-item": true,
              active: selectedIndex === index,
            }}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListGroup;
