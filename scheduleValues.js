const cron = require('node-cron')

cron.schedule('08 15 * * *',()=>{
    console.log("Running a job at 03:08 at India Standard Time")
},{
    schedule:true,
    timezone:"India Standard Time"
})