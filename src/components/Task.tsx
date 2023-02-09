import React, { useState } from "react";
import "./Task.css";
import {TaskType} from "../models/TaskType";
import { data } from "../data/tasks";


type TaskProps = {
  task : TaskType;
  checked : boolean;
  changeChecked : (taskId : number) => void;
  deleteTask: (taskId : number) => void;
  editTask: (taskId : number) => void;
};


export const Task = ({task, deleteTask, editTask, checked, changeChecked}: TaskProps) => {
  return (
    <div className="task-container">
      <div className="task-content">
        <label className="container">
          <input type="checkbox" checked={checked} onChange={() => {changeChecked(task.id)}
          } />
          <span className="checkmark"></span>
        </label>
        <p>{task.title}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => editTask(task.id)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};
