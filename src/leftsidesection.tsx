'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function LeftSideSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize(); // set on load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className="left-side"
      variants={containerVariants}
      initial="hidden"
      animate={isDesktop ? 'show' : 'hidden'}
    >
      <motion.div className="top-box" variants={itemVariants}>
        {/* Your Top Content */}
        <h2 className="text-xl font-semibold">Top Section</h2>
        <p className="text-sm text-gray-500">This fades and slides in first.</p>
      </motion.div>

      <motion.div className="bottom-box" variants={itemVariants}>
        {/* Your Bottom Content */}
        <h2 className="text-xl font-semibold">Bottom Section</h2>
        <p className="text-sm text-gray-500">Then this appears with the same animation.</p>
      </motion.div>
    </motion.div>
  );
}
