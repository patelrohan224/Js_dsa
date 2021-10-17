const transporter=require('../config/mail');
const path=require('path');
const fs=require('fs');
const htmlStream=fs.createReadStream(path.join(__dirname, "../files/name.html"));
module.exports =(({from,to,subject,path,text})=>{
    var massage={
        from: from,
        to: to,
        subject:subject,
        text:text,
        html:htmlStream,
        attachments:[{
            filename:"name.txt",
            path:path
        }],
    };
    transporter.sendMail(massage)
})