import React from "react";

const List = ({ items, HandleSelect }) => {
  return (
    <ul className="list" display-state={items.length === 0 ? "false" : "true"}>
      {items.length &&
        items.map((item, i) => {
          return (
            <li
              className="list__item"
              key={`item${String(i)}`}
              onClick={() => HandleSelect(item)}
            >
              {item.name}
            </li>
          );
        })}
    </ul>
  );
};

export default List;
