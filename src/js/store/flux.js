const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			contactos: []

		},


		actions: {
			// Use getActions to call a function within a fuction
			crearAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/HarryPotter", {
					method: "POST",
					body: JSON.stringify(),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resultado => {
						if (resultado.ok) {
							return resultado.json()
							// recibe el resultado de la api en formato json
						} else {
							console.log("Error al crear la agenda")
						}
					})
					.then(data => {
						getActions().obtenerAgenda(); // cargar la lista de contactos despues de crear la agenda
						console.log(data)
					})
					.catch(error => {
						console.log("Error creando la agenda", error)
					});

			},

			obtenerAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/HarryPotter/contacts")
					.then(resultado => {
						if (resultado.ok) {
							return resultado.json()
						} else {
							return getActions().crearAgenda()
						}
					})
					.then(data => {
						// Actualiza el store con los datos de contactos
						setStore({ contactos: data.contacts });
						console.log("Agenda actualizada:", data);
					})
					.catch(error => {
						console.log("no se obtiene nada", error)
					});
			},

			agregarContacto: (contacto) => {
				fetch("https://playground.4geeks.com/contact/agendas/HarryPotter/contacts", {
					method: "POST",
					body: JSON.stringify(contacto),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((resultado) => {
						if (resultado.ok) {
							getActions().obtenerAgenda();
						}
						return resultado.json();
					})
					.then((data) => {
						console.log("un contacto mas", data)

					})
					.catch(error =>
						console.log(error)
					)
			},

			eliminarContacto: (idDelContacto) => {
				fetch(`https://playground.4geeks.com/agendas/HarryPotter/contacts/${idDelContacto}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"

					},
				});
				setStore((prevState) => prevState.filter((store) => store.id !== id));

				console.log(`contacto con ${idDelContacto} eliminado`)
					.then((data) => {
						getActions().obtenerAgenda()
					})
					// .then(() => { }) este .then no hace falta porque estamos eliminando 
					.catch((error) => console.log("No se borró nada", error))
			},

			
			editarContacto: (idDelContacto, actualizarContacto) => {
				fetch(`https://playground.4geeks.com/contact/agendas/HarryPotter/contacts/${idDelContacto}`, {
					method: "PUT",
					body: JSON.stringify(actualizarContacto),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((resultado) => resultado.json())
					.then((data) => {
						console.log(data)
						getActions().obtenerAgenda()
					})
					.catch((error) => console.log(error))
			},
		}
	};
}
export default getState;
