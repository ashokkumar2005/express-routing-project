 import express from 'express';

 const app = express();

  const port = 3000;

   const users =[
         {id :1 , user_name :"ashok" , isStudent: true },
          {id :2 , user_name :"lufffy" , isStudent: true },
           {id :3 , user_name :"zoro" , isStudent: false }


 ]

 app.get('/api/user/:id', (req,res) => {

      const id = parseInt(req.params.id)
      if( isNaN (id)){
        return res.status(400).send('this is not a number');
      }
        const user= users.find((user) => user.id === id);
        
      
      if (user){
       return res.status(200).send(user)
      }
      res.status(400).send('user not found')

 }) 

 app.listen(port , () => {
    console.log(`app is running at ${port}`);

 })
  

