import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Admin from "../Pages/Admin";
import AdminLayout from "../Pages/employee/AdminLayout";
import EmployeeList from "../Pages/employee/EmployeeList";
import EmployeeAddForm from "../Pages/employee/EmployeeAddForm";
import EmployeeUpdateForm from "../Pages/employee/EmployeeUpdateForm";
import EmployeeUploadForm from "../Pages/employee/EmployeeUploadForm";

import EmpDetailList from "../Pages/employee/details/EmpDetailList";
import EmpDetailAddForm from "../Pages/employee/details/EmpDetailAddForm";
import EmpDetailUpdateForm from "../Pages/employee/details/EmpDetailUpdateForm";
import EmpDetailsCard from "../Componant/EmpDetailsCard";
import EmpCard from "../Componant/EmpCard";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />

      {/* <Route path="/" element={<Welcome />}></Route> */}
      <Route path="/employee/" element={<AdminLayout />}>
        <Route index element={<EmpCard />}></Route>
        <Route path="list" element={<EmpCard />}></Route>
        <Route path="add" element={<EmployeeAddForm />}></Route>
        <Route path="update" element={<EmployeeUpdateForm />}></Route>
        <Route path="upload" element={<EmployeeUploadForm />}></Route>

        <Route
          path="/employee/details/card"
          element={<EmpDetailsCard />}
        ></Route>
        <Route
          path="/employee/details/add"
          element={<EmpDetailAddForm />}
        ></Route>
        <Route
          path="/employee/details/update"
          element={<EmpDetailUpdateForm />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default Routers;
