import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart } from '../feature/authSlice'
import { toastSuccessNotify, toastErrorNotify } from '../helper/ToastNotify'
import useAxios from './useAxios'
import { getStockSuccess } from '../feature/stockSlice'


const useStockRequest = () => {
    const dispatch = useDispatch()
    const {axiosToken} = useAxios()

    const getStock = async(path = "firms") => {
        dispatch(fetchStart())
        try{
            const {data} = await axiosToken(`/${path}`)
            const stockData = data.data
            dispatch(getStockSuccess({path, stockData}))
        }catch(error){
            toastErrorNotify(`${path} couldn't be received`)
            dispatch(fetchFail())
        } 
    }
    
    const postStock = async(path = "firms", info) => {
        dispatch(fetchStart())
        try{
            const {data} = await axiosToken.post(`/${path}`, info)
            const stockData = data.data
            toastSuccessNotify(`New ${path} is successfully added`)
            getStock(path)
        }catch(error){
            toastErrorNotify(`${path} couldn't be received`)
            dispatch(fetchFail())
        } 
    }

    const putStock = async(path = "firms", info) => {
        dispatch(fetchStart())
        try{
            const {data} = await axiosToken.put(`/${path}/${info._id}`, info)
            const stockData = data.data
            toastSuccessNotify(`New ${path} is successfully ubdated`)
           getStock(path)
        }catch(error){
            toastErrorNotify(`${path} couldn't be received`)
            dispatch(fetchFail())
        } 
    }

    const deleteApi = async(path, id) => {
        dispatch(fetchStart())
        try{
            await axiosToken.delete(`/${path}/${id}`)
            toastSuccessNotify("purchases succsesfully is deleted")
            getStock(path)
        }catch(error){
            toastErrorNotify(`${path} couldn't be received`)
            dispatch(fetchFail())
        } 
    }

  return {getStock, deleteApi, postStock, putStock}
}

export default useStockRequest
