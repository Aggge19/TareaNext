import React, {Fragment, useState} from 'react';
 
const Formulario = () =>{
    return(
        <Fragment>
            <h1>Formulario</h1>
            <form className="row">
                <div classname="col-md-3">
                    <input placeholder="Ingrese nombre"></input>
                </div>
                <div classname="col-md-3">
                    <input placeholder="Ingrese nombre"></input>
                </div>
                <div classname="col-md-3">
                    <button>Enviar</button>
                </div>
            </form>
        </Fragment>
    );
}   

export default Formulario;