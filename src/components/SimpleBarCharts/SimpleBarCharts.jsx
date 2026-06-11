import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
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
const SimpleBarCharts = () => {
  return (
    <BarChart width={600} height={300} data={studentsData} layout="vertical">
      <Tooltip></Tooltip>
      <XAxis type="number"></XAxis>
      <YAxis dataKey="name" type="category" fill="red"></YAxis>
      <Bar dataKey={"math"} fill="purple"></Bar>
    </BarChart>
  );
};

export default SimpleBarCharts;
