import { Layout } from "./Layout";
import swal from 'sweetalert';
import React from "react";

const Contacto =()=> {
return <Layout>
   <div className="containerContacto">
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Correo Electrónico</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Consulta:</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="15"></textarea>
</div>
  <button onClick={()=>{
  swal({text: "Formulario Enviado",})}}>Enviar Formulario
  </button>
  </div>
</Layout>
};

export default Contacto;