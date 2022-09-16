import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebar, setisSidebar] = useState(false);

  //TOGGLE SIDEBAR
  const handleMouseOverSideBar = () => {
    setisSidebar(true);
  };
  const handleMouseOutSideBar = () => {
    setisSidebar(false);
  };
  return (
    <div
      className={`sidebar ${isSidebar ? "sidebar-hover" : ""}`}
      onMouseOver={handleMouseOverSideBar}
      onMouseOut={handleMouseOutSideBar}
      style={{ width: isSidebar ? "250px" : "80px" }}
    >
      <div
        className={`sidebar-item active-item ${
          isSidebar ? "sidebar-active-item" : ""
        }`}
      >
        <span className="material-icons-outlined hover active">lightbulb</span>
        <span className="sidebar-text">Notes</span>
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined hover">notifications</span>
        <span className="sidebar-text">Reminders</span>
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined hover">edit</span>
        <span className="sidebar-text">Edit Labels</span>
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined hover">archive</span>
        <span className="sidebar-text">Archive</span>
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined hover">delete</span>
        <span className="sidebar-text">Trash</span>
      </div>
    </div>
  );
};
export default Sidebar;
