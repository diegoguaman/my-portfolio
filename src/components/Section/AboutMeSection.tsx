import React from "react";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";
import SectionSubTitle from "./SectionSubTitle";
import ButtonLink from "../ButtonLink";
import image from "./../../assets/images/aboutMe.png";

const AboutMeSection: React.FC = () => {
  return (
    <div
      className="
      flex flex-col mt-6 md:flex-row
      min-h-[24rem]
      md:min-h-96 "
    >
      {/* Imagen de fonde */}
      <div
        className="
        w-full md:w-1/2                    // ¡Cambio! full width en móvil, mitad en md+
        h-64 md:h-auto                    // ¡Cambio! altura fija en móvil, auto en md+
        bg-cover md:bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Contenedor de texto */}
      <div
        className="
        w-full md:w-1/2
        flex flex-col justify-between
        items-center
        p-6 md:p-8
        space-y-4
        text-justify
        shadow-xl
        bg-white
        md:items-start"
      >
        <SectionTitle title="Acerca De" uppercase="uppercase" />
        <SectionSubTitle subTitle="Desarrollador web Full Stack " />
        <SectionText>
          Soy un <strong>Ingeniero de Software</strong> especializado en el
          ecosistema <strong>Java (Spring Boot 3.5)</strong> y arquitecturas{" "}
          <strong>Cloud-Native</strong>. Mi enfoque se centra en la creación de
          aplicaciones escalables y de alto rendimiento, bajo una mentalidad{" "}
          <strong>"Quality-First"</strong> que garantiza un 90% de cobertura de
          test.
        </SectionText>

        <SectionText>
          Actualmente, estoy consolidando mi especialización en{" "}
          <strong>Microsoft Azure</strong> (certificándome en AZ-104 y AZ-204),
          integrando soluciones con <strong>Docker, Kubernetes (AKS)</strong> y
          flujos de <strong>CI/CD</strong>. Domino la traducción de activos de
          diseño (Figma) a interfaces modernas con{" "}
          <strong>React y TypeScript</strong>, conectándolos con backends
          robustos bajo <strong>Arquitectura Hexagonal</strong>.
        </SectionText>

        <SectionText>
          Más allá del código, soy una persona curiosa y entusiasta. Encuentro
          inspiración en la música en directo y el cine, aficiones que alimentan
          mi creatividad tecnológica. Disfruto del trabajo en equipo en entornos{" "}
          <strong>Agile</strong>, donde las <strong>code reviews</strong> y el
          aprendizaje compartido permiten entregar soluciones que realmente
          aportan valor al negocio.
        </SectionText>
        <div className="flex">
          <ButtonLink
            buttonText="Descargar CV"
            bgColor="back"
            href="https://drive.google.com/file/d/1xt6WQfmD20wKKc2sia7Sqew1f7uHHoyz/view?usp=drive_link"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
