import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import { supervisorData, supervisorHeader } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

export default function ManageSupervisoryCommittee() {
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
                  {/* <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
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
                  </Box> */}

                  <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
                    <FormControl fullWidth color="secondary">
                      <InputLabel id="demo-simple-select-label">
                        Supervisor
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //value={Program}
                        label="Supervisor"
                        //onChange={handleChange}
                      >
                        <MenuItem value="237">-</MenuItem>
                        <MenuItem value="4209">Dr. Adeel Anjum</MenuItem>
                        <MenuItem value="25565">Dr. Adnan Akhunzada</MenuItem>
                        <MenuItem value="2281">Dr. Ahmad R. Shahid</MenuItem>
                        <MenuItem value="4208">Dr. Aimal Tariq Rextin</MenuItem>
                        <MenuItem value="19072">
                          Dr. Akber Abid Gardezi
                        </MenuItem>
                        <MenuItem value="6925">Dr. Amir Hanif Dar</MenuItem>
                        <MenuItem value="3014">
                          Dr. Ashfaq Hussain Farooqi
                        </MenuItem>
                        <MenuItem value="663">Dr. Assad Abbas</MenuItem>
                        <MenuItem value="3012">Dr. Basit Raza</MenuItem>
                        <MenuItem value="2089">Dr. Farhana Jabeen</MenuItem>
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
                        <MenuItem value="243">Dr. Mukhtar Azeem</MenuItem>
                        <MenuItem value="3356">Dr. Munam Ali Shah</MenuItem>
                        <MenuItem value="1211">Dr. Nadeem Javaid</MenuItem>
                        <MenuItem value="1644">Dr. Naveed Ahmad</MenuItem>
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
                        <MenuItem value="3100">Dr. Yasir Faheem</MenuItem>
                        <MenuItem value="3656">Dr. Zobia Rehman</MenuItem>
                        <MenuItem value="6899">
                          Prof. Dr. Muaz A. Niazi
                        </MenuItem>
                        <MenuItem value="4564">
                          Prof. Dr. Sohail Asghar
                        </MenuItem>
                        <MenuItem value="25568">Supervisor</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="col-md-2 col-sm-4">Students :</div>
                <div className="col-lg-12 mt-2">
                  <DataTable header={supervisorHeader} data={supervisorData} />
                  {/*  <Table
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
    </div>
  );
}
