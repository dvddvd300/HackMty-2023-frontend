import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import RecommendationSection from './recco';
import ForecastGraph from './forecast';
 // Create a RecommendationSection component
// Create a ForecastGraph component

const CashFlowDashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cash Flow Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Total Revenue */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card">
            <Typography variant="h6">Total Revenue</Typography>
            <Typography variant="h4">$10,000</Typography>
            <Button variant="contained" color="primary">
              Details
            </Button>
          </Paper>
        </Grid>

        {/* Total Expenses */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card">
            <Typography variant="h6">Total Expenses</Typography>
            <Typography variant="h4">$5,000</Typography>
            <Button variant="contained" color="primary">
              Details
            </Button>
          </Paper>
        </Grid>

        {/* Net Income */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card">
            <Typography variant="h6">Net Income</Typography>
            <Typography variant="h4">$5,000</Typography>
            <Button variant="contained" color="primary">
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

export default CashFlowDashboard;
