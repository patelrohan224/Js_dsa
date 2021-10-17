const nodemailer=require('nodemailer')
const sendMail=require('sendmail')
require("dotenv").config();

const{CURRENT_ENVIRONMENT,SMTP_USERNAME,SMTP_PASSWORD} = process.env

module.exports=nodemailer.createTransport({
    host: CURRENT_ENVIRONMENT =="development"?"smtp.mailtrap.io":"",
    port:587,
    secure:false,
    auth:{ user:SMTP_USERNAME, pass:SMTP_PASSWORD},
})