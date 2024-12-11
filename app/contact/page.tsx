"use client";
import React, { useState } from 'react';
import '../../styles/globals.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";
import Modal from "../../components/Modal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const HomePage = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // État du chatbot
  const [isModalOpen, setIsModalOpen] = useState(false); // État du modal de connexion

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen); // Permet de basculer l'état du chatbot
  };

  const toggleModal = () => {
    console.log("toggleModal appelée"); // Ajout pour débogage
    setIsModalOpen(prevState => !prevState); // Toggle de l'état du modal
  };

  return (
    <div>
      <Header toggleChatbot={toggleChatbot} toggleModal={toggleModal} />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main>
        <section id="contact">
          <h2>Contactez-nous</h2>
          <form id="contactForm">
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">E-mail :</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows={5} required></textarea>

            <button type="submit">Envoyer</button>
          </form>
        </section>


        <Chatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />
        {isModalOpen && <Modal toggleModal={toggleModal} />}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
