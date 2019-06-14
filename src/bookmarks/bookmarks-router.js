const express = require('express')
const uuid = require('uuid/v4')
const logger = require('../logger')

const bookmarksRouter = express.Router()
const bodyParser = express.json()

bookmarksRouter
  .route('/bookmarks')

module.exports = bookmarksRouter
