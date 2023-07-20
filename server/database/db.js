import  mongoose from "mongoose"




const Connection = async (username,password)=>{

    const URL=`mongodb+srv://${username}:${password}@crudapp.anzobye.mongodb.net/?retryWrites=true&w=majority`;   

    try {
       await mongoose.connect(URL, { useUnifiedTopology : true, useNewUrlParser:true }  );
       console.log('database connected succesfully');
        
    } catch (error) {
        console.log("BC",error)
    }

}
export default Connection;
