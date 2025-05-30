import React, { useState } from "react";
import "./Form.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slices/userSlice";
import { reconfigurePersistor } from "../../store/store";
import Button from "../Button/Button";

function Form() {
  const dispatch = useDispatch();
  // Récupération du statut de l'appel API
  const { status } = useSelector((state) => state.user);
  // Création des états pour contrôler le formulaire
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Envoi des identifiants et du rememberMe lors de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // Stocker l'état de la case "Remember Me" dans le localStorage
    localStorage.setItem("rememberMe", rememberMe);

    // Reconfigure le persistor en fonction de l'état rememberMe
    reconfigurePersistor(rememberMe);

    const ids = {
      email: username,
      password: password,
    };

    dispatch(login(ids));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              value={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button
            content={"Sign In"}
            className={"sign-in-button"}
            type={"submit"}
          />
        </form>
        {/* Affiche un message d'erreur si l'appel a échoué */}
        {status === "failed" && <p>Incorrect username or password.</p>}
      </section>
    </main>
  );
}

export default Form;
