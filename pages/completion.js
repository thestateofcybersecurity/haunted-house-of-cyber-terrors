import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Completion = ({ userProgress }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
        <p className="text-xl mb-4">
          You've completed the Haunted House of Cyber Terrors and become a master of cybersecurity!
        </p>
        <p className="text-2xl font-bold mb-8">
          Your final score: {userProgress.score}
        </p>
        <Link href="/">
          <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Again
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

export default Completion;
