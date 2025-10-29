# Express Backend Dockerfile
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --silent

COPY . .

EXPOSE 3000
ENV NODE_ENV=production

CMD ["node", "index.js"]
