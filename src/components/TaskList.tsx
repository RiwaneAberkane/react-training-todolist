import React from "react";
import {TaskType} from "../models/TaskType";
import {Task} from "../components/Task"
import "./TasksList.css"



type TaskListProps = {
    data : TaskType[];
    checked : boolean;
    changeChecked : (taskId : number) => void;
    deleteTask: (taskId : number) => void;
    editTask: (taskId : number) => void;
}

export const TaskList = ({data, deleteTask, editTask, checked, changeChecked}: TaskListProps) => {
    return(
       <div className="list-container">
        {data.map((item : TaskType) => (
          <Task task = {item} key={item.id} checked = {checked} deleteTask = {deleteTask} editTask = {editTask} changeChecked= {changeChecked}/>
        ))}
        </div>
    )
}