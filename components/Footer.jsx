import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Footer = () => {
  return (
    <footer>
      
      <HoverCard>
        <HoverCardTrigger><p>© 2024 ISEN Méditerranée. Tous droits réservés.</p></HoverCardTrigger>
        <HoverCardContent>
        Contactez Icham, Ambre, Edgar ou Guillaume pour toutes démarches 
        </HoverCardContent>
      </HoverCard>
    </footer>
  );
};

export default Footer;
