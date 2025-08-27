# Étape 1 : Build
FROM node:18-alpine AS builder

# Installer pnpm globalement
RUN npm install -g pnpm

# Créer dossier de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json pnpm-lock.yaml* ./

# Installer les dépendances
RUN pnpm install --frozen-lockfile

# Copier tout le projet
COPY . .

# Build du projet Next.js
RUN pnpm run build

# Étape 2 : Runner
FROM node:18-alpine AS runner

# Installer pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copier uniquement ce qui est nécessaire
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/pnpm-lock.yaml* ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Exposer le port
EXPOSE 3000

# Lancer Next.js en mode prod
CMD ["pnpm", "start"]
