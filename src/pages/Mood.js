import { useState, useEffect } from "react";
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
import CircularProgress from "@mui/material/CircularProgress";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "time", headerName: "Time", width: 100 },
  { field: "mood", headerName: "Mood Rating (out of 5)", width: 200 },
];

const Mood = () => {
  const [moodData, setMoodData] = useState([]);

  useEffect(
    () =>
      axios
        .get("http://127.0.0.1:8000/api/users/1/mood")
        .then((response) => {
          console.log(response.data);
          let responseForSort = [...response.data];
          let finalArray = responseForSort.sort((a, b) =>
            a.date > b.date ? 1 : -1
          );

          setMoodData(finalArray);
        })
        .catch((err) => console.log(err)),
    []
  );

  return (
    <div>
      <NavList />
      <div className="meals">
        <h1>All Mood Readings Tracked</h1>
        <div style={{ height: 400, width: "40%", margin: "auto" }}>
          {moodData ? (
            <DataGrid
              rows={moodData}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          ) : (
            <CircularProgress />
          )}
        </div>
        <div className="line-graph">
          <ResponsiveContainer width="80%" aspect={3}>
            {moodData ? (
              <LineChart data={moodData} margin={{ left: 220, top: 50 }}>
                <CartesianGrid />
                <XAxis dataKey="date" interval={"preserveStartEnd"} />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line dataKey="mood" stroke="red" activeDot={{ r: 5 }} />
              </LineChart>
            ) : (
              <CircularProgress />
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Mood;
