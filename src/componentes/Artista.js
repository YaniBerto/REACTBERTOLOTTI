import { Layout } from "./Layout";
import Giuli from "../imagenes/Giuli.png";
import React from "react";

const Artista =()=> {
return <Layout>

<div className="cardGiuli" style={{width: "18rem"}}/>
  <img src = {Giuli} alt = "" style={{width:"550px"}}></img>
  <div class="card-body">
    <p class="card-text">
        "Giulia Seminara es Rosarina y es la creadora de éstas piezas únicas en el mercado tanto a nivel regional como nacional. Hace años que comenzó a formarse en el mundo del origami y filigrana perfeccionando la técnica"</p>
  </div>

</Layout>
};

export default Artista;