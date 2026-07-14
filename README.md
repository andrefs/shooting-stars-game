# shooting-stars-game

Frontend web client for the **Shooting Stars** game. A single-page application
built with [Vue.js](https://vuejs.org/) 2, [Vuetify](https://vuetifyjs.com/),
and [Vue CLI](https://cli.vuejs.org/).

## Description

This is the player-facing interface of Shooting Stars. It handles user
registration (including guest accounts), login, gameplay (picking and matching
items/cards across turns), leaderboards, and the end-of-game flow. It talks to
the [`shooting-stars-api`](../shooting-stars-api) over HTTP.

## Tech stack

- **Vue.js 2** + **Vue Router** + **Vuex** (with `vuex-persistedstate`)
- **Vuetify 1.x** — Material Design UI components
- **vue-cli-service** — build / dev server / test tooling
- **axios** — HTTP client (via `vue-cli-plugin-axios`)
- **register-service-worker** — PWA support
- **vue-fullscreen**, **vue-goodshare**, **vue-tour** — UX helpers

## Project layout

```
shooting-stars-game/
├── public/              # Static index.html and assets
├── src/
│   ├── main.js          # App bootstrap
│   ├── App.vue          # Root component
│   ├── router.js        # Vue Router config
│   ├── store.js         # Vuex store
│   ├── views/           # Route-level pages (Home, Game, Login, ...)
│   ├── components/      # Reusable UI components (PlayGame, ScoreBoard, ...)
│   ├── plugins/         # axios, vuetify, toast plugins
│   └── assets/          # Images / logos
├── tests/               # Unit and e2e (Nightwatch) tests
├── aux/                 # Auxiliary build assets
└── dist/                # Production build output
```

## Project setup

```bash
yarn install
```

## Development

```bash
yarn run serve        # dev server with hot-reload (port 15112)
```

The dev server connects to the API; configure the API base URL via the
environment files (`.env.development` / `.env.production`).

## Production build

```bash
yarn run build        # compiles and minifies to dist/
```

The production client is served as static files. A multi-stage `Dockerfile`
builds the app with `node:11` and serves `dist/` through `nginx:stable-alpine`
on port `80`.

To run the built client with pm2 directly (without Docker):

```bash
yarn run prod:pm2
```

## Linting

```bash
yarn run lint
```

## Tests

```bash
yarn run test:unit    # unit tests (Mocha + @vue/test-utils)
yarn run test:e2e     # end-to-end tests (Nightwatch)
```

## Configuration

- `vue.config.js` — dev server port and PWA name
- `.env.development` / `.env.production` — environment-specific variables
  (not committed; see `.env.*` files for the API endpoint)
