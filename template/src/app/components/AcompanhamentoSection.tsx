

import { motion } from "framer-motion";
import Image from "next/image";
import phone01 from "../../../public/phone_01.png";
import phone02 from "../../../public/phone_02.png";
import phone03 from "../../../public/phone_03.png";

const AcompanhamentoSection = () => {
  const title = "Acompanhamento Personalizado";

  return (
    <div className="relative w-full py-20 md:pb-48 md:py-40 bg-amber-400 flex items-center justify-center px-5 md:px-0 shadow-[0px_10px_30px_rgba(0,0,0,0.8)] z-50 rounded-t-3xl">
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-4/5 max-w-screen-xl">
        {/* Texto à esquerda */}
        <div className="md:w-1/2 md:pr-12">
          <motion.h2
            className="text-3xl text-center md:text-left font-bold w-full mb-10 text-cinza"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-lg text-center md:text-left w-full text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Eu ofereço um acompanhamento contínuo para garantir que você atinja seus objetivos, com a melhor orientação e suporte ao longo de toda a sua jornada.
          </motion.p>

          <motion.button
            className="w-full md:w-2/6 xl:w-1/4 px-6 py-2 rounded-lg border-2 text-center md:text-left  border-cinza font-medium mt-4 transition-colors duration-300 bg-cinza hover:bg-amber-400 text-amber-400 hover:text-cinza"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Baixar APP
          </motion.button>
        </div>

        {/* Animação dos celulares */}
        <div className="w-full md:w-1/2 mt-20 h-[300px] md:h-auto flex justify-center items-center relative scale-75 md:scale-[0.8] xl:scale-100">
          <motion.div
            className="absolute z-10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: -20, opacity: 1 }}
            transition={{delay: 0.6,  duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image src={phone01} alt="Phone 1" width={210} height={600} />
          </motion.div>

          <motion.div
            className="absolute z-0"
            initial={{ x: 0, opacity: 0}}
            whileInView={{ x: 140, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image src={phone02} alt="Phone 2" width={180} height={550} />
          </motion.div>

          <motion.div
            className="absolute z-0"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: -140, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image src={phone03} alt="Phone 3" width={180} height={550} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AcompanhamentoSection;