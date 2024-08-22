import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/add_contact.css";


//esta view recoge los datos y me los enseña 
export const EditContact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { actions, store } = useContext(Context);
  const parametros = useParams()

useEffect(()=>{

if (store.contact && store.contact.id) {
  setName(store.contact.name)
}
if (store.contact && store.contact.id) {
  setPhone(store.contact.phone)
}
if (store.contact && store.contact.id) {
  setEmail(store.contact.email)
}
if (store.contact && store.contact.id) {
  setAddress(store.contact.address)
}

}, [] )



  console.log(parametros.id)

  const [contacto, setContacto] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  // Maneja los cambios en los campos de entrada
  const cambioInputs = (event) => {
    setContacto({
      ...contacto,
      //es el estado anterior de contacto, y se le añade el nuevo valor que se está escribiendo en el input
      //... operador de propagacion, copia las propiedas de un objeto al que se está creando
      [event.target.id]: event.target.value,
      //event.target.id es el id del input, y event.target.value es el valor que se está escribiendo en el input
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.agregarContacto(contacto);
    //para que se restrablezcan los inputs a vacío después de enviar el formulario, seteamos el estado a como estaba antes   
    setContacto({
      name: "",
      email: "",
      phone: "",
      address: ""
    });
  }

  return (
    <div className="container">
      <h1>Añade tu contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group p-2">

            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={cambioInputs}
              placeholder="Aquí va tu nombre completo"
            />

          </div>
          <div className="form-group p-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={cambioInputs}
              placeholder="Aquí va tu email"
            />
          </div>
          <div className="form-group p-2">
            <label htmlFor="phonet">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={phone}
              onChange={cambioInputs}
              placeholder="Aquí va tu teléfono"
            />
          </div>
          <div className="form-group p-2 mb-2">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={cambioInputs}
              placeholder="Aquí va tu dirección"
            />
          </div>
          <div className="botonSubmit row p-3">
            <button
              className="btn btn-primary"
              type="submit"
            // onClick={() => actions.agregarContacto()} No es necesario oprque porque ya se usa onSubmit y maneja el proceso de envío y llama a "actions.agregarContacto(contacto)"
            >Enviar Contacto</button>
          </div>
        </div>
      </form>
      <Link to="/">
        <p className="backhome">O añadir más contactos</p>
      </Link>
    </div>
  );
};
