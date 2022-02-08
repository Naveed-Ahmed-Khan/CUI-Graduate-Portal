import React from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

export default function AddSession() {
  const alertHandler = () => {
    alert("Session Added!");
  };
  return (
    <div class="pcoded-content">
      {/* Page-header ends */}
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body ">
          <div className="page-wrapper dashboardHeight">
            {/* Page-body start */}
            <div className="page-body">
              {/*               <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Session Title :</div>
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
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Session Title"
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
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
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Description"
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Status :</div>
                  <input
                    className="col-md-10 col-sm-8"
                    type="checkbox"
                    min={0}
                    name="tutionFeePaid"
                    // value={saveModal.tutionFeePaid}
                    // onChange={this.changeHandler}
                  />
                </div>
              </div> */}
              <FormGroup sx={{ marginBottom: "15px" }}>
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label="Status"
                />
              </FormGroup>
              {/* <div className="col-lg-12 mt-3 text-center">
                <button
                  className="btn btn-sm btn-dark"
                  type="number"
                  min={0}
                  name="tutionFeePaid"
                  // value={saveModal.tutionFeePaid}
                  // onChange={this.changeHandler}
                  onClick={alertHandler}
                >
                  Add Session
                </button>
              </div> */}
              <Button variant="contained" size="large" color="secondary">
                Add Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
