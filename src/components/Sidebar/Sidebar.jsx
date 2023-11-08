import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./Sidebar.module.css";
import avatar from "../../dist/img/main-dashboard.webP";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCalendarAlt, FaMapMarkedAlt } from "react-icons/fa";
import { RiTableFill } from "react-icons/ri";
import Logo from "../Logo/Logo";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={css.sidebarContainer}>
      <div className={css.pagesIcon}>
        <Logo />
        <Link
          to="/"
          title="dashboard"
          className={location.pathname === "/" ? css.active : css.linkPage}
        >
          <div>
            <MdSpaceDashboard />
          </div>
        </Link>
        <Link
          to="/calender"
          title="calender"
          className={
            location.pathname === "/calender" ? css.active : css.linkPage
          }
        >
          <div>
            <FaCalendarAlt />
          </div>
        </Link>
        <Link
          to="/map"
          title="map"
          className={location.pathname === "/map" ? css.active : css.linkPage}
        >
          <div>
            <FaMapMarkedAlt />
          </div>
        </Link>
        <Link
          to="/table"
          title="table"
          className={location.pathname === "/table" ? css.active : css.linkPage}
        >
          <div>
            <RiTableFill />
          </div>
        </Link>
      </div>
      <div className="avatar">
        <img className={css.avatarImg} src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Sidebar;
