import { Layout } from "./Layout";
import Giuli from "../imagenes/Giuli.png";

const Artista =()=> {
return <Layout>

<div className="cardGiuli" style={{width: "18rem"}}/>
  <img src = {Giuli} alt = "" style={{width:"550px"}}></img>
  <div class="card-body">
    <p class="card-text">
        "Giulia Seminara es la creadora de éstas piezas únicas en el mercado tanto a nivel regional como nacional."</p>
  </div>

</Layout>
};

export default Artista;