
//folder delete
if ( fs.existsSync('./modules')){
   fs.rmdir('./modules' , (err) =>{
     if (err){
        console.log(err)
     }
   })
   
}

//file delete
if (fs.existsSync('./filesystem ')){
  fs.unlink('./filesystem',(err) => {
   if(err){
    console.log(err)
   }
}
  )
}
else 
    console.log ('file not fount')