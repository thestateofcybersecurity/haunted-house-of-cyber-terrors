import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const OutdatedSoftwarePoltergeists = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Poltergeist Playroom</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          Objects move by themselves, the software is glitching, and chaos reigns—these are the Poltergeists of Outdated Software. They've been abandoned, forgotten, but still linger, causing havoc with unpatched vulnerabilities.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Confront the Poltergeists
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What process involves fixing bugs, improving functionality, and addressing security vulnerabilities in software?"
          correctAnswer="patching"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Great job! You've learned how to exorcise the Poltergeists of Outdated Software. Proceed to the next challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]}>
            <meshStandardMaterial color="lavender" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default OutdatedSoftwarePoltergeists;
