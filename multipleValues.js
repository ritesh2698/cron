const cron = require('node-cron')

cron.schedule('1,2,4,5 * * * * *', () => {
  console.log('running every second 1, 2, 4 and 5');
});
