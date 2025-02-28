

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import emailjs from "@emailjs/browser";


interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { name, email, message } = data;

    emailjs
      .send(
        "service_r6n3jhs", 
        "template_270e7pb", 
        {
          name,
          email,
          message,
        },
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
    <div className="relative w-full py-20 md:py-40 bg-black/50  backdrop-blur-lg border border-white/20  flex items-center justify-center px-5 md:px-0 rounded-3xl md:mb-5 shadow-[0px_10px_30px_rgba(0,0,0,0.8)]">
      <div className="flex flex-col md:flex-row items-star justify-center w-full md:w-4/5 max-w-screen-xl">
        {/* Formulário */}
        <div className="md:w-1/2 md:pr-12">
          <motion.h2
            className="text-3xl text-center md:text-left font-bold w-full mb-10 text-white"
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
                className="w-full p-3 border bg-cinza border-amber-400 rounded-md"
              />
              {errors.name && <p className="text-red-500 text-sm ">{errors.name.message}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email é obrigatório", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email inválido" } })}
                className="w-full  p-3 border bg-cinza border-amber-400 rounded-md"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <textarea
                placeholder="Mensagem"
                {...register("message", { required: "Mensagem é obrigatória", minLength: { value: 10, message: "Mínimo 10 caracteres" } })}
                className="w-full p-3 border bg-cinza border-amber-400 rounded-md h-32"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-cinza text-white font-bold border-amber-400 border-2 rounded-md hover:bg-amber-400 hover:text-cinza transition-colors"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 1 }}
            >
              Enviar
            </motion.button>
            {formSubmitted && <p className="text-green-500 mt-3">Mensagem enviada com sucesso!</p>}
          </form>
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 ">
          <motion.h2
            className="text-3xl text-center md:text-left font-bold w-full mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Onde eu atuo
          </motion.h2>


          <MapContainer center={[-30.0331, -51.2300]} zoom={15} className="border bg-amber-400 border-cinza mt-10" style={{ height: "300px", width: "100%", borderRadius: "10px" }}>
            <TileLayer
              url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=osrwLpk4mvBeWmJUVrad"
            />

            <Marker 
              position={[-30.0331, -51.2300]} 
              icon={L.divIcon({ className: 'empty-marker', iconSize: [1, 1] })} 
            >
              <Popup>Porto Alegre - RS</Popup>
            </Marker>
          </MapContainer>

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
