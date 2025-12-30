# Portfolio Profesional

> **Your search ends here.** - Un portfolio moderno y responsivo construido con Next.js 15.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Totalmente Responsivo**: Optimizado para dispositivos móviles y desktop
- **Navegación Inteligente**: Header flotante con detección automática de secciones
- **Componentes Reutilizables**: Arquitectura modular con shadcn/ui
- **Optimizado para Producción**: Configurado para despliegue en cualquier plataforma

## 📋 Secciones

- **🏠 Landing**: Página de bienvenida con animación de texto
- **👤 Perfil**: Información personal y presentación
- **🛠️ Habilidades**: Stack tecnológico y competencias
- **⚙️ Herramientas**: Tecnologías y herramientas utilizadas
- **💼 Experiencia**: Historial profesional
- **🎓 Educación**: Formación académica
- **📧 Contacto**: Información de contacto

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + shadcn/ui
- **Iconos**: Lucide React
- **Formularios**: React Hook Form + Zod
- **Animaciones**: CSS Animations + Tailwind

# Desarrollo

## Prerrequisitos

- Node.js 18+ 
- npm o yarn

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd portfolio-profesional

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:9002`

## Scripts Disponibles

```bash
# Desarrollo con Turbopack
npm run dev

# Construcción para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint

# Verificación de tipos
npm run typecheck
```

## 📁 Estructura del Proyecto

```
src/
├── app/               # App Router de Next.js
│   ├── globals.css    # Estilos globales
│   ├── layout.tsx     # Layout principal
│   └── page.tsx       # Página principal
├── components/        # Componentes React
│   ├── sections/      # Secciones del portfolio
│   ├── ui/           # Componentes de UI (shadcn)
│   ├── Header.tsx    # Navegación principal
│   └── WelcomeNotification.tsx
├── hooks/            # Custom hooks
├── lib/              # Utilidades y configuraciones
└── ...
```

## 🎨 Personalización

### Modificar Contenido

1. **Información Personal**: Edita los componentes en `src/components/sections/`
2. **Estilos**: Modifica `tailwind.config.ts` y `src/app/globals.css`
3. **Texto Principal**: Cambia el texto en `LandingSection.tsx`

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `src/components/sections/`
2. Importa y agrega la sección en `src/app/page.tsx`
3. Actualiza la navegación en `src/components/Header.tsx`

## 📞 Contacto

Para más información, visita la sección de contacto en el portfolio o revisa los componentes del proyecto.

---

**Construido con ❤️ usando Next.js y TypeScript**
