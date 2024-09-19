import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Completion = () => {
  const router = useRouter();

  const handleRestart = () => {
    // Clear the game state from localStorage
    localStorage.removeItem('gameState');
    // Redirect to the home page
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
        <p className="text-xl mb-4">
          You've completed the Haunted House of Cyber Terrors and become a master of cybersecurity!
        </p>
        <button
          onClick={handleRestart}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Again
        </button>
      </motion.div>
    </div>
  );
};

export default Completion;
