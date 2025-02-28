

import { motion } from "framer-motion";
import Image from "next/image";
import card_01 from "../../../public/card_01.png";
import card_02 from "../../../public/card_02.png";
import card_03 from "../../../public/card_03.png";
import card_04 from "../../../public/card_04.png";

const DiferencialSection = () => {
  return (
    <div className="relative w-full bg-cinza flex items-center justify-center py-280 ">
      <div className="flex flex-col-reverse xl:flex-row w-4/5  gap-20max-w-screen-xl relative justify-center items-center">
        <div className="w-full xl:w-1/2 relative overflow-visible h-[80vw] xl:h-[600px] scale-125 xl:scale-75  mt-20 md:scale-75 md:mt-0 md:h-[60vw]">
          
          <motion.div
            className="absolute left-0 top-0 w-full h-full origin_card_01"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut", 
              bounce: 0.5,
              type: "spring"
            }}
            viewport={{ once: true }}
          >
            <Image src={card_01} alt="Personal Trainer" width={1000} height={600} className="absolute left-0 top-0 anim_card_01" />
          </motion.div>

          <motion.div
            className="absolute left-0 top-0 w-full h-full origin_card_02"  
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.9,
              duration: 0.8, 
              ease: "easeInOut", 
              bounce: 0.5,
              type: "spring"
            }}
            viewport={{ once: true }}
          >
            <Image src={card_02} alt="Personal Trainer" width={1000} height={600} className="absolute left-0 top-0 anim_card_02" />
          </motion.div>

          <motion.div
            className="absolute left-0 top-0 w-full h-full origin_card_03"  
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8, 
              ease: "easeInOut", 
              bounce: 0.5,
              type: "spring"
            }}
            viewport={{ once: true }}
          >
            <Image src={card_03} alt="Personal Trainer" width={1000} height={600} className="absolute left-0 top-0 anim_card_03" />
          </motion.div>

          <motion.div
            className="absolute left-0 top-0 w-full h-full origin_card_04"  
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8, 
              ease: "easeInOut", 
              bounce: 0.5,
              type: "spring"
            }}
            viewport={{ once: true }}
          >
            <Image src={card_04} alt="Personal Trainer" width={1000} height={600} className="absolute left-0 top-0 anim_card_04"  />
          </motion.div>

        </div>

        {/* Texto e Tópicos à direita */}
        <div className="w-full xl:w-1/2 pl-0 xl:pl-12 flex justify-center items-start flex-col">
          {/* Título */}
          <motion.h2
            className="w-full text-3xl text-center xl:text-left font-bold mb-10 text-white pt-20 xl:pt-0"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            O que me torna diferente
          </motion.h2>

          {/* Texto */}
          <motion.p
            className="text-lg text-center xl:text-left text-gray-400"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            Eu sou especializado em fornecer resultados comprovados, com um foco contínuo em qualidade e satisfação. O meu objetivo é alcançar sempre o melhor para você, através de uma abordagem totalmente personalizada e dedicada ao seu sucesso.
          </motion.p>

          {/* Tópicos */}
          <ul className="list-none space-y-4 mt-4">
            {["Atendimento personalizado, voltado para suas necessidades únicas", "Resultados mensuráveis com foco em alta performance", "Compromisso em alcançar seus objetivos de forma eficaz e eficiente"].map((item, index) => (
              <motion.li
                key={index}
                className="text-lg text-white"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <span className="mr-4 text-yellow-400">•</span> {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiferencialSection;
