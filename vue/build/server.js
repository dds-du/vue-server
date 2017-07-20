let express = require('express')
let router = express.Router()

router.get('/',(req,res,next)=>{
	//console.log(req)
	res.end('0')
})

router.post('/',(req,res,next)=>{
	//console.log(req)
	res.end('1')
})
module.exports = router