import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { studentData, studentHeader } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

export default function SuperivorWiseReports() {
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
                <div className="row">
                  {/* <div className="col-md-2 col-sm-4">Supervisor :</div>
                  <select className="form-control form-control-sm  col-md-10 col-sm-8">
                    <option selected="selected" value="237">
                      -
                    </option>
                    <option value="239">Dr. Abid Khan</option>
                    <option value="4209">Dr. Adeel Anjum</option>
                    <option value="25565">Dr. Adnan Akhunzada</option>
                    <option value="2281">Dr. Ahmad R. Shahid</option>
                    <option value="4208">Dr. Aimal Tariq Rextin</option>
                    <option value="6925">Dr. Amir Hanif Dar</option>
                    <option value="3014">Dr. Ashfaq Hussain Farooqi</option>
                    <option value="663">Dr. Assad Abbas</option>
                    <option value="3012">Dr. Basit Raza</option>
                    <option value="2089">Dr. Farhana Jabeen</option>
                    <option value="3343">Dr. Ghufran Ahmed</option>
                    <option value="252">Dr. Hasan Ali Khattak</option>
                    <option value="2187">Dr. Iftikhar Azim Niaz</option>
                    <option value="253">Dr. Inayat-ur-Rehman</option>
                    <option value="284">Dr. Javed Iqbal</option>
                    <option value="654">Dr. Majid Iqbal Khan</option>
                    <option value="3344">Dr. Malik Ahmad Kamran</option>
                    <option value="633">Dr. Mansoor Ahmed</option>
                    <option value="264">Dr. Mariam Akbar</option>
                    <option value="4243">Dr. Masoom Alam</option>
                    <option value="2678">Dr. Mubeen Ghafoor</option>
                    <option value="282">Dr. Muhammad Asim Noor</option>
                    <option value="263">Dr. Muhammad Imran</option>
                    <option value="281">
                      Dr. Muhammad Manzoor ilahi Tamimy
                    </option>
                    <option value="19074">Dr. Muhammad Waqar</option>
                    <option value="3356">Dr. Munam Ali Shah</option>
                    <option value="1211">Dr. Nadeem Javaid</option>
                    <option value="659">Dr. Saif ur Rehman Khan</option>
                    <option value="280">Dr. Saif Ur Rehman Malik</option>
                    <option value="10430">Dr. Sajjad A. Madani</option>
                    <option value="272">Dr. Shahid Hussain</option>
                    <option value="19178">Dr. Sheneela Naz</option>
                    <option value="240">Dr. Syed Sohaib Ali</option>
                    <option value="245">Dr. Tahir Mustafa Madni</option>
                    <option value="784">Dr. Tehseen Zia</option>
                    <option value="19205">Dr. Usman Yaseen</option>
                    <option value="273">Dr. Uzair Iqbal</option>
                    <option value="3656">Dr. Zobia Rehman</option>
                    <option value="4564">Prof. Dr. Sohail Asghar</option>
                  </select>
                  <div className="col-md-2 col-sm-4">Programs :</div>
                  <select className="form-control form-control-sm  col-md-10 col-sm-8">
                    <option selected="selected" value="1">
                      -
                    </option>
                    <option value="1">MS (CS)</option>
                    <option value="2">MS (SE)</option>
                    <option value="3">PhD (CS)</option>
                  </select> */}

                  <Box>
                    <FormControl
                      color="secondary"
                      fullWidth
                      sx={{ marginBottom: "15px" }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Supervisor
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Supervisor"
                      >
                        <MenuItem selected="selected" value="237">
                          -
                        </MenuItem>
                        <MenuItem value="239">Dr. Abid Khan</MenuItem>
                        <MenuItem value="4209">Dr. Adeel Anjum</MenuItem>
                        <MenuItem value="25565">Dr. Adnan Akhunzada</MenuItem>
                        <MenuItem value="2281">Dr. Ahmad R. Shahid</MenuItem>
                        <MenuItem value="4208">Dr. Aimal Tariq Rextin</MenuItem>
                        <MenuItem value="6925">Dr. Amir Hanif Dar</MenuItem>
                        <MenuItem value="3014">
                          Dr. Ashfaq Hussain Farooqi
                        </MenuItem>
                        <MenuItem value="663">Dr. Assad Abbas</MenuItem>
                        <MenuItem value="3012">Dr. Basit Raza</MenuItem>
                        <MenuItem value="2089">Dr. Farhana Jabeen</MenuItem>
                        <MenuItem value="3343">Dr. Ghufran Ahmed</MenuItem>
                        <MenuItem value="252">Dr. Hasan Ali Khattak</MenuItem>
                        <MenuItem value="2187">Dr. Iftikhar Azim Niaz</MenuItem>
                        <MenuItem value="253">Dr. Inayat-ur-Rehman</MenuItem>
                        <MenuItem value="284">Dr. Javed Iqbal</MenuItem>
                        <MenuItem value="654">Dr. Majid Iqbal Khan</MenuItem>
                        <MenuItem value="3344">Dr. Malik Ahmad Kamran</MenuItem>
                        <MenuItem value="633">Dr. Mansoor Ahmed</MenuItem>
                        <MenuItem value="264">Dr. Mariam Akbar</MenuItem>
                        <MenuItem value="4243">Dr. Masoom Alam</MenuItem>
                        <MenuItem value="2678">Dr. Mubeen Ghafoor</MenuItem>
                        <MenuItem value="282">Dr. Muhammad Asim Noor</MenuItem>
                        <MenuItem value="263">Dr. Muhammad Imran</MenuItem>
                        <MenuItem value="281">
                          Dr. Muhammad Manzoor ilahi Tamimy
                        </MenuItem>
                        <MenuItem value="19074">Dr. Muhammad Waqar</MenuItem>
                        <MenuItem value="3356">Dr. Munam Ali Shah</MenuItem>
                        <MenuItem value="1211">Dr. Nadeem Javaid</MenuItem>
                        <MenuItem value="659">Dr. Saif ur Rehman Khan</MenuItem>
                        <MenuItem value="280">
                          Dr. Saif Ur Rehman Malik
                        </MenuItem>
                        <MenuItem value="10430">Dr. Sajjad A. Madani</MenuItem>
                        <MenuItem value="272">Dr. Shahid Hussain</MenuItem>
                        <MenuItem value="19178">Dr. Sheneela Naz</MenuItem>
                        <MenuItem value="240">Dr. Syed Sohaib Ali</MenuItem>
                        <MenuItem value="245">Dr. Tahir Mustafa Madni</MenuItem>
                        <MenuItem value="784">Dr. Tehseen Zia</MenuItem>
                        <MenuItem value="19205">Dr. Usman Yaseen</MenuItem>
                        <MenuItem value="273">Dr. Uzair Iqbal</MenuItem>
                        <MenuItem value="3656">Dr. Zobia Rehman</MenuItem>
                        <MenuItem value="4564">
                          Prof. Dr. Sohail Asghar
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Box>
                    <FormControl
                      color="secondary"
                      fullWidth
                      sx={{ marginBottom: "15px" }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Program
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Program"
                      >
                        <MenuItem value="1">MS (CS)</MenuItem>
                        <MenuItem value="2">MS (SE)</MenuItem>
                        <MenuItem value="3">PhD (CS)</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>

              <div className="col-md-2 col-sm-4">Students :</div>
              <div className="col-lg-12 mt-2">
                <DataTable header={studentHeader} data={studentData} />
                {/* <Table
                  columns={columns}
                  data={[]}
                  footer={true}
                  isLoading={false}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
