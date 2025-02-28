import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Map, Marker } from "pigeon-maps";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formDataObject: Record<string, unknown> = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
  
    emailjs
      .send(
        "service_r6n3jhs", 
        "template_270e7pb", 
        formDataObject, 
        "hb2GD2-Hj2bb9BIgG"
      )
      .then(
        (response) => {
          console.log("E-mail enviado com sucesso", response);
          setFormSubmitted(true);
        },
        (error) => {
          console.error("Erro ao enviar o e-mail", error);
        }
      );
  };

  return (
    <div className="relative w-full py-20 md:py-40 bg-black/50 backdrop-blur-lg border border-white/20 flex items-center justify-center px-5 md:px-0 rounded-3xl md:mb-5 shadow-lg">
      <div className="flex flex-col md:flex-col xl:flex-row items-start justify-center w-full md:w-4/5 max-w-screen-xl">
        
        {/* Formulário */}
        <div className="w-full xl:w-1/2 md:pr-12">
          <motion.h2
            className="text-3xl text-center md:text-left font-bold mb-10 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Envie sua mensagem
          </motion.h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-white">
            <div>
              <input
                type="text"
                placeholder="Nome"
                {...register("name", { required: "Nome é obrigatório", minLength: { value: 3, message: "Mínimo 3 caracteres" } })}
                className="w-full p-3 border bg-gray-800 border-amber-400 rounded-md"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { 
                  required: "Email é obrigatório", 
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" } 
                })}
                className="w-full p-3 border bg-gray-800 border-amber-400 rounded-md"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <textarea
                placeholder="Mensagem"
                {...register("message", { required: "Mensagem é obrigatória", minLength: { value: 10, message: "Mínimo 10 caracteres" } })}
                className="w-full p-3 border bg-gray-800 border-amber-400 rounded-md h-32"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gray-800 text-white font-bold border-amber-400 border-2 rounded-md hover:bg-amber-400 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 1 }}
            >
              Enviar
            </motion.button>
            {formSubmitted && <p className="text-green-500 mt-3">Mensagem enviada com sucesso!</p>}
          </form>
        </div>

        {/* Mapa */}
        <div className="w-full xl:w-1/2 mt-10 md:mt-20 xl:mt-0">
          <motion.h2
            className="text-3xl text-center md:text-left font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Onde eu atuo
          </motion.h2>

          {/* Pigeon Map Wrapper */}
          <div className="border bg-amber-400 border-gray-800 mt-10 rounded-md shadow-md">
            <Map height={300} center={[-30.0331, -51.2300]} zoom={12}>
              {/* Adicionar Marcadores no Mapa */}
              <Marker anchor={[-30.0331, -51.2300]} />
            </Map>
          </div>
          <div className="flex w-full justify-center space-x-4 pt-5 text-white text-xs">
            <p className="border-r-2 border-cinza pr-4">Porto Alegre</p>
            <p className="border-r-2 border-cinza pr-4">Canoas</p>
            <p className="border-r-2 border-cinza pr-4">São Leopoldo</p>
            <p>Gravataí</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
