# vue-spa-routing-example

Proof of concept example based on a discussion in [Pantheon Community Slack](https://pantheon-community.slack.com/archives/C2GJ3JG7Q/p1700140164971029).

* App was scaffolded using `npm create vue@latest` and adding `vue-router`.
* Adds an express server to serve the static app from `/dist`.
* Uses `[connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback)` to serve `index.html` for all SPA routes.

Front-end sites configuration:
TBD.

---

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
