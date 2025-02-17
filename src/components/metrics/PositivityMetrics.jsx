import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedProgressBar from './AnimatedProgressBar'

const PositivityMetrics = () => {
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false)
  const [metrics, setMetrics] = useState({
    dobra: 0,
    smile: 0,
    happiness: 0,
    mood: 0
  })

  const targetMetrics = {
    dobra: 98,
    smile: 100,
    happiness: 95,
    mood: 99
  }

  useEffect(() => {
    // Initial animation from 0 to target values
    const initialAnimation = setTimeout(() => {
      setMetrics(targetMetrics)
      setIsInitialAnimationComplete(true)
    }, 100)

    return () => clearTimeout(initialAnimation)
  }, [])

  useEffect(() => {
    if (!isInitialAnimationComplete) return

    const interval = setInterval(() => {
      setMetrics(prev => ({
        dobra: prev.dobra + (Math.random() * 0.2 - 0.1),
        smile: 100,
        happiness: prev.happiness + (Math.random() * 0.2 - 0.1),
        mood: prev.mood + (Math.random() * 0.2 - 0.1)
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [isInitialAnimationComplete])

  const clampedMetrics = {
    dobra: Math.min(99, Math.max(97, metrics.dobra)),
    smile: metrics.smile,
    happiness: Math.min(96, Math.max(94, metrics.happiness)),
    mood: Math.min(99.5, Math.max(98.5, metrics.mood))
  }

  return (
    <div className="lab-panel p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-mono text-gray-400">ДАТЧИКИ ПОЗИТИВА</h2>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-2 h-2 rounded-full bg-primary"
          />
          <span className="text-xs font-mono text-primary">АКТИВНЫ</span>
        </div>
      </div>

      <AnimatedProgressBar label="УРОВЕНЬ ДОБРА" value={clampedMetrics.dobra} />
      <AnimatedProgressBar label="ЧАСТОТА УЛЫБОК" value={clampedMetrics.smile} />
      <AnimatedProgressBar label="ИНДЕКС СЧАСТЬЯ" value={clampedMetrics.happiness} />
      <AnimatedProgressBar label="СТАТУС НАСТРОЕНИЯ" value={clampedMetrics.mood} />
    </div>
  )
}

export default PositivityMetrics
