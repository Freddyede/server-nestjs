# Étape 1 : Utiliser une image Node.js pour construire l'application
FROM node:latest AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source NestJS
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2 : Utiliser la dernière image Node.js pour exécuter l'application
FROM node:latest

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires (build + dépendances de prod)
COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/dist ./dist

# Installer uniquement les dépendances de production
RUN npm install --only=production

# Exposer le port utilisé par votre application (par défaut 3000 dans NestJS)
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "dist/main"]
