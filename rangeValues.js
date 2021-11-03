const cron = require('node-cron')

cron.schedule('1-5 * * * *',()=>{
    console.log("Running every minute 1 from 5")
})