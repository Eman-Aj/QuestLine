import "../css/NavBar.css";
import "../css/styles.css";

import { useEffect, useRef, useState } from "react";

export default function NavBar({}) {
  const themes = ["light", "mid", "dark"]
  var themeNum = 0

  const changeTheme = () => {
    
    var className = document.body.className;

    if (className == ""){
      document.body.classList.add("light");
      className = document.body.className;
    }


    document.body.classList.remove(className);
    
    themeNum = (themeNum + 1) % 3;
    document.body.classList.add(themes[themeNum]);

   
  };

  useEffect(() => {
    changeTheme()
  }, [])

  return (
    <>
      <div className="nav">
        <ul className="nav-items">
          <li>
            <a href="/hero" className="nav-link">Hero</a>
          </li>
          <li>
            <a href="/quests" className="nav-link">Quests</a>
          </li>
          <li>
            <a href="/settings" className="nav-link">Settings</a>
          </li>
          <li>
            <a href="/stats" className="nav-link">Stats</a>
          </li>
          <button className="nav-link theme" onClick={changeTheme}> Change Theme</button>
        </ul>
        
        <div className="nav-wrap">
          <div className="nav-curve"></div>
        </div>
      </div>
    </>
  );
}
