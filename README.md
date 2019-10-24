# remark-dropcap

[Remark][remark] plugin that generates cross-browser Drop Cap typography for 
the first letter of the first paragraph of your markdown input.

## Syntax

Input Markdown:

```markdown
# Hello World

When in the course of human events.

Things go **wild**.
```

Output HTML:

```html
<h1>Hello World</h1>
<p>
  <span class="dropcap">W</span>hen in the course of human events.
</p>
<p>
  Things go <strong>wild</stong>.
</p>
```

## Install

```bash
npm install --save remark-dropcap
```

## Usage

```javascript
const unified = require('unified')
const dropcap = require('remark-dropcap')

unified().use(dropcap)
```

## Test

```bash
npm test
```

## License

[MIT][mit]

© 2019 Brev Patterson <me@brev.name> (https://brev.name)

[mit]: https://github.com/brev/gatsby-remark-contianers/blob/master/LICENSE
[remark]: https://remark.js.org/

