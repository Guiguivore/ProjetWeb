"use client";
import React, { useState } from 'react';
import '../styles/globals.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import Modal from "../components/Modal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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
      <main>
        <section id="hero">
          <h2></h2>
          <div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              >
              <CarouselContent>
                <CarouselItem><img src="/isen.jpg" alt="Bienvenue à ISEN Méditerranée" /></CarouselItem>
                <CarouselItem><img src="/isen2.jpg" alt="Bienvenue à ISEN Méditerranée" /></CarouselItem>
                <CarouselItem><img src="/isen3.jpg" alt="Bienvenue à ISEN Méditerranée" /></CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <Chatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />
        {isModalOpen && <Modal toggleModal={toggleModal} />}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
