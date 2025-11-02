import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CustomCursor from '@components/CustomCursor'
import Hero from '@components/Hero'
import PhotoGallery from '@components/PhotoGallery'
import VideoMemories from '@components/VideoMemories'
import FinalMessage from '@components/FinalMessage'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-hot-pink via-coral-pink to-cherry-red"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                className="text-8xl mb-4"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                🎂
              </motion.div>
              <h2 className="text-4xl font-display font-bold text-white mb-2">
                Loading Your Birthday Surprise...
              </h2>
              <motion.div
                className="w-64 h-2 bg-white/30 rounded-full mx-auto overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section id="hero">
          <Hero onExploreClick={() => scrollToSection('photos')} />
        </section>

        {/* Photo Gallery Section */}
        <section id="photos" className="relative py-20">
          <PhotoGallery />
        </section>

        {/* Video Memories Section - NEW! */}
        <section id="videos" className="relative py-20">
          <VideoMemories />
        </section>

        {/* Final Message Section */}
        <section id="message" className="relative py-20">
          <FinalMessage />
        </section>

        {/* Footer */}
        <footer className="relative py-12 text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg font-handwriting text-deep-rose/80 mb-2">
                
              </p>
              <p className="text-sm text-coral-pink/60">

              </p>
            </motion.div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App