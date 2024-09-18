import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const ThirdPartyRiskWitchBrew = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Witch's Cauldron of Third-Party Risk</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          A bubbling cauldron in the center of the room holds a dangerous concoction of third-party vendors. Each vendor adds an unknown ingredient to the brew, and without proper control, the entire potion could explode, exposing your organization to risk.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Examine the Cauldron
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What process involves assessing and monitoring the security risks posed by your organization's vendors and service providers?"
          correctAnswer="third-party risk management"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Excellent work! You've learned how to manage the risks of the third-party witch's brew. On to the next challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[1.2, 0, 0]}>
            <meshStandardMaterial color="limegreen" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default ThirdPartyRiskWitchBrew;
