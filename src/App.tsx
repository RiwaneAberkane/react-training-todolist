import React, { useEffect, useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header} from "./components/Header";
import { TaskType } from "./models/TaskType";
import { TaskList } from "./components/TaskList";

const App = () => {
  const title = "To do list";
  const [showModal, setShowModal] = useState(false)
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if(showModal === false){
      setTaskToEdit(null)
    }
  }, [showModal]);
  const [tasks, setTasks] = useState(data)
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null>(null)
  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const handleChange = (taskId: number) => {
    const copyTasks = tasks.find((task) => task.id == taskId);
    console.log(copyTasks);
    
    setChecked(!checked);
  };
  


  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTask = Object.fromEntries(formData)

    if (taskToEdit) {
      taskToEdit.title = newTask.title.toString();
      taskToEdit.description = newTask.description.toString();
      console.log("WARNING ------------------------");
      setShowModal(false)
    }else if (taskToEdit === null) {
      const obj = { 
        id: tasks[tasks.length - 1].id + 1,
        title: newTask.title.toString(),
        description: newTask.description.toString(),
        done: false }
      tasks.push(obj);
      setShowModal(false)
    }

   
  };

  const editTask = (taskId: number) => {
    const copyTasks = tasks.find((task) => task.id == taskId);
    if (copyTasks != null){
      setTaskToEdit(copyTasks);
      setShowModal(true)
    }
    console.log(copyTasks);
  };

  const deleteTask = (taskId: number) => {
    const copyTasks = tasks.filter((task) => task.id !==taskId)
    console.log("!!!!!!" , copyTasks);
    setTasks(copyTasks)

  };

  return (
    <div className="main">
      <Header  title={title}/>

      <TaskList data = {tasks} checked={checked} deleteTask = {deleteTask} editTask = {editTask} changeChecked={handleChange}/>
      
      <button
        className="add-task-btn"
        onClick={() =>  setShowModal(true)}
      >
        +
      </button>
      <TaskFormModal
        show={showModal}
        handleClose={() =>
          setShowModal(false)
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
