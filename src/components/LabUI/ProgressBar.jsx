import React from 'react'
import { motion } from 'framer-motion'

export default function ProgressBar({ label, value = 100 }) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-sm text-primary">{value}%</span>
      </div>
      <div className="h-2 bg-dark/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>
    </div>
  )
}
