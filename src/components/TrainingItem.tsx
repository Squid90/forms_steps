import React from 'react';

export const TrainingItem: React.FC<{ training: any, onDelete: () => void }> = ({ training, onDelete }) => {
  return (
    <div className='trainingItem'>
      <div>{training.date}</div>
      <div> {training.distance} км</div>
      <button onClick={onDelete}>✘</button>
    </div>
  );
};