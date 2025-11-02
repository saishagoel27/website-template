import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Volume2, VolumeX } from 'lucide-react'

export default function VideoMemories() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isMuted, setIsMuted] = useState(false)

  const videos = [
    {
      id: 1,
      src: '/videos/video1.mp4',
      thumbnail: '/videos/video1-thumb.jpg', 
      title: 'Best Moments Together',
      description: 'Remember all these amazing times? 🎬💕',
      date: '2024'
    },
    {
      id: 2,
      src: '/videos/video2.mp4',
      thumbnail: '/videos/video2-thumb.jpg',
      title: 'Our Adventures',
      description: 'Every adventure with you is unforgettable! 🌟',
      date: '2024'
    },
    {
      id: 3,
      src: '/videos/video3.mp4',
      thumbnail: '/videos/video3-thumb.jpg',
      title: 'Fun Times',
      description: 'You always make me laugh! 😂✨',
      date: '2024'
    },
    {
      id: 4,
      src: '/videos/video4.mp4',
      thumbnail: '/videos/video4-thumb.jpg',
      title: 'Special Memories',
      description: 'These moments mean everything to me 💖',
      date: '2024'
    },
  ]

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-cream/50 to-soft-pink/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 text-7xl opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          🎬
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-6xl opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          📹
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
          Video Memories
        </h2>
        <p className="text-xl font-handwriting text-deep-rose/70">
          Press play to relive these special moments 🎥💕
        </p>
      </motion.div>

      {/* Video Grid - VHS/Retro Style */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative group clickable"
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: Math.random() * 4 - 2 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: 'backOut'
              }}
              whileHover={{ 
                scale: 1.03, 
                rotate: 0,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedVideo(video)}
            >
              {/* VHS Card Container */}
              <div className="relative bg-white p-3 shadow-2xl rounded-sm overflow-hidden border-4 border-gray-200">
                {/* VHS Tape Effect - Top Label */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 flex items-center justify-between px-3 z-10">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-[8px] text-gray-300 font-mono tracking-wider">
                    {video.date} • {video.title.toUpperCase()}
                  </span>
                </div>

                {/* Video Preview */}
                <div className="relative aspect-video mt-6 bg-black/80 rounded-sm overflow-hidden">
                  {/* Video Element (muted preview) */}
                  <video
                    src={video.src}
                    poster={video.thumbnail}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all">
                    <motion.div
                      className="w-16 h-16 bg-hot-pink rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </motion.div>
                  </div>

                  {/* Scanline Effect (VHS aesthetic) */}
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <motion.div
                      className="h-full w-full bg-gradient-to-b from-transparent via-white to-transparent"
                      animate={{ y: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      style={{ backgroundSize: '100% 2px' }}
                    />
                  </div>
                </div>

                {/* Video Info - Handwritten Label Style */}
                <div className="mt-3 px-2">
                  <h3 className="font-handwriting text-xl text-gray-800 mb-1">
                    {video.title}
                  </h3>
                  <p className="font-handwriting text-md text-coral-pink">
                    {video.description}
                  </p>
                </div>

                {/* Decorative tape on corners */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-coral-pink/40 backdrop-blur-sm rotate-45 shadow-sm"></div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-hot-pink/40 backdrop-blur-sm rotate-45 shadow-sm"></div>
              </div>

              {/* Vintage film strip effect */}
              <div className="absolute -left-1 top-1/4 bottom-1/4 w-3 bg-gray-800 opacity-30 pointer-events-none">
                <div className="h-full flex flex-col justify-around py-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-1 bg-gray-700"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-hot-pink hover:text-white transition-all duration-200 clickable shadow-lg z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Mute/Unmute Button */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute -top-12 right-14 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-coral-pink hover:text-white transition-all duration-200 clickable shadow-lg z-10"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              {/* Video Player */}
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                <video
                  src={selectedVideo.src}
                  className="w-full h-auto"
                  controls
                  autoPlay
                  muted={isMuted}
                  playsInline
                />
              </div>

              {/* Video Info Below */}
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-handwriting text-white mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-xl font-handwriting text-soft-pink">
                  {selectedVideo.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}