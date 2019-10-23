var html = require('rehype-stringify')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var test = require('tape')
var unified = require('unified')

var dropcap = require('./index')


var input = [
  '# Hello',
  '',
  'This is the best of times, and the worst of times.',
  '',
  'But who knows **really**.',
  '',
  'Cool.',
].join("\n")

var output = [
  '<h1>Hello</h1>',
  '<p><span class="dropcap">T</span>his is the best of times, and the worst of times.</p>',
  '<p>But who knows <strong>really</strong>.</p>',
  '<p>Cool.</p>'
].join("\n")


test('functionality test', function(t) {
  var result = unified()
    .use(markdown)
    .use(dropcap)
    .use(remark2rehype)
    .use(html)
    .processSync(input)
    .toString()

  t.equal(result, output)

  t.end()
})

