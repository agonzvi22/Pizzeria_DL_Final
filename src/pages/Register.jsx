import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(UserContext); // Obtenemos la función registerMore actions
  const navigate = useNavigate();

  const [users, setUsers] = useState({
    mail: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUsers({ ...users, [name]: value });

    validate(name, value);
  };

  const validate = (name, value) => {
    let newErrors = { ...errors };

    if (name === "mail") {
      if (!value) {
        newErrors.mail = "El email es obligatorio.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.mail = "El email no tiene un formato válido.";
      } else {
        delete newErrors.mail;
      }
    }

    if (name === "password") {
      if (!value) {
        newErrors.password = "La contraseña es obligatoria.";
      } else if (value.length < 6) {
        newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
      } else {
        delete newErrors.password;
      }
    }

    if (name === "confirmPassword") {
      if (value !== users.password) {
        newErrors.confirmPassword = "Las contraseñas no coinciden.";
      } else {
        delete newErrors.confirmPassword;
      }
    }

    setErrors(newErrors);
  };

  const handleResult = async (e) => {
    e.preventDefault();

    if (
      Object.keys(errors).length > 0 ||
      !users.mail ||
      !users.password ||
      !users.confirmPassword
    ) {
      setGeneralError("Por favor corrige los errores antes de continuar.");
      return;
    }

    try {
      const success = await register(users.mail, users.password); // Usamos el método del contexto

      if (success) {
        Swal.fire({
          title: "Registro Exitoso",
          text: "Tu cuenta ha sido creada correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });

        navigate("/"); // Redirige a la página principal después del registro
      } else {
        setGeneralError("Error al registrarse. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error durante el registro:", error);
      setGeneralError("Ocurrió un error. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="d-flex justify-content-center m-3">
      <div className="card">
        <form className="p-3" onSubmit={handleResult}>
          <h1>Registro</h1>
          <hr />
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="text"
              placeholder="Ingresa tu Email"
              value={users.mail}
              onChange={handleChange}
              name="mail"
              className="form-control"
            />
            {errors.mail && <p className="text-danger">{errors.mail}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              placeholder="Ingresa tu Contraseña"
              value={users.password}
              onChange={handleChange}
              name="password"
              className="form-control"
            />
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Confirma Password:</label>
            <input
              type="password"
              placeholder="Confirma tu Contraseña"
              value={users.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              className="form-control"
            />
            {errors.confirmPassword && (
              <p className="text-danger">{errors.confirmPassword}</p>
            )}
          </div>

          <hr />

          <button type="submit" className="btn btn-dark btn-lg">
            Enviar
          </button>

          {generalError && <p className="text-danger mt-3">{generalError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
