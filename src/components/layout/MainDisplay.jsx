import React from 'react'
import { motion } from 'framer-motion'
import AITerminal from '../terminal/AITerminal'

export default function MainDisplay() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="lab-panel flex-1 flex"
    >
      <div className="scan-effect absolute inset-0 pointer-events-none" />
      <AITerminal />
    </motion.div>
  )
}
