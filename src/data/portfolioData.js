export const personalInfo = {
  name: "Luis Andres Paz Paz",
  title: "PASANTÍA DE INGENIERÍA DE SISTEMAS",
  subtitle: "DESARROLLADOR FULL STACK & SAAS ARCHITECT",
  location: "Santa Cruz de la Sierra, Bolivia",
  github: "https://github.com/LuisPazPaz",
  email: "andrespazpaz2014@gmail.com",
  phone: "+591 78543113",
  linkedin: "https://linkedin.com/in/luis-paz-paz-5a5822225/",
  
  quickSummary: [
    "JavaScript, Node.js, PHP, React y MySQL.",
    "Arquitecturas SaaS, pasarelas SSO (JWT) y Cron Jobs.",
    "Puntos de Venta (POS) e inventarios para licorerías y restaurantes."
  ],

  heroTagline: "Ingeniero en Sistemas titulado buscando integrarse a una pasantía profesional en desarrollo de software para aportar con código limpio, arquitectura SaaS e innovación técnica.",

  aboutParagraphs: [
    "Soy Luis Andres Paz Paz, Ingeniero en Sistemas titulado de la Universidad Tecnológica Privada de Santa Cruz (UTEPSA). Mi objetivo principal es integrarme a una pasantía profesional en desarrollo de software donde pueda aplicar mis conocimientos técnicos en proyectos de alto impacto.",
    "A lo largo de mi formación y proyectos independientes he desarrollado soluciones completas de software, abarcando desde Puntos de Venta (POS) e inventarios para licorerías y restaurantes, hasta la arquitectura de pasarelas de autenticación unificada (SSO Jump con JWT) para conectar múltiples aplicaciones en subdominios independientes.",
    "Me interesa volcar mis bases en ingeniería de software, robustecer mis habilidades técnicas en equipo y aportar activamente al despliegue de soluciones tecnológicas en un ámbito laboral."
  ]
};

export const skillsData = [
  {
    category: "Backend & APIs",
    skills: ["Node.js (Express)", "PHP (Clean Architecture)", "RESTful APIs", "JWT Authentication", "Node-Cron Automation"]
  },
  {
    category: "Frontend Moderno",
    skills: ["React.js", "Vite", "Tailwind CSS v3", "JavaScript (ES6+)", "Responsive Design (Mobile-First)", "Glassmorphism UI"]
  },
  {
    category: "Bases de Datos",
    skills: ["MySQL / MariaDB", "Doble Pool de Conexiones", "Transacciones ACID (Commit/Rollback)", "Modelado Relacional", "Optimización de Consultas SQL"]
  },
  {
    category: "DevOps & Herramientas",
    skills: ["Hostinger Cloud Deployment", "Git & GitHub", "pnpm / npm Workspaces", "Configuración Apache (.htaccess)", "CORS & Security Headers"]
  }
];

export const architectureHighlights = [
  {
    id: "sso-bridge",
    title: "SSO Jump & JWT Bridge",
    subtitle: "Autenticación Única Cross-Domain",
    description: "Diseño de pasarela SSO que transfiere la sesión iniciada en un Core Node.js hacia clientes legacy PHP distribuidos en múltiples subdominios sin romper las políticas de mismo origen (Same-Origin Policy).",
    techs: ["Node.js", "PHP", "JWT", "LocalStorage Sync"],
    icon: "ShieldCheck"
  },
  {
    id: "dual-db",
    title: "Aislamiento Físico de BD",
    subtitle: "Seguridad Multi-Tenant SaaS",
    description: "Separación estricta entre la base de datos de identidad maestra y la base de datos de administración interna, aislando datos sensibles de los clientes públicos.",
    techs: ["MySQL", "Dual Pool", "Bcrypt", "Role-Based Access"],
    icon: "Database"
  },
  {
    id: "cron-automation",
    title: "Cobros & Suspensiones en Caliente",
    subtitle: "Procesamiento diario automático (00:00)",
    description: "Script de comprobación diaria que detecta suscripciones vencidas, revoca accesos específicos por sistema y suspende la cuenta global solo si el cliente no posee otros servicios vigentes.",
    techs: ["Node-Cron", "MySQL Transactions", "Audit Logging"],
    icon: "Clock"
  }
];

export const projectsData = [
  {
    id: "surazo-admin",
    category: "Management Systems & SaaS",
    title: "Surazo Admin - Panel de Suscripciones SaaS",
    badge: "Nuevo / En Despliegue",
    summary: "Panel de control administrativo centralizado con métricas MRR, aprobación de transferencias/QR, tareas programadas a las 00:00 (Cron Jobs) y bitácora de auditoría.",
    description: "Plataforma administrativa diseñada para gestionar el ciclo de vida de los clientes de Surazo. Permite a los administradores activar/suspender servicios, renovar planes estándar o personalizados, verificar comprobantes de pago subidos y monitorear los ingresos recurrentes mensuales.",
    techs: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL Dual-Pool", "Node-Cron"],
    features: [
      "Tablero de métricas MRR e indicadores clave.",
      "Aprobación/Rechazo de transferencias bancarias y recibos QR.",
      "Cron Job automático de suspensión diaria (00:00).",
      "Bitácora de auditoría detallada (IP, email, acción y timestamp)."
    ]
  },
  {
    id: "sso-core",
    category: "Security & Authentication",
    title: "Core de Identidad Centralizada & Pasarela SSO Jump",
    badge: "Producción",
    summary: "Servicio de identidad único con firma JWT que permite la autenticación única cross-domain entre aplicaciones Node.js/React y sistemas legados en PHP a través de subdominios aislados.",
    description: "El 'Single Source of Truth' de identidad para todos los módulos de la empresa. Ofrece un flujo unificado donde un cliente puede ingresar con una sola cuenta y acceder a sus diferentes sistemas contratados.",
    techs: ["Node.js", "PHP", "JWT", "MySQL", "SSO Jump"],
    features: [
      "Login maestro con tokenización JWT.",
      "SSO Jump entre subdominios aislados.",
      "Flujo de recuperación de contraseñas autogestionado con tokens temporales.",
      "Selector dinámico de organización / sistema al iniciar sesión."
    ]
  },
  {
    id: "colors-erp-licoreria",
    category: "ERP & POS Systems",
    title: "Colors ERP - Módulo Licorería (LITE & Estándar)",
    badge: "Producción",
    summary: "Sistema de Punto de Venta (POS) rápido para tiendas de licores con lector de barras, factor de conversión de cajas a unidades, sesiones de caja chica y alertas automáticas de stock crítico.",
    description: "Diseñado para operar en mostradores de alta demanda. Facilita la venta rápida de productos, control de stock por paquetes o unidades convertidas, y cuadre estricto de caja al finalizar cada turno.",
    techs: ["PHP", "MySQL", "AJAX", "JavaScript", "HTML5/CSS3"],
    features: [
      "Punto de Venta (POS) ultra rápido con lector de código de barras.",
      "Factor de conversión inteligente (cajas/paquetes a unidades).",
      "Módulo de sesiones de caja, ingresos y egresos de efectivo.",
      "Reportes de rotación de productos y stock mínimo de alerta."
    ]
  },
  {
    id: "colors-erp-restaurante",
    category: "ERP & POS Systems",
    title: "Colors ERP - Módulo Restaurante (LITE / Ágil & Estándar)",
    badge: "Producción",
    summary: "Solución gastronómica completa con mapa interactivo de mesas en tiempo real, comandas automáticas para cocina/barra, división de cuentas y reporte de ventas diarias.",
    description: "Solución completa para restaurantes y gastro-bares. Incluye mapa dinámico de mesas, toma de pedidos optimizada para tablets de mozos y separación de cuentas por cliente.",
    techs: ["PHP", "MySQL", "JavaScript Vanilla", "Bootstrap"],
    features: [
      "Mapa interactivo de mesas con estados (Libre, Ocupada, Reservada).",
      "Toma de pedidos en tiempo real para cocina y barra.",
      "Cobro de comandas con múltiples métodos de pago (Efectivo, QR).",
      "Historial de ventas y reportes analíticos diarios."
    ]
  },
  {
    id: "tarjetas-digitales",
    category: "Web Platforms",
    title: "Surazo Tarjetas Digitales & Catálogo Modular",
    badge: "Producción",
    summary: "Plataforma SaaS autogestionable basada en recetas JSON para creación de tarjetas interactivas y catálogos de venta con conversión directa a la API de WhatsApp.",
    description: "Aplicación web que permite a emprendedores y empresas personalizar sus sitios web o tarjetas digitales en segundos utilizando una estructura basada en JSON.",
    techs: ["React", "Vite", "Tailwind CSS", "JSON Config", "WhatsApp API"],
    features: [
      "Generador de diseño basado en configuración JSON flexible.",
      "Botón directo de compras por WhatsApp sin intermediarios.",
      "Optimización SEO y carga ultrarrápida en smartphones.",
      "Visor de documentos PDF y catálogo de productos interactivo."
    ]
  }
];
