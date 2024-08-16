// DateRangePickerComponent.jsx
import React from 'react';
import { TextField } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const DateRangePickerComponent = ({ onDateRangeChange }) => {
  const [dateRange, setDateRange] = React.useState([null, null]);

  const handleDateRangeChange = (newValue) => {
    setDateRange(newValue);
    onDateRangeChange(newValue[0], newValue[1]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        startText="Start"
        endText="End"
        value={dateRange}
        onChange={handleDateRangeChange}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} sx={{ mr: 2 }} />
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateRangePickerComponent;
