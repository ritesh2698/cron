const cron = require('node-cron')

cron.schedule('* * * * * *', ()=>{
    console.log("Running task every second");
})


