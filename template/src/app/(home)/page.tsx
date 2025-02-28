
"use client"
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "../components/Header";
import Marquee from "../components/Marquee";
import DiferencialSection from "../components/DiferencialSection";
import AcompanhamentoSection from "../components/AcompanhamentoSection";
import FeedbackAlunosSection from "../components/FeedbackAlunosSection";
import SectionWithCards from "../components/SectionWithCards";
import ContactSection from "../components/ContactSection";



export default function Home() {

 

 
  return (
    <>
    <Header></Header>
    <Marquee></Marquee>
    <ParallaxProvider><DiferencialSection></DiferencialSection></ParallaxProvider>
    <div className="md:px-10"><AcompanhamentoSection></AcompanhamentoSection></div>
    
    <SectionWithCards></SectionWithCards>
    <div className="md:px-10"><FeedbackAlunosSection></FeedbackAlunosSection></div>
    <div className="md:px-10"><ContactSection></ContactSection></div>
    
    </>
  );
}
