import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function AddProgressReport() {
  const alertHandler = () => {
    alert("Progress Report Added!");
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
                  <div className="col-md-2 col-sm-4">Student :</div>
                  <input
                    className="form-control form-control-sm  col-md-10 col-sm-8"
                    type="text"
                    min={0}
                    name="tutionFeePaid"
                    // value={tutionFeePaid}
                    // onChange={this.changeHandler}
                  />
                </div>
              </div> */}

              <TextField
                id="standard-basic"
                color="secondary"
                label="Student"
                variant="outlined"
                sx={{ width: "100%", marginBottom: "15px" }}
              />

              {/*               <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Session :</div>
                  <input
                    className="form-control form-control-sm  col-md-10 col-sm-8"
                    type="number"
                    min={0}
                    name="tutionFeePaid"
                    // value={tutionFeePaid}
                    // onChange={this.changeHandler}
                  />
                </div>
              </div> */}
              <TextField
                id="standard-basic"
                color="secondary"
                label="Session"
                variant="outlined"
                sx={{ width: "100%", marginBottom: "15px" }}
              />

              {/*               <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Status :</div>
                  <select className="form-control form-control-sm  col-md-10 col-sm-8">
                    <option value="Sat>Satisfactory</option>
                    <option value="Unsat>Unsatisfactory</option>
                    <option va>Good</option>
                    <option value=">Excellent</option>
                    <option valu>Absent</option>
                  </select>
                </div>
              </div> */}
              <Box>
                <FormControl
                  color="secondary"
                  fullWidth
                  sx={{ marginBottom: "15px" }}
                >
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //v
                    label="Age"
                    //onChange={handleChange}
                  >
                    <MenuItem value="Satisfactory">Satisfactory</MenuItem>
                    <MenuItem value="Unsatisfactory">Unsatisfactory</MenuItem>
                    <MenuItem value="Good">Good</MenuItem>
                    <MenuItem value="Excellent">Excellent</MenuItem>
                    <MenuItem value="Absent">Absent</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/*               <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Comment :</div>

                  <textarea className="form-control col-md-10 col-sm-8"></textarea>
                </div>
              </div>
 */}
              <TextField
                color="secondary"
                fullWidth
                sx={{ marginBottom: "15px" }}
                id="outlined-multiline-flexible"
                label="Comment"
                multiline
                maxRows={8}
              />
              <div className="col-lg-12 mt-3 text-center">
                {/*                 <button
                  className="btn btn-sm btn-dark"
                  type="number"
                  min={0}
                  name="tutionFeePaid"
                  // value={tutionFeePaid}
                  // onChange={this.changeHandler}
                  onClick={alertHandler}
                >
                  Add Progress Report
                </button> */}
                <Button variant="contained" color="secondary" size="large">
                  Add Progress Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
