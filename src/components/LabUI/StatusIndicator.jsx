import React from 'react'
import { motion } from 'framer-motion'

export default function StatusIndicator({ label, status = "СЧАСТЛИВ" }) {
  return (
    <div className="flex items-center gap-2 bg-dark/50 p-2 rounded-lg">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-3 h-3 rounded-full bg-primary"
      />
      <span className="text-sm text-gray-400">{label}:</span>
      <span className="text-sm font-bold text-primary">{status}</span>
    </div>
  )
}
