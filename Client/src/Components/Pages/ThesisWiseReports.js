import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

import { thesisWiseData, thesisWiseHeader } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

export default function ThesisWiseReports() {
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
                  <div className="col-md-2 col-sm-4">Thesis Status :</div>
                  <select className="form-control form-control-sm  col-md-10 col-sm-8">
                    <option selected="selected" value="5">
                      -
                    </option>
                    <option value="1">N/A</option>
                    <option value="2">Accepted</option>
                    <option value="3">Not Accepted</option>
                    <option value="4">Review</option>
                    <option value="5">Not Accepted)</option>
                    <option value="6">Not Accepted</option>
                  </select>
                </div>
              </div> */}
              <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
                <FormControl fullWidth color="secondary">
                  <InputLabel id="demo-simple-select-label">
                    Thesis Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //value={age}
                    label="Thesis Status"
                    //onChange={handleChange}
                  >
                    <MenuItem selected="selected" value="5">
                      -
                    </MenuItem>
                    <MenuItem value="1">N/A</MenuItem>
                    <MenuItem value="2">Accepted</MenuItem>
                    <MenuItem value="3">Not Accepted</MenuItem>
                    <MenuItem value="4">Review</MenuItem>
                    <MenuItem value="5">Not Accepted</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <div className="col-md-2 col-sm-4">Students :</div>
              <div className="col-lg-12 mt-2">
                <DataTable header={thesisWiseHeader} data={thesisWiseData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
