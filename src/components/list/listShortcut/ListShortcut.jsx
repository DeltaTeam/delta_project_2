import React from "react";

import "./../../../styles/list/listShortcut.css";
import ListItem from "./../ListItem.js";

function ListShortcut(props) {
  console.log(props.data);
  if (props.flag) {
    return <ListItem data={props.data} />;
  } else {
    return (
      <a onClick={props.choose}>
        <div className="listShortcut">
          <p>Дата: {props.data.date}</p>
          <p>{props.data.place}</p>
        </div>
      </a>
    );
  }
}

export default ListShortcut;
