import React, {useState} from 'react'
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';


const EmployeeLogin = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
        // to denote that the initial values of the email ans password and setValue is the function which will help
        // me to alter those values with the help fo usestate hook
    });
    //lets do it tonight
    //things will just get tougher from here and with absolutely no mercy

    const [error, Seterror] = useState(null);

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3000/employee/employee_login', values)
        .then(result => {
            if( result.data.loginStatus)
            {
                navigate('/employee_detail/' + result.data.id)
            }

            else{
                Seterror(result.data.Error);
            }
            
        })
        .catch(err => console.log(err))
    };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <div className='text-warning'>
                {error && error}
                </div>
                <h2>Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="text" name='text' autoComplete='off' placeholder='Enter Email' 
                        onChange={(e) => setValues({...values, email: e.target.value})} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input type="password" name='password' placeholder='Enter Password' 
                        onChange={(e) => setValues({...values, password: e.target.value})} className='form-control rounded-0' />
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Login</button>
                    <div className='mb-1'>
                        <input type="checkbox" id='tick' name='tick' className='me-2'/>
                        <label htmlFor="password">You agree with our terms & conditions</label>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default EmployeeLogin;


