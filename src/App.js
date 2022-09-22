import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";

import AdminLayout from "./employee/AdminLayout";
import EmployeeList from "./employee/EmployeeList";
import EmployeeAddForm from "./employee/EmployeeAddForm";
import EmployeeUpdateForm from "./employee/EmployeeUpdateForm";
import EmployeeUploadForm from "./employee/EmployeeUploadForm";

import EmpDetailList from "./employee/details/EmpDetailList";
import EmpDetailAddForm from "./employee/details/EmpDetailAddForm";
import EmpDetailUpdateForm from "./employee/details/EmpDetailUpdateForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/employee/" element={<AdminLayout />}>
            <Route index element={<EmployeeList />}></Route>
            <Route path="list" element={<EmployeeList />}></Route>
            <Route path="add" element={<EmployeeAddForm />}></Route>
            <Route path="update" element={<EmployeeUpdateForm />}></Route>
            <Route path="upload" element={<EmployeeUploadForm />}></Route>

            <Route
              path="/employee/details/list"
              element={<EmpDetailList />}
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
      </BrowserRouter>
    </div>
  );
}
export default App;
