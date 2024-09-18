import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const ShadowITWraiths = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Hidden Chambers of Shadow IT</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          You discover hidden passageways in the mansion, leading to rooms filled with unauthorized devices and apps. The Shadow IT Wraiths haunt these rooms, unapproved and unseen by your IT team. Their presence weakens the defenses of your organization.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Explore Hidden Passageways
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What policy helps organizations manage and control the use of unauthorized software and devices?"
          correctAnswer="acceptable use policy"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Great job! You've learned how to keep the Shadow IT Wraiths at bay. Proceed to the next challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]}>
            <meshStandardMaterial color="purple" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default ShadowITWraiths;
