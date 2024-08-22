import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const ContactCard = ({ name, email, phone, address, id }) => {

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
                <h3>Mago/Bruja: {name}</h3>
                <p>Email Mágico: {email}</p>
                <p>Ruta Polvos Flú: {phone}</p>
                <p>Colegio de Magia y Hechicería: {address}</p>
                <button className="btnBasura" onClick={() => actions.eliminarContacto(id)}>
                    <i className="fas fa-trash-alt" />
                </button>

                <button className="navegar" onClick={() => {
                    actions.saveContact(contact)
                    navegar(`/editContact/${id}`)
                }
                }
                    >
                   editame
                </button>
            </div>
        </div>
    );
};

export default ContactCard;

