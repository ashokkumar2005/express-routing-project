 const exp = require('express') ;

  const app = exp();


  app.listen(3000 , () => {
    console.log('server is running')
  });

  app.get('/', ( req,res) => {

    res.status(200).sendFile('./index.html' , {root : __dirname})

  })

   app.get('/contact', ( req,res) => {

    res.status(200).sendFile('./contact.html' , {root : __dirname})

  })

   app.get( '/index' || '/home' , (reg,res) => {
    res.redirect('/')
   } )

   app.get('/about', ( req,res) => {

    res.status(200).sendFile('./about.html' , {root : __dirname})

  })
  
  
  app.use((req,res) => {
     
    res.status(404).sendFile('./error.html', {root : __dirname})
  })