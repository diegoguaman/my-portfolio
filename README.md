# 💼 Portfolio Frontend - Diego Guaman

> Portfolio profesional full-stack desarrollado con React, TypeScript y arquitectura en capas, demostrando expertise en desarrollo moderno, mejores prácticas y cumplimiento de normativas internacionales.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🌟 Características Destacadas

### 🎯 Expertise Técnico Demostrado

- 🏗️ **Arquitectura Enterprise**: Implementación completa del patrón Repository con separación de capas (Presentación → Hooks → Services → Repositories → API)
- 🔒 **Cumplimiento GDPR/RGPD**: Sistema completo de gestión de consentimiento de cookies con identificación anónima (UUID v4), almacenamiento persistente y registro auditable
- 🎯 **TypeScript Avanzado**: Tipado fuerte en toda la aplicación con modelos bien definidos y validación en tiempo de compilación
- ⚡ **Gestión de Estado Profesional**: TanStack Query para server state, React Hook Form + Zod para formularios complejos
- 🎨 **UX/UI Premium**: Animaciones suaves con Framer Motion, diseño responsive mobile-first, dark mode support
- 🤖 **Integración IA**: Asistente conversacional con ElevenLabs AI y generación de contenido con Google Gemini
- 🧪 **Código Limpio**: Principios SOLID, DRY, KISS aplicados consistentemente

### 🚀 Features Principales

- ✅ **Sistema de Cookies GDPR-Compliant**
  - Gestión granular de consentimiento (necessary, analytics, marketing)
  - Identificación anónima con UUID persistente
  - Header HTTP automático con interceptor Axios
  - UI equitativa sin dark patterns (cumplimiento normativo)
  
- ✅ **Formulario de Contacto Robusto**
  - Validación en tiempo real con Zod schemas
  - Manejo optimista de errores con retry logic
  - Feedback visual inmediato al usuario
  - Rate limiting y sanitización en backend

- ✅ **Portfolio Interactivo**
  - Galería de proyectos con lazy loading
  - Modales con información detallada
  - Links a demos en vivo y repositorios
  - Optimización de imágenes con Cloudinary

- ✅ **Rendimiento Optimizado**
  - Code splitting automático con Vite
  - Lazy loading de componentes pesados
  - Compresión de assets (JS, CSS, imágenes)
  - Score 90+ en Lighthouse

## 🚀 Quick Start

```bash
# Instalar dependencias
npm install

# Crear archivo .env
echo "VITE_API_URL=https://portfolio-back-h5tl.onrender.com/api" > .env

# Ejecutar en desarrollo
npm run dev
```

👉 [Ver guía completa de instalación](./QUICK_START.md)

## 📋 Documentación

- **[QUICK_START.md](./QUICK_START.md)** - Guía de instalación y configuración
- **[ENVIRONMENT.md](./ENVIRONMENT.md)** - Variables de entorno
- **[SECURITY_RECOMMENDATIONS.md](./SECURITY_RECOMMENDATIONS.md)** - Mejores prácticas de seguridad
- **[IMPROVEMENTS_SUMMARY.md](./IMPROVEMENTS_SUMMARY.md)** - Mejoras implementadas

## 🛠️ Stack Tecnológico

<div align="center">

| Categoría | Tecnologías |
|:---------:|:------------|
| 🎨 **Frontend Core** | React 18.3 • TypeScript 5.6 • Vite 6.3 |
| 💅 **Styling** | Tailwind CSS 3.4 • Framer Motion 11.15 |
| 📝 **Formularios** | React Hook Form 7.58 • Zod 3.25 |
| 🔄 **Estado** | TanStack Query 5.80 • Context API |
| 🌐 **HTTP Client** | Axios 1.10 (con interceptores) |
| 🤖 **AI Integration** | Google Gemini • ElevenLabs Conversational AI |
| 🍪 **Cookies** | js-cookie 3.0 (GDPR-compliant) |
| 🎯 **Utils** | React Icons • React Hot Toast • React Scroll |

</div>

### Backend (NestJS)
- **Framework**: NestJS con TypeScript
- **Database**: PostgreSQL con TypeORM/MikroORM
- **Validación**: class-validator + class-transformer
- **Seguridad**: JWT, CORS, Rate Limiting
- **Deploy**: Render.com

## 📁 Estructura del Proyecto

```
my-portfolio/
├── src/
│   ├── components/          # 🧩 Componentes React reutilizables
│   │   ├── project/         # Galería y modales de proyectos
│   │   ├── Section/         # Secciones del portfolio
│   │   ├── ContactForm.tsx  # Formulario con validación
│   │   └── CookieConsentBanner.tsx # Banner GDPR
│   ├── config/              # ⚙️ Configuración centralizada
│   │   ├── env.config.ts    # Validación de variables de entorno
│   │   └── constants.ts     # Constantes de la app
│   ├── hooks/               # 🎣 Custom React hooks
│   │   ├── useSubmitForm.ts # Hook para formulario contacto
│   │   └── useCookieConsent.ts # Hook para gestión cookies
│   ├── models/              # 📐 Tipos y modelos TypeScript
│   │   ├── form.model.ts    # DTOs del formulario
│   │   └── project.model.ts # Tipos de proyectos
│   ├── repositories/        # 🗄️ Capa de acceso a datos
│   │   └── form.repository.ts # Repositorio de formulario
│   ├── services/            # 🔧 Lógica de negocio
│   │   ├── api.ts           # Cliente Axios configurado
│   │   ├── formService.ts   # Servicios de formulario
│   │   ├── cookieService.ts # Servicios de cookies
│   │   └── genai.ts         # Integración Google Gemini
│   ├── utils/               # 🛠️ Utilidades compartidas
│   │   └── anonymousId.ts   # Gestión de UUID anónimo
│   ├── data/                # 📊 Datos estáticos
│   │   └── projectsData.ts  # Información de proyectos
│   ├── schema/              # ✅ Esquemas de validación Zod
│   │   └── contactForm.schema.ts
│   ├── types/               # 📝 Definiciones de tipos
│   │   └── elevenlabs-widget.d.ts
│   └── assets/              # 🎨 Recursos estáticos
├── public/                  # Archivos públicos
└── dist/                    # Build de producción optimizado
```

## 🏛️ Arquitectura

El proyecto sigue una **arquitectura en capas** para mejor mantenibilidad:

```
┌─────────────────────────────────────┐
│         Components (UI)             │  ← Presentación
├─────────────────────────────────────┤
│      Hooks (Business Logic)         │  ← Lógica de aplicación
├─────────────────────────────────────┤
│       Services (Use Cases)          │  ← Casos de uso
├─────────────────────────────────────┤
│    Repositories (Data Access)       │  ← Acceso a datos
├─────────────────────────────────────┤
│         API Client (HTTP)           │  ← Cliente HTTP
└─────────────────────────────────────┘
```

### Principios Aplicados

- ✅ **SOLID** - Código mantenible y extensible
- ✅ **DRY** - No repetir código
- ✅ **KISS** - Mantenerlo simple
- ✅ **Repository Pattern** - Separación de responsabilidades
- ✅ **Dependency Injection** - Flexibilidad y testabilidad

## 🔌 Backend API

Este frontend se conecta a un backend NestJS robusto desplegado en:

```
https://portfolio-back-h5tl.onrender.com/api
```

### Endpoints Principales

#### Formulario de Contacto
- `POST /api/form` - Enviar formulario de contacto
  - Validación con class-validator
  - Sanitización de inputs
  - Rate limiting implementado
  - Almacenamiento en PostgreSQL

#### Sistema de Cookies (GDPR)
- `POST /api/cookie-consent` - Guardar consentimiento de cookies
  - Requiere header `x-anonymous-id` (UUID v4)
  - Validación estricta de UUID
  - Registro auditable con timestamps
  - Soporte para múltiples tipos de cookies

#### Salud del Sistema
- `GET /api/health` - Health check del servicio

Ver [ENVIRONMENT.md](./ENVIRONMENT.md) para configuración completa.

## 🧪 Scripts

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo (localhost:5173)

# Producción
npm run build            # Compila para producción
npm run preview          # Preview de la build

# Calidad de Código
npm run lint             # Ejecuta ESLint
```

## 📦 Build de Producción

```bash
npm run build
```

Los archivos optimizados se generan en `dist/`:

```
dist/
├── index.html           # HTML principal
├── assets/              
│   ├── index-[hash].js  # JavaScript minificado
│   ├── index-[hash].css # CSS minificado
│   └── ...              # Assets optimizados
```

## 🚀 Despliegue

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Variables de Entorno en Producción

Asegúrate de configurar:

```
VITE_API_URL=https://portfolio-back-h5tl.onrender.com/api
```

## 🔒 Seguridad y Cumplimiento

### Seguridad Implementada

- ✅ **Validación de Entorno**: Validación estricta de variables de entorno en startup con Zod
- ✅ **Sanitización de Inputs**: Validación robusta con React Hook Form + Zod schemas
- ✅ **Manejo de Errores**: Interceptor centralizado de Axios con normalización de errores
- ✅ **Timeout en Requests**: 10 segundos máximo para prevenir hanging requests
- ✅ **HTTPS Only**: Todas las comunicaciones sobre HTTPS en producción
- ✅ **Cookies Seguras**: Flags `secure`, `sameSite: Lax` y expiración de 1 año

### Cumplimiento GDPR/RGPD

- ✅ **Consentimiento Explícito**: Banner de cookies con opciones claras
- ✅ **Granularidad**: Separación de cookies (necessary, analytics, marketing)
- ✅ **No Dark Patterns**: Botones de igual prominencia visual (requerimiento GDPR)
- ✅ **Identificación Anónima**: UUID v4 sin datos personales
- ✅ **Registro Auditable**: Timestamps de creación y actualización
- ✅ **Persistencia**: Almacenamiento seguro en base de datos
- ✅ **Transparencia**: Información clara sobre el uso de cookies

### Recomendaciones Adicionales

⚠️ **Importante**: Ver [SECURITY_RECOMMENDATIONS.md](./SECURITY_RECOMMENDATIONS.md) para mejoras adicionales como:
- Mover API keys de IA al backend
- Implementar CSP headers
- Agregar CORS configurado correctamente

## 🤝 Contribución

Este es un proyecto personal, pero las sugerencias son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto para propósitos educativos.

## 💡 ¿Por Qué Este Proyecto Destaca?

Este portfolio no es solo un sitio web bonito, es una **demostración completa de habilidades profesionales**:

### 🎯 Arquitectura Empresarial
- Patrón Repository implementado correctamente
- Separación clara de responsabilidades
- Código escalable y mantenible
- Preparado para crecimiento de equipo

### 🔐 Conciencia de Seguridad y Cumplimiento
- Sistema completo de cookies conforme a GDPR
- Identificación anónima sin comprometer privacidad
- Validación de datos en múltiples capas
- Headers HTTP seguros y configurados

### 🚀 Tecnologías Modernas
- Stack actualizado a versiones estables
- Herramientas profesionales de la industria
- Gestión de estado server/client separada
- Performance optimization desde el inicio

### 📚 Documentación Profesional
- README completo y estructurado
- Guías de setup y deployment
- Comentarios JSDoc en funciones públicas
- Código autodocumentado

## 🎓 Habilidades Técnicas Demostradas

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend** | React 18, TypeScript, Tailwind CSS, Vite |
| **Estado & Forms** | TanStack Query, React Hook Form, Zod |
| **Backend** | NestJS, TypeORM/MikroORM, PostgreSQL |
| **Arquitectura** | Repository Pattern, SOLID, Clean Architecture |
| **UI/UX** | Framer Motion, Responsive Design, Accessibility |
| **Seguridad** | GDPR Compliance, Input Validation, Error Handling |
| **DevOps** | Vercel, Render, CI/CD, Environment Management |
| **APIs** | REST, Axios, HTTP Interceptors, Error Recovery |
| **IA** | Google Gemini, ElevenLabs Conversational AI |
| **Testing** | Jest (configurado), TypeScript compile-time checks |

## 👤 Autor

**Diego Guaman** - Full Stack Developer

> Apasionado por crear soluciones elegantes a problemas complejos, con foco en arquitectura limpia, seguridad y experiencia de usuario excepcional.

- 🌐 **Portfolio**: [En producción - URL del portfolio en Vercel]
- 💼 **LinkedIn**: [Tu perfil de LinkedIn]
- 🐙 **GitHub**: [@diegoguaman](https://github.com/diegoguaman)
- 📧 **Email**: Disponible a través del formulario de contacto

### 🏆 Experiencia Destacada

- **Frontend Tech Lead** en programa de entrenamiento Igrowler
- Liderazgo de equipo frontend en proyecto real (ParkiFy)
- Implementación de arquitectura escalable con Scrum/Kanban
- Coordinación con equipos UX, QA y Backend
- Contribución full-stack (React + Spring Boot)

---

## 🎯 Mejoras Recientes

Este proyecto fue recientemente refactorizado siguiendo las mejores prácticas:

- ✅ **Configuración de entorno** con validación en tiempo de ejecución
- ✅ **Constantes centralizadas** para mejor mantenibilidad
- ✅ **Arquitectura en capas** (Repository Pattern)
- ✅ **Sistema de cookies GDPR-compliant** con identificación anónima
- ✅ **Modelos TypeScript** organizados y reutilizables
- ✅ **Manejo de errores** mejorado con interceptores
- ✅ **Documentación completa** y profesional

Ver [IMPROVEMENTS_SUMMARY.md](./IMPROVEMENTS_SUMMARY.md) para detalles completos de todas las mejoras implementadas.

---

## 📞 Contacto y Demo

🌐 **Demo en Vivo**: [https://tu-portfolio.vercel.app](https://tu-portfolio.vercel.app)

💬 **¿Tienes un proyecto en mente?** Utiliza el formulario de contacto en el portfolio o conéctate conmigo en LinkedIn.

📖 **¿Necesitas ayuda con el setup?** Consulta [QUICK_START.md](./QUICK_START.md) para la guía completa de instalación.

---

<div align="center">

**⭐ Si este proyecto te resulta útil o interesante, considera darle una estrella en GitHub ⭐**

*Desarrollado con ❤️ y ☕ por Diego Guaman*

</div>
