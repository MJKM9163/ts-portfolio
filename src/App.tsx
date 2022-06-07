import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FurnitureIndex } from "furniture/FurnitureIndex";
import { MainIndex } from "./main/MainIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainIndex />} />
        <Route path="/Furniture" element={<FurnitureIndex />} />
        {/* <Route path="/simulation/1" element={<VehicleCanvas />} />
        <Route path="/etc/1" element={<BuildingCanvas />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
