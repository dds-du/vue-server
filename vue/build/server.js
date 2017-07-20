let express = require('express')
let router = express.Router()


router.get('/sure',(req,res)=>{
	//console.log(req)
	var sure = '';
	for(var i=0;i<4;i++){
		sure += Math.floor(Math.random()*16).toString(16)
	}
	

	res.end('0')
})

router.post('/userInfo',(req,res)=>{
	//console.log(req)
	res.end('1')
})
router.post('/name',(req,res)=>{
	//console.log(req)
	res.end('1')
})
router.post('/init',(req,res)=>{
	//console.log(req)
	res.end('1')
})
router.post('/sureIn',(req,res)=>{
	//console.log(req)
	res.end('1')
})
router.post('/login',(req,res)=>{
	//console.log(req)
	res.end('1')
})
router.post('/reg',(req,res)=>{
	//console.log(req)
	res.end('1')
})
router.post('/quit',(req,res)=>{
	//console.log(req)
	res.end('1')
})
router.post('/msg',(req,res)=>{
	//console.log(req)
	res.end('1')
})
router.post('/leav',(req,res)=>{
	//console.log(req)
	res.end('1')
})


module.exports = router