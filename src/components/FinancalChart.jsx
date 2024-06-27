import { Box } from '@mui/material';
import { AreaChart } from '@tremor/react';
import { useSelector } from 'react-redux';

const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

const FinancalChart = () => {
const {sales, purchases} = useSelector((state) => state.stock)

const salesChart = sales.map((item) => ({
  date:new Date(item.createdAt).toLocaleDateString("tr-TR"),
  amount:item.amount
}))
const purchasesChart = purchases.map((item) => ({
  date:new Date(item.createdAt).toLocaleDateString("tr-TR"),
  amount:item.amount
}))

  return (
    <Box sx={{display:"flex", justifyContent:"center", gap:5, mt:4, px:4}}>
        <AreaChart
      className="h-80 "
      data={salesChart}
      index="date"
      categories={['amount']}
      colors={['indigo', 'rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
    <AreaChart
      className="h-80 "
      data={purchasesChart}
      index="date"
      categories={['amount']}
      colors={['rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
    </Box>
  );
}

export default FinancalChart