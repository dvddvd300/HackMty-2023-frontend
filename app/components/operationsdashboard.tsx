import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';

const OperationsDashboard = () => {
  const componentMargin = '20px'; // Set the margin value for all components

  return (
    <div style={{ margin: componentMargin }}>
      <Typography variant="h4" gutterBottom>
        Operations Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Total Orders */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Total Orders</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>500</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Inventory Level */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Inventory Level</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>10,000 units</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Supplier Performance */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Supplier Performance</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>90%</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Production Efficiency */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Production Efficiency</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>80%</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Maintenance Requests */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="dashboard-card" style={{ margin: componentMargin }}>
            <Typography variant="h6" style={{ padding: '5px' }}>Maintenance Requests</Typography>
            <Typography variant="h4" style={{ padding: '5px' }}>5</Typography>
            <Button variant="contained" color="secondary" style={{ padding: '5px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default OperationsDashboard;
