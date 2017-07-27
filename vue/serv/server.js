let express = require('express')
let router = express.Router()
let mysql = require('mysql')

let sql = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'dds'
})

sql.connect()
sql.query("SELECT * FROM users1",function(err,rows,fields){
	if(err) throw err;
	//console.log(rows)
})

	// 获得客户端的Cookie
   /* var Cookies = {}
    req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=')
        Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim()
    })*/

router.get('/sure',(req,res)=>{
	let sure = Math.ceil(Math.random()*150)+50
	res.writeHead(200, {
        'Set-Cookie': 'sure='+sure+';Max-Age=-1',
        'Content-Type': 'text/plain'
    });
    //res.setHeader('Set-Cookie':['sure='+sure,'Max-Age=-1'])
	console.log('set a new cookie:'+sure)
	res.end(sure.toString())
})

router.get('/user',(req,res)=>{
	res.setHeader('charset','utf8;')

	sql.query("SELECT * FROM userinfo",function(err,rows,fields){
		if(err) throw err;

		res.json(rows)
		res.end()
	})
})

router.post('/userInfo',(req,res)=>{
	let query = "INSERT INTO userinfo (i_useragent,i_ip,i_time) VALUES(?,?,NOW())"
	let data  = [req.headers["user-agent"],req.connection.remoteAddress]
	sql.query(query,data,(err,rows,fields)=>{
		 if (err) throw err;
	    console.log('add a new userinfo');
	})
	res.end()
	
})
router.post('/name',(req,res)=>{
	let query = "SELECT * FROM users1 WHERE u_username = ?"
	let data  = [req.body.username]
	sql.query(query,data,(err,rows,fields)=>{
		 if (err) throw err;
	    res.end(rows.length.toString());
	})
})
router.post('/init',(req,res)=>{
	//console.log(req)
	res.end()
})
router.post('/sureIn',(req,res)=>{
	//console.log(req)
	res.end()
})
router.post('/login',(req,res)=>{
	//console.log(req)
	res.end()
})
router.post('/reg',(req,res)=>{
	//console.log(req)
	res.end()
})
router.post('/quit',(req,res)=>{
	//console.log(req)
	res.end()
})
router.post('/msg',(req,res)=>{
	sql.query("SELECT * FROM message",function(err,rows,fields){
		if(err) throw err;

		res.json(rows)
		res.end()
	})
})
router.post('/leav',(req,res)=>{
	//console.log(req)
	res.end()
})

module.exports = router