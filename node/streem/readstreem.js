// READ BUFEER 

const fs= require('fs')

const assign = fs.createReadStream('./content.txt' ,{encoding : 'utf8'} )//-------->  Assign


assign.on( 'data',(buffer) =>{
    console.log('\n I LOVE GURUMSSHHHUU \n')
    console.log(buffer)

})

