import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import { Heart, Sparkles } from 'lucide-react'

export default function FinalMessage() {
  // Track which candles are blown out (3 candles total)
  const [candlesBlown, setCandlesBlown] = useState([false, false, false])
  const [showConfetti, setShowConfetti] = useState(false)

  const blowCandle = (index) => {
    const newCandlesBlown = [...candlesBlown]
    newCandlesBlown[index] = true
    setCandlesBlown(newCandlesBlown)

    // If all candles are blown, show confetti
    if (newCandlesBlown.every(candle => candle === true)) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 6000)
    }
  }

  const allCandlesBlown = candlesBlown.every(candle => candle === true)

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-soft-pink/20 to-cream">
      {/* Confetti - only when ALL candles are blown */}
      <AnimatePresence>
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={600}
            colors={['#FF1493', '#FFB6C1', '#DC143C', '#FF6B9D', '#FFC0CB', '#C71585']}
            gravity={0.3}
          />
        )}
      </AnimatePresence>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 text-6xl opacity-10"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          🎂
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-5xl opacity-10"
          animate={{ rotate: [360, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          🎈
        </motion.div>
      </div>

      <div className="container mx-auto max-w-5xl">
        {/* Handwritten Letter on Lined Paper */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Paper Container with Notebook Lines */}
          <div 
            className="relative bg-white rounded-lg shadow-2xl p-8 md:p-12 lg:p-16 overflow-hidden border-l-4 border-hot-pink/30"
            style={{
              backgroundImage: `repeating-linear-gradient(
                transparent,
                transparent 29px,
                #FFB6C1 29px,
                #FFB6C1 30px,
                transparent 30px,
                transparent 60px
              )`,
              backgroundSize: '100% 60px',
              backgroundPosition: '0 45px'
            }}
          >
            {/* Hole Punches (notebook rings) */}
            <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-around py-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-gray-300 border-2 border-gray-400"></div>
              ))}
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-3 -left-3 text-4xl z-10">💝</div>
            <div className="absolute -top-3 -right-3 text-4xl z-10">💖</div>
            <div className="absolute -bottom-3 -left-3 text-4xl z-10">✨</div>
            <div className="absolute -bottom-3 -right-3 text-4xl z-10">🎀</div>

            {/* Letter Content */}
            <div className="relative pl-6">
              {/* Header */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-handwriting font-bold text-hot-pink mb-4 drop-shadow-sm">
                  A Letter Just For You 💕
                </h2>
                <div className="flex justify-center gap-2">
                  <Heart className="w-6 h-6 text-hot-pink fill-hot-pink animate-pulse" />
                  <Heart className="w-6 h-6 text-coral-pink fill-coral-pink animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <Heart className="w-6 h-6 text-cherry-red fill-cherry-red animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </motion.div>

              {/* Letter Body - CUSTOMIZE THIS! */}
              <motion.div
                className="space-y-8 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {/* Opening */}
                <p className="text-2xl md:text-3xl font-handwriting text-deep-rose first-letter:text-6xl first-letter:font-bold first-letter:text-hot-pink first-letter:mr-1 first-letter:float-left">
                  Dear PorASS,
                </p>

                {/* Paragraph 1 */}
                <p className="text-xl md:text-2xl font-handwriting leading-loose">
                  Happy Birthday to the most amazing person I know! 🎂 I wanted to create something special for you because you truly deserve to feel celebrated today and every day.
                </p>

                {/* Paragraph 2 */}
                <p className="text-xl md:text-2xl font-handwriting leading-loose">
                  Every moment we've shared together has been a treasure. From the silly jokes that make us laugh until our stomachs hurt, to the deep conversations that last until 3 AM, you've made my life so much brighter. Your kindness, your energy, and your genuine heart are what make you so incredibly special.
                </p>

                {/* Paragraph 3 */}
                <p className="text-xl md:text-2xl font-handwriting leading-loose">
                  You have this amazing ability to light up any room you walk into. Your smile is contagious, your laughter is music, and your friendship is a gift I cherish more than you know. Thank you for being YOU - honest, loyal, fun, and absolutely one-of-a-kind.
                </p>

                {/* Paragraph 4 */}
                <p className="text-xl md:text-2xl font-handwriting leading-loose">
                  I hope this year brings you everything you've been dreaming of and more. You deserve all the happiness, success, and love in the world. May your days be filled with laughter, your heart with joy, and your life with beautiful memories.
                </p>

                {/* Closing Statement */}
                <p className="text-2xl md:text-3xl font-handwriting text-hot-pink text-center py-6 italic">
                  Here's to another year of adventures, inside jokes, and unforgettable moments together! 🎉✨
                </p>

                {/* Signature */}
                <p className="text-xl md:text-2xl font-handwriting text-right italic pt-4">
                  With all my love and appreciation,
                  <br />
                  <span className="text-3xl text-coral-pink font-bold">
                    [Your Name] 💕
                  </span>
                </p>
              </motion.div>

              {/* Divider */}
              <div className="my-16 flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-coral-pink to-transparent"></div>
                <Sparkles className="w-6 h-6 text-hot-pink" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-coral-pink to-transparent"></div>
              </div>

              {/* Interactive Cake Section */}
              <motion.div
                className="text-center pt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p className="text-2xl md:text-3xl font-handwriting text-deep-rose/80 mb-8">
                  Click each candle to blow them out! 🕯️
                </p>

                {/* Cake with 3 Candles ON TOP */}
                <div className="relative inline-block">
                  {/* Birthday Cake */}
                  <motion.div
                    className="text-[14rem] md:text-[18rem] transition-all duration-300 drop-shadow-2xl relative"
                    animate={allCandlesBlown ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{ duration: 0.6, repeat: allCandlesBlown ? 3 : 0 }}
                  >
                    🎂
                    
                    {/* 3 Candles positioned ON the cake */}
                    <div className="absolute top-[12%] left-1/2 -translate-x-1/2 flex gap-4 md:gap-6">
                      {candlesBlown.map((isBlown, index) => (
                        <motion.button
                          key={index}
                          onClick={() => !isBlown && blowCandle(index)}
                          disabled={isBlown}
                          className={`text-5xl md:text-6xl clickable transition-all ${isBlown ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
                          whileHover={!isBlown ? { scale: 1.4, y: -10 } : {}}
                          whileTap={!isBlown ? { scale: 0.7 } : {}}
                          animate={!isBlown ? {
                            y: [0, -5, 0],
                            rotate: [0, 4, -4, 0]
                          } : {
                            opacity: 0,
                            scale: 0,
                            y: -30,
                            rotate: 15
                          }}
                          transition={!isBlown ? {
                            y: { duration: 1.8, repeat: Infinity },
                            rotate: { duration: 2.5, repeat: Infinity }
                          } : {
                            duration: 0.5,
                            ease: 'easeOut'
                          }}
                        >
                          🕯️
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Glow effect when candles are lit */}
                  {!allCandlesBlown && (
                    <motion.div
                      className="absolute top-[8%] left-1/2 -translate-x-1/2 w-48 h-24 bg-hot-pink/30 rounded-full blur-3xl -z-10"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Progress Indicator */}
                <div className="mt-8 flex justify-center gap-4">
                  {candlesBlown.map((isBlown, index) => (
                    <motion.div
                      key={index}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        isBlown ? 'bg-gray-300' : 'bg-hot-pink animate-pulse'
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.15 }}
                    />
                  ))}
                </div>

                <p className="text-base font-handwriting text-gray-500 mt-4">
                  {candlesBlown.filter(Boolean).length} / 3 candles blown
                </p>

                {/* Message after all candles are blown */}
                <AnimatePresence>
                  {allCandlesBlown && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      className="mt-12"
                    >
                      <p className="text-4xl md:text-5xl font-handwriting text-hot-pink mb-4 animate-bounce">
                        🎉 Make a wish! 🎉
                      </p>
                      <p className="text-2xl font-handwriting text-gray-600">
                        May all your dreams come true this year! 💫✨
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <p className="text-2xl md:text-3xl font-script text-deep-rose/80 italic px-4">
            "The best things in life are the people we love, the places we've been, and the memories we've made along the way."
          </p>
          <div className="flex justify-center gap-3 mt-6 text-4xl">
            💖✨🎂🎉💕
          </div>
        </motion.div>
      </div>
    </section>
  )
}