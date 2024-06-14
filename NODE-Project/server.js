const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
/*** for acess http request from FE */
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Referrer-Policy", "strict-origin-when-cross-origin");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    return next();
  });
  /*** for showing FE api request data in request body  */
  var bodyParser = require("body-parser");
  app.use( bodyParser.urlencoded({      limit: "5mb",  extended: true, }) );
  app.use(bodyParser.json({ limit: "5mb" }));

  /***   files */
  var login = require("./login");



  app.post("/login", function (req, res) {
    console.log("backend and frontend connected")
    login.logins(req,res);
  }  );

  function sendEmail(data){
    // Importing nodemailer module
    
    let emaildata = data;
     
    // Create a transporter
      
    const transporter = nodemailer.createTransport({
    
      service: 'gmail',
    
      auth: {
    
        user: 'durgaprasadsonthyana@gmail.com', // Your email address
    
        pass: 'ubmazjcqggirczmf' // Your email password or application-specific password if you have 2-factor authentication enabled
    
      }
    
    });
     
    // Email content
    
    const mailOptions = {
    
      from: 'durgaprasadsonthyana@gmail.com', // Sender address
    
      to: 'sankeerthreddyyadama@gmail.com', // List of recipients
    
      subject: emaildata.name + ' ' + ' Registred', // Subject line
    
      text: 'gender: '+ emaildata.genderId + ' ' + ' Mobile:' + ' ' + emaildata.mobile // Plain text body
    
    };
     
    // Send email
    
    transporter.sendMail(mailOptions, function(error, info) {
    
      if (error) {
    
        console.error('Error occurred:', error);
    
      } else {
    
        console.log('Email sent:', info.response);
    
      }
    
    });
    
  }

 
  app.post("/registration", function (req, res) {
   
    let data= req.body;
   try{
    if(data.genderId == 'Male'){

      res.send({status:true});
     sendEmail(data);


    }else{
      res.send({status:false})
    }
   
   }catch{
    res.send({status:false})
   }
  });

  
  
  
  

  app.listen(3000, (req , res) => {
    console.log("Server start at port 3000")
})

