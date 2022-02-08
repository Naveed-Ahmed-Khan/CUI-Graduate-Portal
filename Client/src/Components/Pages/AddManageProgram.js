import React from "react";
import TextField from "@mui/material/TextField";

import { left } from "@popperjs/core";
import { margin } from "@mui/system";
import Button from "@mui/material/Button";
import axios from "axios";
import { Box } from "@mui/system";

export default function AddManageProgram() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post("", {
      /* email: userEmail,
      password: userPassword, */
    });

    // eslint-disable-next-line no-console

    console.log({
      regNumber: data.get("RegistrationNumber"),
      password: data.get("Name"),
      fathersName: data.get("Father'sName"),
      email: data.get("EmailAddress"),
      currentSemester: data.get("CurrentSemester"),
      courseCompletion: data.get("CourseWorkCompletion"),
      coursesPassed: data.get("CoursesPassed"),
      supervisor: data.get("Supervisor"),
      coSupervisor: data.get("Co-Supervisor"),
      synopsisTitle: data.get("Synopsis/ThesisTitle"),
      synopsisTrack: data.get("SynopsisTrack"),
      date: data.get("Date"),
    });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Program"
          variant="outlined"
        />

        {/*               <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Long Name :</div>
                  <input
                    className="form-control form-control-sm  col-md-10 col-sm-8"
                    type="text"
                    min={0}
                    name="tutionFeePaid"
                    // value={saveModal.tutionFeePaid}
                    // onChange={this.changeHandler}
                  />
                </div>
              </div> */}
        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Long Name"
          variant="outlined"
        />

        {/*               <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Description :</div>
                  <input
                    className="form-control form-control-sm  col-md-10 col-sm-8"
                    type="text"
                    min={0}
                    name="tutionFeePaid"
                    // value={saveModal.tutionFeePaid}
                    // onChange={this.changeHandler}
                  />
                </div>
              </div> */}
        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Min Semesters"
          variant="outlined"
        />

        {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Min Semesters :</div>
                  <input
                    className="form-control form-control-sm  col-md-10 col-sm-8"
                    type="number"
                    min={0}
                    name="tutionFeePaid"
                    // value={saveModal.tutionFeePaid}
                    // onChange={this.changeHandler}
                  />
                </div>
              </div> */}

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginBottom: "15px" }}
          label="Min Semesters"
          variant="outlined"
        />

        {/*               <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Max Semesters :</div>
                  <input
                    className="form-control form-control-sm  col-md-10 col-sm-8"
                    type="number"
                    min={0}
                    name="tutionFeePaid"
                    // value={saveModal.tutionFeePaid}
                    // onChange={this.changeHandler}
                  />
                </div>
              </div> */}

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginLeft: "4%", marginBottom: "15px" }}
          label="Max Semesters"
          variant="outlined"
        />

        {/*               <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Duration (Years) :</div>
                  <input
                    className="form-control form-control-sm  col-md-10 col-sm-8"
                    type="number"
                    min={0}
                    name="tutionFeePaid"
                    // value={saveModal.tutionFeePaid}
                    // onChange={this.changeHandler}
                  />
                </div>
              </div> */}

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginBottom: "15px" }}
          label="Duration (Years)"
          variant="outlined"
        />

        {/*               <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Credits :</div>
                  <input
                    className="form-control form-control-sm  col-md-10 col-sm-8"
                    type="number"
                    min={0}
                    name="tutionFeePaid"
                    // value={saveModal.tutionFeePaid}
                    // onChange={this.changeHandler}
                  />
                </div>
              </div> */}
        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginLeft: "4%", marginBottom: "15px" }}
          label="Credits"
          variant="outlined"
        />
        {/*               <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Enable :</div>
                  <input
                    className="form-control form-control-sm  col-md-10 col-sm-8"
                    type="text"
                    min={0}
                    name="tutionFeePaid"
                    // value={saveModal.tutionFeePaid}
                    // onChange={this.changeHandler}
                  />
                </div>
              </div> */}

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Min Semesters"
          variant="outlined"
        />

        <div className="col-lg-12 mt-3 text-center">
          <Button variant="contained" color="secondary" size="large">
            Add Program
          </Button>
          {/*                 <button
                  className="btn btn-sm btn-dark"
                  type="number"
                  min={0}
                  name="tutionFeePaid"
                  // value={saveModal.tutionFeePaid}
                  // onChange={this.changeHandler}
                  onClick={alertHandler}
                >
                  Add Program
                </button> */}
        </div>
      </Box>
    </>
  );
}
