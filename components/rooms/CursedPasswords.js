import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const CursedPasswords = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Library of Cursed Passwords</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
You enter a dusty old library where ancient tomes glow with malevolent light. Inside the books are cursed passwords like "123456" and "password." Anyone who uses them is doomed, leaving their accounts open to dark forces.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Open a Cursed Book
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What additional security measure can be used alongside strong passwords to protect accounts?"
          correctAnswer="multi-factor authentication"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Well done! You've learned to ward off the curse of weak passwords. Move on to the next challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[1.2, 0, 0]}>
            <meshStandardMaterial color="yellow" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default CursedPasswords;
