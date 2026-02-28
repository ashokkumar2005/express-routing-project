 
 // WRITE BUFFER

  const fs = require('fs')

  const assign = fs.createReadStream('./content.txt' ,{encoding : 'utf8'} )

  const  gurumsssss = fs.createWriteStream('./newcontent.txt' )  //---->assign


 assign.on ('data' ,(buffer)=> {
   
    gurumsssss.write('\n gurumss iss my wife and she is my everything \n')
    gurumsssss.write(buffer)
  })  //-----> method-1 write


const  gurumssssss = fs.createWriteStream('./gurumsssss.txt' ) 

      assign.pipe(gurumssssss) //-----> method-2 write

