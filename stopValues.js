const cron = require('node-cron')

const task = cron.schedule('* * * * *',()=>{
    console.log("will execute every minute  until stoped")
})
task.start()