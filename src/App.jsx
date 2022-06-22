import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Movies from "./Pages/Movies/Movies";
import Private from "./Private/Private";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Private />}>
           <Route path="/" element={<Movies/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
