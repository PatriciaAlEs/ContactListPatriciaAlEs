import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/one_contact.css";
import ContactCard  from "../component/contact_card";

//escucha los cambios y muestra la lista

export const OneContact = () => {

    const { store } = useContext(Context);

    console.log("Contactos:", store.contactos);
    
    return (
        <div className="container text-center">
            <h1>Lista de contactos!</h1>
            <div className="contact-card  text-center mt-5">
                <div>
                    {
                        store.contactos.map((micontacto, index) => (
                            <ContactCard 

                            contact={micontacto}
                            key={index}
                            

                            className="card" />

                        ))}
                </div>
            </div>
        </div>
    )
}
