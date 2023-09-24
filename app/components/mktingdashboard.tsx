import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';

const MktingDashboard = () => {
  const componentMargin = '20px'; // Set the margin value for all components

  return (
    <div style={{ margin: componentMargin }}>
      <Typography variant="h4" gutterBottom>
        Sales and Marketing Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Total Revenue */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Total Revenue</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>$500,000</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Marketing Campaigns */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Marketing Campaigns</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>5</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Sales Orders */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Sales Orders</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>120</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Lead Conversion Rate */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Lead Conversion Rate</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>25%</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Top Performing Products */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Top Performing Products</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Products
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MktingDashboard;
