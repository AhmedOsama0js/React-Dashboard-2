import TodayTime from "../../hooks/TodayTime";
import BackGroundLight from "../BackGroundLight/BackGroundLight";
import css from "./HeaderDashboard.module.css"
import mainImg from "../../dist/img/main-dashboard.webP"

const HeaderDashboard = () => {
  return (
    <>
      <BackGroundLight />
      <div className={css.container}>
        <div>
          <TodayTime />
        </div>
        <div className={css.avatar}>
          <img className={css.mainImg} src={mainImg} alt="Img" />
          <div>
            <p>Ahmed Osama</p>
            <p>AhmedOsama@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderDashboard
