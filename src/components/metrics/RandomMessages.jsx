import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  "Уровень позитива превышает все ожидания! 🚀",
  "Система обнаружила необычайно высокий уровень улыбок! 😊",
  "Внимание: зафиксирован всплеск хорошего настроения! ✨",
  "Критическая масса счастья достигнута! 🎉",
  "Предупреждение: слишком много добра в системе! 💖",
  "Обнаружен всплеск радости в лаборатории! 🌟",
  "Зафиксирован рекордный уровень оптимизма! 🎯",
  "Внимание: превышен лимит позитивной энергии! ⚡️"
]

const RandomMessages = () => {
  const [currentMessage, setCurrentMessage] = useState(messages[0])

  useEffect(() => {
    const interval = setInterval(() => {
      const newMessage = messages[Math.floor(Math.random() * messages.length)]
      setCurrentMessage(newMessage)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="terminal-window p-3">
      <div className="flex items-center gap-2 mb-2 border-b border-primary/20 pb-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-mono text-primary">СИСТЕМНЫЕ УВЕДОМЛЕНИЯ</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-sm font-mono text-primary"
        >
          {currentMessage}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default RandomMessages
