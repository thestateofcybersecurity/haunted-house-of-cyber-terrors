import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const InsiderThreatInvisibleMan = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Invisible Corridor of Insider Threats</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          You feel a presence, but see nothing. The Invisible Man represents insider threats—employees or contractors with access to your most sensitive data who are invisible to your detection systems. Whether intentional or accidental, these insiders can cause immense damage.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Detect the Invisible Man
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What type of system monitors user behavior to detect potential insider threats?"
          correctAnswer="user behavior analytics"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Well done! You've learned how to reveal and manage insider threats. Proceed to the next challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]}>
            <meshStandardMaterial color="lightblue" opacity={0.5} transparent />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default InsiderThreatInvisibleMan;
