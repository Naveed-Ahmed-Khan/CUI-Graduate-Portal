import ManagePrograms from "../../Pages/managePrograms";
import AddManageProgram from "../../Pages/AddManageProgram";
import AddManageSupervisoryCommittee from "../../Pages/AddManageSupervisoryCommittee";
import AddProgressReport from "../../Pages/AddProgressReport";
import AddSession from "../../Pages/AddSession";
import AddStudent from "../../Pages/AddStudent";
import ChangePassword from "../../Pages/ChangePassword";
import Home from "../../Pages/Home";
import ManageProgressReport from "../../Pages/ManageProgressReport";
import ManageSession from "../../Pages/ManageSession";
import ManageStudent from "../../Pages/ManageStudent";
import ManageSupervisoryCommittee from "../../Pages/ManageSupervisoryCommittee";
import ProgramWiseReports from "../../Pages/ProgramWiseReports";
import SendNotification from "../../Pages/SendNotification";
import SendNotificationAll from "../../Pages/SendNotificationAll";
import SendNotificationMS from "../../Pages/SendNotificationMS";
import EvaluateSynopsisMS from "../../Pages/EvaluateSynopsisMS";
import EvaluateSynopsisPhD from "../../Pages/EvaluateSynopsisPhD";
import SessionWiseReports from "../../Pages/SessionWiseReports";
import SupervisorReports from "../../Pages/SuperivorReports";
import SupervisorWiseReports from "../../Pages/SupervisorWiseReports";
import ManageNotification from "../../Pages/managenotification";
import SynopsisWiseReports from "../../Pages/SynopsisWiseReports";
import ThesisWiseReports from "../../Pages/ThesisWiseReports";
import ViewFaculty from "../../Pages/ViewFaculty";
import ViewMSStudentDetail from "../../Pages/ViewMSStudentDetail";
import ViewPhDStudentDetail from "../../Pages/ViewPhDStudentDetail";
import AdminDashboard from "../../../Dashboards/AdminDashboard";

import React from "react";
import { Route, Routes } from "react-router-dom";
import SynopsisSubmission from "../../Pages/SynopsisSubmission";
import ThesisSubmission from "../../Pages/ThesisSubmission";
import EditProfile from "../../Pages/EditProfile";
import ViewAnnouncement from "../../Pages/ViewAnnouncement";
import ViewNotification from "../../Pages/ViewNotification";
import SignUp from "../../UI/SignUp";
import SignIn from "../SignIn";

const AdminRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<SignIn onLogin={props.onLogin} />} />
      <Route path="/SignUp" element={<SignUp onLogIn={props.onLogin} />} />
      <Route
        path="/Dashboard"
        element={<AdminDashboard onUser={props.user} student={props.student} />}
      >
        <Route index element={<Home onUser={props.user} />} />
        <Route path="/Dashboard/ManagePrograms" element={<ManagePrograms />} />
        <Route path="/Dashboard/AddPrograms" element={<AddManageProgram />} />
        <Route path="/Dashboard/ManageSessions" element={<ManageSession />} />
        <Route path="/Dashboard/AddSessions" element={<AddSession />} />
        <Route path="/Dashboard/ViewFaculty" element={<ViewFaculty />} />
        <Route path="/Dashboard/ManageStudents" element={<ManageStudent />} />
        <Route path="/Dashboard/AddStudent" element={<AddStudent />} />
        <Route
          path="/Dashboard/ManageProgressReport"
          element={<ManageProgressReport />}
        />
        <Route
          path="/Dashboard/AddProgressReport"
          element={<AddProgressReport />}
        />
        <Route
          path="/Dashboard/ManageSupervisoryCommittee"
          element={<ManageSupervisoryCommittee />}
        />
        <Route
          path="/Dashboard/AddSupervisoryCommittee"
          element={<AddManageSupervisoryCommittee />}
        />
        <Route
          path="/Dashboard/EvaluateSynopsis(MS)"
          element={<EvaluateSynopsisMS />}
        />
        <Route
          path="/Dashboard/EvaluateSynopsis(PhD)"
          element={<EvaluateSynopsisPhD />}
        />
        <Route
          path="/Dashboard/ManageNotification"
          element={<ManageNotification />}
        />
        <Route
          path="/Dashboard/SendNotification(PhD)"
          element={<SendNotification />}
        />
        <Route
          path="/Dashboard/SendNotification(MS)"
          element={<SendNotificationMS />}
        />
        <Route
          path="/Dashboard/SendNotificationtoAll"
          element={<SendNotificationAll />}
        />
        <Route
          path="/Dashboard/ViewMSStudentDetails"
          element={<ViewMSStudentDetail />}
        />
        <Route
          path="/Dashboard/ViewPhDStudentDetails"
          element={<ViewPhDStudentDetail />}
        />
        <Route
          path="/Dashboard/Supervisor'sReport"
          element={<SupervisorReports />}
        />
        <Route
          path="/Dashboard/Program-WiseReport"
          element={<ProgramWiseReports />}
        />
        <Route
          path="/Dashboard/Synopsis-WiseReport"
          element={<SynopsisWiseReports />}
        />
        <Route
          path="/Dashboard/Session-WiseReport"
          element={<SessionWiseReports />}
        />
        <Route
          path="/Dashboard/Thesis-WiseReport"
          element={<ThesisWiseReports />}
        />
        <Route path="/Dashboard/ChangePassword" element={<ChangePassword />} />
        <Route
          path="/Dashboard/ViewSupervisorProgram-WiseReport"
          element={<SupervisorWiseReports />}
        />

        <Route
          path="/Dashboard/SynopsisSubmission"
          element={<SynopsisSubmission />}
        />
        <Route
          path="/Dashboard/ThesisSubmission"
          element={<ThesisSubmission />}
        />
        <Route
          path="/Dashboard/ViewAnnouncement"
          element={<ViewAnnouncement />}
        />
        <Route
          path="/Dashboard/ViewNotification"
          element={<ViewNotification />}
        />

        <Route
          path="/Dashboard/EditProfile"
          element={<EditProfile student={props.student} />}
        />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
