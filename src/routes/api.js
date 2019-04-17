var express = require('express')
var router = express.Router()
const bodyParser = require('body-parser')
const fs = require('fs')
const getAvatarPercentages = require('./landing')

const jsonParser = bodyParser.json()

router.get('/data', (req, res) => {
  resultFuction('user_obsolete_1', 1525990056490, 1526369662429).then(function (data) {
    res.end(JSON.stringify(data))
  })
})

router.post('/data', jsonParser, (req, res) => {
  console.log('got  Post request')
  resultFuction(req.body).then(function (data) {
    console.log('Data sent ')
    res.end(JSON.stringify(data))
  })

})

router.post('/getAvatarPercentages', jsonParser, (req, res) => {
  getAvatarPercentages(req.body).then(function(data) {
    var arr = data.toString().split(",\n")
    console.log(arr)
    res.end(JSON.stringify(arr))
    // res.end(data)
  }).catch((error) => {
    console.log(error)

});


})


module.exports = router
