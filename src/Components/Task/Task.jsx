import React from "react";
import "./task.css";
import { FaCheck, FaUndo, FaTrash } from "react-icons/fa";

function Task({ id, title, isComplete, updateStatus, onDelete }) {
  return (
    <div className={`m-task ${isComplete ? "done" : ""}`}>
      <h4>{title}</h4>{" "}
      <div className="controls">
        <FaCheck onClick={() => updateStatus(id, true)} />
        <FaUndo onClick={() => updateStatus(id, false)} />
        <FaTrash onClick={() => onDelete(id)} />
      </div>
    </div>
  );
}

export default Task;

Task.defaultProps = {
  title: "NO TITLE",
  isComplete: false,
};
