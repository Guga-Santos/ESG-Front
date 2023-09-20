'use client'
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef(null)
  return (
    <>
    <AnimatePresence>
      <motion.div
      initial={{ opacity: 0}}
      exit={{ opacity: 0, y:0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: true }}
      transition={{
        ease: "linear",
        duration: 1.5,
        x: { duration: 1 }
      }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
    </>
  )
}
