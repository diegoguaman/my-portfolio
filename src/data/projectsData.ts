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
  HealthyApp - Aplicación de Gestión de Recetas Saludables

  El Problema

  Mantener una alimentación saludable y planificada es un desafío constante para muchas personas. Los usuarios enfrentan dificultades para:
  - Encontrar recetas que se adapten a sus preferencias dietéticas específicas
  - Planificar comidas completas del día de manera eficiente
  - Gestionar restricciones alimentarias y objetivos nutricionales
  - Acceder a información detallada de ingredientes y preparación
  - Mantener un historial de recetas favoritas y planes de comidas

  La Solución

  HealthyApp es una aplicación web moderna que utiliza inteligencia artificial para generar recetas personalizadas y planes de comidas completos. La aplicación permite a los usuarios:

  - Generar recetas personalizadas basadas en preferencias alimentarias usando IA
  - Crear planes de comidas diarios con múltiples recetas organizadas por fecha
  - Gestionar recetas favoritas para acceso rápido a preparaciones preferidas
  - Acceder a información detallada incluyendo ingredientes, pasos de preparación e información nutricional
  - Personalizar preferencias en su perfil para generar contenido adaptado

  Tecnologías y Arquitectura

  Frontend Core:
  - React 18.2 con Hooks modernos
  - Vite 5.2 para desarrollo rápido y builds optimizados
  - React Router DOM 6.23 para navegación declarativa

  Gestión de Estado y Datos:
  - Context API para estado global de autenticación
  - Custom Hooks (useAuth) para lógica reutilizable
  - Axios con interceptores para peticiones HTTP
  - Manejo centralizado de errores

  UI/UX:
  - Bootstrap 5.3 y React Bootstrap para diseño responsive
  - FontAwesome e React Icons para iconografía
  - Componentes reutilizables (RecipeCard, DayPlanCard)
  - Loading states y animaciones suaves

  Seguridad y Autenticación:
  - JWT para gestión de sesiones
  - Rutas protegidas con Higher-Order Components
  - Interceptores HTTP para autenticación automática
  - Validación de tokens y manejo de sesiones

  Utilidades:
  - date-fns y dayjs para manipulación de fechas
  - react-big-calendar para visualización de calendario
  - react-datepicker para selección de fechas

  Principios de Desarrollo

  El proyecto está construido siguiendo principios de ingeniería de software:

  - SOLID: Separación de responsabilidades, servicios por dominio
  - DRY: Componentes y lógica reutilizable
  - KISS: Código limpio y mantenible
  - Arquitectura escalable: Estructura modular preparada para crecimiento
  - Mejores prácticas: Manejo de errores, optimización de performance, accesibilidad

  Resultados

  - Aplicación completamente funcional con múltiples features integradas
  - Código refactorizado siguiendo principios SOLID
  - Arquitectura escalable y mantenible
  - UI responsive y accesible
  - Sistema de autenticación robusto
  - Documentación técnica completa

`,
    thumbnailUrl:
      "https://res.cloudinary.com/dgtbm9skf/image/upload/" +
      "pg_!unsigned_fetch!/q_auto:best/fetch/" +
      "w_400,h_200,c_fill/https://parkify-front.vercel.app/",
  },
];
