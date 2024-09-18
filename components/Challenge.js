import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Challenge = ({ description, correctAnswer, onComplete }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback('Correct! You've successfully defended against this threat.');
      onComplete();
    } else {
      setFeedback('Not quite. Try again!');
    }
  };

  return (
    <motion.div
      className="challenge mt-8 bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-4">Challenge</h3>
      <p className="mb-4">{description}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Enter your answer"
          className="w-full p-2 bg-gray-700 text-white rounded"
        />
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {feedback && (
        <motion.p 
          className={`mt-4 ${feedback.includes('Correct') ? 'text-green-400' : 'text-red-400'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {feedback}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Challenge;
