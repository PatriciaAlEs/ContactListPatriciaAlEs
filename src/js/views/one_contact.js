import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/one_contact.css";
import ContactCard from "../component/contact_card";

// Escucha los cambios y muestra la lista
export const OneContact = () => {
    const { store } = useContext(Context);

    console.log("Contactos:", store.contactos);

    return (
        <div className="container text-center">
            {/* Navbar */}
            <nav className="navbar navbar-light bg-light mb-3">
                <Link to="/" className="navbar-brand">
                    React Boilerplate
                </Link>
                <div className="ml-auto">
                    <Link to="/addContact">
                        <button className="btn btn-primary">Check the Context in action</button>
                    </Link>
                </div>
            </nav>

            <h1>Lista de contactos!</h1>
            <div className="contact-card text-center mt-5">
                <div>
                    {store.contactos.map((micontacto, index) => (
                        <ContactCard
                            name={micontacto.name}
                            contact={micontacto}
                            email={micontacto.email}
                            key={index}
                            phone={micontacto.phone}
                            id={micontacto.id}
                            className="card"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
