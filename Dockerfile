# syntax=docker/dockerfile:1.4
# Build Stage
FROM node:24-alpine3.21 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
# This is the line that uses the secrets passed from GitHub Actions
RUN --mount=type=secret,id=VITE_GEMINI_KEY_1,env=VITE_GEMINI_KEY_1 \
    --mount=type=secret,id=VITE_GEMINI_KEY_2,env=VITE_GEMINI_KEY_2 \
    --mount=type=secret,id=VITE_GEMINI_KEY_3,env=VITE_GEMINI_KEY_3 \
    npm run build

# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
