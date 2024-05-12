import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
} from "../features/authSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useApiRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosPublic, axiosToken } = useAxios();

  const login = async (userData) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("login is success");
      navigate("/stock");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log("something went wrong", error);
      toastErrorNotify("Login is invalid");
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosToken.get("/auth/logout")
      dispatch(logoutSuccess())
      toastSuccessNotify("logout is success");
    } catch (error) {
      dispatch(fetchFail());
      console.log("something went wrong", error);
      toastErrorNotify("Logout is invalid");
    }
  };
  return { login, logout };
};

export default useApiRequest;
