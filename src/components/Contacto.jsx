import React, { useState } from "react";

const Contacto = () => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const errors = {};
		const nameRegex = /^[a-zA-ZÀ-ÿ]{4,16}$/;
		const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		const phoneRegex = /^\d{8,10}$/;
		const messageRegex = /^[a-zA-ZÀ-ÿ0-9\.\$:]{1,250}$/;

		if (!nameRegex.test(name)) {
			errors.name =
				"El nombre debe tener entre 4 y 16 caracteres y solo letras.";
		}
		if (!nameRegex.test(lastName)) {
			errors.lastName =
				"El apellido debe tener entre 4 y 16 caracteres y solo letras.";
		}
		if (!emailRegex.test(email)) {
			errors.email = "Ingrese un correo electrónico válido.";
		}
		if (!phoneRegex.test(phone)) {
			errors.phone = "El teléfono debe tener entre 8 y 10 dígitos.";
		}
		if (!messageRegex.test(message)) {
			errors.message =
				"El mensaje debe tener entre 1 y 250 caracteres y no caracteres especiales.";
		}

		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formErrors = validateForm();
		if (Object.keys(formErrors).length === 0) {
			console.log("Formulario válido:", {
				name,
				lastName,
				email,
				phone,
				message,
			});
			setErrors({});

		} else {
			setErrors(formErrors);
		}
	};

	return (
		<div className="overflow-hidden">
			<div className="container-contacto_main">
				<h2>Contactanos</h2>
				<form className="form-horizontal" onSubmit={handleSubmit}>
					<div className="form-group input-container">
						<span className="text-center">
							<i className="fa fa-user bigicon"></i>
						</span>
						<input
							type="text"
							placeholder="Nombre"
							className="form-control"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{errors.name && (
							<span className="error-message">{errors.name}</span>
						)}
					</div>
					<div className="form-group input-container">
						<span className="text-center">
							<i className="fa fa-user bigicon"></i>
						</span>
						<input
							type="text"
							placeholder="Apellido"
							className="form-control"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						{errors.lastName && (
							<span className="error-message">{errors.lastName}</span>
						)}
					</div>
					<div className="form-group input-container">
						<span className="text-center">
							<i className="fa fa-envelope-o bigicon"></i>
						</span>
						<input
							type="text"
							placeholder="Dirección de E-Mail"
							className="form-control"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{errors.email && (
							<span className="error-message">{errors.email}</span>
						)}
					</div>
					<div className="form-group input-container">
						<span className="text-center">
							<i className="fa fa-phone-square bigicon"></i>
						</span>
						<input
							type="text"
							placeholder="Teléfono"
							className="form-control"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
						{errors.phone && (
							<span className="error-message">{errors.phone}</span>
						)}
					</div>
					<div className="form-group input-container">
						<span className="text-center">
							<i className="fa fa-pencil-square-o bigicon"></i>
						</span>
						<textarea
							className="form-control"
							placeholder="Introduzca aquí su mensaje para nosotros. Nos comunicaremos con usted dentro de los próximos 2 días hábiles."
							rows="7"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						{errors.message && (
							<span className="error-message">{errors.message}</span>
						)}
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="btn btn-primary btn-lg"
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contacto;
