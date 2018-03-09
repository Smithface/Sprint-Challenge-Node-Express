const fetch = require('node-fetch');

const TODAY_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const YESTERDAY_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';

function getValues() {
  return new Promise((resolve, reject) => {
    const todayValue = fetch(TODAY_URL)
      .then(result => result.json())
      .then(obj => obj.bpi.USD.rate)
    const yesterdayValue = fetch(YESTERDAY_URL)
      .then(result => result.json())
      .then(obj => Object.values(obj.bpi)[0])
    Promise.all([todayValue, yesterdayValue])
      .then(values => resolve(values))
      .catch(err => reject(err));
  });
}