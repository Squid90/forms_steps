import React from 'react';
import { useState } from 'react';
import { TrainingForm } from './components/TrainingForm.tsx';
import { TrainingList } from './components/TrainingList.tsx';

const App: React.FC = () => {
  const [trainings, setTrainings] = useState([]);

  const addTraining = (training) => {
    if (isNaN(training.distance)) {
      alert('Пожалуйста, введите числовое значение для дистанции.');
      return;
    }

    const existingTrainingIndex = trainings.findIndex(t => t.date === training.date);
  
  if (existingTrainingIndex !== -1) {
    const updatedTrainings = [...trainings];
    let newDistance = Number(updatedTrainings[existingTrainingIndex].distance) + Number(training.distance);
    updatedTrainings[existingTrainingIndex].distance = newDistance;
    setTrainings(updatedTrainings);
  } else {
    const updatedTrainings = [...trainings, training];
    updatedTrainings.sort((a, b) => new Date(b.date) - new Date(a.date));
    setTrainings(updatedTrainings);
  }
  };

  const deleteTraining = (trainingToDelete) => {
    const updatedTrainings = trainings.filter((training) => training !== trainingToDelete);
    setTrainings(updatedTrainings);
  };

  return (
    <div className='training'>
      <TrainingForm onAddTraining={addTraining} />
      <TrainingList trainings={trainings} onDeleteTraining={deleteTraining} />
    </div>
  );
};

export default App;
