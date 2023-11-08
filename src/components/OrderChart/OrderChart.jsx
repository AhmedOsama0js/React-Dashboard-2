import css from "./OrderChart.module.css"
import ReactECharts from "echarts-for-react"
import * as echarts from "echarts"
const OrderChart = () => {

  const option = {
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#a73e0e",
        },
        {
          offset: 1,
          color: "#e6a48a",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#61091c",
        },
        {
          offset: 1,
          color: "#e68a92",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#520961",
        },
        {
          offset: 1,
          color: "#d78ae6",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#10437e",
        },
        {
          offset: 1,
          color: "#8ab0e6",
        },
      ]),
    ],

    series: [
      {
        name: "Item",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 50,
          borderColor: "black",
          borderWidth: 3,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        data: [
          { value: 219, name: "Search Engine" },
          { value: 635, name: "Email" },
          { value: 451, name: "Union Ads" },
          { value: 302, name: "Direct" },
        ],
      },
    ],
  };

  return (
    <div className={css.chartBody}>
      <ReactECharts style={{height:140, marginTop:"1rem"}} option={option} />
  </div>
    )
}

export default OrderChart
