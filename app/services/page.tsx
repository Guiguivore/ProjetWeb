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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
            <BreadcrumbLink href="/services">Services</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main>
        <section id="services">
          <h2>Nos Services</h2>
          <article>
            <h3>Formation académique</h3>
            <p>L’ISEN Méditerranée propose des cycles d’études variés :</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Cycle ingénieur : </AccordionTrigger>
                <AccordionContent>
                  Spécialisations comme la cybersécurité, le big data, et la robotique.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Bachelor Cybersécurité : </AccordionTrigger>
                <AccordionContent>
                  Formation axée sur la défense des systèmes numériques.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> Mastères Spécialisés : </AccordionTrigger>
                <AccordionContent>
                  Ingénierie des Systèmes Embarqués et de l'IoT
                  Ingénierie de la Cybersécurité
                  Management de Projets Informatiques
                  Licences Professionnelles
                </AccordionContent>
              </AccordionItem>
            </Accordion>


            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Cursus aménagés : </AccordionTrigger>
                <AccordionContent>
                  Pour sportifs ou artistes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>  
          </article>
        </section>
        <Chatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />
        {isModalOpen && <Modal toggleModal={toggleModal} />}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
