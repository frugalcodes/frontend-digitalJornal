import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import LoginValidation from "./LoginValidation"
import axios from 'axios'


const LogIn = ({ setUsername }) => {
  const Navigate = useNavigate();
 

  const [errors, setErrors] = useState({})
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const HandleInput = (e) => { 
    setValues(prev => ({...prev, [e.target.name]: e.target.value }))
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    const err = LoginValidation(values);
    setErrors(err);
    console.log(err)
    if (err.username === "" && err.password === "") {
      axios.post('http://localhost:8081/login', values)
        .then(res => {
          if (res.data === "Success") {
            console.log('setting username in localStorage', values.username);
          localStorage.setItem('username', values.username);
          localStorage.setItem("isLoggedIn", "true");
          setUsername(values.username);
          Navigate('/home');
          
          }
          else {
            alert("wrong username or password")
          }
        })
        .catch(err => {
          console.log(err);
          alert('Login failed. Please try again.');
        });
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
      <form className="p-4 bg-light rounded shadow-sm" style={{ width: '400px' }} onSubmit={HandleSubmit} action=''>
        <h2 className="mb-4 text-center">LOG IN</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input onChange={HandleInput} type="text" className="form-control" id="username" placeholder="Enter username" name='username'/>
          {errors.username && <span className='text-danger'> {errors.username} </span>}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password:</label>
          <input onChange={HandleInput} type="password" name="password" className="form-control" id="password" placeholder="Enter password" />
          {errors.password && <span className='text-danger'> {errors.password} </span>}
        </div>
        <button type="submit" className="btn btn-primary mt-4">Submit</button>
        <p className="mt-3 mb-0 text-center">
          If not a member yet, <Link to="/signup">sign up</Link>
        </p>
      </form>
    </div>
  )
}

export default LogIn
