'use client'
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <AnimatePresence>
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y:0 }}
      transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 1 }
      }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
    </>
  )
}
