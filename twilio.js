const keys = require('./keys.js')
const client = require('twilio')(
  keys.TWILIO_ACCOUNT_SID,
  keys.TWILIO_AUTH_TOKEN
);

function sendMessage(text) {
  client.messages.create({
    from: keys.TWILIO_PHONE_NUMBER,
    to: keys.CELL_PHONE_NUMBER,
    body: text
  })
}

module.exports = {
  sendMessage
}
