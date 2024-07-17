import React from 'react';
import { TrainingItem } from './TrainingItem.tsx';

export const TrainingList: React.FC<{ trainings: any[], onDeleteTraining: (training) => void }> = ({ trainings, onDeleteTraining }) => {
  return (
    <div className='list'>
      {trainings.map((training, index) => (
        <TrainingItem key={index} training={training} onDelete={() => onDeleteTraining(training)} />
      ))}
    </div>
  );
};