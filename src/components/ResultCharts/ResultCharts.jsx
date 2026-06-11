import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const studentsData = [
  { name: "John", physics: 85, chemistry: 78, math: 92 },
  { name: "Emma", physics: 91, chemistry: 88, math: 95 },
  { name: "Michael", physics: 76, chemistry: 82, math: 79 },
  { name: "Sophia", physics: 89, chemistry: 94, math: 90 },
  { name: "William", physics: 68, chemistry: 74, math: 71 },
  { name: "Olivia", physics: 95, chemistry: 91, math: 98 },
  { name: "James", physics: 82, chemistry: 79, math: 85 },
  { name: "Isabella", physics: 88, chemistry: 86, math: 93 },
  { name: "Benjamin", physics: 73, chemistry: 77, math: 80 },
  { name: "Mia", physics: 92, chemistry: 89, math: 96 },
];
const ResultCharts = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={studentsData}>
                <XAxis dataKey={"name"}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                <Line dataKey="physics" fill="red" stroke="red"></Line>
                <Line dataKey={"math"}></Line>
            </LineChart>
        </div>
    );
};

export default ResultCharts;