import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ChangePassword() {
  return (
    <div class="pcoded-content">
      {/* Page-header ends */}
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body ">
          <div className="page-wrapper dashboardHeight">
            {/* Page-body start */}
            <div className="page-body">
              <form action="action_page.php">
                {/* <label for="fname">Old Password</label>
                  <input
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      boxSizing: "border-box",
                      marginTop: "6px",
                      marginBottom: "16px",
                      resize: "vertical",
                    }}
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder=""
                  /> */}
                <TextField
                  id="standard-basic"
                  sx={{ width: "100%", marginBottom: "15px" }}
                  label="Old Password"
                  color="secondary"
                  variant="outlined"
                />

                {/* <label for="lname">New Password</label>
                  <input
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      boxSizing: "border-box",
                      marginTop: "6px",
                      marginBottom: "16px",
                      resize: "vertical",
                    }}
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder=""
                  /> */}
                <TextField
                  id="standard-basic"
                  sx={{ width: "100%", marginBottom: "15px" }}
                  label="New Password"
                  color="secondary"
                  variant="outlined"
                />

                {/* <label for="lname">Confirm Password</label>
                  <input
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      boxSizing: "border-box",
                      marginTop: "6px",
                      marginBottom: "16px",
                      resize: "vertical",
                    }}
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder=""
                  /> */}
                <TextField
                  id="standard-basic"
                  sx={{ width: "100%", marginBottom: "15px" }}
                  label="Confirm Password"
                  color="secondary"
                  variant="outlined"
                />

                {/* <button
                    className="btn btn-sm btn-dark"
                    type="number"
                    min={0}
                    name="tutionFeePaid"
                  >
                    Submit
                  </button> */}
                <Button variant="contained" size="large" color="secondary">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
