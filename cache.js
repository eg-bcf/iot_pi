const redis = require('redis');
const util = require('util');
const messaging = require('./twilio.js');

const client = redis.createClient('redis://127.0.0.1:6379');
client.hget = util.promisify(client.hget);

function setThreshold(liquid, max, min) {
  client.hset('result', liquid.toString(), JSON.stringify({ 'max': max, 'min': min }))
  client.hget('result', liquid.toString())
    .then((res) => {
      let response = JSON.parse(res);
      //console.log(response);
      return response
    });
}

function compareResults(liquid, value) {
  return client.hget('result', liquid.toString())
    .then((res) => {
      let response = JSON.parse(res);
      if ( value >= response['max']) {
        //console.log("greater than")
        messaging.sendMessage("Your Value Exceeded the amount for this product")
        return "That value is greater than the threshold"
      }
      else if ( value <= response['min'] ) {
        //console.log('less than');
        messaging.sendMessage("Your Value is lower than the specified minimum")
        return "That value is less than the threshold"
      }
      else {
        return "All Good";
      }
    });
}


module.exports = {
  setThreshold,
  compareResults
}
