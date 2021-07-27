# mcjs-utils

Install:

```
npm i @c1200/mcjs-utils
```

## Modules

### Color To HTML

Usage:

```js
var mcjs = require("@c1200/mcjs-utils");

mcjs.colorToHtml("&aHello, &bWorld!", "&"); // => <span class="green">Hello, </span><span class="aqua">World!</span>

// Or

"&aHello, &bWorld!".colorToHtml("&"); // => <span class="green">Hello, </span><span class="aqua">World!</span>
```

Get the css here: https://raw.githubusercontent.com/C1200/mcjs-utils/main/assets/colorToHtml.css