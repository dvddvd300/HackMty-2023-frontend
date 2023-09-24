import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import RecommendationSection from './recco';
import ForecastGraph from './forecast';

const Dashboard = () => {
  const componentMargin = '20px'; // Set the margin value for all components
  
  return (
    <div style={{ margin: componentMargin }}>
      <Typography variant="h4" gutterBottom>
        Cash Flow Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Total Revenue */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            
          <Typography variant="h6" style={{ padding: '5px' }}>Total Revenue</Typography>
    <Typography variant="h4" style={{ padding: '5px' }}>$10,000</Typography>
    <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
      Details
    </Button>


          </Paper>
        </Grid>

        {/* Total Expenses */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Total Expenses</Typography>
            <Typography variant="h4"style={{ padding: '5px' }}>$5,000</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              Details
            </Button>
          </Paper>
        </Grid>

        {/* Net Income */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }} >Net Income</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>$5,000</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>$5,000</Typography>
            <Button variant="contained" color="secondary">
              Details
            </Button>
          </Paper>
        </Grid>

        {/* Recommendations Section */}
        <Grid item xs={12} md={6}>
          <RecommendationSection />
        </Grid>

        {/* Forecast Graph Section */}
        <Grid item xs={12} md={6}>
          <ForecastGraph />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;