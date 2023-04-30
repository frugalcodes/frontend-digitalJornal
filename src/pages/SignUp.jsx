import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignUpValidation from './SignUpValidation'
import axios from 'axios'

const SignUp = () => {

  const Navigate = useNavigate()


  const [errors, setErrors] = useState({})

const [values, setValues] = useState({
    username: '',
    password: ''
})

const HandleInput = (e) => { 

  setValues(prev => ({...prev, [e.target.name]:[e.target.value] }))
  
}

const HandleSubmit = (e) => {

    e.preventDefault()
   
    const err = SignUpValidation(values);
    setErrors(err);
    console.log(err)
    if(err.username === "" && err.password === ""){
      
      axios.post('http://localhost:8081/signup', values)
      .then (
        Navigate('/')
      )
      .catch(err => console.log(err))
      
    }

}

  return (

    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
       
    
    <form className="p-4 bg-light rounded shadow-sm" style={{ width: '400px' }}  onSubmit={HandleSubmit} action=''>
        <h2 className="mb-4 text-center">SIGN UP</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input onChange={HandleInput} type="text" className="form-control" id="username" placeholder="Enter username"  name='username'/>
          {errors.username && <span className='text-danger'> {errors.username} </span>}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password:</label>
          <input onChange={HandleInput} type="password" className="form-control" id="password" placeholder="Enter password"  name='password'/>
          {errors.password && <span className='text-danger'> {errors.password} </span>}
        </div>
        <button type="submit" className="btn btn-primary mt-4">Submit</button>
        <p className="mt-3 mb-0 text-center">
          already a member? <Link to="/">Login</Link>
        </p>
    </form>
    </div>
 
  )
}

export default SignUp