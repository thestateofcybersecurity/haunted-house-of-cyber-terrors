import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const MisconfiguredServerMummy = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Tomb of Misconfigured Servers</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          The mummy lies wrapped in layers of misconfigurations—its bindings represent improper settings that leave your servers vulnerable. Every time you think the problem is resolved, another layer unravels, exposing more weaknesses.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Unwrap the Mummy
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What practice helps ensure consistent and secure configuration across multiple servers?"
          correctAnswer="configuration management"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Excellent! You've learned how to properly configure and manage servers. On to the next challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[1.2, 0, 0]}>
            <meshStandardMaterial color="khaki" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default MisconfiguredServerMummy;
