import Link from 'next/link';
import React from "react";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Toggle } from "@/components/ui/toggle"



const Header = ({ toggleChatbot, toggleModal }) => { // Réception de la prop toggleModal
  return (
    <header>
      <div className="logo">
        <h1><Toggle><Link href="/">ISEN Méditerranée</Link></Toggle></h1>
      </div>
      <nav>
        <ul>
          <Button href="/A propos"><Link href="/about">À propos</Link></Button>
          <Separator orientation="vertical" />

          <li><Button href="/Services"><Link href="/services">Services</Link></Button></li>
          <Separator orientation="vertical" />

          <li><Button><Link href="/events">Événements</Link></Button></li>
          <Separator orientation="vertical" />

          <li><Button><Link href="/contact">Contact</Link></Button></li>
          <Separator orientation="vertical" />

          <li><Button id="loginBtn" type="button" onClick={toggleModal}>Connexion</Button></li> {/* Le bouton appelle la fonction toggleModal */}
          <Separator orientation="vertical" />

          <li><Button id="chatbotBtn" type="button" onClick={toggleChatbot}>Assistance</Button></li>
          <Separator orientation="vertical" />

        </ul>
      </nav>
    </header>
  );
};

export default Header;
