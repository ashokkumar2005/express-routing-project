//write file 

 if (! fs.existsSync('./filesystem')){

 fs.writeFile('./filesystem','vanakamda mapla', (err) => {

    if (err){
        console.log(err)

    }
    else
        console.log('file writed')
 })
}
else 
    console.log('file already exists and writed')

 
// read file

if ( fs.existsSync('./filesystem')){

 fs.readFile('./filesystem' , (err , data) => {
    if (err,data){
        console.log(err,data.toString())

    }
 
})
 
}

    

