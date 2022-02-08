import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function AddManageSupervisoryCommittee() {
  const alertHandler = () => {
    alert("Supervisory Committee Added!");
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
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Registration No :</div>
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
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Registration No."
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Faculty Member :</div>
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
                label="Faculty Member"
                color="secondary"
                variant="outlined"
              />
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
                  Add Supervisory Committee
                </button>
              </div> */}
              <Button variant="contained" size="large" color="secondary">
                Add Supervisory Committee
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
