import "./Chart.css";

import { useMemo, useState } from "react";
import "chart.js/auto";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";

const Chart = () => {
    const [chartType, setChartType] = useState("Line");

    const MONTH = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );
    const [userMonth, setUserMonth] = useState();
    const [newUserCount, setNewUserCount] = useState();

    const [data, setData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
            {
                label: " Income ",
                data: [57, 76, 95, 34, 67, 63, 98, 46],
                backgroundColor: [
                    "yellow",
                    "rgb(72, 69, 236)",
                    "orange",
                    "rgb(42, 235, 83)",
                    "rgb(226, 48, 226)",
                    "dodgerblue",
                    "tomato",

                    "rgb(221, 234, 241)",
                ],
                // borderColor: ["rgb(0, 0, 0)"],
                borderWidth: 1,
                borderRadius: 2,
                hoverBorderColor: "Black",
            },
        ],
    });
    // const myData = {
    //     labels: ["one", "two", "three", "four"],
    //     datasets: [
    //         {
    //             data: [34, 46, 95, 76, 57, 7, 63, 98],
    //         },
    //     ],
    // };

    return (
        <div className="chartGraph">
            <div>
                <button
                    className="chartbtn"
                    onClick={() => setChartType("Bar")}
                >
                    Bar
                </button>
                <button
                    className="chartbtn"
                    onClick={() => setChartType("Line")}
                >
                    Line
                </button>
                <button
                    className="chartbtn"
                    onClick={() => setChartType("Doughnut")}
                >
                    Doughnut
                </button>
                <button
                    className="chartbtn"
                    onClick={() => setChartType("Pie")}
                >
                    Pie
                </button>
            </div>
            {chartType == "Bar" && (
                <Bar
                    data={data}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                    }}
                    title="Average Income Chart For The Year"
                />
            )}
            {chartType == "Line" && (
                <Line
                    data={data}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                    }}
                    title="Average Income Chart For The Year"
                />
            )}
            {chartType == "Doughnut" && (
                <Doughnut
                    data={data}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                    }}
                    title="Average Income Chart For The Year"
                />
            )}
            {chartType == "Pie" && (
                <Pie
                    data={data}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                    }}
                    title="Average Income Chart For The Year"
                />
            )}
            {/* {chartType == "Bar" && (
                <Bar
                    data={data}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                    }}
                    title="Average Income Chart For The Year"
                />
            )} */}
            <div></div>
        </div>
    );
};

export default Chart;
