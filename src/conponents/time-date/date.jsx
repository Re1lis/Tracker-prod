import React, { useState, useEffect } from 'react';

function DateDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleDateString('Ru-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>{currentDate}</h2>
    </div>
  );
}

export default DateDisplay;