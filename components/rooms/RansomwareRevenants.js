import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const RansomwareRevenants = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Crypt of Ransomware</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          The crypt doors creak open, revealing the walking dead—Ransomware Revenants. They clutch your files in their bony hands, demanding ransom for their return. Like zombies, they keep coming back, ready to claim more victims.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Confront the Revenants
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What's the best defense against ransomware attacks?"
          correctAnswer="backups"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Excellent! You've found the key to defeating the Ransomware Revenants. Onward to the next challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]}>
            <meshStandardMaterial color="red" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default RansomwareRevenants;
