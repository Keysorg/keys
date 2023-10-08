import React from "react";
import { Chart } from "react-google-charts";


const Line = ({ data, options }) => {
    return (
        <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}

export default Line;