

import { motion } from "framer-motion";
import { Dumbbell, Apple, Clock } from "lucide-react";

const cards = [
  {
    title: "Treinamento Personalizado",
    description: "Planos de treino adaptados para seus objetivos, do iniciante ao avançado",
    icon: <Dumbbell size={40} className="text-amber-400 mt-4" />,
  },
  {
    title: "Nutrição e Performance",
    description: "Dicas para uma alimentação que potencializa seus resultados",
    icon: <Apple size={40} className="text-amber-400 mt-4" />,
  },
  {
    title: "Acompanhamento 24/7",
    description: "Suporte contínuo para manter sua motivação e disciplina sempre em alta",
    icon: <Clock size={40} className="text-amber-400 mt-4" />,
  },
];

const SectionWithCards = () => {
  return (
    <section
    className="relative w-full py-40 flex items-center justify-center bg-cover bg-center z-[120] shadow-[0px_10px_30px_rgba(0,0,0,0.8)]"
    style={{ backgroundImage: "url('/bg_cards.jpg')"}}
    >
        
      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 md:mx-10 xl:mx-0">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative p-6 py-10 bg-black/50 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg flex flex-col items-center text-center overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-full h-[1px] bg-white mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }}
              viewport={{ once: true }}
            />
            <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
            <p className="text-xl text-gray-300 py-6">{card.description}</p>
            <motion.div
              className="w-full h-[1px] bg-white mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }}
              viewport={{ once: true }}
            />
            {card.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWithCards;
