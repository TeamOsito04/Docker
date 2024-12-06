# Proyecto: Aplicación Web Simple

## Requisitos Previos

Antes de iniciar el proyecto, asegúrate de instalar las siguientes dependencias:

1. **Node.js y npm**  
   - Descarga e instala [Node.js](https://nodejs.org) para manejar el backend y gestionar paquetes.

2. **Docker**  
   - Descarga e instala [Docker](https://www.docker.com/) para contenerizar la aplicación.

3. **Git**  
   - Instala [Git](https://git-scm.com/) para gestionar el repositorio del proyecto.

4. **MongoDB o SQLite**  
   - Si optas por MongoDB, asegúrate de que esté instalado y corriendo localmente o en la nube.
   - Para SQLite, no se requiere instalación adicional; se gestionará con las dependencias de Node.js.

5. **Herramientas de Monitoreo y CI/CD**  
   - Configura las herramientas necesarias según el pipeline (pueden incluir Jenkins, GitHub Actions, o GitLab CI/CD).

## Requisitos Técnicos

1. **Repositorio Git**
   - Todo el código fuente estará versionado en un repositorio Git.

2. **Pipeline CI/CD**
   - Implementación de un pipeline de integración y entrega continua para automatizar pruebas, despliegue y construcción de la aplicación.

3. **Contenedores Docker**
   - Uso de Docker para contenerizar tanto el frontend como el backend.

4. **Pruebas Automatizadas**
   - Desarrollo de pruebas unitarias e integración para garantizar la calidad del código.

5. **Monitoreo Básico**
   - Configuración de logs centralizados, métricas básicas y alertas simples.

---

## Componentes del Proyecto

### 1. **Aplicación Web Simple**
   - **Frontend Básico**
     - Desarrollo con HTML, CSS y JavaScript.
   - **Backend Simple**
     - Construido con Node.js y Express.
   - **Base de Datos**
     - MongoDB o SQLite para almacenar los datos de la aplicación.

### 2. **Pruebas**
   - **Pruebas Unitarias**
     - Validación de las funciones individuales del sistema.
   - **Pruebas de Integración**
     - Verificación del correcto funcionamiento entre componentes.
   - **Análisis de Código Estático**
     - Herramientas para detectar problemas en el código sin ejecutarlo.

### 3. **Monitoreo**
   - **Logs Centralizados**
     - Registro centralizado de los eventos del sistema.
   - **Métricas Básicas**
     - Monitoreo del uso de recursos y rendimiento de la aplicación.
   - **Alertas Simples**
     - Configuración de alertas en caso de errores críticos o umbrales excedidos.

---

## Entregables Requeridos

1. **Código Fuente**
   - Repositorio Git completo que incluye todos los archivos y ramas relevantes.

2. **Dockerfile**
   - Archivo de configuración para la creación de imágenes Docker del proyecto.

3. **Scripts de CI/CD**
   - Scripts necesarios para automatizar pruebas, construcción y despliegue de la aplicación.

4. **Archivos de Configuración**
   - Configuraciones para la base de datos, monitoreo y contenedores.

---
