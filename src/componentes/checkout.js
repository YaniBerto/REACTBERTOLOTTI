import React from 'react';
//import { useNavigate } from 'react-router-dom';


const checkout = () => {

    const datosFormulario = React.UseRef()
   // const navigate= useNavigate(); 

    const consultarFormulario= (e)=>{
        e.preventDefault()
        console.log(datosFormulario);
        const datForm= new FormData(datosFormulario.current);
        console.log(datForm);
        const cliente = Object.fromEntries(datForm);
        console.log(cliente)
        e.target.reset();
        //navigate("/")
    }

    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}> 
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                
            </form>

        </div>
    );
}

export default checkout;