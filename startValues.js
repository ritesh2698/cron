const cron = require('node-cron')

const task = cron.schedule('* * * * *',()=>{
    console.log("stoped task");
},
{
    schedule:false
});

task.start();
