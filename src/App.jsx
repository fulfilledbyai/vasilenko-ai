import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BootSequence from './components/BootSequence'
import DashboardLayout from './components/layout/DashboardLayout'
import CRTEffect from './components/CRTEffect'

function App() {
  const [isBooted, setIsBooted] = useState(false)

  return (
    <div className="relative">
      <CRTEffect />
      
      <AnimatePresence mode="wait">
        {!isBooted ? (
          <BootSequence onComplete={() => setIsBooted(true)} />
        ) : (
          <DashboardLayout />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
