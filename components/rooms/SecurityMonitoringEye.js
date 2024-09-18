import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const SecurityMonitoringEye = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Eye of Sauron (Security Monitoring)</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          A giant, all-seeing eye peers into every corner of the haunted house, watching for signs of danger. This is the watchful eye of security monitoring, always vigilant, ensuring that no threat goes undetected.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Activate the All-Seeing Eye
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What type of system collects and analyzes log data from various sources to detect security incidents?"
          correctAnswer="SIEM"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Excellent! You've mastered the art of security monitoring. On to the next challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]}>
            <meshStandardMaterial color="skyblue" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default SecurityMonitoringEye;
