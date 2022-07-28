import axios from "axios";
import React, { useState, useEffect } from "react";

const UseEffectApi = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setPerson(res.data);
    });
  }, []);

  return (
    <div className="container w-100 h-1--">
      <div>
        <table className="table">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>img</th>
            <th>thumb</th>
          </tr>
          <tbody>
            {person?.map((e) => (
              <tr>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>
                  <img
                    style={{ width: "100px", heigh: "100px" }}
                    src={e.url}
                    alt=""
                  />
                </td>
                <td>
                  <img
                    style={{ width: "100px", heigh: "100px" }}
                    src={e.thumbnailUrl}
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UseEffectApi;
