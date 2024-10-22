import { useState } from 'react';
import './App.css'
import Description from './Description/Description'
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

function App() {

  const [feedback, setFeedback] = useState(() => {

    const savedFeedback = localStorage.getItem('feedback');

    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

const {good, neutral , bad} = feedback

const totalFeedback = good + neutral + bad;



  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => {
      const updatedFeedback = {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
      localStorage.setItem('feedback', JSON.stringify(updatedFeedback));
      return updatedFeedback;
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.removeItem('feedback')
  };


  return (
    <div className='container'>
      <Description />
      <Options onLeaveFeedback={updateFeedback} resetFeedback ={resetFeedback} totalFeedback = {totalFeedback} />
      {totalFeedback > 0
          ? <Feedback valueFeedBack={ feedback } totalFeedback ={totalFeedback} />
          : <Notification/>}
    </div>
    
  )
}

export default App
