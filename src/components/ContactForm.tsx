import React from "react";
import SectionTitle from "./Section/SectionTitle";
import SectionSubTitle from "./Section/SectionSubTitle";
import { useSubmitForm } from "../hooks/useSubmitForm";
import SubmitFeedback from "./SubmitFeedback";
import {
  ContactFormData,
  ContactFormSchema,
} from "../schema/contactForm.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./FormField";
import { TextAreaField } from "./TextAreaField";
import { SubmitButton } from "./SubmitButton";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });
  const mutation = useSubmitForm();

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-8 bg-white shadow-lg"
    >
      {/*<SectionTitle title="Got Ideas? I've got the skills." />*/}
      <SectionTitle title="Tienes una Idea?" />
      {/* <SectionTitle title=" Yo tengo las habilidades!." /> */}
      <SectionTitle title="Vamos a trabajar juntos." />
      <SectionSubTitle subTitle="Cuéntame más sobre ti y lo que tienes en mente." />
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="w-full sm:w-1/2 mb-4 mr-4">
          <FormField
            label="Nombre"
            placeholder="Tu nombre..."
            {...register("name")}
            error={errors.name?.message}
          />
        </div>

        <div className="w-full sm:w-1/2 mb-4">
          <FormField
            label="Email"
            type="email"
            placeholder="Tu email..."
            {...register("email")}
            error={errors.email?.message}
          />
        </div>
      </div>
      <div className="mb-4">
        <FormField
          label="Asunto"
          placeholder="Asunto..."
          {...register("subject")}
          error={errors.subject?.message}
        />
      </div>

      <div className="mb-6">
        <TextAreaField
          label="Mensaje"
          placeholder="Tu mensaje..."
          {...register("message")}
          error={errors.message?.message}
        />
      </div>
      <div className="mb-4">
        <SubmitButton disabled={mutation.isPending}>
          {mutation.isPending ? "Enviando..." : "Enviar Mensaje"}
        </SubmitButton>
      </div>
      {/* Aquí mostramos el feedback de envío */}
      <SubmitFeedback
        isPending={mutation.isPending}
        isSuccess={mutation.isSuccess}
        isError={mutation.isError}
        errorMessage={mutation.error?.message}
      />
    </form>
  );
};

export default ContactForm;
