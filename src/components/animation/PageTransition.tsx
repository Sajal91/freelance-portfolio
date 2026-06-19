import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const transition = {
  duration: 0.22,
  ease: [0.25, 0.1, 0.25, 1] as const,
}

const isServer = typeof window === 'undefined'

/** Subtle crossfade between route changes */
export function PageTransition({ children }: PageTransitionProps) {
  if (isServer) {
    return <div>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
