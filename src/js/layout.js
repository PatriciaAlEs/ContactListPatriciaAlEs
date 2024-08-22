import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OneContact } from "./views/one_contact.js";
import { AddContact } from "./views/add_contact.js";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import { EditContact } from "./views/edit_contact.js";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route path="/" element={<OneContact />} />
                    <Route path="/addContact" element={<AddContact />} />
                    <Route path="/editContact/:id" element={<EditContact />} />
                    <Route path="/contact" element={<OneContact />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                    
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
