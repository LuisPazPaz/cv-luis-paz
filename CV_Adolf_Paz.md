# ADOLF PAZ
**Ingeniero de Software Full-Stack & Arquitecto SaaS**  
Santa Cruz, Bolivia | [github.com/Adolf-Paz](https://github.com/Adolf-Paz) | adolfpaz@example.com

---

## PERFIL PROFESIONAL
Desarrollador Full-Stack con sólida experiencia en el diseño y despliegue de arquitecturas SaaS multi-tenant, sistemas distribuidos y pasarelas de autenticación unificada (SSO Jump). Especializado en la optimización de flujos de bases de datos relacionales con doble pool de conexiones, automatización de procesos en servidores (Cron Jobs) y modernización de plataformas legacy (PHP) mediante la integración con aplicaciones modernas en React y Node.js.

---

## HABILIDADES TÉCNICAS

* **Lenguajes & Frameworks:** Node.js (Express), PHP (Vanilla / MVC), React.js, Vite, Tailwind CSS v3, JavaScript (ES6+), HTML5, CSS3.
* **Bases de Datos & Almacenamiento:** MySQL, MariaDB, doble pool de conexiones, transacciones relacionales ACID (Commit/Rollback), modelado de datos B2B/B2C.
* **Arquitectura & Seguridad:** Single Sign-On (SSO) Cross-Domain, tokens JWT, Bcrypt, aislamiento de bases de datos, mitigación de vulnerabilidades OWASP.
* **DevOps & Herramientas:** Despliegue en Hostinger Cloud, Git, GitHub, pnpm / npm monorepo, automatización con Node-Cron, configuración Apache (.htaccess).

---

## EXPERIENCIA / PROYECTOS DESTACADOS

### Arquitecto de Software & Desarrollador Principal | Ecosistema Surazo & Colors ERP
*2024 - Presente*

* **Panel de Control de Suscripciones SaaS (Surazo Admin):**
  * Diseñó y desarrolló un panel administrativo independiente en **React + Node.js** con aislamiento físico de bases de datos (`surazo_panel` y `surazo_auth`).
  * Implementó un sistema automático de suspensión y facturación (Cron Job a las 00:00) que verifica vencimientos y revoca accesos específicos por módulo sin afectar otras suscripciones activas del usuario.
  * Programó una bitácora de auditoría interna que rastrea la IP de origen, usuario, fecha y detalles de cada cambio administrativo.

* **Core de Autenticación & Pasarela SSO (SSO Jump):**
  * Creó una arquitectura de identidad unificada basada en JWT que permite a un usuario ingresar con credenciales únicas y navegar entre múltiples aplicaciones en subdominios independientes.
  * Diseñó el mecanismo **SSO Jump** para transferir tokens entre clientes en PHP legados y microservicios en Node.js evitando bloqueos por políticas del mismo origen (*Same-Origin Policy*).
  * Desarrolló el módulo autogestionado de recuperación de contraseñas por correo mediante tokens encriptados con tiempo de vida limitado.

* **Suite Colors ERP & Punto de Venta (POS - Restaurante y Licorería):**
  * Desarrolló el sistema de Punto de Venta en versiones **LITE, Ágil y Estándar** para rubros de gastronómicos y licorerías.
  * Implementó mapas dinámicos de mesas en tiempo real para comandas de cocina y cajas, optimizados para tablets y teléfonos móviles.
  * Diseñó el motor de inventario con conversión automática de unidades (paquetes a unidades de venta) y alertas de stock mínimo.

* **Plataforma Tarjetas Digitales & Catálogo Modular:**
  * Construyó un motor de diseño basado en recetas **JSON** almacenadas en base de datos, permitiendo personalizar la estética y productos de sitios web sin modificar la estructura física de las tablas MySQL.
  * Integró el botón de pedidos automáticos directo a la API de WhatsApp, optimizando el embudo de ventas para pequeñas empresas.

---

## EDUCACIÓN & CERTIFICACIONES
* **Ingeniería de Sistemas / Computación** (O equivalente profesional)
* **Especialización en Arquitectura de Software Distribuidos y SaaS**

---

## LOGROS DE INGENIERÍA
* **Carga Ultrarrápida (<1.5s):** Optimización de renderizado en catálogos e interfaces clientes.
* **Ahorro de Almacenamiento (60%):** Implementación de entornos monorepo con `pnpm` y enlaces simbólicos.
* **Integridad de Datos (100%):** Transacciones cruzadas multi-base de datos con rollback en caliente ante fallos de ejecución.
