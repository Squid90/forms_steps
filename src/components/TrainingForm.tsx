import React from 'react';
import { useState } from 'react';

export const TrainingForm: React.FC<{ onAddTraining: (training) => void }> = ({ onAddTraining }) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const handleAddTraining = () => {
     onAddTraining({ date, distance });
  };

  return (
    <div>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Дата" />
      <input type="text" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Дистанция" />
      <button onClick={handleAddTraining}>ОК</button>
    </div>
  );
};