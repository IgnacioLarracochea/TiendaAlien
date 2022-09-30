import React, { useState } from 'react';

function Cartform({handleSubmit}) {

    const [buyer, setBuyer] = useState({
            name:'',
            phone:'',
            email:''
    });
    function handleInput(event){
    const target = event.target;
    const value = target.value;
    const nameInput = target.name;

    setBuyer({
        ...buyer,
        [nameInput]: value
    })        
    }

    function handleForm(evt) {
        evt.preventDefault();
        handleSubmit(buyer)
    }

    

    return (
        <div className="container mt-5">
            <h2>Registra tus datos antes de finalizar la compra por favor.</h2>
            <form className="py-5 al3">
                <div>
                    <label htmlfor="name">Nombre y Apellido: </label>
                    <input onChange={evt => handleInput(evt)} value={buyer.name} type="text" name="name"></input>
                </div>
                <hr/>
                <div>
                    <label htmlfor="phone">Teléfono: </label>
                    <input onChange={evt => handleInput(evt)} value={buyer.phone} type="text" name="phone"></input>
                </div>
                <hr/>
                <div>
                    <label htmlfor="mail">Email: </label>
                    <input onChange={evt => handleInput(evt)} value={buyer.email} type="text" name="email"></input>
                </div>
                <div className="btn-group text-center mt-4">
                    <button onClick={handleForm} className="fs-4 badge bg-success container mb-3 mt-3 text-wrap d-flex">Finalizar</button>
                    
                </div>
            </form>
        </div>
    )
}

export default Cartform;