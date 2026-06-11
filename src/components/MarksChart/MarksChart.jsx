import { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ studentPromis }) => {
  const students = use(studentPromis);
  const studentsData = students.data;
  console.log(studentsData);
  // Data proccesing for the chart
  const marksChartData = studentsData.map((marksData) => {
    const student = {
      id: marksData.id,
      name: marksData.name,
      physics: marksData.marks.physics,
      chemistry: marksData.marks.chemistry,
      math: marksData.marks.math,
    };
    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;
    return student;
  });
  console.log(marksChartData);
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={marksChartData}
        layout="vertical"
      >
        <Tooltip></Tooltip>
        <XAxis type="number"></XAxis>
        <YAxis dataKey={"name"} type="category"></YAxis>
        <Bar dataKey={"avg"} fill="purple"></Bar>
        <Bar dataKey={"chemistry"} fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
