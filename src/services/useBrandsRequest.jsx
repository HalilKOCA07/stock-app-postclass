import React from "react";
import { useDispatch } from "react-redux";
import { fetchStart, getApiStockSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { fetchFail } from "../features/authSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();



  const getBrands = async (path = "brands") => {
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

  const postBrands = async (path = "brands", infoFirm) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(`${path}`, infoFirm);
      getBrands(path)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const putBrand = async (path = "brands", infoFirm) => {
    dispatch(fetchStart());
    try {
      await axiosToken.put(`${path}/${infoFirm._id}`, infoFirm);
      getBrands(path)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const deleteBrand = async (path = "brands", id) => {
    dispatch(fetchStart());
    try {
      await axiosToken.delete(`${path}/${id}`);
      getBrands(path)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getBrands, postBrands, putBrand, deleteBrand };
};

export default useStockRequest;
