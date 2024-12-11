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
            <BreadcrumbLink href="/about">À propos</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <main>
        <section id="services">
          <h2>A propos</h2>
          <article>
            <h3>Formation académique</h3>
            <p>L’ISEN Méditerranée propose des cycles d’études variés :</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Présentation : </AccordionTrigger>
                <AccordionContent>
                  L’ISEN Méditerranée est un établissement d’enseignement supérieur
                  reconnu, ouvert en 1991 et qui accueille plus de 850 élèves sur ses
                  deux campus situés à Toulon et Marseille.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Son statut :</AccordionTrigger>
                <AccordionContent>
                  L’ISEN Méditerranée fait partie des 204 grandes écoles d’ingénieurs
                  françaises. Son statut est associatif, à but non lucratif et elle est
                  labellisée d’intérêt général EESPIG.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> Ses valeurs : </AccordionTrigger>
                <AccordionContent>
                  L’ISEN promet à chaque élève, chaque talent, chaque futur
                  professionnel d’être accompagné tout au long de son parcours de
                  formation, un parcours qui correspond autant à ses envies qu’aux
                  besoins des entreprises et de la société.
                </AccordionContent>
              </AccordionItem>
            </Accordion>


            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Ses spécialités : </AccordionTrigger>
                <AccordionContent>
                  <li>Informatique</li>
                  <li>Cybersécurité</li>
                  <li>Intelligence artificielle</li>
                  <li>Développement</li>
                  <li>Big data</li>
                  <li>Jeux vidéo</li>
                  <li>E-santé</li>
                  <li>Objets connectés</li>
                  <li>Smart energy</li>
                  <li>Systèmes embarqués</li>
                  <li>Robotique</li>
                  <li>Ingénierie d’affaires</li>
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
