const queries = require("../queries/leak_test");
const cache = require("../cache.js");
const messaging = require('../twilio.js');

module.exports = app => {

  app.post('/leak_test', function(req, res, next) {
    Promise.all(req.body.map( x =>
      queries.saveResults(x.liquid_id, x.test_id, x.value)
    ))
      .then(function(result) {
        res.json(result);
      })
  });
  app.get('/leak_test', function(req, res, next) {
    queries.Results().then(result =>
    res.json(result));
  });
  app.get('/leak_test/initialize', function(req, res, next) {
    cache.setThreshold(1,900,10);
    res.json({'hello': 'there'});
  });
  app.get('/leak_test/text', function(req, res, next) {
    messaging.sendMessage();
    res.json({'hello': 'there'});
  });
  app.post('/leak_test/compare', function(req, res, next) {
    cache.compareResults(req.body.liquid, req.body.value)
      .then(function(result) {
        console.log(result)
        res.json({ 'message': result});
      })
  });
};
