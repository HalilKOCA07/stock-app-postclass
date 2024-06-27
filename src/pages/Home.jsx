import React, { useEffect } from 'react'
import FinancalIndicator from '../components/FinancalIndicator'
import useStockRequest from '../services/useStockRequest'
import FinancalChart from '../components/FinancalChart'
import { useSelector } from 'react-redux'

const Home = () => {

  const {getStock} = useStockRequest()
  const {sales, purchases} = useSelector((state) => state.stock)
  
  useEffect(() => {
    getStock("sales")
    getStock("purchases")
},[])
  return (
    <div>
      <FinancalIndicator purchases={purchases} sales={sales}/>
      <FinancalChart />
    </div>
  )
}

export default Home
