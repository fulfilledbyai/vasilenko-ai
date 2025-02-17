import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sendMessage } from '../../services/deepseek'

const AITerminal = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: `Добро пожаловать, новый исследователь! 

Рад приветствовать вас в самом позитивном проекте на блокчейне TON! 

Чем могу помочь?
- Рассказать о проекте
- Показать как купить токен
- Объяснить наши исследования
- Поделиться позитивом 😊`, 
      isAI: true 
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = { id: Date.now(), text: inputValue, isAI: false }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await sendMessage(inputValue)
      const aiMessage = { id: Date.now() + 1, text: response, isAI: true }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage = { 
        id: Date.now() + 1, 
        text: 'Извините, произошла ошибка. Попробуйте позже! 😊', 
        isAI: true 
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const formatMessage = (msg) => {
    const author = msg.isAI ? 'НИКОЛАЙ АНАТОЛЬЕВИЧ ВАСИЛЕНКО' : 'ИССЛЕДОВАТЕЛЬ'
    return `[${author}]: ${msg.text}`
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex-none flex items-center justify-between p-4 border-b border-primary/20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-mono text-primary">ИССЛЕДОВАТЕЛЬСКИЙ ТЕРМИНАЛ ИИ</span>
        </div>
        <div className="text-sm font-mono text-secondary">РЕЖИМ СЧАСТЬЯ: ВКЛЮЧЕН</div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="p-6 space-y-6">
          <AnimatePresence>
            {messages.map(msg => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: msg.isAI ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex ${msg.isAI ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[80%] p-4 rounded-lg ${
                  msg.isAI ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                } font-mono text-base whitespace-pre-wrap`}>
                  {formatMessage(msg)}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-primary/10 text-primary p-4 rounded-lg font-mono text-base">
                  [НИКОЛАЙ АНАТОЛЬЕВИЧ ВАСИЛЕНКО]: Думаю... 🤔
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="flex-none p-4 border-t border-primary/20">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Введите ваш запрос..."
            className="flex-1 bg-black/40 border border-primary/20 rounded-lg px-4 py-3 text-primary font-mono text-base focus:outline-none focus:border-primary/50"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="lab-button px-6 py-3 text-base whitespace-nowrap"
            disabled={isLoading}
          >
            {isLoading ? 'АНАЛИЗ...' : 'ОТПРАВИТЬ'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AITerminal
