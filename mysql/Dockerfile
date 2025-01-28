# Utiliser l'image MySQL officielle
FROM mysql:8.0

# Définir la variable d'environnement pour éviter les erreurs de buffering
ENV MYSQL_ROOT_PASSWORD: my-secret-password
ENV MYSQL_DATABASE: nest_angular_dev
ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes

# Copier les scripts SQL dans le conteneur
COPY nest_angular_dev.sql /docker-entrypoint-initdb.d/

# Exposer le port MySQL (par défaut 3306)
EXPOSE 3306
