import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart } from 'lucide-react'

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  // REPLACE THESE WITH YOUR ACTUAL PHOTOS AND CAPTIONS
  const photos = [
    {
      id: 1,
      src: '/images/photos/photo1.jpg',
      caption: 'Remember this amazing day? You made me laugh so hard! 😂💕',
      date: 'Summer 2023'
    },
    {
      id: 2,
      src: '/images/photos/photo2.jpg',
      caption: 'This was the best adventure we ever had together! 🌟',
      date: 'Fall 2023'
    },
    {
      id: 3,
      src: '/images/photos/photo3.jpg',
      caption: 'You always know how to make me smile 💖',
      date: 'Winter 2023'
    },
    {
      id: 4,
      src: '/images/photos/photo4.jpg',
      caption: 'One of my favorite moments with you! ✨',
      date: 'Spring 2024'
    },
    {
      id: 5,
      src: '/images/photos/photo5.jpg',
      caption: 'I love how happy you look here! 🎉',
      date: 'Summer 2024'
    },
    {
      id: 6,
      src: '/images/photos/photo6.jpg',
      caption: 'This memory will stay with me forever 💕',
      date: 'Fall 2024'
    },
    {
      id: 7,
      src: '/images/photos/photo7.jpg',
      caption: 'You\'re the sweetest person I know! 🍰',
      date: 'Winter 2024'
    },
    {
      id: 8,
      src: '/images/photos/photo8.jpg',
      caption: 'Thanks for being you, PorASS! 🎂',
      date: 'Recent'
    },
    {
      id: 9,
      src: '/images/photos/photo9.jpg',
      caption: 'Every moment with you is special ⭐',
      date: 'Recent'
    },
    {
      id: 10,
      src: '/images/photos/photo10.jpg',
      caption: 'Happy Birthday to the most amazing person! 🎈',
      date: 'Today!'
    },
  ]

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 text-6xl opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          💖
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10 text-5xl opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          ✨
        </motion.div>
      </div>

      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-display font-bold gradient-text mb-4">
          Our Memories Together
        </h2>
        <p className="text-xl font-handwriting text-deep-rose/70">
          Click on each photo to see the memory 💕
        </p>
      </motion.div>

      {/* Photo Grid - Scattered Polaroid Style */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="polaroid-card clickable"
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: Math.random() * 6 - 3 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'backOut'
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Polaroid Frame */}
              <div className="bg-white p-4 pb-12 shadow-polaroid rounded-sm hover-lift">
                {/* Photo */}
                <div className="aspect-square overflow-hidden rounded-sm mb-3">
                  <img
                    src={photo.src}
                    alt={`Memory ${photo.id}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Date Label (handwritten style) */}
                <p className="text-center font-handwriting text-lg text-gray-600">
                  {photo.date}
                </p>
              </div>

              {/* Decorative tape/clip */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-coral-pink/30 backdrop-blur-sm rounded-sm rotate-0 shadow-sm">
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal for Selected Photo */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Modal Content */}
            <motion.div
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-hot-pink hover:text-white transition-all duration-200 clickable shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative aspect-video md:aspect-[4/3] bg-gray-100">
                <img
                  src={selectedPhoto.src}
                  alt={`Memory ${selectedPhoto.id}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Caption Section */}
              <div className="p-8 bg-gradient-to-br from-cream to-soft-pink/30">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-handwriting text-deep-rose mb-3">
                    {selectedPhoto.caption}
                  </p>
                  <p className="text-sm text-coral-pink/70 font-body">
                    {selectedPhoto.date}
                  </p>

                  {/* Decorative hearts */}
                  <div className="flex justify-center gap-2 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      >
                        <Heart className="w-5 h-5 text-hot-pink fill-hot-pink" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}