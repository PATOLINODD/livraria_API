 const livros = require('./livroRouter')
 const autor = require('./autorRouter')

 const express=require('express')

 
 module.exports = app => {
    app.use(
    express.json(),
      livros,
      autor
     
    )
  }
  
 
 