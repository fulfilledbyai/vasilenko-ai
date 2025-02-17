import React from 'react'
import { motion } from 'framer-motion'

export default function TokenDisplay() {
  return (
    <div className="lab-panel p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-mono text-gray-400">TOKEN METRICS</h2>
        <div className="status-badge bg-primary/10 text-primary">
          АКТИВЕН
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-black/40 rounded-lg border border-primary/20"
        >
          <div className="text-xs text-gray-400 mb-1">CURRENT PRICE</div>
          <div className="text-2xl font-bold text-primary">$0.000042</div>
          <div className="text-sm text-secondary mt-1">+69.420%</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-4 bg-black/40 rounded-lg border border-primary/20"
        >
          <div className="text-xs text-gray-400 mb-1">MARKET CAP</div>
          <div className="text-2xl font-bold text-primary">$420K</div>
          <div className="text-sm text-secondary mt-1">TON NETWORK</div>
        </motion.div>
      </div>
    </div>
  )
}
