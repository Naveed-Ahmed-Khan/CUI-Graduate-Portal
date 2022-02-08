import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function EditProfile(props) {
  const alertHandler = () => {
    alert("Student Added!");
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
                label="Name"
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Name :</div>
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
                label="Father's Name"
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Email :</div>
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
                label="Email"
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Mobile :</div>
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
                label="Mobile"
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Program :</div>
                  <select className="form-control form-control-sm  col-md-10 col-sm-8">
                    <option value="12">PhD (CS)</option>
                    <option value="14">MS (CS)</option>
                    <option value="15">MS (SE)</option>
                    <option value="16">MS (IS)</option>
                  </select>
                </div>
              </div> */}
              <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
                <FormControl fullWidth color="secondary">
                  <InputLabel id="demo-simple-select-label">Program</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //value={Program}
                    label="Program"
                    //onChange={handleChange}
                  >
                    <MenuItem value={12}>PhD (CS)</MenuItem>
                    <MenuItem value={14}>MS (CS)</MenuItem>
                    <MenuItem value={15}>MS (SE)</MenuItem>
                    <MenuItem value={15}>MS (IS)</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">
                    Course Work Completion :
                  </div>
                  <select className="form-control form-control-sm  col-md-10 col-sm-8">
                    <option value="1">N/A</option>
                    <option value="15">SP11</option>
                    <option value="16">FA11</option>
                    <option value="17">SP12</option>
                    <option value="18">FA12</option>
                    <option value="19">SP13</option>
                    <option value="20">FA13</option>
                    <option value="21">SP14</option>
                    <option value="22">FA14</option>
                    <option value="23">SP15</option>
                    <option value="24">FA15</option>
                    <option value="25">SP16</option>
                    <option value="26">FA16</option>
                    <option value="27">SP17</option>
                    <option value="28">FA17</option>
                    <option value="29">SP18</option>
                    <option value="30">FA18</option>
                    <option value="31">SPRING 2019</option>
                    <option value="32">FALL 2019</option>
                    <option value="33">SPRING 2020</option>
                    <option value="1033">FALL 2020</option>
                    <option value="1034">SPRING 2021</option>
                    <option value="1036">FALL 2021</option>
                  </select>
                </div>
              </div> */}
              <TextField
                id="standard-basic"
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Courses Passed"
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Status :</div>
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

              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Supervisor :</div>
                  <select className="form-control form-control-sm  col-md-10 col-sm-8">
                    <option value="237">-</option>
                    <option value="4209">Dr. Adeel Anjum</option>
                    <option value="25565">Dr. Adnan Akhunzada</option>
                    <option value="2281">Dr. Ahmad R. Shahid</option>
                    <option value="4208">Dr. Aimal Tariq Rextin</option>
                    <option value="19072">Dr. Akber Abid Gardezi</option>
                    <option value="6925">Dr. Amir Hanif Dar</option>
                    <option value="3014">Dr. Ashfaq Hussain Farooqi</option>
                    <option value="663">Dr. Assad Abbas</option>
                    <option value="3012">Dr. Basit Raza</option>
                    <option value="2089">Dr. Farhana Jabeen</option>
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
                    <option value="243">Dr. Mukhtar Azeem</option>
                    <option value="3356">Dr. Munam Ali Shah</option>
                    <option value="1211">Dr. Nadeem Javaid</option>
                    <option value="1644">Dr. Naveed Ahmad</option>
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
                    <option value="3100">Dr. Yasir Faheem</option>
                    <option value="3656">Dr. Zobia Rehman</option>
                    <option value="6899">Prof. Dr. Muaz A. Niazi</option>
                    <option value="4564">Prof. Dr. Sohail Asghar</option>
                    <option value="25568">Supervisor</option>
                  </select>
                </div>
              </div> */}
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
                    <MenuItem value="19072">Dr. Akber Abid Gardezi</MenuItem>
                    <MenuItem value="6925">Dr. Amir Hanif Dar</MenuItem>
                    <MenuItem value="3014">Dr. Ashfaq Hussain Farooqi</MenuItem>
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
                    <MenuItem value="280">Dr. Saif Ur Rehman Malik</MenuItem>
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
                    <MenuItem value="6899">Prof. Dr. Muaz A. Niazi</MenuItem>
                    <MenuItem value="4564">Prof. Dr. Sohail Asghar</MenuItem>
                    <MenuItem value="25568">Supervisor</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Co-Supervisor :</div>
                  <select className="form-control form-control-sm  col-md-10 col-sm-8">
                    <option value="237">-</option>
                    <option value="4209">Dr. Adeel Anjum</option>
                    <option value="25565">Dr. Adnan Akhunzada</option>
                    <option value="2281">Dr. Ahmad R. Shahid</option>
                    <option value="4208">Dr. Aimal Tariq Rextin</option>
                    <option value="19072">Dr. Akber Abid Gardezi</option>
                    <option value="6925">Dr. Amir Hanif Dar</option>
                    <option value="3014">Dr. Ashfaq Hussain Farooqi</option>
                    <option value="663">Dr. Assad Abbas</option>
                    <option value="3012">Dr. Basit Raza</option>
                    <option value="2089">Dr. Farhana Jabeen</option>
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
                    <option value="243">Dr. Mukhtar Azeem</option>
                    <option value="3356">Dr. Munam Ali Shah</option>
                    <option value="1211">Dr. Nadeem Javaid</option>
                    <option value="1644">Dr. Naveed Ahmad</option>
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
                    <option value="3100">Dr. Yasir Faheem</option>
                    <option value="3656">Dr. Zobia Rehman</option>
                    <option value="6899">Prof. Dr. Muaz A. Niazi</option>
                    <option value="4564">Prof. Dr. Sohail Asghar</option>
                    <option value="25568">Supervisor</option>
                  </select>
                </div>
              </div> */}
              <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
                <FormControl fullWidth color="secondary">
                  <InputLabel id="demo-simple-select-label">
                    Co-Supervisor
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //value={Program}
                    label="Co-Supervisor"
                    //onChange={handleChange}
                  >
                    <MenuItem value="237">-</MenuItem>
                    <MenuItem value="4209">Dr. Adeel Anjum</MenuItem>
                    <MenuItem value="25565">Dr. Adnan Akhunzada</MenuItem>
                    <MenuItem value="2281">Dr. Ahmad R. Shahid</MenuItem>
                    <MenuItem value="4208">Dr. Aimal Tariq Rextin</MenuItem>
                    <MenuItem value="19072">Dr. Akber Abid Gardezi</MenuItem>
                    <MenuItem value="6925">Dr. Amir Hanif Dar</MenuItem>
                    <MenuItem value="3014">Dr. Ashfaq Hussain Farooqi</MenuItem>
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
                    <MenuItem value="280">Dr. Saif Ur Rehman Malik</MenuItem>
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
                    <MenuItem value="6899">Prof. Dr. Muaz A. Niazi</MenuItem>
                    <MenuItem value="4564">Prof. Dr. Sohail Asghar</MenuItem>
                    <MenuItem value="25568">Supervisor</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Thesis Title :</div>
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
                label="Synopsis Title"
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Thesis Registration :</div>
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
              <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
                <FormControl fullWidth color="secondary">
                  <InputLabel id="demo-simple-select-label">Program</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Program"
                  >
                    <MenuItem value={12}>N/A</MenuItem>
                    <MenuItem value={14}>Regular</MenuItem>
                    <MenuItem value={15}>Publication</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                id="standard-basic"
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Thesis Registration"
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Thesis Track :</div>
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
                label="Thesis Track"
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">
                    Area of Specialization :
                  </div>
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
                label="Area of Specialization"
                color="secondary"
                variant="outlined"
              />
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Comprehensive :</div>
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
              <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
                <FormControl fullWidth color="secondary">
                  <InputLabel id="demo-simple-select-label">
                    Comprehensive Passing Semester
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Comprehensive Passing Semester"
                  >
                    <MenuItem value="1">N/A</MenuItem>
                    <MenuItem value="15">SP11</MenuItem>
                    <MenuItem value="16">FA11</MenuItem>
                    <MenuItem value="17">SP12</MenuItem>
                    <MenuItem value="18">FA12</MenuItem>
                    <MenuItem value="19">SP13</MenuItem>
                    <MenuItem value="20">FA13</MenuItem>
                    <MenuItem value="21">SP14</MenuItem>
                    <MenuItem value="22">FA14</MenuItem>
                    <MenuItem value="23">SP15</MenuItem>
                    <MenuItem value="24">FA15</MenuItem>
                    <MenuItem value="25">SP16</MenuItem>
                    <MenuItem value="26">FA16</MenuItem>
                    <MenuItem value="27">SP17</MenuItem>
                    <MenuItem value="28">FA17</MenuItem>
                    <MenuItem value="29">SP18</MenuItem>
                    <MenuItem value="30">FA18</MenuItem>
                    <MenuItem value="31">SPRING 2019</MenuItem>
                    <MenuItem value="32">FALL 2019</MenuItem>
                    <MenuItem value="33">SPRING 2020</MenuItem>
                    <MenuItem value="1033">FALL 2020</MenuItem>
                    <MenuItem value="1034">SPRING 2021</MenuItem>
                    <MenuItem value="1036">FALL 2021</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Foreign Submission :</div>
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
              {props.student === "PHD" && (
                <>
                  <TextField
                    id="standard-basic"
                    sx={{ width: "100%", marginBottom: "15px" }}
                    label="Total Publication (during PhD)"
                    color="secondary"
                    variant="outlined"
                  />
                  <TextField
                    id="standard-basic"
                    sx={{ width: "100%", marginBottom: "15px" }}
                    label="Impact Factor Publications (after synopsis approval)"
                    color="secondary"
                    variant="outlined"
                  />
                  <TextField
                    id="standard-basic"
                    sx={{ width: "100%", marginBottom: "15px" }}
                    label="Other Issue"
                    color="secondary"
                    variant="outlined"
                  />
                </>
              )}

              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Other Issue :</div>
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

              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Synopsis Status :</div>
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

              {/* <div className="col-lg-12 mt-2">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Thesis Status :</div>
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
                  Add Student
                </button>
              </div> */}
              <Button variant="contained" size="large" color="secondary">
                Add Student
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
