var visit = require('unist-util-visit')


module.exports = function(options) {
  var dropcapClass = (options && 'dropcapClass' in options) ?
    options.dropcapClass : 'dropcap'
  var invisibleClass = (options && 'invisibleClass' in options) ?
    options.invisibleClass : 'invisible'

  var visitor = function(node, index) {
    // only work on first valid markdown paragraph encountered
    if ((index > 1) ||
        (!('children' in node)) ||
        (node.children.length <= 0) ||
        (!('value' in node.children[0]))) {
      return
    }
    var para = node.children[0].value
    var word = para.split(' ')[0]
    var letter = word.charAt(0)
    var part = word.substr(1)
    var text = para.substr(word.length)

    // remove first word from text
    node.children[0].value = text

    // replace what was first word with accessible dropcapped markup
    node.children.unshift(
      {
        type: 'emphasis',
        children: [
          {
            type: 'emphasis',
            children: [{
              type: 'text',
              value: letter
            }],
            data: {
              hName: 'span',
              hProperties: { className: dropcapClass }
            }
          },
          {
            type: 'text',
            value: part
          }
        ],
        data: {
          hName: 'span',
          hProperties: { ariaHidden: 'true' }
        }
      },
      {
        type: 'emphasis',
        children: [{
          type: 'text',
          value: word
        }],
        data: {
          hName: 'span',
          hProperties: { className: invisibleClass }
        }
      }
    )
  }

  var transformer = function(node, file) {
    visit(node, 'paragraph', visitor)
  }

  return transformer
}

