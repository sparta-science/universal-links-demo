const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var appleAppSiteAssociationContents = "{' +
  '   \'applinks\':{' +
  '      \'apps\': [],' +
  '      \'details\':[' +
  '         {' +
  '            \'appIDs\': [ \'GB9B5L6A6K.com.spartascience.PrototypeMariposa\', \'RDXCX7EKCD.com.gameborn.mariposa\' ],' +
  '            \'components\': [' +
  '               {' +
  '                  \'/\': \'/scan/*\',' +
  '                  \'comment\': \'Matches any URL whose path starts with /scan/\'' +
  '               }' +
  '\t     ]' +
  '         }' +
  '      ]' +
  '   }' +
  '}' +
  '"

express()
  .use(express.static(path.join(__dirname, 'public')))

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  // .get(['/.well-known/apple-app-site-association'], function (req, res) {
  //   res.set('Content-Type', 'application/json');
  //   res.send(appleAppSiteAssociationContents);
  // })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
