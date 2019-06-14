const express = require('express')
const uuid = require('uuid/v4')
const logger = require('../logger')
const bookmarks  = require('../store')

const bookmarksRouter = express.Router()
const bodyParser = express.json()

bookmarksRouter
  .route('/bookmarks')
  .get((req, res) => {
    res
      .status(200)
      .json(bookmarks)
  })
  .post(bodyParser, (req, res) => {
    const { name, url, rating=3 } = req.body

    if (!name) {
      return res
        .status(400)
        .res('Must include name')
    }

    if (!url) {
      return res
        .status(400)
        .res('Must include URI')
    }
    // continue validation here

  })

module.exports = bookmarksRouter
