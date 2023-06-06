import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // we will get an array of objects here , from which we will extract only the value and it will be an array
  // here we return the value from every data point and map will form it into an array

  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  // calculate the maximum value in which regards the fill value percentage would be calculated

  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
