const ipRegex = require('ip-regex')

// based on https://github.com/kevva/url-regex
module.exports = function () {
  const protocol = '(?:[a-z]+://)'
  const auth = '(?:\\S+(?::\\S*)?@)?'
  const ip = ipRegex.v4().source
  const host = '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)'
  const domain = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*'
  const tld = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))'
  const port = '(?::\\d{2,5})?'
  const path = '(?:[/?#][^\\s"\']*)?'
  const regex = [
    '(?:' + protocol + '|www\\.)' + auth, '(?:localhost|' + ip + '|' + host + domain + tld + ')',
    port, path
  ].join('')

  return new RegExp(regex, 'ig')
}
