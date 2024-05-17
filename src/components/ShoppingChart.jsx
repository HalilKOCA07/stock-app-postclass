import { Box } from '@mui/material';
import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts"
import { useSelector } from 'react-redux';

const ShoppingChart = () => {

  const {sales, purchases} = useSelector((state) => state.stock)

  let salesData = []
let salesDates = []

  let purchasesData = []
  let purchasesDates = []

  const getSalesAndPurchasesData = () => {
    salesData = sales.map((item) => item.amount)
    salesDates = sales.map((item) => new Date(item.createdAt).toLocaleDateString("tr-TR"))
    
    purchasesData = purchases.map((item) => item.amount)
    

  }
getSalesAndPurchasesData()
console.log(salesDates)
  const state = 
{    series: [{
      name: "Desktops",
      data: salesData,
  }],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: salesDates,
    }
  },}
  

      return (
        <Box sx={{mt:5}}>
          <ReactApexChart options={state.options} series={state.series} type="line" width={500} height={350} />
        </Box>
      );
    }
  


export default ShoppingChart
