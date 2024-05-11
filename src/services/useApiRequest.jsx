import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchStart } from '../features/authSlice'

const useApiRequest = () => {
    const dispatch = useDispatch()

    const Login = async(userdata) => {
    dispatch(fetchStart());

    try{
        const {data} = aw
    }
    }
  return ()
}

export default useApiRequest
