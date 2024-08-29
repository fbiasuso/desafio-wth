'use client';

import React, { useState, useEffect } from 'react';

const Hours = () => {
  const [currentHour, setCurrentHour] = useState('');

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    setCurrentHour(`${hour}:${minutes < 10 ? '0' : ''}${minutes}`);
  }, []);

  return (
    <div>
      <h1>Hora actual </h1>
      <p style={{ textAlign: 'center', fontSize: '24px' }}>{currentHour}</p>
    </div>
  );
};

export default Hours;