import React, {Fragment, useState} from 'react';
 
const Formulario = () =>{
    
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        console.log("funciona");
    }
    
    return(
        <Fragment>
            <h1>Formulario</h1>
            <form className="row"> 
                <input
                    placeholder="Nombre" 
                    type="text" 
                    name="nombre"
                    onChange={handleInputChange}
                ></input>

                <input
                    placeholder="Apellido" 
                    type="text" 
                    name="apellido"
                    onChange={handleInputChange}
                ></input>

                <button type="submit">Enviar</button>
            </form>
        </Fragment>
    );
}   

export default Formulario;