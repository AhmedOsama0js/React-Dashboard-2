import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import css from "./LineChart.module.css";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      color:['var(--orange)'],
      toolbox: {
        feature: {
        saveAsImage:{}
      }
      },

      tooltip: {
        trigger: "axis",
        axisPointer: {
          type:"cross"
        },
        backgroundColor: "rgba(0,0,0,0.5)",
        borderWidth:0
      },


      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          type: "line",
          smooth: true,
          lineStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(255,191,0)",
              },
              {
                offset: 1,
                color: "#F450D3",
              },
            ]),
            width: 3,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(254,76,0)",
              },
              {
                offset: 1,
                color: "rgba(255,141,70,0.1)",
              },
            ]),
          },
          data: [40000, 30000, 50000, 30000, 19000, 40000, 41000],
        },
      ],
    };

    chart.setOption(option);

    window.addEventListener("resize", () => {
      chart.resize();
    });

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div className={css.containerChart}>
      <div ref={chartRef} style={{ width: "99%", height: "300px" }} />
    </div>
  );
};

export default LineChart;
