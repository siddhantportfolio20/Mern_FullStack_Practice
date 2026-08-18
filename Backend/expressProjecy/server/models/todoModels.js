import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        task:{
            type : String,
            require : true,
            trim:true
        },
        completed:{
            type: Boolean,
            default: false
        }
    },{
        timestamps: true
    }
)

const Todo = mongoose.model('todo',todoSchema)

export default Todo