import React from 'react'
import { motion } from 'framer-motion'

export default function ScanningEffect() {
  return (
    <div className="relative h-32 bg-dark/50 rounded-lg overflow-hidden">
      <motion.div
        animate={{
          y: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-full h-1/3 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary text-sm"
        >
          СКАНИРОВАНИЕ ПОЗИТИВА...
        </motion.div>
      </div>
    </div>
  )
}
