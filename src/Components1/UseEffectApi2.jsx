import axios from "axios";
import React, { useState, useEffect } from "react";
import "./UseEffectApi.css";

function UseEffectApi2() {
  const [user, setUser] = useState(null);
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    axios("https://622c30d7087e0e041e0544b4.mockapi.io/Shopping").then(
      (res) => {
        setUser(res.data);
      }
    );
  }, []);

  // const eitherSort = (Shopping = []) => {
  //   const sorter = (a, b) => {
  //     return +a.price - +b.price;
  //   };
  //   Shopping.sort(sorter);
  // };
  // eitherSort(Shopping);
  // console.log(Shopping);

  return (
    <>
      <table className="table table-bordered">
        <thead style={{ color: "red" }}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">email</th>
            <th className="heading" colspan="4" style={{ textAlign: "center" }}>
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          {user?.map((e) => {
            return (
              <tr style={{ color: "blue" }}>
                <th scope="row">{e.id}</th>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td>{e.color}</td>

                {/* <td>{e.address.street}</td>
                <td>{e.address.city}</td>
                <td>{e.address.suite}</td>
                <td>{e.address.zipcode}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </>
  );
}

export default UseEffectApi2;
