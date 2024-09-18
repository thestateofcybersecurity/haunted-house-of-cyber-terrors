import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const FinalBattleCyberNightmare = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Final Battle: Cyber Nightmare</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          After traversing the haunted house and surviving the digital terrors, you face the final showdown—the Cyber Nightmare itself. It's a monstrous amalgamation of every threat you've faced, demanding the ultimate test of your defenses.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Confront the Cyber Nightmare
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What comprehensive approach involves people, processes, and technology to protect and defend against cyber threats?"
          correctAnswer="cybersecurity framework"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Congratulations! You've defeated the Cyber Nightmare and completed your journey through the Haunted House of Cyber Terrors. You are now a master of cybersecurity!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]}>
            <meshStandardMaterial color="darkred" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default FinalBattleCyberNightmare;
