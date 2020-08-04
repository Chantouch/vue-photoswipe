# vue-photoswipe

> An image previewer for vue, powered by [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe).

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/@chantouchsek/vue-photoswipe.svg)](http://npm-stats.com/~packages/@chantouchsek/vue-photoswipe)
[![GitHub stars](https://img.shields.io/github/stars/Chantouch/vue-photoswipe.svg)](https://github.com/Chantouch/vue-photoswipe/stargazers)
[![devDependencies](https://img.shields.io/david/dev/Chantouch/vue-photoswipe.svg)](https://david-dm.org/Chantouch/vue-photoswipe?type=dev)
[![npm-version](https://img.shields.io/npm/v/@chantouchsek/vue-photoswipe.svg?maxAge=3600)](https://www.npmjs.com/package/@chantouchsek/vue-photoswipe)
[![Github tag](https://img.shields.io/github/tag/Chantouch/vue-photoswipe.svg?maxAge=3600)](https://github.com/Chantouch/vue-photoswipe/)
[![Build Status](https://travis-ci.org/Chantouch/vue-photoswipe.svg?branch=master)](https://travis-ci.org/Chantouch/vue-photoswipe)
[![GitHub license](https://img.shields.io/github/license/Chantouch/vue-photoswipe.svg)](https://github.com/Chantouch/vue-photoswipe/blob/master/LICENSE)

## Demo

![DEMO](https://repository-images.githubusercontent.com/194109246/dc703a00-9b42-11e9-920a-e84b3b3b7ac3)

[Try it out](https://chantouch.github.io/vue-photoswipe/)

## Requirements

- [`Vue.js 2.x`](https://cn.vuejs.org/)
- [`PhotoSwipe`](https://github.com/dimsemenov/PhotoSwipe)

## Advantages

- Simple API.
- Small bundle size: 15.3KB (5.6KB gzipped, without PhotoSwipe & Promise polyfill).

## Installation

### Yarn
```bash
yarn add photoswipe @chantouchsek/vue-photoswipe
```

### Npm
```bash
npm install photoswipe @chantouchsek/vue-photoswipe
```

## Usage

### Registration

#### Base

```js
import createPreviewDirective from "@chantouchsek/vue-photoswipe";

export default {
  directives: {
    preview: createPreviewDirective()
  }
};
```

#### Options

```js
import createPreviewDirective from "@chantouchsek/vue-photoswipe";

export default {
  directives: {
    preview: createPreviewDirective(photoswipeOptions)
  }
};
```

### Vue Directive

#### Base

```html
<img v-preview src="path/to/image.jpg" alt="image" />
```

#### Scope

```html
<img v-preview:scope-a src="path/to/images/01.jpg" alt="image 01" />
<img v-preview:scope-a src="path/to/images/02.jpg" alt="image 02" />
<img v-preview src="path/to/images/03.jpg" alt="image 03" />
```

#### Lazy Load

Support [vue-lazyload](https://github.com/hilongjw/vue-lazyload)

```html
<div v-lazy-container="{ selector: 'img' }">
  <img v-preview:scope-a data-src="path/to/images/01.jpg" alt="image 01" />
  <img v-preview:scope-a data-src="path/to/images/02.jpg" alt="image 02" />
  <img v-preview data-src="path/to/images/03.jpg" alt="image 03" />
</div>
```

#### Origin Image

```html
<img v-preview src="path/to/image.jpg" data-origin="path/to/origin-image.jpg" alt="image" />
```

## Example

### Include PhotoSwipe dependencies by external links

`index.html`

```html
<!-- Core CSS file -->
<link rel="stylesheet" href="https://unpkg.com/photoswipe/dist/photoswipe.css" />

<!-- Skin CSS file (styling of UI - buttons, caption, etc.)
     In the folder of skin CSS file there are also:
     - .png and .svg icons sprite, 
     - preloader.gif (for browsers that do not support CSS animations) -->
<link rel="stylesheet" href="https://unpkg.com/photoswipe/dist/default-skin/default-skin.css" />

<!-- Core JS file -->
<script src="https://unpkg.com/photoswipe/dist/photoswipe.min.js"></script>

<!-- UI JS file -->
<script src="https://unpkg.com/photoswipe/dist/photoswipe-ui-default.min.js"></script>
```

`*.vue`

```vue
<template>
  <div id="app">
    <img v-preview:scope-a src="path/to/images/01.jpg" alt="image 01" />
    <img v-preview:scope-a src="path/to/images/02.jpg" alt="image 02" />
    <img v-preview src="path/to/images/03.jpg" alt="image 03" />
  </div>
</template>

<script>
import createPreviewDirective from "@chantouchsek/vue-photoswipe";

export default {
  directives: {
    preview: createPreviewDirective()
  }
};
</script>
```

### Include PhotoSwipe dependencies by modules

`*.vue`

```vue
<template>
  <div id="app">
    <img v-preview:scope-a src="path/to/images/01.jpg" alt="image 01" />
    <img v-preview:scope-a src="path/to/images/02.jpg" alt="image 02" />
    <img v-preview src="path/to/images/03.jpg" alt="image 03" />
  </div>
</template>

<script>
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import createPreviewDirective from "@chantouchsek/vue-photoswipe";

export default {
  directives: {
    preview: createPreviewDirective(null, PhotoSwipe, PhotoSwipeUI)
  }
};
</script>
```

## Use with options scope
```vue
<template>
  <div id="app">
    <img v-preview="{ name: 'a' }" src="path/to/images/01.jpg" alt="image 01" />
    <img v-preview="{ name: 'a' }" src="path/to/images/02.jpg" alt="image 01" />
    <img v-preview="{ name: 'b' }" src="path/to/images/03.jpg" alt="image 01" />
    <img v-preview="{ name: 'b' }" src="path/to/images/04.jpg" alt="image 01" />
    <img v-preview:scope-a src="path/to/images/02.jpg" alt="image 02" />
    <img v-preview src="path/to/images/03.jpg" alt="image 03" />
  </div>
</template>
```

### Options `name` must be defined.

## Development

```bash
yarn dev
```

## Build

```bash
yarn build:lib
```

## Todo

- [ ] Expand the advanced API. 
- [ ] Add test files.

## License

MIT © [Chantouch](https://github.com/Chantouch)
