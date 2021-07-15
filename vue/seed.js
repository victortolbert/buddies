// Run this to generate db.json
const fs = require('fs')
const path = require('path')
const data = require('./demo')

fs.writeFileSync(
  path.join(__dirname, 'db.json'),
  JSON.stringify(data(), null, 2),
)
