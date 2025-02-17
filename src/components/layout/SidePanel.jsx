import React from 'react'
import { motion } from 'framer-motion'
import PositivityMetrics from '../metrics/PositivityMetrics'
import RandomMessages from '../metrics/RandomMessages'
import TokenMetrics from '../metrics/TokenMetrics'
import SocialLinks from '../metrics/SocialLinks'

const SidePanel = ({ position }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: position === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="lab-panel w-72 p-4 hidden lg:block space-y-4 overflow-y-auto"
    >
      {position === 'left' ? (
        <>
          <SocialLinks />
          <PositivityMetrics />
          <RandomMessages />
        </>
      ) : (
        <>
          <TokenMetrics />
        </>
      )}
    </motion.div>
  )
}

export default SidePanel
