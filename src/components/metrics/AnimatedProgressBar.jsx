import React from 'react'
import { motion } from 'framer-motion'
import AnimatedNumber from './AnimatedNumber'

const AnimatedProgressBar = ({ label, value }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-xs font-mono text-gray-400">{label}</span>
        <span className="text-xs font-mono text-primary">
          <AnimatedNumber value={value} suffix="%" decimals={1} />
        </span>
      </div>
      <div className="h-2 bg-black/40 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full rounded-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary" />
        </motion.div>
      </div>
    </div>
  )
}

export default AnimatedProgressBar
