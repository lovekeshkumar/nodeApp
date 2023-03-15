const express = require("express");
const app = express();

app.get('/', (req, res) => {
  const input = parseInt(req.query.number)
  let output = ''
  if(input % 5 === 0){
    output +='L'
  }if(input % 7 === 0 ){
    output +='R'
  } if (output === ' '){
    output = input
  }
  res.json({output})
})  
app.listen(3000, () => {
  console.log("server started on port 3000");
});
