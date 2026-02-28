  const http = require('http')

  const fs =require('fs');

  const server = http.createServer((req,res) => {

   let path ='./'
   res.setHeader('Content-type', 'text/html');


   if( req.url === '/index' || req.url === '/'){
     path +='index.html';
     res.statusCode=200
   }

   else if(req.url === '/home'){
      res.statusCode= 302;
      res.setHeader('Location' , '/')
      res.end();
      return;
   }

    
   
  else if( req.url === '/contact' ){
     path +='contact.html';
     res.statusCode=200
   }

  else if( req.url === '/about'){
     path +='about.html';
     res.statusCode=200;
   }
   
   else{
    path+= 'error.html';
    res.statusCode=404;
   }


   fs.readFile( path , (err,data) => {
     if (err){
      console.log(err.message)
      res.end()
     } else
      res.write(data)
      res.end()
   })



  })

  server.listen(3000,'localhost', () => {
    console.log('request sending')
  })