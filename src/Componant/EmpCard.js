import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
function EmpCard() {
  const [responseData, setResponseData] = useState([]);
  const EmployeeState = useLocation();

  const [inputs, setInputs] = useState(EmployeeState.state);
  const EmployeeList = () => {
    axios
      .get("http://localhost:9090/employee")
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    EmployeeList();
  }, []);

  const EmployeeDelete = (evnt) => {
    axios
      .delete("http://localhost:9090/employee/" + evnt.target.value)
      .then((response) => {
        EmployeeList();
      })
      .catch((error) => {
        alert(error);
      });
  };

  //=============================================================
  return (
    <>
      <div className="row" align="center" mt-5 mb-5>
        <div className="col-12 col-md-4 mb-5 mt-5  text-Align-center">
          <input type="text" placeholder="Emp No." name="empno" />
          <button type="button" className="btn bg-primary mx-1">
            {" "}
            search{" "}
          </button>
          {""}
        </div>

        <div className="col-12 col-md-4 mb-1 mt-5" align="center">
          <select className="btn bg-primary mx-4" forname="deptno">
            <option value="P" selected>
              Department
            </option>
            <option value="P">Production</option>
            <option value="F">Finnace</option>
            <option value="R">R</option>
            <option value="S">Sale</option>
          </select>

          {/* <button type="button" className="btn bg-primary mx-4">
            {" "}
            Department{" "}
          </button>
          {""} */}
        </div>
        <div className="col-12 col-md-4 mb-5 mt-5" align="center">
          <Link to="/Employee/add" className="btn bg-primary mx-2">
            Add Employee
          </Link>{" "}
        </div>
      </div>

      <div className="row justify-content-center" style={{ height: "150px" }}>
        <div
          className="col-12 col-md-0 h3 "
          style={{ fontFamily: "cursive", textAlign: "center" }}
        >
          Employee list
        </div>
      </div>

      <div className="row">
        {responseData.map((item, index) => (
          <div key={index} className="col-12 col-md-4 md-2">
            <div className="card my-3">
              <div align="center" className="mt-2">
                {/* <img
                  src={require("./manoj.jpg")}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  alt=""
                /> */}
                <Avatar
                  src={require("./m2.jpg")}
                  sx={{ width: 250, height: 250 }}
                />
              </div>
              <div className="card-body mb-2" align="center">
                <Link
                  to="/employee/details/card"
                  id={item.empno}
                  value={item.empno}
                  state={item}
                  // className="btn bg-primary"
                >
                  <h3>{item.ename}</h3>
                </Link>{" "}
                <table className="table mt-2">
                  <thead>
                    <tr>
                      <th>EmployeeNumber</th>
                      <td>{item.empno}</td>
                    </tr>
                    <tr>
                      <th>EMAIL</th>
                      <td>{item.email}</td>
                    </tr>
                    {/* <tr>
                      <th>HIREDATE</th>
                      <td>{item.hiredate}</td>
                    </tr> */}
                    <tr>
                      <th>DEPT</th>
                      <td>{item.deptno}</td>
                    </tr>
                    {/* <tr>
                      <th>JOB</th>
                      <td>{item.job}</td>
                    </tr>
                    <tr>
                      <th>CITY</th>
                      <td>{item.city}</td>
                    </tr> */}
                  </thead>
                </table>
                <Link
                  to="/employee/update"
                  state={item}
                  className="btn bg-primary"
                >
                  Update
                </Link>{" "}
                <button
                  type="button"
                  id={item.empno}
                  value={item.empno}
                  className="btn bg-danger"
                  onClick={EmployeeDelete}
                >
                  X
                </button>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EmpCard;
