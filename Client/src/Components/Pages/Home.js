import React from "react";
import ViewAnnouncement from "./ViewAnnouncement";
import ViewNotification from "./ViewNotification";

const Home = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      {props.onUser === "STUDENT" && (
        <>
          <h1>Welcome!</h1>
          <p> Your are logged in as a Student</p>
          <h3> Notification </h3>
          <ViewNotification />
          <h3> Announcement </h3>
          <ViewAnnouncement />
        </>
      )}
      {props.onUser === "ADMIN" && (
        <>
          <h1>Welcome!</h1>
          <p> Your are logged in as an Administrator</p>
        </>
      )}
      {props.onUser === "GAC" && (
        <>
          <h1>Welcome!</h1>
          <p> Your are logged in as GAC</p>
        </>
      )}
      {/* {props.onUser === "GO" && <h1>Welcome! GO</h1>}
      {props.onUser === "MS_COR" && <h1>Welcome! MS Coordinator</h1>}
      {props.onUser === "PHD_COR" && <h1>Welcome! PhD Coordinator</h1>} */}
    </div>
  );
};

export default Home;
