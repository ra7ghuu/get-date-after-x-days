const addDays = require("date-fns/addDays");

function result(days) {
  const resultDate = addDays(new Date(2020, 7, 22), days);
  return `${resultDate.getDate()}-${
    resultDate.getMonth() + 1
  }-${resultDate.getFullYear()}`;
}
module.exports = result;
