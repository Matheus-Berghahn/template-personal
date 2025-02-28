

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-cinza py-10 px-8 rounded-3xl mb-5 mx-5">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sobre a empresa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4">Especializado em Treinamento Personalizado e Saúde</h3>
          <p className="text-gray-490 text-sm">
          Sou especializado em criar planos de treino personalizados para otimizar sua performance, melhorar sua saúde e alcançar seus objetivos de forma eficiente.
          </p>
        </motion.div>

        {/* Links rápidos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4">Links rápidos</h3>
          <ul className="space-y-2 text-gray-900 text-sm">
            <li><Link href="/">Instagram</Link></li>
            <li><Link href="/">Facebook</Link></li>
            <li><Link href="/">WhatsApp</Link></li>
            <li><Link href="/">E-mail</Link></li>
          </ul>
        </motion.div>

        {/* Contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4">Contato</h3>
          <p className="text-gray-900 text-sm">Email: contato@empresa.com</p>
          <p className="text-gray-900 text-sm">Telefone: (11) 99999-9999</p>
          <p className="text-gray-900 text-sm">Endereço: Rua Exemplo, 123 - Cidade</p>
        </motion.div>
      </div>

      {/* Linha divisória */}
      <motion.div
        className="w-full h-[1px] bg-gray-900 my-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Rodapé */}
      <div className="text-center text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} Empresa. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
