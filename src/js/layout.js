import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OneContact } from "./views/one_contact.js";
import { AddContact } from "./views/add_contact.js";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={
						<div>
							<h1> Alohomora!</h1>
							<OneContact />
						</div>
					} />
					<Route path="/addContact" element={<AddContact />} />
					<Route path="/contact" element={<OneContact />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
