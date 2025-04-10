
# Fractal + Vite + Vue Component Library

> **NOTE** Very basic implementation and to be improved further 

This is a component-driven development environment using **Fractal** to document and organize UI components, powered by **Vite** for lightning-fast development and **Vue 3** for component rendering.

> Designed for building, previewing, and documenting reusable frontend components with live reloading and full variant support.



---

## 📦 Tech Stack

- [Fractal](https://fractal.build/) `v1.10.3` — Component library framework
- [Vite](https://vitejs.dev/) — Build tool with hot module replacement (HMR)
- [Vue 3](https://vuejs.org/) — UI component framework
- [Nunjucks](https://mozilla.github.io/nunjucks/) — Templating engine for Fractal views

---

## 📁 Project Structure
```
├── README.md
├── components
│   ├── _previews
│   │   ├── preview-all.njk
│   │   └── preview.njk
│   ├── all-components.njk
│   └── button
│       ├── button--all.njk
│       ├── button.config.js
│       └── button.njk
├── docs
│   └── index.md
├── fractal.js
├── package-lock.json
├── package.json
├── public
│   └── assets
│       ├── main-BjW-RWFw.css
│       └── main-BrSPnF9N.js
├── src
│   ├── components
│   │   └── Button.vue
│   ├── main.js
│   └── style.css
└── vite.config.js

```
