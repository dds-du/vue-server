let express = require('express')
let router = express.Router()
let mysql = require('mysql')
let md5 = require('md5')

let sql = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'dds'
})

sql.connect()
sql.query("SELECT * FROM users1",function(err,rows,fields){
	if(err) throw err;
})

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
	res.setHeader('charset','utf-8;')

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
router.post('/del',(req,res)=>{
	let query = "DELETE FROM userinfo WHERE i_id = ?"
	let data  = [req.body.id]
	sql.query(query,data,(err,rows,fields)=>{
		if (err) throw err
	    res.end()
	})
})
router.post('/userlist',(req,res)=>{
	res.setHeader('charset','utf-8;')
	sql.query("SELECT u_id,u_username,u_mail,u_sex,u_birth,u_lasttime,u_lastIP,u_power FROM users1",function(err,rows){
		if(err) throw err

		res.json(rows)
		res.end()
	})
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
	let data = {}

	if(req.session.username){
		data.user = req.session.username
    	data.num = 1	
	}else{
    	data.num = 0
    }
   
    res.json(data)
    res.end()
	
})

router.post('/login',(req,res,next)=>{
	let query = "SELECT u_id FROM users1 WHERE u_username = ? AND u_password= ?"
	let data  = [req.body.username,md5(req.body.password)]
	let user = req.body.username
	sql.query(query,data,(err,rows,fields)=>{
		if (err) throw err
	    
	    if(rows.length==1){
	    	req.session.username=user
	    	//console.log(req.session)
		    res.end('1')
		}else{
			res.end()
		}
		
	})

	
})
router.post('/reg',(req,res)=>{
	let query = 'INSERT INTO users1 (u_username,u_password,u_mail,u_sex,u_uniqid,u_lastIP,u_birth,u_lasttime) VALUES (?,?,?,?,?,?,NOW(),NOW())'
	 
	let body = req.body
	let data = [body.username,md5(body.password),body.mail,body.sex,md5(Date.now()),req.connection.remoteAddress]

	sql.query(query,data,(err,row)=>{
		if(err) throw err 
		req.session.username=body.username
		res.end('1')
	})
})
router.post('/quit',(req,res)=>{
	req.session.username = ''
	res.end('0')
})
router.post('/msg',(req,res)=>{
	sql.query("SELECT * FROM message",function(err,rows,fields){
		if(err) throw err;

		res.json(rows)
		res.end()
	})
})
router.post('/leav',(req,res)=>{
	let query = 'INSERT INTO message (m_time,m_text,m_username) VALUES (NOW(),?,?)'
	let data = [req.body.text,req.session.username]
	if(req.session.username){
		sql.query(query,data,(err,rows)=>{
			if(err) throw err 
		})
		res.end('1')
	}
	res.end('0')
})

module.exports = router