const express = require('express');
const app = express();

//Set up route for the app
app.get("/api", (req, res) =>{
    // res.json({users:["userOne", "userTwo", "userThree"]});
    
})
// start up the backend
app.listen('5000', ()=>{
    console.log('server started on port 5000')
})

