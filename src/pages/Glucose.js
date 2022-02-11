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

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "time", headerName: "Time", width: 100 },
  { field: "glucose", headerName: "Blood Sugar", width: 130 },
  { field: "notes", headerName: "Notes", width: 400 },
];

const Glucose = () => {
  const [glucoseData, setGlucoseData] = useState([]);

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
    <div>
      <NavList />
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
    </div>
  );
};

export default Glucose;
