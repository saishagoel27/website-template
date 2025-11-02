/**
 * CONTENT CONFIGURATION
 * This file contains all the text content, photos, videos, and messages for your birthday website.
 * 
 * HOW TO USE:
 * 1. Replace placeholder text with your own messages
 * 2. Add your photo file paths and captions
 * 3. Add your video file paths and descriptions
 * 4. Customize the birthday letter paragraphs
 * 5. Save and your changes will appear on the website!
 * 
 * TIP: Keep this file open side-by-side with your website preview to see changes in real-time!
 */

// HERO SECTION CONTENT
/**
 * The opening/landing section content
 * This is the first thing visitors see
 */
export const heroContent = {
  /**
   * Main greeting text
   * @example "Happy Birthday!"
   */
  mainTitle: "Happy Birthday!",
  
  /**
   * Name display (uses displayName from siteConfig by default)
   * You can override it here if you want different text
   * Set to null to use siteConfig.personal.displayName
   * @example "Best Friend!" or "Amazing Person!"
   */
  nameText: null, // Will use siteConfig.personal.displayName if null
  
  /**
   * Subtitle/greeting message under the name
   * @example "I made you something special to celebrate YOU 💖"
   */
  subtitle: "I made you something special to celebrate YOU 💖",
  
  /**
   * Button text for the explore/scroll button
   * @example "See Your Surprise" or "Open Your Gift"
   */
  buttonText: "See Your Surprise",
  
  /**
   * Decorative emojis that appear around the hero section
   * You can add/remove emojis from this array
   */
  floatingEmojis: ['🎂', '🎉', '💖', '✨', '🎈', '🎀'],
  
  /**
   * Main emoji decoration (appears with the subtitle)
   * @example "🎉✨💕" or "🎂🎈🎊"
   */
  decorativeEmojis: "🎉✨💕",
}

// ============================================
// PHOTO GALLERY CONTENT
// ============================================
/**
 * Photo gallery configuration
 * Add your photos here with captions and dates
 */
export const photoGalleryContent = {
  /**
   * Section title
   */
  title: "Our Memories Together",
  
  /**
   * Section subtitle
   */
  subtitle: "Click on each photo to see the memory 💕",
  
  /**
   * Array of photos
   * Each photo needs: id, src (file path), caption, and date
   * 
   * HOW TO ADD PHOTOS:
   * 1. Put your photos in the /public/images/photos/ folder
   * 2. Name them photo1.jpg, photo2.jpg, etc. (or any name you like)
   * 3. Update the 'src' path below to match your file name
   * 4. Add a fun caption and date for each photo
   * 
   * PHOTO FORMAT TIPS:
   * - Use .jpg, .jpeg, or .png files
   * - Square photos (1:1 ratio) look best in the polaroid frames
   * - Recommended size: 800x800 pixels or larger
   * - Keep file sizes under 2MB for faster loading
   */
  photos: [
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
      caption: 'Thanks for being you! 🎂',
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
    
    // ADD MORE PHOTOS HERE:
    // Just copy the format above and change the id, src, caption, and date
    // Example:
    // {
    //   id: 11,
    //   src: '/images/photos/photo11.jpg',
    //   caption: 'Your custom caption here! 💕',
    //   date: 'Your date here'
    // },
  ],
}

// ============================================
// VIDEO MEMORIES CONTENT
// ============================================
/**
 * Video gallery configuration
 * Add your video clips here with titles and descriptions
 */
export const videoMemoriesContent = {
  /**
   * Section title
   */
  title: "Video Memories",
  
  /**
   * Section subtitle
   */
  subtitle: "Press play to relive these special moments 🎥💕",
  
  /**
   * Array of videos
   * Each video needs: id, src (video file), thumbnail (preview image), title, description, date
   * 
   * HOW TO ADD VIDEOS:
   * 1. Put your videos in the /public/videos/ folder
   * 2. Create thumbnail images (screenshots from your video) and save them as video1-thumb.jpg, etc.
   * 3. Update the 'src' and 'thumbnail' paths below
   * 4. Add titles and descriptions
   * 
   * VIDEO FORMAT TIPS:
   * - Use .mp4 format (most compatible)
   * - Keep videos under 50MB for faster loading
   * - Recommended resolution: 1920x1080 (Full HD) or 1280x720 (HD)
   * - For thumbnails: Use .jpg format, 1280x720 pixels
   * 
   * HOW TO CREATE THUMBNAILS:
   * - Open video in a player, pause at a good moment
   * - Take a screenshot and save as JPG
   * - Or use free tools like VLC Media Player or HandBrake
   */
  videos: [
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
    
    // ADD MORE VIDEOS HERE:
    // {
    //   id: 5,
    //   src: '/videos/video5.mp4',
    //   thumbnail: '/videos/video5-thumb.jpg',
    //   title: 'Your video title',
    //   description: 'Your description here! 💕',
    //   date: '2024'
    // },
  ],
}

// ============================================
// FINAL MESSAGE / BIRTHDAY LETTER CONTENT
// ============================================
/**
 * The heartfelt birthday letter section
 * Customize every paragraph to make it personal!
 */
export const finalMessageContent = {
  /**
   * Section title
   */
  title: "A Letter Just For You 💕",
  
  /**
   * Opening salutation
   * Uses siteConfig.personal.displayName by default
   * @example "Dear Sarah," or "To my best friend,"
   */
  salutation: null, // Will use "Dear [displayName]," if null
  
  /**
   * Letter paragraphs
   * This is the main body of your birthday message
   * You can add, remove, or modify paragraphs
   * 
   * TIPS FOR WRITING:
   * - Be genuine and speak from the heart
   * - Include specific memories or inside jokes
   * - Mention qualities you appreciate about them
   * - Keep each paragraph 2-4 sentences for readability
   * - Add emojis to make it more fun! 💕
   */
  paragraphs: [
    // Paragraph 1 - Opening
    "Happy Birthday to the most amazing person I know! 🎂 I wanted to create something special for you because you truly deserve to feel celebrated today and every day.",
    
    // Paragraph 2 - Memories
    "Every moment we've shared together has been a treasure. From the silly jokes that make us laugh until our stomachs hurt, to the deep conversations that last until 3 AM, you've made my life so much brighter. Your kindness, your energy, and your genuine heart are what make you so incredibly special.",
    
    // Paragraph 3 - Appreciation
    "You have this amazing ability to light up any room you walk into. Your smile is contagious, your laughter is music, and your friendship is a gift I cherish more than you know. Thank you for being YOU - honest, loyal, fun, and absolutely one-of-a-kind.",
    
    // Paragraph 4 - Wishes
    "I hope this year brings you everything you've been dreaming of and more. You deserve all the happiness, success, and love in the world. May your days be filled with laughter, your heart with joy, and your life with beautiful memories.",
    
    // ADD MORE PARAGRAPHS HERE:
    // "Your custom paragraph text here...",
  ],
  
  /**
   * Highlighted quote/wish (appears in larger, styled text)
   * This is the emotional centerpiece of your letter
   * @example "Here's to another year of adventures, inside jokes, and unforgettable moments together! 🎉✨"
   */
  highlightedWish: "Here's to another year of adventures, inside jokes, and unforgettable moments together! 🎉✨",
  
  /**
   * Closing phrase
   * @example "With all my love and appreciation," or "Forever grateful for you,"
   */
  closingPhrase: "With all my love and appreciation,",
  
  /**
   * Signature name
   * Uses siteConfig.personal.creatorName by default
   * Set to null to use the config value, or override with custom text
   * @example "Your Best Friend 💕" or "Always, Alex 💖"
   */
  signatureName: null, // Will use siteConfig.personal.creatorName if null
  
  /**
   * Interactive cake section text
   */
  cakeSection: {
    /**
     * Instruction text above the cake
     */
    instruction: "Click each candle to blow them out! 🕯️",
    
    /**
     * Progress text
     * Uses template: "{blown} / {total} candles blown"
     */
    progressText: "candles blown",
    
    /**
     * Success message when all candles are blown
     */
    wishMessage: "🎉 Make a wish! 🎉",
    
    /**
     * Sub-message after making a wish
     */
    wishSubtext: "May all your dreams come true this year! 💫✨",
  },
  
  /**
   * Bottom inspirational quote
   * A nice quote to end the message section
   */
  bottomQuote: {
    text: "\"The best things in life are the people we love, the places we've been, and the memories we've made along the way.\"",
    /**
     * Decorative emojis after the quote
     */
    emojis: "💖✨🎂🎉💕",
  },
}

// ============================================
// FOOTER CONTENT
// ============================================
/**
 * Footer section at the bottom of the page
 */
export const footerContent = {
  /**
   * Main footer text
   * @example "Made with 💕 for the most amazing person"
   */
  mainText: "Made with 💕 for the most amazing person",
  
  /**
   * Sub-text or copyright
   * @example "© 2024 • Crafted with love and React"
   */
  subText: "© 2024 • Crafted with love and React",
  
  /**
   * Show social media links? (uses siteConfig.social)
   */
  showSocialLinks: false,
}

// ============================================
// HELPER FUNCTIONS
// ============================================
/**
 * Get hero name text
 * Returns custom nameText or falls back to siteConfig
 * @param {object} siteConfig - The site configuration object
 * @returns {string} - The name text to display
 */
export const getHeroNameText = (siteConfig) => {
  return heroContent.nameText || siteConfig.personal.displayName
}

/**
 * Get letter salutation
 * Returns custom salutation or creates one from displayName
 * @param {object} siteConfig - The site configuration object
 * @returns {string} - The salutation text
 */
export const getLetterSalutation = (siteConfig) => {
  return finalMessageContent.salutation || `Dear ${siteConfig.personal.displayName},`
}

/**
 * Get signature name
 * Returns custom signature or uses creatorName from config
 * @param {object} siteConfig - The site configuration object
 * @returns {string} - The signature name with emoji
 */
export const getSignatureName = (siteConfig) => {
  const name = finalMessageContent.signatureName || siteConfig.personal.creatorName
  return `${name} 💕`
}

/**
 * Get candle count from siteConfig
 * @param {object} siteConfig - The site configuration object
 * @returns {number} - Number of candles (1-5)
 */
export const getCandleCount = (siteConfig) => {
  const count = siteConfig.features.numberOfCandles
  // Ensure it's between 1 and 5
  return Math.min(Math.max(count, 1), 5)
}

// Export everything as default for easier importing
export default {
  hero: heroContent,
  photoGallery: photoGalleryContent,
  videoMemories: videoMemoriesContent,
  finalMessage: finalMessageContent,
  footer: footerContent,
  helpers: {
    getHeroNameText,
    getLetterSalutation,
    getSignatureName,
    getCandleCount,
  }
}