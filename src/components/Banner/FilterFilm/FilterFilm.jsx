import { Button, Chip } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useState } from "react";
import "./style.css";

const LOCATIONS = ["CANADA & USA", "EUROPE", "SOUTH KOREAN"];
const YEARS = [
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
];

function FilterFilm() {
  const [location, setLocation] = useState(0);
  const [year, setYear] = useState(0);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };
 const handleReset=()=>{
     setLocation(0)
     setYear(0)
 }
  return (
    // <ThemeProvider theme={theme}>
    <div className="bg-filter">
      <div className="filter">
        <div className="filter-item">
          <h5 className="filter-title">Location</h5>
          <Select
            variant="standard"
            style={{
              width: "fit-content",
              height: 30,
              marginTop: 7,
              fontFamily: "Montserrat",
              fontSize: 12,
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            onChange={handleChange}
          >
            <MenuItem
              style={{
                display: "none",
                fontFamily: "Montserrat",
                fontSize: 14,
              }}
              value={0}
            >
              Select Location
            </MenuItem>
            {LOCATIONS.map((item) => {
              return (
                <MenuItem
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 14,
                  }}
                  value={item}
                >
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <div className="filter-item">
          <h5 className="filter-title">Year</h5>
          <Select
            variant="standard"
            style={{
              width: 100,
              height: 30,
              marginTop: 7,
              fontFamily: "Montserrat",
              fontSize: 12,
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            onChange={handleChangeYear}
          >
            {/* <div className="thangdev"> */}
            <MenuItem
              style={{
                display: "none",
                fontFamily: "Montserrat",
                fontSize: 14,
              }}
              value={0}
            >
              Select year
            </MenuItem>
            {YEARS.map((item) => {
              return (
                <MenuItem
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 14,
                  }}
                  value={item}
                >
                  {item}
                </MenuItem>
              );
            })}
            {/* </div> */}
          </Select>
        </div>
        <div className="filter-item">
          <h5 className="filter-title">Make</h5>
          <Select
            variant="standard"
            style={{
              width: "fit-content",
              height: 30,
              marginTop: 7,
              fontFamily: "Montserrat",
              fontSize: 12,
            }}
            value={0}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem
              style={{
                display: "none",
              }}
              value={0}
            >
              Select Make
            </MenuItem>
          </Select>
        </div>
        <div className="filter-item">
          <h5 className="filter-title">Model</h5>
          <Select
            variant="standard"
            style={{
              width: "fit-content",
              height: 30,
              marginTop: 7,
              fontFamily: "Montserrat",
              fontSize: 12,
            }}
            value={0}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem
              style={{
                display: "none",
              }}
              value={0}
            >
              Select Model
            </MenuItem>
          </Select>
        </div>
        <div className="filter-item">
          <h5 className="filter-title">Sub-Model</h5>
          <Select
            variant="standard"
            style={{
              width: "fit-content",
              height: 30,
              marginTop: 7,
              fontFamily: "Montserrat",
              fontSize: 12,
            }}
            value={0}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem
              style={{
                display: "none",
              }}
              value={0}
            >
              Select Sub-Model
            </MenuItem>
          </Select>
        </div>
        <div className="filter-item">
          <h5 className="filter-title">Series</h5>
          <Select
            variant="standard"
            style={{
              width: "fit-content",
              height: 30,
              marginTop: 7,
              fontFamily: "Montserrat",
              fontSize: 12,
            }}
            value={0}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem
              style={{
                display: "none",
              }}
              value={0}
            >
              Select Series
            </MenuItem>
          </Select>
        </div>
      </div>

      <div className="button-search">
        <Button onClick={handleReset} size="small" sx={{ color: "#0046a6", fontFamily: "Montserrat", fontSize: 10 }} variant="outlined" startIcon={<RefreshIcon />}>
          Reset
        </Button>
        <Button
          sx={{ mx:"10px", bgcolor: "#0046a6", fontFamily: "Montserrat", fontSize: 10 }}
          size="small"
          variant="contained"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
export default FilterFilm;
