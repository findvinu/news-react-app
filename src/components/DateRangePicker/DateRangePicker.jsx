// src/components/DateRangeFilter/DateRangeFilter.jsx
import React, { useState } from "react";
import { Box, TextField, Button, Grid } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/en-gb"; // Optional: Import locale if needed

const DateRangeFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilter = () => {
    if (startDate && endDate) {
      onFilter(startDate, endDate);
    }
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4}>
          <TextField
            label="Start Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setStartDate(dayjs(e.target.value).toISOString())}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="End Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setEndDate(dayjs(e.target.value).toISOString())}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={4} container justifyContent="center">
          <Button
            variant="contained"
            onClick={handleFilter}
            sx={{ width: "100%" }}
          >
            Apply Filter
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DateRangeFilter;
