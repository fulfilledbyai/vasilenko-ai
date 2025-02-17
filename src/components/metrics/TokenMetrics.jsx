import React from 'react'
import { motion } from 'framer-motion'
import AnimatedNumber from './AnimatedNumber'

const MetricCard = ({ label, value, subValue, icon }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-black/40 rounded-lg border border-primary/20 p-4"
  >
    <div className="flex justify-between items-start">
      <div>
        <div className="text-xs text-gray-400 mb-1">{label}</div>
        <div className="text-2xl font-bold text-primary">{value}</div>
        <div className="text-sm text-secondary mt-1">{subValue}</div>
      </div>
      <div className="text-primary opacity-50">{icon}</div>
    </div>
  </motion.div>
)

const TokenMetrics = () => {
  return (
    <div className="lab-panel p-4">
      <h2 className="text-sm font-mono text-gray-400 mb-4">МЕТРИКИ ТОКЕНА</h2>
      <div className="space-y-3">
        <MetricCard 
          label="ТЕКУЩАЯ ЦЕНА"
          value="$0.000042"
          subValue="+69.420%"
          icon="📈"
        />
        <MetricCard 
          label="КАПИТАЛИЗАЦИЯ"
          value="$420K"
          subValue="СЕТЬ TON"
          icon="💎"
        />
        <MetricCard 
          label="ДЕРЖАТЕЛИ"
          value="1,337"
          subValue="СЧАСТЛИВЫХ УЧЁНЫХ"
          icon="🧬"
        />
        <MetricCard 
          label="ИНДЕКС СЧАСТЬЯ"
          value="98.7%"
          subValue="МАКСИМУМ ПОЗИТИВА"
          icon="✨"
        />
      </div>
    </div>
  )
}

export default TokenMetrics
