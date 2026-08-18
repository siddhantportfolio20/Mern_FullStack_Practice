import Todo from "../models/todoModels.js";

export const getTodo = async(req,res)=>{
    try{
        const todos = await Todo.find();
        res.status(200).json(
            {
                data:todos,
                message : "Todo featched successfully"
            }
        )

    }catch(err){
        res.status(500).json(
            {
                error :err.message,
                message : 'failed to featch todos get'
            }
        )
    }


}

export const createTodo= async(req,res)=>{
    try{
         const { task, completed = false } = req.body;

          if (!task || typeof task !== "string" || task.trim() === "") {
            return res.status(400).json({
              message: "Task is required and must be a non-empty string",
            });
          }
      
          if (typeof completed !== "boolean") {
            return res.status(400).json({
              message: "Completed must be a boolean",
            });
          }

          const newTodo = await Todo.create({
            task : task.trim(),
            completed
          })

        res.status(200).json(
            {
                data: newTodo,
                message : 'Todo featched successfully'
            }
        )
    }catch(err){
        res.status(500).json(
            {
                error :err.message,
                message : 'failed to featch todos created'
            }
        )
    }



}
export const toggleCompleted= async(req,res)=>{
    // try{



    // }catch(err){

    // }


}
export const updateTodo= async(req,res)=>{

    try{
         const _id = req.params.id;
          const { task, completed } = req.body;

        if(task !== undefined && (typeof task !== 'string' || task.trim === "")){
            return res.status(400).json({
                message : 'Task must be a non empty string'
            })
        }
        if(completed !== undefined && typeof completed !== 'boolean'){
            return res.status(400).json({
                message: 'completed must be a boolean value'
            })
        }

        const updateData = {};
        if(task !== undefined){
            updateData.task = task.trim();
        }

        if(completed !== undefined){
            updateData.completed = completed;
        }

        const updateTodo = await Todo.findByIdAndUpdate(_id , updateData,
            {new : true ,runValidators : true}

        )
        if(!updateData){
            return res.status(404).json({
                message:"todo not found"
            })
        }

        res.status(200).json({
            data : updateTodo,
            message : ' Todo updated successfully '
            
        })


    }catch(err){
                res.status(500).json(
            {
                error :err.message,
                message : 'failed to featch todos at update'
            }
        )
    }

}
export const deleteTodo = async (req, res) => {
    try {
        const _id = req.params.id;

        // Find and delete todo
        const deletedTodo = await Todo.findByIdAndDelete(_id);

        // Todo not found
        if (!deletedTodo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json({
            data: deletedTodo,
            message: "Todo deleted successfully"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message,
            message: "Failed to delete todo"
        });
    }
};