import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="brand">
        <a href="">
          <img
            className="CompanyIcon"
            src="./images/Acadzalogo.png"
            alt="icon"
          ></img>

          <p className="acadza">ACADZA</p>
        </a>
      </div>

      <div className="brandMid">
        <div className="Activity">
          {" "}
          <p> Activity &#9660; </p>{" "}
        </div>
        <div className="ToolGuide">
          {" "}
          <p> Tool Guide &#9660; </p>{" "}
        </div>
      </div>

      <div className="Lastbox">
        <img src="./images/bell.png" alt="notif" className="notif"></img>
        <img src="./images/women.jpg" alt="profile" className="profile"></img>
        <p>&#9660;</p>
      </div>

      <div className="Inpbox">
        <form method="get">
          <input type="text" placeholder="Search" className="Inptext"></input>
        </form>
      </div>
    </div>
  );
}

export default Header;
