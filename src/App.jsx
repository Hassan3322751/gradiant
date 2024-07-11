import React from "react";
import Gradiant_Generator from './components/GradiantGenerator/Gradiant_Generator'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/gradiant" element={<Gradiant_Generator />} />
          <Route path="" element={<Navigate to="/gradiant" />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;