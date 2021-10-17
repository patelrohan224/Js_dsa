const express = require('express');
const  sendMail  = require('../utils/sendMail');
const router = express.Router();
const User = require('../models/user.model')

const path = require('path')


router.get("",async function(req, res){
    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;
    const offset = (page - 1) * size;
    const users = await User.find({}).skip(offset).limit(size).lean().exec();
    const totalPages = Math.ceil(
      (await User.find({}).countDocuments().lean().exec()) / size
    );
  sendMail({
      from:"anyms@gamo.com",
      to:"a@a.com",
      subject:"msg titile",
      text:"plaint",
    path:path.join(__dirname,"../files/name.txt"),
    html:path.join(__dirname,"../files/name.html")
  })
  return res.send({ users, totalPages });
});

router.post("",async function(req, res){
  const users=await User.create(req.body)
  console.log('users', users)
  sendMail({
    from:"anyms@gamo.com",
    to:req.body.email,
    subject:`Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
    text:`Hi ${req.body.first_name}, Please confirm your email address`,
    html:path.join(__dirname,"../files/name.html"),
  path:path.join(__dirname,"../files/name.txt")
});

return res.send({ users });
})

router.post("/allsend",async function(req, res){
  const users=await User.create(req.body)
  let mails=["nagendra@gmail.com","sumit@gmail.com","navneen@gmail.com","kil@gmail.com","sonu@gmail.com"]
  // console.log('users', users)
  sendMail({
    from:"anyms@gamo.com",
    to:req.body.email,
    cc:mails,
    subject:`Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
    text:`Hi ${req.body.first_name}, Please confirm your email address`,
    html:path.join(__dirname,"../files/name.html"),
  path:path.join(__dirname,"../files/name.txt")
});

return res.send({ users });
})

module.exports = router;