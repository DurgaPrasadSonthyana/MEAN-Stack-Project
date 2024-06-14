const express = require('express');
const app = express();
module.exports.logins = logins;

var users =[
    { email:"sreeb",pass:"12345"  },
    { email:"mahesh",pass:"123456"  },
    { email:"chennagani",pass:"987654"},
]

function logins(req,res){

    try{
        const found = users.some(item => item.email === req.body.email);
        
        if (found) {
            res.send({ status: true, 
                data: "Login success"
            });

            } else {
                res.send({ status: false, 
                    data: "Login falied"
                });
            }
      
    }catch(e){
        console.log('sidemenu error :',e)
    }
}
