"use client";
import React, { useState } from "react";
import "../styles/modal.css";

const Modal = ({ toggleModal }) => {
  const [isLoginMode, setIsLoginMode] = useState(true); // État pour gérer le mode (connexion ou inscription)

  const switchToSignUp = () => setIsLoginMode(false); // Basculer vers le mode inscription
  const switchToLogin = () => setIsLoginMode(true); // Basculer vers le mode connexion

  return (
    <div id="loginModal" className="modal">
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            try {
              toggleModal();
            } catch (err) {
              console.error("Erreur lors de la fermeture du modal :", err);
            }
          }}
        >
          &times;
        </span>

        {isLoginMode ? (
          <div id="loginFormContainer">
            <h2>Connexion</h2>
            <form id="loginForm">
              <label htmlFor="username">Identifiant :</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                autoComplete="username"
              />
              <label htmlFor="password">Mot de passe :</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                autoComplete="current-password"
              />
              <button type="submit">Se connecter</button>
            </form>
            <p>
              Pas de compte ?{" "}
              <a href="#" onClick={switchToSignUp}>
                Créer un compte
              </a>
            </p>
          </div>
        ) : (
          <div id="inscriptionFormContainer">
            <h2>Inscription</h2>
            <form id="inscriptionForm">
              <label htmlFor="newUsername">Identifiant :</label>
              <input
                type="text"
                id="newUsername"
                name="newUsername"
                required
                autoComplete="new-username"
              />
              <label htmlFor="newPassword">Mot de passe :</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                required
                autoComplete="new-password"
              />
              <button type="submit">S'inscrire</button>
            </form>
            <p>
              Déjà un compte ?{" "}
              <a href="#" onClick={switchToLogin}>
                Connectez-vous
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
