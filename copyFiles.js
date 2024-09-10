const fs = require('fs')
const path = require('path')

fs.readdirSync('src/public').forEach((file) => {
  fs.copyFileSync(
    path.join('src/public', file),
    path.join('.next/static', file),
  )
})
