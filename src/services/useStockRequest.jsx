import React from "react";
import { useDispatch } from "react-redux";
import { fetchStart, getApiStockSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { fetchFail } from "../features/authSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();



  const getStock = async (path = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken.get(`${path}`);
      console.log(data.data);
      const stockData = data.data;
      dispatch(getApiStockSuccess({ stockData, path }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const getProducts = async (path = "products") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken.get(`${path}`);
      console.log(data.data);
      const stockData = data.data;
      dispatch(getApiStockSuccess({ stockData, path }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const postStock = async (path = "firms", infoFirm) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(`${path}`, infoFirm);
      getStock(path)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const putStock = async (path = "firms", infoFirm) => {
    dispatch(fetchStart());
    try {
      await axiosToken.put(`${path}/${infoFirm._id}`, infoFirm);
      getStock(path)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const deleteStock = async (path = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosToken.delete(`${path}/${id}`);
      getStock(path)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getStock, postStock, putStock, deleteStock, getProducts };
};

export default useStockRequest;
