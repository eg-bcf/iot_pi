var knex = require("../knex.js");

function Results() {
  return knex('results');
}

function mainPumpData() {
  return Results()
}

function saveResults(liquid, test, val) {
  return Results()
          .insert({
            liquid_id: liquid,
            test_id: test,
            value: parseFloat(val)
          })
}

module.exports = {
  mainPumpData: mainPumpData,
  Results: Results,
  saveResults: saveResults
}
