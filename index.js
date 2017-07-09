const compression = require('compression')
const express = require('express')

const app = express()
app.use(compression())
app.use(express.static('public/', {
  maxAge: '2h'
}))

console.log('\n[WARNING] lol-hero is now running in PRODUCTION mode.');
console.log('[WARNING] If you want to run it in DEVELOPMENT mode, please try "npm run dev" instead.\n');
app.listen(8080, () => {
  console.log('[INFO] movie-board is now listening at 8080...');
});

