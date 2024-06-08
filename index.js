const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
app.use(cors())
const catagories = require('./data/categorys.json')
const news =require('./data/news.json')

app.get('/', (req, res) => {
        res.send('Hello World!')
 })

      app.get('/news-categorys', (req, res) => {
        res.send(catagories)
    })
    app.get('/news', (req, res) => {
      res.send(news)
    })

    app.get('/category/:id', (req, res) => {
      const id = req.params.id;
      if (id === '08') {
        res.send(news)
      }
      else {
        const catagory = news.filter(n => n.category_id === id)
        res.send(catagory);
      }
    })


    app.get('/news/:id', (req, res) => {
      const id =req.params.id
      const selectNews = news.find(n => n._id === id)
      res.send(selectNews)
    })

app.listen(port, () => {
        console.log('Example app listening on port' ,port)
 })