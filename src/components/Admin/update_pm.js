import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../pages/admin/Navbar";
import Sidebar from "../../pages/admin/Sidebar";

const App = (props) => {
  const { id } = useParams();
  const [pm, setPm] = useState([]);

  const [state, setState] = useState({
    Panel_Member_Name: "",
    Panel_Member_Email: "",
    Group_Name: "",
    Group_email: ""
  });

  //destructure values from state
  const {  Panel_Member_Name, Panel_Member_Email, Group_Name,Group_email } = state;

  function handleChange(name) {
    return function (event) {
      setState({ ...state, [name]: event.target.value });
    };
  }

  const fetchStaff = () => {
    console.log("WORKING");
    axios
      .get(`http://localhost:8000/admin/show`)
      .then((response) => {
        // console.log("All", response);
        setStaff(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchStaff();
    axios
      .get(`http://localhost:8000/admin/edit-pm/${id}`)
      .then((response) => {
        console.log("user", response);
        console.log("data", response.data.Panel_Member_Name);
        const { Panel_Member_Name, Panel_Member_Email, Group_Name,Group_email } = response.data;
        setState({
          ...state,
          Panel_Member_Name,
          Panel_Member_Email,
          Group_Name,
          Group_email,

        });
      })
      .catch((error) => console.log("Error Loading Update Student: " + error));
  }, []);

  function handleChange(name) {
    return function (event) {
      setState({ ...state, [name]: event.target.value });
    };
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table({
      Panel_Member_Name,
      Panel_Member_Email,
      Group_Name,
      Group_email,
    });
    axios
      .put(`http://localhost:8000/admin/update-pm/${id}`, {
        Panel_Member_Name,
        Panel_Member_Email,
        Group_Name,
        Group_email,
      })
      .then((response) => {
        console.log(response);
        const { Panel_Member_Name, Panel_Member_Email, Group_Name, Group_email } = response.data;

        //empty state
        setState({
          ...state,
          Panel_Member_Name,
          Panel_Member_Email,
          Group_Name,
          Group_email,
        });

        Swal.fire(`Submission Updated`, "Click Ok to continue", "success");
        setTimeout(() => {
          window.location.href = "/admin/pmlist";
        }, 1000);
      })
      .catch((error) => {
        console.log(error.Response);
        // alert(error.response.data.error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.error}`,
          footer: "Please try again",
        });
      });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="card">
        <div className="card-body p-lg-5" style={{ marginLeft: "80px" }}>
          <h3 className="mb-4">Edit Panel Member details</h3>
          <p className="text-muted text-sm mb-5">
            Please fill Panel Member detail to update list.
          </p>
          <form action="#">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="fName"
                    placeholder="Enter First Name"
                    onChange={handleChange("Panel_Member_Name")}
                    value={Panel_Member_Name}
                    pattern="[A-Za-z]+"
                    title="Characters can only be A-Z and a-z."
                    required
                  />
                  <label for="Submission_Topic">Panel Member Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="mName"
                    placeholder="Enter Last Name"
                    onChange={handleChange("Panel_Member_Email")}
                    value={Panel_Member_Email}
                    pattern="[A-Za-z]+"
                    title="Characters can only be A-Z and a-z."
                    required
                  />
                  <label for="Deadline">Panel Member Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="lName"
                    placeholder="Enter Last Name"
                    onChange={handleChange("Group_Name")}
                    value={Group_Name}
                    pattern="[A-Za-z]+"
                    title="Characters can only be A-Z and a-z."
                    required
                  />
                  <label for="Description">Group Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="tName"
                    placeholder="Enter Last Name"
                    onChange={handleChange("Group_email")}
                    value={Group_email}
                    pattern="[A-Za-z]+"
                    title="Characters can only be A-Z and a-z."
                    required
                  />
                  <label for="Description">Group Leader Email</label>
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary float-end"
                    id="regidter"
                    type="button"
                    name="registerSubmit"
                    onClick={handleSubmit}
                    style={{}}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <br />
              <br />
              <br />
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
