// RecommendationSection.tsx
import React from 'react';
import { Paper, Typography } from '@mui/material';

const RecommendationSection: React.FC = () => {
  return (
    <Paper elevation={3} className="dashboard-card" style={{ padding: '5px' }}>
      <Typography variant="h6" style={{ padding: '5px' }}>Recommendations</Typography>
      <ul>
        <li>Consider cost-cutting measures.</li>
        <li>Explore new revenue streams.</li>
        <li>Review expense management strategies.</li>
      </ul>
    </Paper>
  );
};

export default RecommendationSection;
