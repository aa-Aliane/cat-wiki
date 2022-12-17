import React from "react";

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.length &&
        items.map((breed, i) => {
          return (
            <li className="list__item" key={`breed${String(i)}`}>
              {breed.name}
            </li>
          );
        })}
    </ul>
  );
};

export default List;
