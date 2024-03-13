import React, { useState } from "react";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { fullname, email, password, confirmPassword } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitHandler = e => {
    e.preventDefault(); // we use to delete the privious actions
    axios.post('https://sample-project-e7636-default-rtdb.firebaseio.com/register.json', data)
      .then(() => alert("Submit successfully"))
      .catch(error => console.error("Error submitting form:", error)); // we use identify the error
  }

  return (
    <div>
      <center>
        <form autoComplete="off" onSubmit={submitHandler}>
          <input type="text" name="fullname" value={fullname} onChange={changeHandler} placeholder="Full Name" /><br />
          <input type="email" name="email" value={email} onChange={changeHandler} placeholder="Email" /><br />
          <input type="password" name="password" value={password} onChange={changeHandler} placeholder="Password" /><br />
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} placeholder="Confirm Password" /><br />
          <button type="submit">Submit</button><br />
        </form>
      </center>
    </div>
  );
}

export default App;
