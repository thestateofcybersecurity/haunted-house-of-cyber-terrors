import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const PhishingPhantoms = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Phantom Phisher's Hall</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          A dark, endless hallway filled with mirrors stretches before you. Shadows move, and eerie voices whisper, "Click here for your prize." These are the phantoms of phishing emails, always tempting you with too-good-to-be-true offers, but behind their alluring messages lies danger.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Approach the Mirrors
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What is a key indicator that an email might be a phishing attempt?"
          correctAnswer="urgency"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Excellent! You've seen through the phantoms' tricks. You're ready to face the next challenge.</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[1.2, 0, 0]}>
            <meshStandardMaterial color="blue" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default PhishingPhantoms;
