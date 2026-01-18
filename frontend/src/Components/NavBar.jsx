import "../css/NavBar.css";
import "../css/styles.css";

import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

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
      <nav className="nav">
        <ul className="nav-items">
          <li>
            <Link to="/hero" className="nav-link">Hero</Link>
          </li>
          <li>
            <Link to="/" className="nav-link">Quests</Link>
          </li>
          <li>
            <Link to="/settings" className="nav-link">Settings</Link>
          </li>
          <li>
            <Link to="/stats" className="nav-link">Stats</Link>
          </li>
          <button className="nav-link theme" onClick={changeTheme}> Change Theme</button>
        </ul>
        
        <div className="nav-wrap">
          <div className="nav-curve"></div>
        </div>
      </nav>
    </>
  );
}
