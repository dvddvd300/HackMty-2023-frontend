import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';

const HRDashboard = () => {
  const componentMargin = '20px'; // Set the margin value for all components

  return (
    <div style={{ margin: componentMargin }}>
      <Typography variant="h4" gutterBottom>
        HR Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Employee numbers */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Total Employees</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>250</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Total Payroll */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Total Payroll</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>$1,000,000</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Leave Requests */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Leave Requests</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>15</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Performance Metrics */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Performance Metrics</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>85%</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Employee Directory */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Employee Directory</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Directory
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HRDashboard;
