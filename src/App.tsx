import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FurnitureIndex } from "furniture/FurnitureIndex";
import { MainIndex } from "./main/MainIndex";
import { Provider } from "react-redux";
import { store } from "furniture/modules/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainIndex />} />
          <Route path="/Furniture" element={<FurnitureIndex />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
