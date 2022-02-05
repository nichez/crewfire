const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const feedController = require('../controllers/feedController');

module.exports = function (app) {
  app.route('/feeds').get(awaitHandlerFactory(feedController.getAllFeeds));
  app.route('/feeds/:tags').get(awaitHandlerFactory(feedController.getSearchedFeeds));
};
