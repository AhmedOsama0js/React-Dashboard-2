import css from "./CardDashboardData.module.css"

const CardDashboardData = ({title,change, amount}) => {
  return (
    <div className={css.cardContainer}>
      <div className={css.infoData}>
        <span>{title}</span>
        <span className={change > 0 ? css.green : css.red}>{change > 0 ? "+"+change:change}%</span>
      </div>
      <div className={css.amount}>${amount}</div>
    </div>
  )
}

export default CardDashboardData
