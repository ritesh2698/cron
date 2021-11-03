const cron = require('node-cron')

cron.schedule('* * * November Wed', () => {
  console.log('running on Wednesday of November');
});

