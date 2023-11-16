// Creates a list group that can be used on each page
"use client";
import { useState } from "react";

function ListGroup({ items, heading }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1>{heading}</h1>
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
