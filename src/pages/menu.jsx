import { MenuItem } from "@mui/material";
import { MenuList } from "../helper/menu";
import React from "react";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((munuItem, Key) => {
          return (
            <div className="menuItem">
              <div>
                <img src={munuItem.image} />
              </div>
              <h3>{munuItem.name}</h3>
              <p>{munuItem.price} ₺</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
