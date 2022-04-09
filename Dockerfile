FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src src

COPY index.html .
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .

RUN npm run build


FROM stevekaufman/react-server:latest

COPY --from=builder /app/dist /app

CMD [ "serve", "/app" ]