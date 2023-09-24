import React from 'react';
import { Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 1500 },
  { month: 'Mar', value: 2000 },
  { month: 'Apr', value: 2500 },
  { month: 'May', value: 3000 },
  { month: 'Jun', value: 3500 },
  { month: 'Jul', value: 4000 },
  { month: 'Aug', value: 4500 },
  { month: 'Sep', value: 5000 },
  { month: 'Oct', value: 5500 },
  { month: 'Nov', value: 6000 },
  { month: 'Dec', value: 6500 },
];

const ForecastGraph: React.FC = () => {
  return (
    <Paper elevation={3} className="dashboard-card">
      <Typography variant="h6">Cash Flow Forecast</Typography>
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

export default ForecastGraph;
