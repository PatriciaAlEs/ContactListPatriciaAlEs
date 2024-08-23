import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/add_contact.css";


//esta view recoge los datos y me los enseña 
export const EditContact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { actions, store } = useContext(Context);


  const id = store.contact?.id


  useEffect(() => {

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

  }, [])


  


  const handleSubmit = (event) => {
    event.preventDefault();
    actions.editarContacto(id, name, phone, email, address);
    //para que se restrablezcan los inputs a vacío después de enviar el formulario, seteamos el estado a como estaba antes   

  }

  return (
    <div className="container">
      <h1>Añade tu contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group p-2">

            <label htmlFor="name">Nombre de la persona mágica</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e)=> {setName(e.target.value)}}
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
              onChange={(e) => {setEmail(e.target.value)}}
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
              onChange={(e)=>{setPhone(e.target.value)}}
              placeholder="Aquí va tu teléfono"
            />
          </div>
          <div className="form-group p-2 mb-2">
            <label htmlFor="address">  Ruta polvos Flú </label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e)=>{setAddress(e.target.value)}}
              placeholder="Aquí va tu ubicación"
            />
          </div>
          <div className="botonSubmit row p-3">
            <button
              className="btn btn-secondary"
              type="submit"
            // onClick={() => actions.agregarContacto()} No es necesario oprque porque ya se usa onSubmit y maneja el proceso de envío y llama a "actions.agregarContacto(contacto)"
            >  Enviar Contacto Editado ☑️</button>
          </div>
        </div>
      </form>
      <Link to="/">
        <p className="backhome">O añadir más contactos</p>
      </Link>
    </div>
  );
};
