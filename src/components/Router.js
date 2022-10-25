import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PadreDeportes from "./PadreDeportes";
import Fotos from "./Fotos";
import Contador from "./Contador";
export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Contador/>} />
            <Route path="/deportes" element={<PadreDeportes/>} />
            <Route path="/fotos" element={<Fotos/>} />
          </Routes>
        </BrowserRouter>
    );
  }
}
