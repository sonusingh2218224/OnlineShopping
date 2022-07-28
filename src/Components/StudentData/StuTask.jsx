import React from "react";
import "./stuTask.css";
import { FaCheck, FaUndo, FaTrash } from "react-icons/fa";

function StuTask({ id, name, roll, branch, onDelete }) {
  return (
    <div className="studata">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Roll</th>
            <th scope="col">Branch</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
            <th scope="col">UNDO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{roll}</td>
            <td>{branch}</td>
            <td>
              <FaCheck />
            </td>
            <td>
              <FaTrash onClick={() => onDelete(id)} />
            </td>
            <td>
              <FaUndo />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StuTask;
