import mongoose  from "mongoose";

const testSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
        
    },

    age:{
        type : Number,
        required : false
    },
    course:{
        type : String,
        required : true 
    }

})
const Test = mongoose.model("Test" , testSchema)

const connectDB = async() => {
    try { 
        mongoose.connection.on('connected',()=>{
            console.log('DB is connected');
        })
        await mongoose.connect(`${process.env.MONGO_URL}/test`);
        
        // const result = await Test.create({
        //     name : 'test name',
        //     age : '5',
        //     course : "Mern Full stack" 
        // })

        // const result = await Test.insertMany(
        //     [
        //         {name : 'Siddhant' , age : 23 , course : 'Mern Full Stack'},
        //         {name : 'Sourish' , age : 11 , course : 'Mern Full Stack'},
        //         {name : 'Atharva' , age : 26 , course : 'Data Science'},
        //         {name : 'Harsh' , age : 21 , course : 'Computer Science'},
        //         {name : 'Nandini' , age : 23 , course : 'Data Science'},
        //         {name : 'Adnan' , age : 19 , course : 'Cloud Computing'},
        //     ]
        // )
        // console.log( await Test.find({age : {$gt : 22}})),
        // console.log(await Test.find({age : {$lt : 22}}));
            //  console.log(await Test.find({age : {$lt : 23 , $gte : 20 }}));


        // const result = await Test.updateOne({name: 'Siddhant'},
        //     {
        //         $set:{
                
        //             age : 23,
        //             course : 'Btech'
        //         }
        //     }

        // )
        const result = await Test.deleteOne({_id: '6a7eadea7561a7d874555021'})

        console.log(result);
    }catch(err){
        console.log(err.message);
    }
}


export default connectDB;