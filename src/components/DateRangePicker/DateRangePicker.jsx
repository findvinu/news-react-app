import { Box, TextField, Button, Grid } from "@mui/material";

const DateRangeFilter = ({ onFilter, setStartDate, setEndDate }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4}>
          <TextField
            label="Start Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setStartDate(e.target.value)}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="End Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setEndDate(e.target.value)}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={4} container justifyContent="center">
          <Button variant="contained" onClick={onFilter} sx={{ width: "100%" }}>
            Apply Filter
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DateRangeFilter;
