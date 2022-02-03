import { useState, useEffect } from "react";
import "./Meals.css";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// Sample data
// const pdata = [
//   {
//     date: "2022-01-27",
//     carb_count: 170,
//   },
//   {
//     date: "2022-01-28",
//     carb_count: 75,
//   },
//   {
//     date: "2022-01-28",
//     carb_count: 110,
//   },
//   {
//     date: "2022-01-31",
//     carb_count: 570,
//   },
//   {
//     date: "2022-01-31",
//     carb_count: 50,
//   },
//   {
//     date: "2022-02-01",
//     carb_count: 100,
//   },
// ];

const Meals = (props) => {
  let mealsData = props.mealsData;
  let setMealsData = props.setMealsData;

  const [dateAndCarbData, setdateAndCarbData] = useState([]);

  useEffect(() => {
    mealsData.map((meal) =>
      dateAndCarbData.push({
        date: meal.date,
        carb_count: meal.carb_count,
      })
    );
    // sorts date by ascending order
    dateAndCarbData.sort((a, b) => (a.date > b.date ? 1 : -1));
    console.log(dateAndCarbData);
  }, [mealsData]);

  return (
    <div className="meals">
      <h1>Meals</h1>
      <ResponsiveContainer width="85%" aspect={3}>
        <LineChart data={dateAndCarbData} margin={{ left: 250 }}>
          <CartesianGrid />
          <XAxis dataKey="date" interval={"preserveEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="carb_count" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Meals;
