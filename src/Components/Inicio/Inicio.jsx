import React, { useState, useEffect } from "react";
import "../Inicio/Inicio.css";
import Navegacion from "../Navegacion/Navegacion";

const Inicio = () => {
  const [rol, setRol] = useState("Desarrollador Web");

  useEffect(() => {
    const interval = setInterval(() => {
      setRol((prevRol) =>
        prevRol === "Nicolas Diaz" ? "Desarrollador Web" : "Nicolas Diaz"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="inicio">
        <div className="inicio2">
          <Navegacion />
          <div class="content">
            <h2>Bienvenidos!</h2>
            <h2>Bienvenidos!</h2>
          </div>
          <div className="contenedor-inicio">
            <div className="contenedor-texto">
              {/*<h1>Bienvenidos</h1>*/}
              <h2>
                <span className="presentacion">Soy</span>{" "}
                <span className="rol-container">
                  <span
                    className={`rol ${
                      rol === "Nicolas Diaz" ? "is-visible" : "is-hidden"
                    }`}
                  >
                    {rol}
                  </span>
                </span>
              </h2>
              <button>Descargar CV</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
