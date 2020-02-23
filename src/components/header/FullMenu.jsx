import React from "react";

import "./../../styles/header/fullMenu.css";

function FullMenu() {
  return (
    <div className="fullMenu">
      <a href="/">Список правопорушень</a>
      <a href="/add_crime">Додати правопорушення</a>
      <a href="/rules">Правила паркування</a>
    </div>
  );
}

export default FullMenu;
