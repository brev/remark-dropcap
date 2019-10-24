# remark-dropcap

[Remark][remark] plugin that generates accessible, cross-browser Drop Cap
typography markup for the first letter of the first paragraph from your
markdown.

## Syntax

Input Markdown:

```markdown
# Hello World

When in the course of human events.

Things go wild.
```

Output HTML:

```html
<h1>Hello World</h1>
<p>
  <span aria-hidden="true">
    <span class="dropcap">W</span>hen
  </span>
  <span class="invisible">When</span>
  in the course of human events.
</p>
<p>
  Things go wild.
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

unified().
  use(dropcap, {    // defaults
    classDropcap:   'dropcap',
    classInvisible: 'invisible'
  })
```

## Styling

Example CSS classes to get you started:

```css
.dropcap {
  color: red;
  float: left;
  font-size: 5rem;
  line-height: 3.5rem;
  margin: 0;
  padding: 0.5rem;
}

/* hide visually from eyes, but not aurally from screen readers */
.invisible {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  top: auto;
  white-space: nowrap;
  width: 1px;
}
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

