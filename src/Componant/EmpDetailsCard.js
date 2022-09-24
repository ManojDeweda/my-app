
import { useEffect, useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import EmpCard from "./EmpCard";
import { Avatar } from "@mui/material";

function EmpDetailsCard() {
  var config = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };
  const EmployeeState = useLocation();
  const [responseData, setResponseData] = useState([]);
  //const [inputs, setInputs] = useState(EmployeeState.state);
  //let id = "P001";
  //console.log(id);
  console.log(EmployeeState);
  const EmpDetailsCard = () => {
    axios
      .get("http://localhost:9090/employee/details/" + EmployeeState.state, {
        method: "GET",
        mode: "no-cors",
      })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  console.log(responseData);
  useEffect(() => {
    EmpDetailsCard();
  }, []);

  return (
    <>
      <div className="container mt-3">
        
      </div>
      
      <div className="row">
        <div className="col-12 col-md-10 md-2 mx-auto ">
         <div className="card" >
         <h2 className="text-center">EmpDetail Information</h2>
        <div>
            <div align="center" className="mt-2">
              <Avatar
                
                src={require("./m2.jpg")}
                sx={{ width: 300, height: 300 }}
              />
            </div>
            
          </div>
         <div className="row">
          <div className="col-12 col-md-6 md-2">
            <div className="card-body"></div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Employee Number</th>
                  <td>{responseData.empno}</td>
                </tr>
                <tr>
                   <th>Employee Name</th>
                   <td>{responseData.ename}</td>
                </tr>
                  
                <tr>
                  <th>Mobile No.</th>
                  <td>{responseData.mobileNumber}</td>
                </tr>

                <tr>
                  <th>Gender</th>
                  <td>{responseData.gender}</td>
                </tr>

                <tr>    
                  <th>Aadhar No.</th>
                  <td>{responseData.aadhar}</td>
                </tr>

                <tr>

                  <th>DOB</th>
                  <td>{responseData.dob}</td>
                </tr>
                <tr>
                  <th>CITY</th>
                  <td>{responseData.city}</td>
                </tr>

                <tr>
                  <th>pin Code</th>
                  <td>{responseData.pinCode}</td>
                </tr>

                <tr>
                  <th>Address</th>
                  <td>{responseData.address}</td>
                </tr>

                <tr>
                  
                  <td>
                    <Link
                      to="/employee/details/update"
                      state={responseData}
                      className="btn btn-primary"
                    >
                      Update
                    </Link>{" "}
                  </td>
                </tr>
                  
              </thead>

              {/* {responseData.map((val) => ( */}
              <tr key="{val.empno}"></tr>
              {/* ))} */}
            </table>
          </div>
          <div className="col-12 col-md-6 md-2">
            <div className="card-body"></div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Employee Number</th>
                  <td>{responseData.empno}</td>
                </tr>
                <tr>
                   <th>Employee Name</th>
                   <td>{responseData.ename}</td>
                </tr>
                  
                <tr>
                  <th>Mobile No.</th>
                  <td>{responseData.mobileNumber}</td>
                </tr>

                <tr>
                  <th>Gender</th>
                  <td>{responseData.gender}</td>
                </tr>

                <tr>    
                  <th>Aadhar No.</th>
                  <td>{responseData.aadhar}</td>
                </tr>

                <tr>

                  <th>DOB</th>
                  <td>{responseData.dob}</td>
                </tr>
                <tr>
                  <th>CITY</th>
                  <td>{responseData.city}</td>
                </tr>

                <tr>
                  <th>pin Code</th>
                  <td>{responseData.pinCode}</td>
                </tr>

                <tr>
                  <th>Address</th>
                  <td>{responseData.address}</td>
                </tr>

                <tr>
                  
                  <td>
                    <Link
                      to="/employee/details/update"
                      state={responseData}
                      className="btn btn-primary"
                    >
                      Update
                    </Link>{" "}
                  </td>
                </tr>
                  
              </thead>

              {/* {responseData.map((val) => ( */}
              <tr key="{val.empno}"></tr>
              {/* ))} */}
            </table>
          </div>
          </div>
         </div> 
          
      </div>
    </div>
    </>
  );
}

export default EmpDetailsCard;
