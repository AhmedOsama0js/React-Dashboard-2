import css from "./ScrollData.module.css"
import { BiSolidUpvote } from "react-icons/bi";

const ScrollData = () => {
  return (
    <div>
      <div className={css.scrollData}>
        <div className={css.scrollDataFirstChild}>
          <div className={css.scrollDataIcon}>
            <BiSolidUpvote />
          </div>
          <div className={css.scrollDataItem}>
            <p className={css.scrollDataItemTop}>Top Item this Month</p>
            <p>Office Comps</p>
          </div>
        </div>
        <div className={css.scrollDataItem}>
          <p className={css.scrollDataItemTop}>Item</p>
          <p>500</p>
        </div>
        <div className={css.scrollDataItem}>
          <p className={css.scrollDataItemTop}>Profit</p>
          <p>$400,700</p>
        </div>
        <div className={css.scrollDataItem}>
          <p className={css.scrollDataItemTop}>Daily Average</p>
          <p>$2000</p>
        </div>
      </div>
    </div>
  );
}

export default ScrollData
