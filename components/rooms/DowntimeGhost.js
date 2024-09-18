import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const DowntimeGhost = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Hall of Downtime Specters</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          Time slows, and ghostly figures loom—each representing a minute, hour, or day of downtime. Every second your systems are offline, your business suffers. These downtime specters can be costly and debilitating if you're not prepared.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Banish the Downtime Specters
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What type of plan ensures that critical business functions can continue during and after a disaster?"
          correctAnswer="business continuity plan"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Excellent work! You've learned how to minimize downtime and keep your business running. On to the final challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[1.2, 0, 0]}>
            <meshStandardMaterial color="gold" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default DowntimeGhost;
