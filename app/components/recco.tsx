// RecommendationSection.tsx
import React from 'react';
import { Paper, Typography } from '@mui/material';

const RecommendationSection: React.FC = () => {
  return (
    <Paper elevation={3} className="dashboard-card">
      <Typography variant="h6">Recommendations</Typography>
      <ul>
        <li>Consider cost-cutting measures.</li>
        <li>Explore new revenue streams.</li>
        <li>Review expense management strategies.</li>
      </ul>
    </Paper>
  );
};

export default RecommendationSection;
