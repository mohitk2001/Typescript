import React, { useEffect } from "react";
import QuestionCard from "./components/QuestionCard";

import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function App() {
 

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={[
            <div key="1">
              {" "}
              <h1 className="app_header">Quiz with React + Typescript</h1>
              <Link to="/quiz">
                <button>Start Your Quiz Now</button>
              </Link> 
            </div>
          ]}
        />
        <Route path="/quiz" element={<QuestionCard />} />
      </Routes>
    </div>
  );
}

export default App;
