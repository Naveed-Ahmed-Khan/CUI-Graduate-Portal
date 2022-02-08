import { useState } from "react";

import AdminRoutes from "./Components/UI/Admin/AdminRoutes";
import GacRoutes from "./Components/UI/GAC/GacRoutes";
import GoRoutes from "./Components/UI/Go/GoRoutes";
import MsRoutes from "./Components/UI/MsCor/MsRoutes";
import PhdRoutes from "./Components/UI/PhdCor/PhdRoutes";
import SignIn from "./Components/UI/SignIn";
import SignUp from "./Components/UI/SignUp";

function App() {
  const [user, setUser] = useState("LOGIN");
  const [student, setStudent] = useState("MS");

  return (
    <div>
      <AdminRoutes
        user={user}
        onLogin={setUser}
        student={student}
        onStudent={setStudent}
      />
      {/* {user === "LOGIN" && <SignIn onLogIn={setUser} />}
      {user === "SIGNUP" && <SignUp onLogIn={setUser} />}

      {user !== "LOGIN" && user !== "SIGNUP" && (
        <AdminRoutes onUser={user} onLogIn={setUser} />
      )} */}

      {/* {user === "ADMIN" && <AdminRoutes />}
      {user === "GAC" && <GacRoutes />}
      {user === "GO" && <GoRoutes />}
      {user === "MS_COR" && <MsRoutes />}
      {user === "PHD_COR" && <PhdRoutes />} */}
    </div>
  );
}

export default App;
