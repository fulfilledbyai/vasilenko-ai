import React, { useEffect, useRef } from 'react'

const characters = [
  '😊', '😄', '😎', '💚', '💜',
  'добро', 'улыбка', 'счастье',
  '$VASILENKO', 'TON',
  'В', 'А', 'С', 'И', 'Л', 'Е', 'Н', 'К', 'О'
]

const MatrixRain = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Rain drops
    const drops = []
    const fontSize = 16
    const columns = canvas.width / fontSize

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const getRandomCharacter = () => {
      return characters[Math.floor(Math.random() * characters.length)]
    }

    const getRandomColor = () => {
      return Math.random() > 0.5 ? '#00ff9d' : '#ff00e5'
    }

    const draw = () => {
      // Semi-transparent black background to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const text = getRandomCharacter()
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = getRandomColor()
        
        // Draw the character
        ctx.fillStyle = getRandomColor()
        ctx.font = `${fontSize}px monospace`
        ctx.fillText(text, x, y)

        // Reset glow
        ctx.shadowBlur = 0

        // Reset drop to top or move it down
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    // Animation loop
    let animationFrame
    const animate = () => {
      draw()
      animationFrame = requestAnimationFrame(animate)
    }
    
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 0 }}
    />
  )
}

export default MatrixRain
