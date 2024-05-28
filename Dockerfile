# Usar una imagen base con Node.js
FROM node:18-alpine AS base

# Instalar dependencias necesarias
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

# Construir la aplicación Vite
RUN npm run build

# Imagen de producción
FROM base AS runner
WORKDIR /app

# Establecer el entorno de producción
ENV NODE_ENV production

# Copiar los archivos de salida de la construcción
COPY --from=builder /app/dist ./dist

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "dist/server.js"];