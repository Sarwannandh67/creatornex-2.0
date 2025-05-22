import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface PageTransitionProps {
  children: React.ReactNode
}

const variants = {
  hidden: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
}

export function PageTransition({ children }: PageTransitionProps) {
  const [isClient, setIsClient] = useState(false)

  // Only enable animations after initial hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  // If not client, render children directly to improve TTFB
  if (!isClient) {
    return <>{children}</>
  }
  
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.15, type: "tween" }}
    >
      {children}
    </motion.div>
  )
} 