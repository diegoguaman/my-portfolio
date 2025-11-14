import image from "./../assets/images/parkify-inicio.png";
import imageHealthy from "./../assets/images/healthy-miniatura.png";
import type { Project } from "../models";

export const projects: Project[] = [
  {
    id: 1,
    title: "ParkiFy",
    image: image,
    remoteUrl: "https://parkify-front.vercel.app/",
    repoFront: "https://github.com/diegoguaman/parkify-front",
    repoBack: "https://github.com/diegoguaman/parkify-back",
    longDescription: `
    ParkiFy nace para acortar la búsqueda de un espacio de parking,
    evitando frustraciones por llegar a un lugar lleno. Permite ver
    plazas disponibles en tiempo real y reservar con antelación,
    optimizando la experiencia del usuario y reduciendo el tiempo de
    espera.\n\n
    Mi rol como Frontend Tech Lead (Programa de EntrenamientoIgrowler)
    Durante cuatro semanas lideré el equipo de Front-end en un entorno
    real, aplicando Scrum y Kanban para entregar un MVP escalable.\n\n
    Organicé el backlog con GitHub Projects, definí hitos y prioricé
    tareas. Revisé y fusioné Pull Requests, promoviendo buenas prácticas
    en TypeScript y React. Coordiné la comunicación con UX (para validar
    diseños en Figma), con QA (para definir y validar casos de prueba) y
    con el equipo de Back-end (para acordar modelos de datos y contratos
    de API).\n\n
    Con el equipo de Back-end contribuí desarrollando endpoints REST en Spring Boot (Java 17), JPA
    y PostgreSQL. Definí entidades, controladores seguros con JWT y
    documenté la API usando OpenAPI/Swagger. También ayudé a resolver
    bugs de última hora y a preparar la demo final del MVP ante
    stakeholders.`,
    thumbnailUrl:
      "https://res.cloudinary.com/dgtbm9skf/image/upload/" +
      "pg_!unsigned_fetch!/q_auto:best/fetch/" +
      "w_400,h_200,c_fill/https://parkify-front.vercel.app/",
  },
  {
    id: 1,
    title: "Healthy App",
    image: imageHealthy,
    remoteUrl: "https://healthy-front-nine.vercel.app/",
    repoFront: "https://github.com/diegoguaman/healthy-front",
    repoBack: "https://github.com/Proyecto-III-Healthy/healthy-api",
    longDescription: `
    ParkiFy nace para acortar la búsqueda de un espacio de parking,
    evitando frustraciones por llegar a un lugar lleno. Permite ver
    plazas disponibles en tiempo real y reservar con antelación,
    optimizando la experiencia del usuario y reduciendo el tiempo de
    espera.\n\n
    Mi rol como Frontend Tech Lead (Programa de EntrenamientoIgrowler)
    Durante cuatro semanas lideré el equipo de Front-end en un entorno
    real, aplicando Scrum y Kanban para entregar un MVP escalable.\n\n
    Organicé el backlog con GitHub Projects, definí hitos y prioricé
    tareas. Revisé y fusioné Pull Requests, promoviendo buenas prácticas
    en TypeScript y React. Coordiné la comunicación con UX (para validar
    diseños en Figma), con QA (para definir y validar casos de prueba) y
    con el equipo de Back-end (para acordar modelos de datos y contratos
    de API).\n\n
    Con el equipo de Back-end contribuí desarrollando endpoints REST en Spring Boot (Java 17), JPA
    y PostgreSQL. Definí entidades, controladores seguros con JWT y
    documenté la API usando OpenAPI/Swagger. También ayudé a resolver
    bugs de última hora y a preparar la demo final del MVP ante
    stakeholders.`,
    thumbnailUrl:
      "https://res.cloudinary.com/dgtbm9skf/image/upload/" +
      "pg_!unsigned_fetch!/q_auto:best/fetch/" +
      "w_400,h_200,c_fill/https://parkify-front.vercel.app/",
  },
];
