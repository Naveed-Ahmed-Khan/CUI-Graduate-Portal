import { TextField, Button } from "@mui/material";

import React from "react";

export default function SynopsisSubmission() {
  const alertHandler = () => {
    alert("Synopsis Submited!");
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
              <TextField
                id="standard-basic"
                sx={{
                  width: "100%",
                  marginBottom: "15px",
                }}
                label="Synopsis Title"
                color="secondary"
                variant="outlined"
              />

              {/* <div className="col-lg-12 mt-2">
                <div className="row ">
                  <div className="col-md-2 col-sm-4 ">Synopsis Title :</div>
                  <input
                    className="form-control form-control-sm  col-md-10 col-sm-8"
                    type="text"
                    min={0}
                    name="tutionFeePaid"
                    // value={saveModal.tutionFeePaid}
                    // onChange={this.changeHandler}
                  />
                </div> 
              </div>*/}

              <div className="mt-4">Synopsis Document:</div>
              <input
                className=" form-control-sm  col-md-10 col-sm-8"
                type="file"
                min={0}
                name="tutionFeePaid"
                // value={saveModal.tutionFeePaid}
                // onChange={this.changeHandler}
              />
              <div className="col-md-2 col-sm-4 mt-4">
                Synopsis Presentation :
              </div>
              <input
                className=" form-control-sm  col-md-10 col-sm-8"
                type="file"
                min={0}
                name="tutionFeePaid"
                // value={saveModal.tutionFeePaid}
                // onChange={this.changeHandler}
              />
              <Button variant="contained" size="large" color="secondary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
