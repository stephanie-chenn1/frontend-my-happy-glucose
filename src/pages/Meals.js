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
import { DataGrid } from "@mui/x-data-grid";

const Meals = (props) => {
  let mealsData = props.mealsData;
  let setMealsData = props.setMealsData;

  const [dateAndCarbData, setdateAndCarbData] = useState([]);

  // Put helper functions in separate file
  const sortDates = (data) => {
    return data.sort((a, b) => (a.date > b.date ? 1 : -1));
  };

  const organizeData = (data) => {
    let uniqueDates = new Set();
    let finalArray = [];
    let index = null;

    for (const obj of dateAndCarbData) {
      if (uniqueDates.has(obj.date)) {
        for (var i = 0; i < finalArray.length; i++) {
          if (finalArray[i].date === obj.date) {
            index = i;
            break;
          }
        }
        finalArray[index].carb_count += obj.carb_count;
      } else {
        uniqueDates.add(obj.date);
        finalArray.push(obj);
      }
    }
    return finalArray;
  };

  useEffect(() => {
    mealsData.map((meal) =>
      dateAndCarbData.push({
        date: meal.date,
        carb_count: meal.carb_count,
        food: meal.food,
      })
    );
    // sorts date by ascending order
    let sortedData = sortDates(dateAndCarbData);
    let finalArray = organizeData(sortedData);

    setdateAndCarbData(finalArray);

    console.log(finalArray);
  }, [mealsData]);

  return (
    <div className="meals">
      <h1>All Meals by Date</h1>
      <ResponsiveContainer width="75%" aspect={3}>
        <LineChart data={dateAndCarbData} margin={{ left: 350 }}>
          <CartesianGrid />
          <XAxis dataKey="date" interval={"preserveStartEnd"} />
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
