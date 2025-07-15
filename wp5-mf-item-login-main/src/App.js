import React from "react";
import { Button, Fab, Chip } from "@mui/material";
import trends from './trends.jpg';
import bar from './bar.jpg';
import graph from './graph.jpg';
import {
  HomeWork,
  AttachMoney,
  BrandingWatermark,
  Speed,
} from "@mui/icons-material";
import "./App.scss";

export default function () {
  return (
    <div className="item-details-container">

      <ul className="menu-items1">
        <li className="menu-item1">
 <div className="item-box" key='1'>
            <div className="item-box-content">
              <h2 className="mb-10">Trend Over Time</h2>
         <img src={trends} className="trendsImage" />
            </div>
          </div>
        </li>
                <li className="menu-item1">
          <div className="item-box" key='2'>
            <div className="item-box-content">
              <h2 className="mb-10">Comp Sales YOY % - Trend Over Time - Monthly</h2>
              <img src={bar} className="trendsImage"/>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

