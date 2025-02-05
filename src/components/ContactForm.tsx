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

  const inputClass = "w-full p-2 border border-gray-300";

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
      <SectionTitle title="Got Ideas? I've got the skills." />
      <SectionTitle title="Let's team up." />
      <SectionSubTitle subTitle="Tell me more about yourself and what you're got in mind." />
      <div className="w-full flex items-center justify-between">
        <div className="w-1/2 mb-4 mr-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your Name..."
            required
          />
        </div>

        <div className="w-1/2 mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your Email..."
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
          placeholder="Subject..."
          required
        />
      </div>

      <div className="mb-6">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 h-32 resize-none"
          placeholder="Your Message..."
          required
        />
      </div>
      <div className="mb-4">
        <ButtonLink buttonText="Send Message" bgColor="bg-back" />
      </div>
    </form>
  );
};

export default ContactForm;
