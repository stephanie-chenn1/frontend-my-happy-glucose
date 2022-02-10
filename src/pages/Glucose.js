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

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "time", headerName: "Time", width: 100 },
  { field: "glucose", headerName: "Blood Sugar", width: 130 },
  { field: "notes", headerName: "Notes", width: 400 },
];

const Glucose = () => {
  const [dateAndGlucoseData, setDateAndGlucoseData] = useState([]);
  const [glucoseData, setGlucoseData] = useState([]);

  // Put helper functions in separate file
  // const sortDates = (data) => {
  //   let arrayForSort = [...data];
  //   let sorted_dates = arrayForSort((a, b) => (a.date > b.date ? 1 : -1));
  //   return sorted_dates;
  // };

  // const compileGlucoseForEachDay = (data) => {
  //   let uniqueDates = new Set();
  //   let finalArray = [];
  //   let index = null;

  //   for (const obj of data) {
  //     if (uniqueDates.has(obj.date)) {
  //       for (var i = 0; i < finalArray.length; i++) {
  //         if (finalArray[i].date === obj.date) {
  //           index = i;
  //           break;
  //         }
  //       }
  //       finalArray[index].carb_count += obj.carb_count;
  //     } else {
  //       uniqueDates.add(obj.date);
  //       finalArray.push(obj);
  //     }
  //   }
  //   return finalArray;
  // };

  useEffect(
    () =>
      axios
        .get("http://127.0.0.1:8000/api/users/1/glucose")
        .then((response) => {
          console.log(response.data);
          let responseForSort = [...response.data];
          let finalArray = responseForSort.sort((a, b) =>
            a.date > b.date ? 1 : -1
          );

          setGlucoseData(finalArray);
        })
        .catch((err) => console.log(err)),
    []
  );

  return (
    <div className="meals">
      <h1>All Glucose Readings Tracked</h1>
      <div style={{ height: 400, width: "60%", margin: "auto" }}>
        <DataGrid
          rows={glucoseData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      <div className="line-graph">
        <ResponsiveContainer width="80%" aspect={3}>
          {glucoseData ? (
            <LineChart data={glucoseData} margin={{ left: 220, top: 50 }}>
              <CartesianGrid />
              <XAxis dataKey="date" interval={"preserveStartEnd"} />
              <YAxis></YAxis>
              <Legend />
              <Tooltip />
              <Line dataKey="glucose" stroke="red" activeDot={{ r: 5 }} />
            </LineChart>
          ) : null}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Glucose;
