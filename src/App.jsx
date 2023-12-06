import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import ModoOscuroToggle from "./Components/DarkLight/OscuroClaro";
import { DarkModeProvider } from "./Darkcontext/DarkModeContext"; // Importa el DarkModeProvider
import Inicio from './Components/Inicio/Inicio';
import About from './Components/About/About';

function App() {
  return (
    <DarkModeProvider>
    <Router>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Inicio/>
                <About/>
              </>
            )}
          ></Route>
          <Route path="/inicio" element={<Inicio />} />
        <Route path="/modooscuroclaro" element={<ModoOscuroToggle />} />
        </Routes>
      </Router>
      </DarkModeProvider>
  );
}

export default App;
