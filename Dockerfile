# syntax=docker/dockerfile:1.4
# Build Stage
FROM node:24-alpine3.21 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

# Use a RUN command to make the secrets available as environment variables for the build
RUN --mount=type=secret,id=VITE_GEMINI_KEY_1 \
    --mount=type=secret,id=VITE_GEMINI_KEY_2 \
    --mount=type=secret,id=VITE_GEMINI_KEY_3 \
    VITE_GEMINI_KEY_1=$(cat /run/secrets/VITE_GEMINI_KEY_1) \
    VITE_GEMINI_KEY_2=$(cat /run/secrets/VITE_GEMINI_KEY_2) \
    VITE_GEMINI_KEY_3=$(cat /run/secrets/VITE_GEMINI_KEY_3) \
    npm run build

# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
