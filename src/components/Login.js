import React, { useEffect, useState } from 'react';
import { Table,Button } from 'react-bootstrap';
import image from "../images/Photo/bgimage8.jpg";

function Login() {

    const [employee,setEmployee]=useState([]);
    const [customers,setCustomer]=useState([]);
    
    useEffect(()=>{
        async function fetchEmployeeList(){
            try{
                const requestUrl='https://panacea-backend.herokuapp.com/employee';
                const response=await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log(responseJSON);
                setEmployee(responseJSON);
            }catch{

            }
        }
        fetchEmployeeList();
    },[]);

    useEffect(()=>{
        async function fetchCustomerList(){
            try{
                const requestUrl='https://panacea-backend.herokuapp.com/customer';
                const response= await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log(responseJSON);
                setCustomer(responseJSON);
            }catch{

            }
        }
        fetchCustomerList();
    },[]);

    function deleteCustomers(id){
        fetch(`https://panacea-backend.herokuapp.com/customer/${id}`,{
            method:"DELETE"
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
            })
        })
        window.location.reload();
    }

    function deleteEmployee(id){
        fetch(`https://panacea-backend.herokuapp.com/employee/${id}`,{
            method:"DELETE"
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
            })
        })
        window.location.reload();
    }

    function editCustomer(id){
        alert("It Will take time...");
    }
    return (
        
        <div style={{paddingTop:'5%'}}>
             <h5 style={{color:"darkblue"}}>CUSTOMER DETAILS</h5>
            <div  style={{
            backgroundImage: `url(${image})`,
            height: "800px", backgroundRepeat: "no-repeat", backgroundSize:"100%"
          }}>
                <Table style={{border:"2px solid black"}}>
                <thead class="thead table-dark">
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Customer Email Id</th>
                        <th>Customer Contact Number</th>
                        <th>Customer Messages</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    <tbody>
                    {customers.map(emp=>
                    <tr key={emp.CustomerId}>
                        <td>{emp.CustomerId}</td>
                        <td>{emp.CustomerName}</td>
                        <td>{emp.CustomerEmail}</td>
                        <td>{emp.CustomerPhoneNo}</td>
                        <td>{emp.CustomerMessage}</td>
                        <td>
                        <Button variant="danger" onClick={()=>deleteCustomers(emp.CustomerId)}>Remove</Button>{' '}
                        </td>
                    </tr>
                    )}
                </tbody>
                </Table>
            </div>
            <br/>
            <h5 style={{color:"darkblue"}}>EMPLOYEE DETAILS</h5>
           <div style={{
            backgroundImage: `url(${image})`,
            height: "800px", backgroundRepeat: "no-repeat", backgroundSize:"100%"
          }}>
           <Table style={{border:"2px solid black"}}>
                <thead class="thead table-dark">
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Employee Email Id</th>
                        <th>Employee Contact Number</th>
                        <th>Employee Password</th>
                        <th>Employee Date of Joining</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {employee.map(emp=>
                    <tr key={emp.EmployeeId}>
                        <td>{emp.EmployeeId}</td>
                        <td>{emp.EmployeeName}</td>
                        <td>{emp.EmployeeEmail}</td>
                        <td>{emp.EmployeePhoneNo}</td>
                        <td>{emp.EmployeePassword}</td>
                        <td>{emp.DateofJoining}</td>
                        <td>
                        <Button variant="info">Edit</Button>{' '} &nbsp;
                        <Button variant="danger" onClick={()=>deleteEmployee(emp.EmployeeId)}>Remove</Button>{' '}
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
            <Button variant="success">Add New Employee</Button>{' '}
           </div>
        </div>
    );
}

export default Login;

