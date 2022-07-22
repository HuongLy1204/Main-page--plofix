import "./style.css";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Select from "@mui/material/Select";

const names = ["CANADA & USA", "EUROPE", "SOUTH KOREAN"];

function FilterFilm() {
  const [location, setLocation] = useState(0);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="bg-filter">
      <div className="filter">
        <div className="filter-item">
          <h5 className="filter-title">Location</h5>
          <Select
            style={{
              width: "100%",
              height: 30,
              border: "none",
              marginTop: 7,
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            onChange={handleChange}
          >
            <MenuItem style={{ display: "none" }} value={0}>
              Select Location
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <div className="filter-item">
          <h5 className="filter-title">Year</h5>
        </div>
        <div className="filter-item">
          <h5 className="filter-title">Make</h5>
        </div>
        <div className="filter-item">
          <h5 className="filter-title">Model</h5>
        </div>
        <div className="filter-item">
          <h5 className="filter-title">Sub-Model</h5>
        </div>
        <div className="filter-item">
          <h5 className="filter-title">Series</h5>
        </div>
      </div>
      <div class="line"></div>
    </div>
  );
}
export default FilterFilm;
