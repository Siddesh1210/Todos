import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  async function getTodos() {
    try {
      const response = await fetch("http://localhost:8000/todos/alltodos", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const result = await response.json();
      setData(result.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  useEffect(() => {
    getTodos();
  }, [data]);

  async function submitTodo() {
    try {
      const response = await fetch("http://localhost:8000/todos/createtodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (!response.ok) {
        throw new Error("Failed to add todo");
      }
      const result = await response.json();
      console.log(result);
      setTitle("");
      setDesc("");
      getTodos(); // Refresh todos after adding a new one
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  async function updateTodo(todoId) {
    try {
      const response = await fetch(
        `http://localhost:8000/todos/updatetodo/${todoId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: editTitle, description: editDescription }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update todo");
      }
      const result = await response.json();
      console.log(result);
      setEditingId(null); // Reset editing mode
      // Refresh todos after updating
      getTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }


  async function deleteTodo(id)
  {
    const response = await fetch(`http://localhost:8000/todos/deletetodo/${id}`,{
        method:"DELETE"
    })
    const result = await response.json();
    console.log(result);
  }

  async function handleUpdate(id)
  {
    console.log(id);
    const response = await fetch(`http://localhost:8000/todos/updateTodoStatus/${id}`,{
        method:"POST",
        "headers":{
            "Content-Type":"application/json"
        }
    })

    const result = await response.json();
    console.log(result);
  }

  return (
    <>
      <h1>My Todo App</h1>
      <div className="todo">
        <p>Add Todo</p>
        <input
          className="todoInput"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          className="todoInput"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        ></input>
        <button onClick={submitTodo}>Add Task</button>
      </div>

      <table border="2" cellPadding="10" style={{ width: "400px" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            data.map((todo) => {
              return (
                <tr key={todo._id}>
                  <td>
                    {editingId === todo._id ? (
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)} style={{padding:"8px"}}
                      />
                    ) : (
                      todo.title
                    )}
                  </td>
                  <td>
                    {editingId === todo._id ? (
                      <input
                        type="text"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        style={{padding:"8px"}}
                      />
                    ) : (
                      todo.description
                    )}
                  </td>
                  <td>{todo.status ? <button
                  onClick={()=>{handleUpdate(todo._id)}}
                  >✅</button> : <button onClick={()=>{handleUpdate(todo._id)}}>❌</button>}</td>
                  <td>
                    {editingId === todo._id ? (
                      <div className="buttonContainer">
                        <button onClick={() => updateTodo(todo._id)}>✔️</button>
                        <button onClick={() => setEditingId(null)}>✖️</button>
                      </div>
                    ) : (
                      <div className="buttonContainer">
                        <button onClick={() => setEditingId(todo._id)}>✏️</button>
                        <button onClick={() => deleteTodo(todo._id)}>🗑️</button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4">No Todo's Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default App;
