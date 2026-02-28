 //create foldrer
 
 const fs= require('fs')


 if(! fs.existsSync('./modules')){
   fs.mkdir('./modules' , (err) => {
    if(err){
        console.log(err.message)

    }
    else
        console.log('file created')
 }

)
}
else
   console.log('file already exists')
