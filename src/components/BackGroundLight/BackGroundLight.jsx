import css from "./BackGroundLight.module.css"

const BackGroundLight = () => {
  return (
    <div className={css.bgLight}>
      <div className={css.gradientRed}></div>
      <div className={css.gradientOrange}></div>
      <div className={css.gradientBlue}></div>
    </div>
  );
}

export default BackGroundLight
