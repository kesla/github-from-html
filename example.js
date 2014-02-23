require('http').get('http://nodejs.org', function (res) {
  var buffers = []

  res.on('data', function (chunk) { buffers.push(chunk) })

  res.on('end', function () {
    var html = Buffer.concat(buffers).toString()
      , github = require('./github-from-html')(html)

    console.log('http://nodejs.org:')
    console.log('github user is:' + github.user)
    console.log('github repo is:' + github.repo)

  })

})
