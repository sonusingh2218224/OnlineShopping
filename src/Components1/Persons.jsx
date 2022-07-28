import axios from "axios";
import React, { useEffect, useState } from "react";

function Persons() {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios("https://622c30d7087e0e041e0544b4.mockapi.io/students").then(
      (res) => {
        setPerson(res.data);
      }
    );
  }, []);

  return (
    <div>
      <table className="table">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>address</th>
          <th>age</th>
        </tr>
        <tbody>
          {person?.map((e) => (
            <tr>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.address}</td>
              <td>{e.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Persons;
