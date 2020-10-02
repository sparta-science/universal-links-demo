const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const fs = require('fs');

var appleAppSiteAssociationContents = fs.readFileSync(path.resolve(__dirname, 'assets/apple-app-site-association'), 'utf8');

express()
  .use(express.static(path.join(__dirname, 'public')))

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get()
  .get(['/.well-known/apple-app-site-association'], function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send(appleAppSiteAssociationContents);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
