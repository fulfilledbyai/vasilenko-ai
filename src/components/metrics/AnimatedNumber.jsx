import React, { useEffect, useState } from 'react'
import { animate } from 'framer-motion'

const AnimatedNumber = ({ value, suffix = '', decimals = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const animation = animate(displayValue, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplayValue(v)
    })

    return () => animation.stop()
  }, [value])

  return (
    <span>
      {displayValue.toFixed(decimals)}{suffix}
    </span>
  )
}

export default AnimatedNumber
