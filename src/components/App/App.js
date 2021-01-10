/* eslint-disable no-unused-expressions */
import React from "react";
import "./App.css";
import Header from "../Header/Header";
import AddCourse from "../AddCourse/AddCourse";
import UpdateCourse from "../UpdateCourse/UpdateCourse";
import { ContextProvider } from "../../contexts/Context";

function App() {
  return (
    <ContextProvider>
      <div className="main">
        <div className="container">
          <div className="app-wrapper">
            <Header />
            <AddCourse />
            <UpdateCourse />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
/* eslint-disable-line */
