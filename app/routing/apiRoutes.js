const path = require("path")
const router = require('express').Router()


router.get('/friends', function(req, res){

  res.send("get friends")
})

router.post("/friends",function(req, res){
  console.log(req.body)
  const scores = Object.values(req.body)
  const data = { 
    name: "Isaac",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: scores 
  }

  console.log(data);
  
  res.send("post friends")
})

module.exports = router;