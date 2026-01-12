# Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve (nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# SPA 라우팅 대비(필요 시 nginx.conf 추가 가능)
EXPOSE 80