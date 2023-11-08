import css from "./Dashboard.module.css";
import { data } from "../../dist/data/data";
import CardDashboardData from "../../components/CardDashboardData/CardDashboardData";
import LineChart from "../../components/LineChart/LineChart";
import ScrollData from "../../components/ScrollData/ScrollData";
import Logo from "../../components/Logo/Logo";
import OrderChart from "../../components/OrderChart/OrderChart";

const Dashboard = () => {

  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.up}>
          <div className={css.HeadOption}>
            <h3>Dashboard</h3>
            <select className={css.select}>
              <option className={css.options}>Day</option>
              <option>Week</option>
              <option>Month</option>
            </select>
          </div>
          <div className={css.data}>
            {data.map((el, key) => (
              <CardDashboardData
                key={key}
                title={el.title}
                change={el.change}
                amount={el.amount}
              />
            ))}
          </div>
        </div>
        <div className={css.down}>
          <h3>Overview Statistics</h3>
          <div className={css.overview}>
            <ScrollData />
          </div>
          <div className={css.linChart}>
            <LineChart />
          </div>
        </div>
      </div>
      <div className={css.right}>
        <div className={css.rightHeader}>
          <Logo />
          <p>Order Today</p>
        </div>
        <div className={css.rightAmount}>
          <p>Amount</p>
          <p>$4000</p>
        </div>
        <div className={css.rightTable}>
          <ul>
            <li className={css.itemTable}>
              <div className={css.itemInfo}>
                <p>Skatebnoard</p>
                <p>illustration</p>
              </div>
              <div className={css.itemInfo}>
                <p className={css.green}>+$290</p>
                <p>items:58</p>
              </div>
            </li>
            <li className={css.itemTable}>
              <div className={css.itemInfo}>
                <p>Language courses</p>
                <p>illustration</p>
              </div>
              <div className={css.itemInfo}>
                <p className={css.green}>+$72</p>
                <p>items:70</p>
              </div>
            </li>
            <li className={css.itemTable}>
              <div className={css.itemInfo}>
                <p>Office Collaboration</p>
                <p>illustration</p>
              </div>
              <div className={css.itemInfo}>
                <p className={css.green}>+$70</p>
                <p>items:7</p>
              </div>
            </li>
            <li className={css.itemTable}>
              <div className={css.itemInfo}>
                <p>Robot</p>
                <p>illustration</p>
              </div>
              <div className={css.itemInfo}>
                <p className={css.green}>+$15</p>
                <p>items:21</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={css.orderChart}>
          <h5>chart order</h5>
         <OrderChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
