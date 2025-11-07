# ✅ Checklist de Despliegue

## Pre-Despliegue

### 1. Configuración Local

- [ ] Archivo `.env` creado con `VITE_API_URL`
- [ ] Dependencias instaladas (`npm install`)
- [ ] Build de producción exitoso (`npm run build`)
- [ ] Preview funciona correctamente (`npm run preview`)
- [ ] No hay errores de linting (`npm run lint`)

### 2. Verificación de Backend

- [ ] Backend está deployado y funcionando
- [ ] Endpoint `POST /api/form` responde correctamente
- [ ] Endpoint `GET /api/health` responde (opcional)
- [ ] CORS configurado para permitir tu dominio frontend

**Test del Backend:**

```bash
# Windows PowerShell
curl -Method Post `
  -Uri "https://portfolio-back-h5tl.onrender.com/api/form" `
  -ContentType "application/json" `
  -Body '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test"}'
```

### 3. Variables de Entorno

Configura en tu plataforma de despliegue:

```bash
VITE_API_URL=https://portfolio-back-h5tl.onrender.com/api
```

**⚠️ Importante:** No incluyas `VITE_GEMINI_API_KEY` en producción si planeas mover la lógica de IA al backend.

---

## Despliegue en Vercel

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 2: Login

```bash
vercel login
```

### Paso 3: Configurar Proyecto

```bash
vercel
```

Responde las preguntas:

- Set up and deploy? **Y**
- Which scope? Selecciona tu cuenta
- Link to existing project? **N**
- Project name? **my-portfolio**
- In which directory? **./
- Want to override settings? **N**

### Paso 4: Configurar Variable de Entorno

```bash
vercel env add VITE_API_URL
```

Ingresa: `https://portfolio-back-h5tl.onrender.com/api`

Selecciona: Production, Preview, Development

### Paso 5: Deploy a Producción

```bash
vercel --prod
```

### Paso 6: Verificar

Tu sitio estará disponible en: `https://my-portfolio-[hash].vercel.app`

---

## Despliegue en Netlify

### Opción 1: Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Inicializar
netlify init

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Opción 2: Netlify UI

1. Ve a https://app.netlify.com
2. "Add new site" → "Import an existing project"
3. Conecta tu repositorio de GitHub
4. Configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Environment variables:**
     - `VITE_API_URL`: `https://portfolio-back-h5tl.onrender.com/api`
5. Deploy

---

## Post-Despliegue

### 1. Verificación Funcional

- [ ] El sitio carga correctamente
- [ ] Todas las secciones son visibles
- [ ] La navegación funciona
- [ ] Las imágenes cargan
- [ ] El formulario de contacto funciona
- [ ] Las notificaciones toast aparecen
- [ ] No hay errores en la consola del navegador

### 2. Verificación de Performance

```bash
# Lighthouse CI (opcional)
npm install -g @lhci/cli
lhci autorun --collect.url=https://tu-sitio.vercel.app
```

Objetivos:
- **Performance:** > 90
- **Accessibility:** > 95
- **Best Practices:** > 90
- **SEO:** > 90

### 3. Verificación de Responsividad

Prueba en:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### 4. Test del Formulario de Contacto

- [ ] Validación funciona (campos vacíos)
- [ ] Validación de email funciona
- [ ] Envío exitoso muestra notificación
- [ ] Error de red muestra notificación de error
- [ ] Formulario se limpia después de envío exitoso

---

## Mejoras Post-Despliegue (Opcionales)

### Analytics

```bash
# Google Analytics 4
npm install react-ga4
```

```typescript
// src/main.tsx
import ReactGA from 'react-ga4';

if (env.isProduction) {
  ReactGA.initialize('G-XXXXXXXXXX');
}
```

### SEO

Actualiza `index.html`:

```html
<head>
  <meta name="description" content="Portfolio de Diego Guaman - Full Stack Developer">
  <meta name="keywords" content="portfolio, developer, react, typescript">
  <meta property="og:title" content="Diego Guaman - Portfolio">
  <meta property="og:description" content="Full Stack Developer Portfolio">
  <meta property="og:image" content="https://tu-sitio.com/preview.jpg">
  <meta name="twitter:card" content="summary_large_image">
</head>
```

### Custom Domain

**Vercel:**

```bash
vercel domains add tu-dominio.com
```

Configura DNS:
- Tipo: **A**
- Nombre: **@**
- Valor: **76.76.21.21**

**Netlify:**

Settings → Domain management → Add custom domain

### SSL/HTTPS

- **Vercel:** Automático
- **Netlify:** Automático

### Performance Optimizations

1. **Lazy Loading de Imágenes**

```typescript
// Ya implementado en ProjectCard.tsx
<img loading="lazy" ... />
```

2. **Code Splitting** (vite.config.ts)

```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['framer-motion', 'react-icons'],
          'form-vendor': ['react-hook-form', 'zod'],
        },
      },
    },
  },
});
```

3. **Compresión de Imágenes**

Optimiza las imágenes en `src/assets/images/` con:
- https://tinypng.com
- https://squoosh.app

---

## Monitoreo

### Render Backend

Monitor tu backend en:
- https://dashboard.render.com

Verifica:
- [ ] Estado: "Live"
- [ ] Logs sin errores críticos
- [ ] Tiempo de respuesta < 500ms

### Frontend

Usa las herramientas de tu plataforma:
- **Vercel:** https://vercel.com/dashboard
- **Netlify:** https://app.netlify.com

Monitorea:
- [ ] Tiempo de build < 5 minutos
- [ ] Deploy exitoso
- [ ] Analytics de visitantes

---

## Troubleshooting

### "Cannot find module" en producción

**Causa:** Imports case-sensitive  
**Solución:** Verifica que los imports coincidan exactamente con los nombres de archivo

### Formulario no envía

**Problema:** Error CORS  
**Solución:** Configurar CORS en el backend:

```typescript
// backend
app.use(cors({
  origin: ['https://tu-sitio.vercel.app', 'https://tu-sitio.netlify.app'],
}));
```

### Imágenes no cargan

**Problema:** Rutas incorrectas  
**Solución:** Usar rutas relativas desde `src/assets/`

### Build falla en Vercel/Netlify

**Problema:** Dependencias dev como deps  
**Solución:** Verifica `package.json` - todas las deps de build deben estar en `dependencies` o `devDependencies` correctamente

---

## Rollback

Si algo sale mal:

**Vercel:**

```bash
vercel rollback
```

**Netlify:**

Deploys → Click en deploy anterior → "Publish deploy"

---

## Contacto de Soporte

- **Vercel:** https://vercel.com/support
- **Netlify:** https://www.netlify.com/support/
- **Render:** https://render.com/docs

---

## ✅ Checklist Final

- [ ] Sitio deployado y accesible
- [ ] Variables de entorno configuradas
- [ ] Backend funcionando
- [ ] Formulario de contacto operativo
- [ ] No hay errores en consola
- [ ] Responsivo en todos los dispositivos
- [ ] Performance > 90 en Lighthouse
- [ ] SEO optimizado
- [ ] Analytics configurado (opcional)
- [ ] Custom domain configurado (opcional)

---

**¡Felicitaciones! Tu portfolio está en producción 🎉**

