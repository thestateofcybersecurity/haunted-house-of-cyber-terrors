import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const UnsecureCloudExorcism = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Haunted Cloud Storage Room</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          Dark clouds gather overhead, swirling with unseen dangers. Your cloud storage is full of sensitive data, but without proper protection, malicious spirits can enter and steal your information, haunting your organization with data breaches and leaks.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Perform the Exorcism
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What security measure ensures that data stored in the cloud remains unreadable to unauthorized users?"
          correctAnswer="encryption"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Excellent! You've learned how to secure your cloud storage. Proceed to the next challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]}>
            <meshStandardMaterial color="lightgray" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default UnsecureCloudExorcism;
