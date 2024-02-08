import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeDetail = () => {
    const [employee, setEmployee] = useState([]);
    const {id} = useParams(); 
    // making an instance of the param thing

    // a function ehn passed as a parameter becomes a call back function, in lamen language 
    
    useEffect(() =>{
      axios.get('http://localhost:3000/employee/detail/' + id)
      .then( result => {
        setEmployee(result.data[0]);
      })
      .catch(err => console.log(err));
    }, []);

    const anvigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleLogout = () =>{
        axios.get('http://localhost:3000/employee/logout')
            .then(result => {
                if (result.data.Status) {
                    localStorage.removeItem("valid")
                    anvigate('/employee_login')
                }
            })
            .catch(err =>console.log(err));
    }


  return (
    <div>
    <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
    <img src={`http://localhost:3000/images/`+ employee.image} className='h-25 w-25 rounded-circle'/>
    <div className='d-flex align-items-center flex-column mt-5'>
        <h3>Name: {employee.name}</h3>
        <h3>Email: {employee.email}</h3>
        <h3>Salary: ${employee.salary}</h3>
    </div>
    <div>
        <button className='btn btn-primary me-2'>Edit</button>
        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
    </div>
</div>
    </div>
  )
}

export default EmployeeDetail;
