# Étape 1 : Build
FROM node:18-alpine AS builder

# Créer dossier de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier tout le projet
COPY . .

# Build du projet Next.js (désactive ESLint et TS check)
RUN NEXT_DISABLE_ESLINT=1 NEXT_DISABLE_TYPECHECK=1 npm run build

# Étape 2 : Runner
FROM node:18-alpine AS runner

WORKDIR /app

# Copier uniquement le build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Exposer le port
EXPOSE 3000

# Lancer Next.js
CMD ["npm", "run", "start"]

