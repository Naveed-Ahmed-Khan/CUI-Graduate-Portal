import React from "react";
import { supervisorData, supervisorHeader } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

export default function ManageSupervisoryCommittee() {
  /*  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted")
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    axios.post("http://localhost:3000/auth/login", {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        const data = res.data.user;
	console.log(data);
        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
      });}; */
  return (
    <>
      <DataTable header={supervisorHeader} data={supervisorData} />
    </>
  );
}
