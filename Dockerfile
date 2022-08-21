FROM node:16-alpine AS Build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY src ./src
RUN npm run start:ts


FROM node:16-alpine
COPY --from=Build /app/node_modules /app/dist ./
COPY .env ./


CMD ["npm", "start"]