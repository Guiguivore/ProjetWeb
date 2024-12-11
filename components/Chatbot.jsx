"use client";
import React, { useState, useEffect, useRef } from "react";
import "../styles/chatbot.css";
import { GoogleGenerativeAI } from '@google/generative-ai'; // Importer l'API
import ReactMarkdown from 'react-markdown'; // Importer ReactMarkdown

const Chatbot = ({ isOpen, toggleChatbot }) => {
  const genAI = new GoogleGenerativeAI('AIzaSyDXfGZiEXIquW32oaOVfKYUS6lHztrs-TU'); // API key

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour ! Comment puis-je vous aider ?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null); // Référence pour le dernier message

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    // Ajouter le message de l'utilisateur
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userInput },
    ]);

    // Appel à l'API pour obtenir la réponse du bot
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(`Tu es un assistant pour les élèves de l'ISEN Toulon, réponds à cette question : ${userInput}`);
      const response = await result.response;
      const text = await response.text();

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: text }, // Réponse du chatbot
      ]);
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API : ", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Désolé, il y a un problème avec l'assistant." },
      ]);
    }

    // Réinitialiser l'entrée utilisateur
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Scrolle automatiquement vers le bas après chaque mise à jour des messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div>
      {isOpen && ( // Si isOpen est vrai, afficher le chatbot
        <div id="chatbot" className="chatbot">
          <div className="chatbot-header">
            <h2>ISENbot</h2>
            <button onClick={toggleChatbot} className="close-chatbot">
              ✖
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === "bot" ? "bot-message" : "user-message"
                  }`}
              >
                <strong>{message.sender === "bot" ? "BOT" : "VOUS"}:</strong>
                <div className="message-text">
                  <ReactMarkdown>{message.text}</ReactMarkdown> {/* Affichage du texte formaté */}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Posez une question..."
              onKeyDown={handleKeyPress} // Détecte les touches pressées
            />
            <button onClick={handleSendMessage}>Envoyer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
