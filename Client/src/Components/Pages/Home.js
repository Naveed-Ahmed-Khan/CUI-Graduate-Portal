import React from "react";

const Home = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      {props.onUser === "STUDENT" && <h1>Welcome! Student</h1>}
      {props.onUser === "ADMIN" && <h1>Welcome! Administrator</h1>}
      {props.onUser === "GAC" && <h1>Welcome! GAC</h1>}
      {props.onUser === "GO" && <h1>Welcome! GO</h1>}
      {props.onUser === "MS_COR" && <h1>Welcome! MS Coordinator</h1>}
      {props.onUser === "PHD_COR" && <h1>Welcome! PhD Coordinator</h1>}
    </div>
  );
};

export default Home;
