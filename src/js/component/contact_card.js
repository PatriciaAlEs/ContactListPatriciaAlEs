import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const ContactCard = ({ contact, id }) => {

    const { actions } = useContext(Context);
    const navegar = useNavigate()

    return (
        <div className="card">
            <div className="contact-card">
                <img
                    src="https://thumbs.dreamstime.com/b/s%C3%ADmbolo-del-libro-sobre-lentes-de-harry-potter-y-rel%C3%A1mpago-vector-251998760.jpg"
                    alt="Contact Photo"
                    className="contact-photo"
                />
                <h3>Mago/Bruja: {contact.name}</h3>
                <p>Email Mágico: {contact.email}</p>
                <p>Ruta Polvos Flú: {contact.phone}</p>
                <p>Colegio de Magia y Hechicería: {contact.address}</p>
                <button className="btnBasura" onClick={() => actions.eliminarContacto(id)}>
                    <i className="fas fa-trash-alt" />
                </button>

                <button className="editar" onClick={() => {

                    actions.saveContact(contact)
                    navegar("/editContact/")

                }}
                    >
                   editame
                </button>
            </div>
        </div>
    );
};

export default ContactCard;

