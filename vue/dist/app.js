let express = require('express')
let swig = require('swig')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

//配置应用模板
app.engine('html',swig.renderFile)
//设置模板文件存放目录
app.set('views','./')
//注册刚刚配置好的模板引擎
app.set('view engine','html')
//开发过程中，取消模板缓存
swig.setDefaults({cache:false})

//静态文件处理
app.use('/static',express.static(__dirname+'/static'))
app.use('/api',require('./server'))

//app.use(bodyParser.urlencoded({extended:true}))
app.use('/',(req,res,next)=>{
	res.render('index.html')
})

app.listen(3000,()=>{
	console.log('listen in 3000!')
})