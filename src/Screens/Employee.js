import axios from "axios";
import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";

function Employee() {
  const [employee, setEmployee] = useState([]);
  const [filteredData, setfilteredData] = useState([{}]);
  const [Id, setempId] = useState("");
  const [name, setname] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setstatus] = useState("");
  const [chechked, setchecked] = useState();

  function getAll() {
    axios
      .get("https://localhost:44391/api/Employee")
      .then((d) => {
        setEmployee(d.data);
        console.log(d.data);
      })
      .catch((error) => {
        alert("something went wrong");
      });
  }

  function deleteclick(Id) {
    axios
      .delete("https://localhost:44391/api/Employee/" + Id)
      .then((d) => {
        alert("Data deleted");
        getAll();
      })
      .catch((error) => {
        alert("Something went wrong with Apis");
      });
  }
  const Removeclick = (Id) => {
    //  debugger;
    // let index=employee.indexOf(empId)
    // employee.splice(index,1);
    // console.log(index)
    let index = employee.indexOf(Id);
    employee.splice(index, 1);
    setEmployee([...employee]);
  };
  function RenderData() {
    let RowData = [];
    employee?.map((item) => {
      RowData.push(
        <tr>
          <td>{item.name}</td>
          <td>{item.department}</td>
          {item.status === true ? (
            <td>
              <input type="checkbox" checked />
            </td>
          ) : (
            <td>
              <input
                type="checkbox"
                name="status"
                id="checkbox"
                //defaultChecked={item.status===true&&false}
                onClick={() => checkboxValues(item, item.Id)}
              />
            </td>
          )}
          <td>
            <button
              className="btn btn-danger"
              onClick={() => deleteclick(item.Id)}
            >
              Delete
            </button>
            &nbsp;
            <button
              className="btn btn-info"
              onClick={() => Removeclick(item.Id)}
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
    return RowData;
  }
  function Submit(event) {
    event.preventDefault();
    var Employeeobj = {
      Id: 0,
      name,
      department,
      status: false,
    };
    console.log(Employeeobj);
    setEmployee([...employee, Employeeobj]);
    setempId("");
    setname("");
    setDepartment("");
    setstatus("");
  }

  const checkboxValues = (e) => {
    debugger;
    var Clickval = e.status;
    if (Clickval === false) {
      Clickval = true;
      e.status = Clickval;
      setchecked(true);
    } else {
      Clickval = false;
      e.status = false;
      setchecked(false);
    }
  };
  useEffect(() => {
    getAll();
  }, []);
  const Saveclick = () => {
    debugger;
    // const data=employee;
    // const dataToSend = [];
    const dataToSend = employee.filter((x) => x.Id == 0 && x.status == true);
    console.log("dataToSend", dataToSend);
    axios
      .post("https://localhost:44391/api/Employee", dataToSend)
      .then((d) => {
        getAll();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="row m-1">
        <div className="col-9 m-1 bg-info">
          <h2 className="text-white">Table Data</h2>
        </div>
        <div className="col-2 p-2 ">
          <button
            className="btn btn-info"
            data-toggle="modal"
            data-target="#newModal"
          >
            <i className="fas fa-plus">&nbsp;</i>Add Data
          </button>
        </div>
      </div>
      <div className="col-12">
        <table className="table table-stripped table-bordered table-active table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>DepartmentName</th>
              <th>status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{RenderData()}</tbody>
        </table>
        <button className="btn btn-success" onClick={Saveclick}>
          Save
        </button>
      </div>
      {/* save */}
      <form autoComplete="off" className="col-sm-4">
        <div className="modal fade" id="newModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <div className="modal-title">New Employee</div>
                <button className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              {/* body */}
              <div className="modal-body">
                <div className="form-group row">
                  <label for="name" className="col-sm-4">
                    Name
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      onChange={(event) => setname(event.target.value)}
                      value={name}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="department" className="col-sm-4">
                    DepartmentName
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="department"
                      name="department"
                      className="form-control"
                      onChange={(event) => setDepartment(event.target.value)}
                      value={department}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={Submit}
                  >
                    save
                  </button>
                  <button className="btn btn-danger" data-dismiss="modal">
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Edit */}
    </div>
  );
}

export default Employee;
