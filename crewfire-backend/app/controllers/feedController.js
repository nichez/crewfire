const Feed = require('../models/feedModel');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

class FeedController {
  getAllFeeds = async (req, res, next) => {
    this.checkValidation(req);
    const feeds = await Feed.getFeeds();

    res.status(200).send(feeds);
  };

  getSearchedFeeds = async (req, res, next) => {
    this.checkValidation(req);
    const feeds = await Feed.getSearchedFeeds({ tags: req.params.tags });

    res.status(200).send(feeds);
  };

  checkValidation = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpException(400, 'Validation faild', errors);
    }
  };
}

module.exports = new FeedController();
