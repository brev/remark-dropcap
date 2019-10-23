var visit = require('unist-util-visit')

    
function visitor(node, index) {
  var para = node.children[0].value
  var cap = para.charAt(0)
  var text = para.substr(1)

  // only work on first paragraph encountered
  if (index > 1) {
    return
  } 

  // remove first letter from text
  node.children[0].value = text

  // replace what was first letter with dropcap markup
  node.children.unshift({
    type: 'span',
    children: [{
      type: 'text',
      value: cap
    }],
    data: {
      hName: 'span',
      hProperties: {
        className: 'dropcap' 
      }
    }
  })
}
  
function transformer(node, file) {
  visit(node, 'paragraph', visitor)
}

function dropcap(options) {
  return transformer
}


module.exports = dropcap

