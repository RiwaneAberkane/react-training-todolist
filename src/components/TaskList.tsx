import React from "react";
import {TaskType} from "../models/Task";
import {Task} from "../components/Task"
import "./TasksList.css"



type TaskListProps = {
    data : TaskType[];
}

export const TaskList = ({data}: TaskListProps) => {
    return(
       <div className="list-container">
        {data.map((item : TaskType) => (
          <Task task = {item}/>
        ))}
        </div>
    )
}