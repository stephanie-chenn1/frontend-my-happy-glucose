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
import NavList from "../components/NavList";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "date", headerName: "Date", width: 120 },
  { field: "qty", headerName: "Quantity", width: 120 },
  { field: "unit", headerName: "Unit", width: 120 },
  { field: "food", headerName: "Food", width: 120 },
  { field: "carb_count", headerName: "Carb Count", width: 120 },
];

const Meals = (props) => {
  const [dateAndCarbData, setdateAndCarbData] = useState([]);
  const [mealsData, setMealsData] = useState([]);

  // Put helper functions in separate file
  const sortDates = (data) => {
    let sorted_dates = data.sort((a, b) => (a.date > b.date ? 1 : -1));
    return sorted_dates;
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
        console.log(response.data);
        setMealsData([...response.data]);
      })

      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (mealsData) {
      mealsData.map((meal) =>
        dateAndCarbData.push({
          date: meal.date,
          carb_count: meal.carb_count,
        })
      );
      console.log(dateAndCarbData);
      let sortedData = sortDates(dateAndCarbData);
      let finalArray = compileMealsForEachDay(sortedData);
      setdateAndCarbData(finalArray);
    }
  }, [mealsData]);

  return (
    <div>
      <NavList />
      <div className="meals">
        <h1>All Meals Tracked</h1>
        {mealsData ? (
          <div style={{ height: 400, width: "60%", margin: "auto" }}>
            <DataGrid
              rows={mealsData}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        ) : null}
        <div className="line-graph">
          <ResponsiveContainer width="75%" aspect={3}>
            {dateAndCarbData ? (
              <LineChart data={dateAndCarbData} margin={{ left: 260, top: 50 }}>
                <CartesianGrid />
                <XAxis dataKey="date" interval={"preserveStartEnd"} />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line dataKey="carb_count" stroke="red" activeDot={{ r: 5 }} />
              </LineChart>
            ) : null}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Meals;
