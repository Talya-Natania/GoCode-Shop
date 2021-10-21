import Box from "@mui/material/Box";
import { Slider } from "@mui/material";
import { useState } from "react";
import "./Header.css";

function Header({ list, OnFilter, OnSlider }) {
  const [value, setValue] = useState([0, 200]);
  // function valuetext(value) {
  //   return `${value}$`;
  // }
  const handleChange = (event, newValue) => {
    OnSlider(newValue);
    setValue(newValue);
  };
  return (
    <nav className="product-filter">
      <div className="collection-sort">
        <label>Filter by catagory:</label>
        <select onChange={(e) => OnFilter(e.target.value)}>
          <option key="All">All</option>
          {list.map((op) => (
            <option key={op}>{op}</option>
          ))}
        </select>
      </div>
      <div class="collection-sort">
        <label>filter by price </label>
        <Box width={150}>
          <Slider
            size="small"
            min={0}
            max={1000}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    </nav>
  );
}
export default Header;
