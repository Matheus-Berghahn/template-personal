
import { motion } from "framer-motion";
import {  useState } from "react";

const MarqueeSection = () => {
  const [scrollY] = useState(0);


  const moveText = (scrollY: number) => {
    const slowSpeed = 0.01;
    return (scrollY * slowSpeed) % 100;
  };

  return (
    <div className="relative w-full overflow-hidden shadow-inner">
      <div className="h-16 bg-white w-full  flex justify-center items-center shadow-inner" style={{ boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.6)" }}>
        <motion.div
          className="text-black text-2xl font-bold whitespace-nowrap"
          style={{
            transform: `translateX(-${moveText(scrollY)}%)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          TREINE COM O MELHOR{" "}
          <span className="mx-2 text-black">•</span> RESULTADOS GARANTIDOS{" "}
          <span className="mx-2 text-black">•</span> ENTRE EM CONTATO HOJE MESMO{" "}
          <span className="mx-2 text-black">•</span> MELHORE SEUS RESULTADOS AGORA{" "}
          <span className="mx-2 text-black">•</span> CONQUISTE SEUS OBJETIVOS{" "}
          <span className="mx-2 text-black">•</span> TREINE COM O MELHOR{" "}
          <span className="mx-2 text-black">•</span> RESULTADOS GARANTIDOS{" "}
          <span className="mx-2 text-black">•</span> ENTRE EM CONTATO HOJE MESMO{" "}
          <span className="mx-2 text-black">•</span> MELHORE SEUS RESULTADOS AGORA{" "}
          <span className="mx-2 text-black">•</span> CONQUISTE SEUS OBJETIVOS{" "}
          <span className="mx-2 text-black">•</span> RESULTADOS GARANTIDOS{" "}
          <span className="mx-2 text-black">•</span> ENTRE EM CONTATO HOJE MESMO{" "}
          <span className="mx-2 text-black">•</span> MELHORE SEUS RESULTADOS AGORA{" "}
          <span className="mx-2 text-black">•</span> CONQUISTE SEUS OBJETIVOS{" "}
          <span className="mx-2 text-black">•</span> TREINE COM O MELHOR{" "}
          <span className="mx-2 text-black">•</span> RESULTADOS GARANTIDOS{" "}
          <span className="mx-2 text-black">•</span> ENTRE EM CONTATO HOJE MESMO{" "}
          <span className="mx-2 text-black">•</span> MELHORE SEUS RESULTADOS AGORA{" "}
          <span className="mx-2 text-black">•</span> CONQUISTE SEUS OBJETIVOS{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSection;
