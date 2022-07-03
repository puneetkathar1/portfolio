

require('dotenv').config()


export default async (req,res)=>{

         try{
          
         return res.status(200).json({message: 'Options Not Found!'})
         } catch(err){
             console.log(err)
         }


}