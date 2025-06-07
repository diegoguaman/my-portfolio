import React, { useState } from "react";
import ButtonLink from "./ButtonLink";
import SectionTitle from "./Section/SectionTitle";
import SectionSubTitle from "./Section/SectionSubTitle";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputClass = "w-full p-2 border border-gray-300 bg-white dark:bg-white";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Aquí puedes agregar la lógica para enviar el formulario, como una petición a una API
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-8 bg-white shadow-lg"
    >
      {/*<SectionTitle title="Got Ideas? I've got the skills." />*/}
      <SectionTitle title="Tienes una Idea?" />
      {/* <SectionTitle title=" Yo tengo las habilidades!." /> */}
      <SectionTitle title="Vamos a trabajar juntos." />
      <SectionSubTitle subTitle="Cuéntame más sobre ti y lo que tienes en mente." />
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="w-full sm:w-1/2 mb-4 mr-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Tu nombre..."
            required
          />
        </div>

        <div className="w-full sm:w-1/2 mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="Tu email..."
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClass}
          placeholder="Asunto..."
          required
        />
      </div>

      <div className="mb-6">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 h-32 resize-none bg-white dark:bg-white"
          placeholder="Tu mensaje..."
          required
        />
      </div>
      <div className="mb-4">
        <ButtonLink buttonText="Enviar Mensaje" bgColor="bg-back" />
      </div>
    </form>
  );
};

export default ContactForm;
