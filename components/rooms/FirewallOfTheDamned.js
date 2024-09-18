import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const FirewallOfTheDamned = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Firewall of the Damned</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          A barrier of flames separates your data from the hordes of damned souls—malware, ransomware, and hackers—seeking to cross into your network. If the firewall weakens or is improperly configured, the damned will break through.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Strengthen the Firewall
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What type of firewall inspects the content of network packets, not just their headers?"
          correctAnswer="application layer firewall"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Excellent work! You've learned how to maintain a strong firewall. Move on to the next challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[1.2, 0, 0]}>
            <meshStandardMaterial color="orange" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default FirewallOfTheDamned;
