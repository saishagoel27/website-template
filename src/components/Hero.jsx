import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ChevronDown } from 'lucide-react'

export default function Hero({ onExploreClick }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-soft-pink/40 to-blush/60">
      {/* Simple animated background - just 2 blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-hot-pink/20 to-coral-pink/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 md:w-[500px] h-80 md:h-[500px] bg-gradient-to-br from-cherry-red/15 to-deep-rose/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating emojis - only 4 on mobile, 6 on desktop */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(isMobile ? 4 : 6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl md:text-4xl opacity-30"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {['🎂', '🎉', '💖', '✨', '🎈', '🎀'][i]}
          </motion.div>
        ))}
      </div>

      {/* Main content - Simple and clean */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Title - appears immediately, no annoying delays */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold gradient-text mb-6"
            animate={{
              scale: isMobile ? [1, 1.02, 1] : [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Happy Birthday!
          </motion.h1>

          {/* Name - CUSTOMIZE THIS */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-handwriting text-deep-rose mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            [Name Here] 🎂
          </motion.h2>

          {/* Emojis */}
          <motion.div
            className="text-5xl md:text-6xl mb-8"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            🎉✨💕
          </motion.div>
        </motion.div>

        {/* Subtitle - CUSTOMIZE THIS */}
        <motion.p
          className="text-xl md:text-2xl font-handwriting text-deep-rose/80 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I made you something special to celebrate YOU 💖
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={onExploreClick}
          className="group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-hot-pink to-cherry-red text-white text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 touch-target"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: isMobile ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2 justify-center">
            See Your Surprise
            <Heart className="w-5 h-5" />
          </span>
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-coral-pink"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-xs md:text-sm font-handwriting">Scroll down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}