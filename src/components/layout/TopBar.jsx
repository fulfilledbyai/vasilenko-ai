import React from 'react'
import { motion } from 'framer-motion'
import { RainbowButton } from '../ui/rainbow-button'

const QuickStat = ({ label, value, color = "primary" }) => (
  <div className="text-sm font-mono">
    <span className="text-gray-400">{label}:</span>
    <motion.span
      animate={{ opacity: [1, 0.7, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={`text-${color} ml-2`}
    >
      {value}
    </motion.span>
  </div>
)

const TopBar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="lab-panel h-16 p-2 flex items-center justify-between"
    >
      <div className="flex items-center gap-4 px-4">
        <a 
          href="https://t.me/blum/app?startapp=memepadjetton_VASILENKO_xtOvN-ref_NtAKiCksVl"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-105 transition-transform duration-300"
        >
          <RainbowButton className="text-white font-mono font-bold text-lg hover:scale-105 transition-all duration-300">
            КУПИТЬ $VASILENKO
          </RainbowButton>
        </a>
        <QuickStat label="TON" value="ПОДКЛЮЧЕН" />
      </div>

      <div className="text-center">
        <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР ВАСИЛЕНКО
        </h1>
      </div>

      <div className="flex items-center gap-4 px-4">
        <QuickStat label="ДОБРО" value="МАКСИМУМ" color="secondary" />
        <QuickStat label="СТАТУС" value="СЧАСТЛИВ" />
      </div>
    </motion.div>
  )
}

export default TopBar
