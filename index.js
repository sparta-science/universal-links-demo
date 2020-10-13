const express = require('express')
const bodyParser = require("body-parser");
const path = require('path')
const PORT = process.env.PORT || 5000

var appleAppSiteAssociationContents = "{\n" +
  "   \"applinks\":{\n" +
  "      \"apps\": [],\n" +
  "      \"details\":[\n" +
  "         {\n" +
  "            \"appIDs\": [ \"GB9B5L6A6K.com.spartascience.UniversalLinkDemo\", \"RDXCX7EKCD.com.gameborn.mariposa\" ],\n" +
  "            \"components\": [\n" +
  "               {\n" +
  "                  \"/\": \"/scan/*\",\n" +
  "                  \"comment\": \"Matches any URL whose path starts with /scan/\"\n" +
  "               }\n" +
  "\t     ]\n" +
  "         }\n" +
  "      ]\n" +
  "   }\n" +
  "}\n" +
  "\n"

var lastScans = "test info"

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/scan/index.html', (req, res) => res.render('pages/scan/index'))
  .get(['/.well-known/apple-app-site-association'], function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send(appleAppSiteAssociationContents);
  })
  .post('/upload', function (req, res) {
    lastScans = req.body;
    res.send('SUCCESS');
  })
  .get(['/scans'], function (req, res) {
    res.send(lastScans);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
