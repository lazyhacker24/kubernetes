# Express backend Dockerfile
FROM node:18-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --silent

COPY . .
EXPOSE 3000

CMD ["node", "index.js"]
