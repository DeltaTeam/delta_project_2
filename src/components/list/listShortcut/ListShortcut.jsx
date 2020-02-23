import React from "react";

import "./../../../styles/list/listShortcut.css";
import ListItem from "./../ListItem.js";

function ListShortcut(props) {
  if (props.flag) {
    return <ListItem data={props.data} />;
  } else {
    return (
      <a onClick={props.choose}>
        <div className="listShortcut">
          <p>Дата: {props.data[0].date}</p>
          <p>{props.data[0].place}</p>
        </div>
      </a>
    );
  }
}

export default ListShortcut;
