import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const RogueEmployeeCurse = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Cursed Chamber of Rogue Employees</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          In this cursed chamber, one employee has become corrupted by dark forces, acting against the organization's interests. Whether motivated by revenge or neglect, the rogue employee wreaks havoc from within, causing security breaches and data loss.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Investigate the Curse
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What principle helps prevent a single employee from having too much power or access within an organization?"
          correctAnswer="least privilege"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Excellent! You've learned how to mitigate the risks of rogue employees. Proceed to the next challenge!</p>
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

export default RogueEmployeeCurse;
