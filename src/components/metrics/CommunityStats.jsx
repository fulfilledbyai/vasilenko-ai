import React from 'react'
import { motion } from 'framer-motion'

const CommunityStats = () => {
  return (
    <div className="lab-panel p-4">
      <h2 className="text-sm font-mono text-gray-400 mb-4">ДАННЫЕ СООБЩЕСТВА</h2>
      <div className="space-y-4">
        <div className="p-3 bg-black/40 rounded-lg border border-primary/20">
          <div className="text-xs text-gray-400 mb-1">АКТИВНЫХ УЧЁНЫХ</div>
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xl font-bold text-primary"
          >
            4,269
          </motion.div>
        </div>
        
        <div className="p-3 bg-black/40 rounded-lg border border-primary/20">
          <div className="text-xs text-gray-400 mb-1">ИНДЕКС СЧАСТЬЯ</div>
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xl font-bold text-secondary"
          >
            98.7%
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CommunityStats
