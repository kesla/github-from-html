var url = require('url')

  , cheerio = require('cheerio')

module.exports = function (html) {
  var $ = cheerio.load(html)
    , href = $('a *[alt="Fork me on GitHub"]').parent().attr('href')
    , paths = url.parse(href).path.split('/').filter(Boolean)
    , obj = {}

  if (paths[0])
    obj.user = paths[0]

  if (paths[1])
    obj.repo = paths[1]

  return obj
}