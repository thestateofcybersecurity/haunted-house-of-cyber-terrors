import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import Challenge from '../Challenge';

const BackupRecoveryWardingSpells = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">The Chamber of Backup Rituals</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          A storm is brewing, and data disasters are inevitable. Only a well-cast warding spell can protect your data from total destruction. Without proper backups, your organization will be lost when the storm hits.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Cast the Warding Spell
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="What backup strategy involves keeping three copies of data on two different media with one copy off-site?"
          correctAnswer="3-2-1 backup"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400">Well done! You've mastered the art of data protection and recovery. Move on to the next challenge!</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]}>
            <meshStandardMaterial color="mediumpurple" />
          </Box>
        </Canvas>
      </div>
    </div>
  );
};

export default BackupRecoveryWardingSpells;
