import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";
import { PokeDataProvider } from "./Context";

const Router = () => {
  return (
    <PokeDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemon-detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </PokeDataProvider>
  );
};

export default Router;
