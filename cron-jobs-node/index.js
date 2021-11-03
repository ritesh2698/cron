const cron = require('node-cron');
const express = require('express');
const fs = require('fs')
const nodemailer = require('nodemailer')

const app = express();
//Schedule tasks to be run  on the server
//cron.schedule('* * * * *',()=>{
   // console.log('running task every time')
//})

//Remove the error.log file every twenty-first day of the month.
// cron.schedule('* * * * *',()=>{
// console.log('------------------------------')
// console.log('Running Cron Job');
// fs.unlink('./error.log',(err)=>{
// if(err) throw  err;
// console.log('error file successfully deleted')
// })
// })

let testAccount = nodemailer.createTestAccount();

//create mail transporter
let transporter = nodemailer.createTransport({
    host:'smtp.ethereal.email',
    port:3000,
    secure:true,
    auth:{
        user:'testAccount.user',
        pass:'testAccount.pass'
    }
})

//sending mail
let info = transporter.sendMail({
    from: '"Fred Foo 👻" <riteshpra30@gmail.com>', // sender address
    to: "riteshpra30@gmail.com, riteshpra30@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  
// cron.schedule('* * * * *',()=>{
//     console.log('<---------------------------------------------->')
//     console.log("Running Cron job")

//     let messageOptions = {
//         from:'riteshprajapati30@gmail.com',
//         to:'riteshprajapati30@gmail.com',
//         subject:'Schedule test email',
//         text:'hii, this is testin schedule email'
//     }
//     transporter.sendMail(messageOptions,(err,info)=>{
//         if(err){
//             throw error;
//         }else{
//             console.log("Email successfully sent!")
//         }
//     })
// })

app.listen(3000,()=>{
    console.log("Listen on port 3000")
})

