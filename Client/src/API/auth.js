import axios from "axios";

/* const instance = axios.create({
  baseURL: "http://localhost:3000/",
}); */

const login = async (userEmail, userPassword) => {
  console.log("api" + userEmail, userPassword);
  try {
    const res = await axios.post("http://localhost:3000/auth/login", {
      email: userEmail,
      password: userPassword,
    });
    if (res) {
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res));
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  login,
};
export default authService;
