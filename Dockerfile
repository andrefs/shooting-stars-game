# syntax=docker/dockerfile:1


# Build stage

FROM node:11 as build

ENV NODE_ENV=development
WORKDIR /app

COPY --chown=node:node ["package.json", "yarn.lock", "./"]
RUN yarn install --frozen-lockfile --ignore-scripts --ignore-engines

COPY --chown=node:node ["src", "./src"]
COPY --chown=node:node ["public", "./public"]
COPY --chown=node:node ["aux", "./aux"]
COPY --chown=node:node [".env.production", "vue.config.js", "babel.config.js", "./"]
RUN yarn run build

# Run stage
# production stage
FROM nginx:stable-alpine
ENV NODE_ENV=production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

