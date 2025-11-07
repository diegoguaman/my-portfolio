# 🚀 Quick Start Guide

## Instalación y Configuración

### 1. Clonar e Instalar Dependencias

```bash
# Instalar dependencias
npm install
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
# Backend API (REQUERIDO)
VITE_API_URL=https://portfolio-back-h5tl.onrender.com/api

# Google Gemini API Key (OPCIONAL - solo para funciones de IA)
VITE_GEMINI_API_KEY=tu_api_key_aqui
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### 4. Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

### 5. Preview de Producción

```bash
npm run preview
```

---

## ✅ Verificación de la Configuración

### Verificar Backend

Asegúrate de que tu backend esté funcionando:

```bash
# En Windows PowerShell
curl https://portfolio-back-h5tl.onrender.com/api/health

# Respuesta esperada: 200 OK
```

### Verificar Variables de Entorno

Si al ejecutar `npm run dev` ves este error:

```
Error: Missing required environment variables: VITE_API_URL
```

Significa que necesitas crear el archivo `.env` con la variable `VITE_API_URL`.

---

## 🏗️ Estructura del Proyecto

```
my-portfolio/
├── src/
│   ├── components/          # Componentes de UI
│   │   ├── Section/         # Secciones de la página
│   │   └── project/         # Componentes de proyectos
│   ├── config/              # ✨ Configuración centralizada
│   │   ├── env.config.ts    # Variables de entorno
│   │   └── constants.ts     # Constantes de la app
│   ├── hooks/               # Custom React hooks
│   ├── models/              # ✨ Tipos y modelos
│   ├── repositories/        # ✨ Capa de acceso a datos
│   ├── services/            # Lógica de negocio
│   ├── utils/               # ✨ Utilidades
│   ├── data/                # Datos estáticos
│   ├── schema/              # Esquemas de validación
│   └── App.tsx              # Componente principal
├── .env                     # Variables de entorno (crear)
├── ENVIRONMENT.md           # Documentación de variables
├── SECURITY_RECOMMENDATIONS.md  # Guía de seguridad
└── IMPROVEMENTS_SUMMARY.md  # Resumen de mejoras
```

---

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Build
npm run build            # Compila para producción

# Preview
npm run preview          # Preview de la build de producción

# Linting
npm run lint             # Ejecuta ESLint
```

---

## 🔧 Solución de Problemas

### Error: "Cannot find module '../config/env.config'"

**Causa:** TypeScript no compiló los archivos nuevos  
**Solución:**

```bash
npm run build
```

### Error: "Missing required environment variables"

**Causa:** Falta el archivo `.env` o la variable `VITE_API_URL`  
**Solución:** Crear `.env` con el contenido especificado arriba

### Error: "Network Error" al enviar formulario

**Causa:** Backend no está disponible o CORS no configurado  
**Solución:**

1. Verificar que el backend esté funcionando
2. Verificar que `VITE_API_URL` sea correcta
3. Verificar configuración de CORS en el backend

### Warning: "Some chunks are larger than 500 kB"

**Causa:** Bundle grande (incluye React, etc.)  
**Solución:** Normal para esta aplicación, pero se puede mejorar:

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'form-vendor': ['react-hook-form', 'zod', '@hookform/resolvers'],
        },
      },
    },
  },
});
```

---

## 🔌 Conectar con Backend Personalizado

Si quieres usar un backend diferente, actualiza la variable de entorno:

```bash
# .env
VITE_API_URL=http://tu-backend.com/api
```

Tu backend debe exponer estos endpoints:

```typescript
// POST /api/form - Enviar formulario de contacto
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}

// Respuesta
{
  "id": number,
  "createdAt": "string"
}

// GET /api/health - Health check (opcional)
// Respuesta: 200 OK
```

---

## 📚 Documentación Adicional

- [ENVIRONMENT.md](./ENVIRONMENT.md) - Configuración de variables de entorno
- [SECURITY_RECOMMENDATIONS.md](./SECURITY_RECOMMENDATIONS.md) - Guía de seguridad
- [IMPROVEMENTS_SUMMARY.md](./IMPROVEMENTS_SUMMARY.md) - Resumen de mejoras

---

## 🆘 ¿Necesitas Ayuda?

1. Revisa la documentación en los archivos `.md`
2. Verifica que todas las variables de entorno estén configuradas
3. Asegúrate de que el backend esté funcionando
4. Revisa los logs de la consola del navegador

---

## ✨ Próximos Pasos

Una vez que todo funcione:

1. ✅ Personaliza el contenido en `src/data/projectsData.ts`
2. ✅ Actualiza las imágenes en `src/assets/images/`
3. ✅ Personaliza los textos en los componentes
4. ✅ Ajusta los colores en `tailwind.config.js`
5. ✅ Despliega en Vercel, Netlify o tu plataforma favorita

---

¡Listo! Tu portfolio está configurado y listo para usar. 🎉

