// components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h1>Booking Calendar</h1>
      <Calendar onChange={handleDateChange} value={date} />
      <p>Selected Date: {date.toString()}</p>
      {/* You can use the selected date value for your booking logic */}
    </div>
  );
};

export default BookingCalendar;
