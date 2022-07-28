import React, { useState } from "react";

const LoginFormNew = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="d-flex mx-auto justify-content-center mt-5 "
      style={{
        backgroundColor: "grey",
        width: "200px",
        fontSize: "20px",
        color: "white",
        padding: "20px",
      }}
    >
      <form action="">
        <div className="form-group  ">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            autoComplete="off"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3 mx-auto d-flex">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginFormNew;
