import { useState, useEffect } from "react";
import "./Fitness.css";
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
  { field: "id", headerName: "ID", width: 70 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "duration", headerName: "Duration", width: 100 },
  { field: "workout_type", headerName: "Workout Type", width: 100 },
  { field: "notes", headerName: "Notes", width: 400 },
];

const Fitness = (props) => {
  const [dateAndDurationData, setdateAndDurationData] = useState([]);
  const [fitnessData, setFitnessData] = useState([]);

  const sortDates = (data) => {
    let sorted_dates = data.sort((a, b) => (a.date > b.date ? 1 : -1));
    return sorted_dates;
  };

  const compileWorkoutsForEachDay = (data) => {
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
        finalArray[index].duration += obj.duration;
      } else {
        uniqueDates.add(obj.date);
        finalArray.push(obj);
      }
    }
    return finalArray;
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users/1/fitness")
      .then((response) => {
        console.log(response.data);
        setFitnessData([...response.data]);
      })

      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (fitnessData) {
      fitnessData.map((workout) =>
        dateAndDurationData.push({
          date: workout.date,
          duration: workout.duration,
        })
      );
      console.log(dateAndDurationData);
      let sortedData = sortDates(dateAndDurationData);
      let finalArray = compileWorkoutsForEachDay(sortedData);
      setdateAndDurationData(finalArray);
    }
  }, [fitnessData]);

  return (
    <div>
      <NavList />
      <div className="fitness">
        <h1>All Workouts Tracked</h1>
        <div style={{ height: 400, width: "60%", margin: "auto" }}>
          <DataGrid
            rows={fitnessData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
        <div className="line-graph">
          <ResponsiveContainer width="75%" aspect={3}>
            {dateAndDurationData ? (
              <LineChart
                data={dateAndDurationData}
                margin={{ left: 260, top: 50 }}
              >
                <CartesianGrid />
                <XAxis dataKey="date" interval={"preserveStartEnd"} />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line dataKey="duration" stroke="red" activeDot={{ r: 5 }} />
              </LineChart>
            ) : null}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
