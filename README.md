<h1 align="center">Runewizard for Diablo II: Exile</h2>
<p align="center" class="bg-red">
  <img width="600" src="https://user-images.githubusercontent.com/169391/112649013-59306500-8e4a-11eb-8761-5e2df91856fb.png" />
</p>
<p align="center">
  Live site <strong><a href="Currently unavailable">Currently unavailable</a></strong>
</p>

<p align="center"><em>Runewizard for Diablo II helps you keep track of the runes you have found and what runewords you can make with them.</em></p>

<!-- TOC depthFrom:1 -->
<!-- /TOC -->

## Background

_Runewizard_ used to be part of my mini fan site for Diablo II LoD called [_The Tankazon Resource_](https://fabd.github.io/diablo2/) (hosted at [fabd/diablo2](https://github.com/fabd/diablo2)).

This repo is a full rewrite of the vanilla JS version I wrote ten+ years ago. It uses **ViteJs, Vue3, and TailwindCSS/JIT**. Typechecking is provided via JSDoc + TS types in ambient .d.ts files.

Should there be any new runewords / updates with _Diablo II Resurrected_, I hope this new repo will make it easier to keep the site updated!

## Changelog

See **[Releases](https://github.com/fabd/diablo2-runewizard/releases)** tab for updates.

## Bugs & Feature Requests

Please report **any bugs or incorrect information** in the **[Issues](https://github.com/fabd/diablo2-runewizard/issues)** tab.

Feel free to post suggestions as well. If I like an idea, maybe I'll work on it.

## Contributions

In general **Pull Requests** for small fixes/typos are welcome.

For substantial changes, it's probably best to let me know in advance so I can tell you if I am interested to merge them. Keep in mind this is a little playground for me to experiment with ViteJs, Vue 3 and TypeScript (and now JSDoc). There are quite a few ideas I have in mind I'd like to work on.

## For D2 modders

If you need help to modify Runewizard for a Diablo II mod (ie. supporting new runes/runewords specific to a mod), feel free to ask in the Issues tab and I'll try to help you set it up. Let me know about your fork! I may post a link here and/or in the Runewizard footer.

# Getting started

## Local development

Clone the repository, install the dependencies, and start the Vite server:

```bash
git clone https://github.com/fabd/diablo2-runewizard.git
npm install
npm run dev
```

## Build to host online (eg. a Diablo II mod site)

Use `npm run build` (or just `vite build` to skip the TypeScript check which is kinda slow). Then deploy all the files in the `dist/` folder to wherever you'd like to host it.

Be aware that small images can be encoded inside the JS or CSS as base64 URLs. If you don't like this and would rather have all images output separately, set `assetsInlineLimit` in vite.config.ts to zero.

Take special note of [Public Base Path](https://vitejs.dev/guide/build.html#public-base-path) configuration if your images aren't showing (cf. `base` in `vite.config.ts`).

## Build for use offline (without development environment)

Sadly we can not simply drag-and-drop the **index.html** file (from the dist/ folder) into a browser. The browser will issue [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors, and refuse to load both Javascript and Css files.

Follow these steps to make it work offline:

1. set `base` in vite.config.ts to `./` (a relative path) : this causes references to images and other assets to be relative eg. './images/foo.png' instead of '/images/foo.png'
2. disable code splitting to simplify next step (this is already configured so we have a single output css and js file)
3. manually edit the html to "inline" the contents of the CSS and JS

Remove these

```html
<script type="module" crossorigin src="/assets/index.18705ba6.js"></script>
<link rel="stylesheet" href="/assets/style.06ce5f32.css" />
```

And instead add script & style tags and copy the file contents inside:

```html
<head>
  ...
  <style type="text/css">
    /* copy/paste contents of the css file here */
  </style>
</head>
<body>
  <div id="app"></div>
  ...
  <script type="module">
    /* copy/paste contents of the javascript file here */
  </script>
</body>
```

## Using localStorage vs cookie

Runewizard uses **localStorage** (instead of a cookie in the old version) to maintain selected runes: this is so that the app can be built to work completely offline. In the case of loading index.html via `file:///` URL, cookies don't work.

Either way it is a known limitation that if the user clears "Cookie & other site related data" manually in their browser, the user state will be reset.

# Thanks

- All credit to fabd for creating this runewizard. This is simply a fork from their open-source project.

# Copyright notices

The rune icon in the header is Copyright &copy; BLIZZARD ENTERTAINMENT. It is from a screenshot of Diablo II Resurrected.

SVG icons come from [icones.js.org](https://icones.js.org/) and are all licensed [under some kind of open-source or free licence](https://github.com/iconify/iconify#licence) (cf. Iconify License)

# License

MIT.
