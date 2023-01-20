import React from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header} from "./components/Header";
import { TaskType } from "./models/Task";
import { TaskList } from "./components/TaskList";

const App = () => {
  const title = "To do list";
  const tasks = data;
  const taskToEdit: any = null;

  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    console.error("I need to be implemented");
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const deleteTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  return (
    <div className="main">
      <Header  title={title}/>

      {/* <div className="header">
        <h1>{title}</h1>
      </div> */} 

      {/* <Task task={tasks[0]}/>
      <Task task={tasks[1]}/>
      <Task task={tasks[2]}/>
      <Task task={tasks[3]}/> */}

      {/* <ul>
        {tasks.map((item : TaskType) => (
          <Task key = {item.id} task={item}/>
        ))}
      </ul> */}

      <TaskList data = {tasks}/>
      
      <button
        className="add-task-btn"
        onClick={() => console.log("this button should open the modal")}
      >
        +
      </button>
      <TaskFormModal
        show={false}
        handleClose={() =>
          console.log("pass me a method that will close the modal")
        }
        addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
