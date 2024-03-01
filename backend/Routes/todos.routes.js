import Todo from '../Model/Todos.model.js'
import express, { Router } from 'express';
const routes=express.Router();


routes.get("/",(req,res)=>{
    res.send("Todos is working")
})

routes.get("/alltodos",async (req,res)=>{
    const todos = await Todo.find();
    console.log(todos);
    res.status(200).json({
        todos:todos
    })
})

routes.post("/createtodo", async (req,res)=>{
    const {title,description}=req.body;
    const todo = await Todo.create({
        title,
        description
    })
    if(!todo)
    {
        return res.status(401).json({message:"Todo not created"})
    }
    return res.status(200).json({message:"Todo created successfully",todo})
})

routes.post("/updateTodoStatus/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const updatedTodo = await Todo.findOne({ _id: id });
        console.log(updatedTodo);
        if (!updatedTodo) {
            return res.status(500).json({ message: "Todo not found" });
        }
        updatedTodo.status = !updatedTodo.status; // Toggle the status
        await updatedTodo.save();
        console.log(updatedTodo);
        return res.status(200).json({ message: "Successfully updated", updatedTodo });
    } catch (error) {
        console.error("Error updating todo:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

routes.post("/updatetodo/:id",async (req,res)=>{
    try {
        const {title,description}=req.body;
        const id=req.params.id;
        let updatedTodo=await Todo.findByIdAndUpdate(id,{
            title,
            description
        })
        // await updatedTodo.save();

        const todo= await Todo.findById(id)
        console.log(todo);

        if(!todo)
            {
                return res.status(401).json({message:"No such todo exist"})
            }
        res.status(200).json(todo);
    } catch (error) {
        return res.status(401).json({message : error})
        
    }
})

routes.delete("/deletetodo/:id",async (req,res)=>{
    try {
        const id=req.params.id;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        res.status(200).json(deletedTodo)
    } catch (error) {
        return res.status(400).json({error})
    }
})

export default routes;