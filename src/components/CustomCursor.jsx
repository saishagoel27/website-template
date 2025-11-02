import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState([])

  useEffect(() => {
    // Add class to body for custom cursor
    document.body.classList.add('custom-cursor-active')

    // Track mouse movement
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Add trail particles
      setTrail(prev => [...prev.slice(-8), { 
        x: e.clientX, 
        y: e.clientY, 
        id: Date.now() 
      }])
    }

    // Detect hover over clickable elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' || 
        e.target.tagName === 'A' || 
        e.target.classList.contains('clickable')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  return (
    <>
      {/* Trail particles - small sparkles following cursor */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-hot-pink rounded-full pointer-events-none z-[9999]"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            left: point.x,
            top: point.y,
          }}
        />
      ))}

      {/* Main cursor - the heart */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
          isHovering 
            ? 'border-cherry-red bg-hot-pink/30 shadow-glow-pink' 
            : 'border-hot-pink bg-transparent'
        }`}>
          {/* Heart emoji */}
          <span className="text-[10px]">💖</span>
        </div>
      </motion.div>

      {/* Outer ring - larger circle that follows slower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.4 : 0.2,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className="w-10 h-10 rounded-full border border-coral-pink"></div>
      </motion.div>
    </>
  )
}