
# syntax=docker/dockerfile:2
FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.25.2-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder ./app/dist /usr/share/nginx/html
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
