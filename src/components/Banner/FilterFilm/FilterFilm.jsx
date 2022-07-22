import "./style.css"
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Input } from "@mui/material";

const names = ["CANADA & USA", "EUROPE", "SOUTH KOREAN"];

function FilterFilm() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="bg-filter">
      <div className="filter">
        <div>
          {
            <FormControl sx={{ w: 50 }} hiddenLabel>
              
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                defaultValue="Select Location"
                variant="outlined"
                sx={{ color: "none" }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          }
        </div>
      </div> 
      <div class="line"></div>
    </div>
  );
}
export default FilterFilm;
