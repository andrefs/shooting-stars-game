# syntax=docker/dockerfile:1


# Build stage

FROM node:11 as build

ENV NODE_ENV=development
ENV VUE_APP_GAME_STYLE=stars
ARG VUE_APP_API_URL=http://localhost:15111
ARG VUE_APP_GAME_URL=http://localhost:3001
ENV VUE_APP_API_URL=$VUE_APP_API_URL
ENV VUE_APP_GAME_URL=$VUE_APP_GAME_URL
WORKDIR /app

COPY --chown=node:node ["package.json", "yarn.lock", "./"]
RUN yarn install --frozen-lockfile --ignore-scripts --ignore-engines

COPY --chown=node:node ["src", "./src"]
COPY --chown=node:node ["public", "./public"]
COPY --chown=node:node ["aux", "./aux"]
COPY --chown=node:node ["vue.config.js", "babel.config.js", "./"]
RUN yarn run build

# Run stage
# production stage
FROM nginx:stable-alpine
ENV NODE_ENV=production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

