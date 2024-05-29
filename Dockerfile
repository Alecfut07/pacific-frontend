# Usar una imagen base con Node.js
FROM node:18-alpine AS base

# Instalar dependencias necesarias
FROM base AS deps
RUN apk add --no-cache libc6-compat

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias
COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Etapa de construcción
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Por seguridad no copiar el archivo de variables de entorno de producción aquí
# Utilizar la funcionalidad de Docker Secrets en el docker-compose.yml

# Construir la aplicación Vite de producción
RUN npm run build

# Imagen de producción
FROM base AS runner
WORKDIR /app

# Establecer el entorno de producción
ENV NODE_ENV production

# Copiar los archivos de salida de la construcción
COPY --from=builder /app/dist ./dist

# Instalar serve para servir la aplicación
RUN npm install -g serve

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["serve", "-s", "dist", "-l", "5173"];