'use client';
import { motion, useAnimation } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideShow from '../components/SlideShow';
import { useEffect, useState } from "react";
import Image from "next/image";
import alter from "../../../public/alter.png";

import aluno01 from '../../../public/aluno_01.png';
import aluno02 from '../../../public/aluno_02.png';
import aluno03 from '../../../public/aluno_03.png';
import aluno04 from '../../../public/aluno_04.png';
import aluno05 from '../../../public/aluno_05.png';

const images = [aluno01, aluno02, aluno03, aluno04, aluno05];


export default function Carousel() {

  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const progress = Math.min(scrollY / 300, 1);

    controls.start({
      x: `${350 * progress}%`,
      rotate: 0,
      transition: { duration: 0.5 },
    });
  }, [scrollY, controls]);
  return (
    <div className="w-full bg-cinza flex justify-center items-center flex-col relative pb-20 ">

        <motion.div
        className="absolute z-[150] md:top-[-10%] md:left-[-2%] float top-[-27%] max-w-lg"
          initial={{ opacity: 0, x:-250, y: 250, }}
          animate={{ opacity: 1, x:0, y: 0, }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
          className="z-[150] max-w-80 md:max-w-full"
            src={alter}
            alt="alter"
            width={400}
            height={300}
          />
        </motion.div>


      <div className="w-full h-[100px] absolute bg-amber-400 z-[100] top-0 rounded-b-3xl "></div>
      
      {/* <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{  delay: 0.5, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-center text-amber-400  py-5 px-5 md:py-10 md:px-10 mt-16 md:mt-12 "
        >
        Resultados
      </motion.h2> */}
      
      <div className="relative z-10 md:px-4 sm:px-8 pt-40 md:pt-44 w-full md:w-4/5 xl:w-3/5 fade-in">
        <SlideShow images={images} />
      </div>
    </div>
  );
}
