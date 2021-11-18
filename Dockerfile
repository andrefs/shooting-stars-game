# syntax=docker/dockerfile:1


# Build stage

FROM node:11 as build

ENV NODE_ENV=development
WORKDIR /app

COPY --chown=node:node ["package.json", "yarn.lock", "./"]
RUN yarn install --frozen-lockfile

ENV NODE_ENV=production
RUN yarn run build

# Run stage
# production stage
FROM nginx:stable-alpine
ENV NODE_ENV=production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

