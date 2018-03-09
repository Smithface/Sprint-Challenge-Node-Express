const fetch = require('node-fetch');

const TODAY_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const YESTERDAY_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';

function getValues() {
  return new Promise((resolve, reject) => {
    const todayValue = fetch(TODAY_URL)
      .then(result => result.json())
      .then(obj => obj.bpi.USD.rate_float)
    const yesterdayValue = fetch(YESTERDAY_URL)
      .then(result => result.json())
      .then(obj => Object.values(obj.bpi)[0])
    Promise.all([todayValue, yesterdayValue])
      .then(values => {
        const difference = values[0]-values[1];
        if (difference < 0) {
          resolve({ fallen: new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(Math.abs(difference)) })
        } else {
          resolve({ risen: new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(difference) })
        }
      })
      .catch(err => reject(err));
  });
}

module.exports = {
  getValues
};
