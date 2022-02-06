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
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "qty", headerName: "Quantity", width: 150 },
  { field: "unit", headerName: "Unit", width: 100 },
  { field: "food", headerName: "Food", width: 150 },
  { field: "carb_count", headerName: "Carb Count", width: 150 },
];

const Meals = (props) => {
  let mealsData = props.mealsData;
  let setMealsData = props.setMealsData;

  const [dateAndCarbData, setdateAndCarbData] = useState([]);

  // Put helper functions in separate file
  const sortDates = (data) => {
    return data.sort((a, b) => (a.date > b.date ? 1 : -1));
  };

  const compileMealsForEachDay = (data) => {
    let uniqueDates = new Set();
    let finalArray = [];
    let index = null;

    for (const obj of data) {
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
    axios
      .get("http://127.0.0.1:8000/api/users/1/meals")
      .then((response) => {
        setMealsData([...response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    mealsData.map((meal) =>
      dateAndCarbData.push({
        date: meal.date,
        carb_count: meal.carb_count,
        food: meal.food,
      })
    );
    console.log(dateAndCarbData);
    let sortedData = sortDates(dateAndCarbData);
    let finalArray = compileMealsForEachDay(sortedData);
    setdateAndCarbData(finalArray);
  }, [mealsData]);

  return (
    <div className="meals">
      <div>
        <h1>All Meals by Date</h1>
        <ResponsiveContainer width="75%" aspect={3}>
          <LineChart data={dateAndCarbData} margin={{ left: 350 }}>
            <CartesianGrid />
            <XAxis dataKey="date" interval={"preserveStartEnd"} />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
            <Line dataKey="carb_count" stroke="red" activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ height: 300, width: "60%", margin: "auto" }}>
        <DataGrid
          rows={mealsData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
};

export default Meals;
