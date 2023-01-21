import mongoose from "mongoose";

const Connection=async ()=>{
    const URL=`mongodb+srv://kaustubh:kaustubh@cluster0.umbasdx.mongodb.net/practice?retryWrites=true&w=majority`;
    try{
    
      mongoose.set('strictQuery', false);
  await mongoose.connect(URL,{useNewUrlParser: true});
  console.log(`database connected successfully`);
    }catch(error){
  console.log('Error: while connecting with database',error.message);
    }
};
export default Connection;