import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Challenge from '../Challenge';

const Introduction = ({ onComplete, isCompleted }) => {
  const [showChallenge, setShowChallenge] = useState(false);

  const handleInteraction = () => {
    setShowChallenge(true);
  };

  return (
    <div className="room">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Haunted Mansion</h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          The Haunted Mansion looms before you, shrouded in fog. Each door creaks ominously, leading you deeper into a world filled with unseen dangers. These digital ghosts and ghouls—hackers, malware, and phishing—are waiting for their next victim.
        </p>
        {!isCompleted && (
          <button
            onClick={handleInteraction}
            className="bg-eerie-green text-haunted-black px-4 py-2 rounded"
          >
            Enter the Mansion
          </button>
        )}
      </motion.div>
      
      {showChallenge && !isCompleted && (
        <Challenge
          description="To enter the mansion safely, you need to create a strong password. What are the key elements of a strong password?"
          correctAnswer="length, complexity, uniqueness"
          onComplete={onComplete}
        />
      )}
      
      {isCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-eerie-green">Congratulations! You've entered the mansion safely. Proceed to the next room to face your first cyber terror.</p>
        </motion.div>
      )}

      <div className="mt-8 w-full h-64">
        <Canvas>
          {/* Add your 3D scene here */}
        </Canvas>

        <Canvas>
          {/* Add your 3D scene here */}
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};

export default Introduction;
