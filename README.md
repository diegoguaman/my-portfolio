# 💼 Portfolio Frontend - Diego Guaman

Portfolio personal desarrollado con React, TypeScript, Tailwind CSS y las mejores prácticas de desarrollo.

## ✨ Características

- 🎨 **Diseño Moderno**: UI limpia y responsive con Tailwind CSS
- ⚡ **Rendimiento Optimizado**: Build optimizado con Vite
- 🔒 **Seguro**: Validación de entorno y manejo de errores robusto
- 📱 **Responsive**: Funciona perfectamente en todos los dispositivos
- 🎯 **TypeScript**: Tipado fuerte en toda la aplicación
- 🏗️ **Arquitectura Limpia**: Siguiendo principios SOLID, DRY y KISS
- 🤖 **Integración IA**: Generación de texto e imágenes con Google Gemini

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

### Frontend
- **React 18** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework CSS utility-first

### Gestión de Estado y Datos
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **TanStack Query** - Gestión de estado del servidor
- **Axios** - Cliente HTTP

### Características Adicionales
- **Framer Motion** - Animaciones
- **React Hot Toast** - Notificaciones
- **Google Gemini AI** - Generación de contenido IA

## 📁 Estructura del Proyecto

```
my-portfolio/
├── src/
│   ├── components/          # Componentes de UI
│   ├── config/              # ✨ Configuración centralizada
│   ├── hooks/               # Custom React hooks
│   ├── models/              # ✨ Tipos y modelos TypeScript
│   ├── repositories/        # ✨ Capa de acceso a datos
│   ├── services/            # Lógica de negocio
│   ├── utils/               # ✨ Utilidades compartidas
│   ├── data/                # Datos estáticos
│   └── schema/              # Esquemas de validación Zod
├── public/                  # Archivos estáticos
└── dist/                    # Build de producción
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

Este frontend se conecta al backend en:

```
https://portfolio-back-h5tl.onrender.com/api
```

### Endpoints

- `POST /api/form` - Enviar formulario de contacto
- `GET /api/health` - Health check

Ver [ENVIRONMENT.md](./ENVIRONMENT.md) para más detalles.

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

### Vercel (Recomendado)

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

## 🔒 Seguridad

- ✅ Validación de entorno en startup
- ✅ Sanitización de inputs de formulario
- ✅ Manejo centralizado de errores
- ✅ Timeout configurado en requests
- ⚠️ **Importante**: Ver [SECURITY_RECOMMENDATIONS.md](./SECURITY_RECOMMENDATIONS.md) para mover la lógica de IA al backend

## 🤝 Contribución

Este es un proyecto personal, pero las sugerencias son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto para propósitos educativos.

## 👤 Autor

**Diego Guaman**

- Portfolio: [Tu URL]
- GitHub: [@diegoguaman](https://github.com/diegoguaman)
- LinkedIn: [Tu LinkedIn]

---

## 🎯 Mejoras Recientes

Este proyecto fue recientemente refactorizado siguiendo las mejores prácticas:

- ✅ Configuración de entorno con validación
- ✅ Constantes centralizadas
- ✅ Arquitectura en capas (Repository Pattern)
- ✅ Modelos TypeScript organizados
- ✅ Manejo de errores mejorado
- ✅ Documentación completa

Ver [IMPROVEMENTS_SUMMARY.md](./IMPROVEMENTS_SUMMARY.md) para detalles completos.

---

**¿Necesitas ayuda?** Consulta [QUICK_START.md](./QUICK_START.md) para la guía completa.
