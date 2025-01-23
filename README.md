# Kanboard 📋

## Descripción del Proyecto
Aplicación de gestión de tareas tipo Kanban desarrollada con Next.js, utilizando json-server como backend simulado.

## Requisitos Previos
- Node.js (v20 o superior)
- npm

## Configuración del Proyecto

### Clonar el Repositorio
```bash
git clone `https://github.com/sijita/kanboard.git`
cd kanboard
```

### Instalación de Dependencias
```bash
npm install
```

### Configuración de Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Ejecución del Proyecto

### Iniciar Servidor Backend (json-server)
```bash
npm run server
```

### Iniciar Aplicación Frontend
En otra terminal, ejecuta:
```bash
npm run dev
```

## Scripts Disponibles
- `dev`: Inicia la aplicación en modo desarrollo
- `build`: Genera la versión de producción
- `start`: Inicia la aplicación en modo producción
- `lint`: Ejecuta el linter
- `lint:fix`: Corrige errores de linting
- `prettier`: Formatea el código

## Tecnologías Principales
- Next.js v15
- React v19
- TypeScript
- json-server
- axios
- swr
- idb
- Tailwindcss


## Estructura del Proyecto
```
/src
├── app/
├── components/
├── context/
├── hooks/
├── lib/
├── schemas/
├── types/
└── utils/
```
