const express = require('express')
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/bharatInternDatabase')

app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.get('/', async(req,res)=>{
   const articles =await Article.find().sort({createdAt:"desc"})
    res.render('articles/index',{ articles:articles })
})

app.use('/articles',articleRouter)

app.listen(3000)


