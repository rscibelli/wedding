FROM node:16-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
COPY /etc/letsencrypt/live/www.robandmaddie.com/fullchain.pem /cert
COPY /etc/letsencrypt/live/www.robandmaddie.com/privkey.pem /cert
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
ENV HTTPS true 
ENV SSL_CRT_FILE /cert/fullchain.pem
ENV SSL_KEY_FILE /cert/privkey.pem
ENV PORT 443
EXPOSE 443

# Expose the port on which the app will be running (3000 is the default that `serve` uses)
# ENV PORT 80
# EXPOSE 80
# Start the app
CMD [ "npx", "serve", "build" ]