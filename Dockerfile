FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY server ./server
# Frontend ya compilado (ng build). Ver README para regenerarlo.
COPY frontend/dist ./frontend/dist

RUN mkdir -p /app/uploads

ENV NODE_ENV=docker \
    PORT=3000 \
    DB_SYNC=true

EXPOSE 3000
CMD ["node", "server/app.js"]
