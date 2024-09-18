import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Challenge from '../Challenge';

const DataBreachGraveyard = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room">
      <h2 className="text-2xl font-bold mb-4">The Graveyard of Data Breaches</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          As you walk through the graveyard, spectral figures rise from the ground—these are the spirits of data breaches past, from Equifax to Target. They whisper of lost fortunes and stolen data, haunting those who failed to protect their assets.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-eerie-green text-haunted-black px-4 py-2 rounded"
          >
            Investigate the Tombstones
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="To protect against data breaches, what crucial step should organizations take with sensitive data?"
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
          <p className="text-eerie-green">Well done! You've learned from the mistakes of the past. Move on to face the next cyber terror.</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};

export default DataBreachGraveyard;
