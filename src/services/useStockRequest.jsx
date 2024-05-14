import React from "react";
import { useDispatch } from "react-redux";
import { fetchStart, getApiStockSuccess,fetchFail } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();



  const getStock = async (path = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken.get(`${path}`);
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

  return { getStock, postStock, putStock, deleteStock };
};

export default useStockRequest;
