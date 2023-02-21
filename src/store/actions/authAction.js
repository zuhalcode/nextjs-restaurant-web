import axiosClient from "@lib/axios";
import { loginFailure, loginSuccess } from "@store/slices/authSlice";

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axiosClient.post("/auth/login", {
      email,
      password,
    });

    if (res.status === 200) {
      // Handle successful login
      dispatch(loginSuccess(res.data));
    }
  } catch (e) {
    // Handle login error
    console.log("Login gagal goblok, kon iku isok ngoding gak se");
    dispatch(loginFailure(e));
    console.log(e);
  }
};
