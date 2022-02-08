import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function ThesisSubmission() {
  const alertHandler = () => {
    alert("Thesis Submited!");
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
              <div className="col-lg-12 mt-2">
                <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
                  <FormControl fullWidth color="secondary">
                    <InputLabel id="demo-simple-select-label">
                      Registration No.
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //value={Program}
                      label="Regestration No."
                      //onChange={handleChange}
                    >
                      <MenuItem value={12}>SP21-PCS-005</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  id="standard-basic"
                  sx={{ width: "100%", marginBottom: "15px" }}
                  label="Thesis Title"
                  color="secondary"
                  variant="outlined"
                />
              </div>
              <div className="col-md-2 col-sm-4 mt-4">
                Synopsis Approval Notification :
              </div>
              <input
                className=" form-control-sm  col-md-10 col-sm-8"
                type="file"
                min={0}
                name="tutionFeePaid"
                // value={saveModal.tutionFeePaid}
                // onChange={this.changeHandler}
              />
              <div className="col-md-2 col-sm-4 mt-4">
                Thesis Presentation :
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
