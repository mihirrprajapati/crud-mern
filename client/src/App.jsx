import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Add from "./component/Add";
import "./App.css";
import Update from "./component/Update";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
