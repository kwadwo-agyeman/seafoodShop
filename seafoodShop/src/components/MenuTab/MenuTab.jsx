import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import './menuTab.css'
const MenuTab = () => {
  return (
    <div>
      <article className="food--menu--tab">
        <MenuOutlinedIcon />
        <h3>Food Categories</h3>
      </article>
    </div>
  );
};

export default MenuTab;
