const express = require('express');
const app = express();
const port = 4042;


app.get('/',(req,res)=> {
return res.status(200).json({Msg:"Hello Ninja"})
});




app.listen(port,()=> {
  console.log('Server Started');
});

