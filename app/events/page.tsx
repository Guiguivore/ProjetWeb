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
            <BreadcrumbLink href="/events">Événements : </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <main>
        <section id="events">
          <h3>Nos événements : </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Hackathons et Projets de recherche : </AccordionTrigger>
              <AccordionContent>
              L'ISEN participe à des hackathons et projets collaboratifs où les étudiants résolvent des problématiques
              technologiques et innovent en partenariat avec des entreprises.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Forum Digital Native :</AccordionTrigger>
              <AccordionContent>
                Une opportunité unique pour les étudiants de rencontrer des professionnels du numérique et d'explorer des
                opportunités de stage, d'alternance, ou d'emploi.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Activités culturelles et sportives : </AccordionTrigger>
              <AccordionContent>
                Des événements tels que des concerts, des expositions artistiques et des compétitions sportives sont
                organisés tout au long de l'année pour enrichir la vie étudiante.
              </AccordionContent>
            </AccordionItem>
          </Accordion>


          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Événements associatifs : </AccordionTrigger>
              <AccordionContent>
                Organisés par des associations comme le BDE, ces événements incluent des soirées à thème, des journées
                d'intégration et des galas annuels.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>



        <Chatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />
        {isModalOpen && <Modal toggleModal={toggleModal} />}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
