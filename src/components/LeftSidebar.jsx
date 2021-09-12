import React from "react";

function LeftSidebar() {
  // let [over, setOver] = React.useState(false);

  let tempe = "ListItem";

  // if (over) {
  //   tempe = "ListItem5";
  // } else {
  //   tempe = "ListItem";
  // }

  function ListItems(props) {
    return (
      <div className={tempe}>
        <img className="ListImage" src={props.imgurl} alt="icon" />
        <p>{props.name}</p>
      </div>
    );
  }

  return (
    <div className="leftSidebar">
      <div className="ListItem2">
        <img className="ListImage2" src="./images/pencilscale.png" alt="icon" />
        <p className="Tools">Tools</p>
      </div>
      <div className="List">
        <ul className="ListUnordered">
          <li>
            <ListItems imgurl="./images/dashboard.png" name="Dashboard" />
          </li>
          <li>
            <ListItems
              imgurl="./images/backlogremove.png"
              name="Backlog Remover"
            />
          </li>
          <li>
            <ListItems imgurl="./images/rankup.png" name="Rank up" />
          </li>
          <li>
            <ListItems imgurl="./images/speed.png" name="Speed up" />
          </li>
          <li>
            <ListItems imgurl="./images/accuracy.png" name="Accuracy up" />
          </li>
          <li>
            <ListItems imgurl="./images/revision.png" name="Revision" />
          </li>
          <li>
            <ListItems imgurl="./images/testcreator.png" name="Test Creator" />
          </li>
          <li>
            <ListItems
              imgurl="./images/assignment.png"
              name="Assignment Creator"
            />
          </li>
          <li>
            <ListItems
              imgurl="./images/studymaterial.png"
              name="Study Material"
            />
          </li>
          <li>
            <ListItems imgurl="./images/formula.png" name="Formula Sheet" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
