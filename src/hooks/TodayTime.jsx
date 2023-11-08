import React, { useEffect, useState } from "react";
import css from "./Hooks.module.css"

const TodayTime = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toDateString().split(" "));

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setClock(currentTime.toLocaleTimeString());
      setDate(currentTime.toDateString().split(" "));
    }, 1000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={css.dateContainer}>
      <div>{`${date[0]}, ${date[2]}-${date[1]}-${date[3]}`}</div>
      <div>{clock}</div>
    </div>
  );
};

export default TodayTime;
