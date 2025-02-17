import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MatrixRain from './effects/MatrixRain'

const bootMessages = [
  { id: 1, text: "Инициализация протокола позитива..." },
  { id: 2, text: "Загрузка базы данных улыбок: 100% ✨" },
  { id: 3, text: "Активация модуля хорошего настроения..." },
  { id: 4, text: "Подключение к мейнфрейму счастья..." },
  { id: 5, text: "Синхронизация с блокчейном TON..." },
  { id: 6, text: "Запуск $VASILENKO AI..." }
]

const finalMessage = {
  line1: "ДОБРО ПОЖАЛОВАТЬ В ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР $VASILENKO",
  line2: "ТЕКУЩИЙ УРОВЕНЬ СЧАСТЬЯ: МАКСИМАЛЬНЫЙ",
  line3: "ПРОТОКОЛ ДОБРА: АКТИВИРОВАН"
}

const BootSequence = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showFinal, setShowFinal] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < bootMessages.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (!showFinal) {
      const finalTimer = setTimeout(() => {
        setShowFinal(true)
      }, 1000)
      return () => clearTimeout(finalTimer)
    } else if (!isComplete) {
      const completeTimer = setTimeout(() => {
        setIsComplete(true)
      }, 2500)
      return () => clearTimeout(completeTimer)
    }
  }, [currentIndex, showFinal])

  useEffect(() => {
    if (isComplete) {
      const transitionTimer = setTimeout(() => {
        onComplete?.()
      }, 1000)
      return () => clearTimeout(transitionTimer)
    }
  }, [isComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center"
      style={{ fontFamily: 'monospace' }}
    >
      <MatrixRain />
      
      <div className="relative w-full max-w-[500px] p-4 z-10">
        <div className="bg-black/95 rounded-lg border border-primary/20 p-6 backdrop-blur-sm">
          <AnimatePresence>
            {bootMessages.slice(0, currentIndex).map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary mb-3 text-shadow-glow"
              >
                <span className="text-secondary">[VASILENKO]</span> {message.text}
              </motion.div>
            ))}
          </AnimatePresence>

          {showFinal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 border border-primary/30 rounded-lg p-4 bg-black/80"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-xl font-bold text-primary mb-4 text-shadow-glow"
              >
                {finalMessage.line1}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center text-secondary mb-2 text-shadow-glow"
              >
                {finalMessage.line2}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-center text-primary text-xl font-bold text-shadow-glow"
              >
                {finalMessage.line3}
              </motion.div>
            </motion.div>
          )}
          
          {!isComplete && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-primary mt-4 text-shadow-glow"
            >
              _
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default BootSequence
