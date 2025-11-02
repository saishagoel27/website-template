/**
 * SITE CONFIGURATION
 * ===================
 * This file contains all the basic settings for your birthday website.
 * Simply change the values below to customize the site for your friend!
 * 
 * HOW TO USE:
 * 1. Replace the placeholder values with your friend's information
 * 2. Customize colors if you want a different theme (optional)
 * 3. Toggle sections on/off based on what you want to show
 * 4. Save the file and the changes will appear automatically
 */

export const siteConfig = {
  
  // PERSONAL INFORMATION
  // This section contains information about the birthday person
  
  personal: {
    /**
     * Full name of the birthday person
     * This appears in the meta tags and can be used in messages
     * @example "Sarah Johnson"
     */
    name: "Saisha",
    
    /**
     * Nickname or casual name (used in the hero section)
     * @example "Sarah" or "Bestie"
     */
    displayName: "[Name Here]",
    
    /**
     * Age they're turning (optional - can be null)
     * @example 25
     */
    age: null,
    
    /**
     * Birthday date (for display purposes)
     * @example "March 15, 2024"
     */
    birthdayDate: "Today!",
    
    /**
     * Your name (the person creating this website)
     * This appears in the final message signature
     * @example "Alex"
     */
    creatorName: "[Your Name]",
  },

  // THEME & COLORS
  // Customize the color scheme of the website
  // Leave as 'default' to use the pink/red theme, or override with custom colors
  
  theme: {
    /**
     * Use the default pink/red theme?
     * Set to 'default' to use built-in colors
     * Set to 'custom' to use your own colors below
     */
    mode: 'default', // 'default' or 'custom'
    
    /**
     * Custom colors (only used if mode is 'custom')
     * You can use any valid CSS color (hex, rgb, color names)
     * These override the Tailwind theme colors
     */
    customColors: {
      primary: '#FF1493',      // Main accent color (hot pink)
      secondary: '#FF6B9D',    // Secondary accent (coral pink)
      accent: '#DC143C',       // Highlight color (cherry red)
      background: '#FFF5F5',   // Page background (cream)
      text: '#C71585',         // Main text color (deep rose)
    }
  },


  // SECTION VISIBILITY
  // Control which sections appear on the website
  // Set to true to show, false to hide
  
  sections: {
    /**
     * Show the hero/landing section?
     * (The big "Happy Birthday" opening)
     */
    showHero: true,
    
    /**
     * Show the photo gallery section?
     * (Polaroid-style photo grid)
     */
    showPhotoGallery: true,
    
    /**
     * Show the video memories section?
     * (VHS-style video player)
     */
    showVideoMemories: true,
    
    /**
     * Show the final message section?
     * (Handwritten letter with birthday cake)
     */
    showFinalMessage: true,
    
    /**
     * Show the footer?
     */
    showFooter: true,
  },

  // FEATURES & INTERACTIONS
  // Enable or disable interactive features
  
  features: {
    /**
     * Show custom cursor (heart cursor)?
     * Note: Only works on desktop/laptop computers
     */
    customCursor: true,
    
    /**
     * Show confetti when all candles are blown out?
     */
    confetti: true,
    
    /**
     * Number of candles on the birthday cake
     * Can be 1-5 candles
     */
    numberOfCandles: 3,
    
    /**
     * Auto-play background music? (if you add music)
     * Currently not implemented - placeholder for future feature
     */
    backgroundMusic: false,
  },

  // ============================================
  // SEO & META TAGS
  // ============================================
  // Information for search engines and social media sharing
  
  seo: {
    /**
     * Page title (appears in browser tab)
     */
    title: "Happy Birthday!!",
    
    /**
     * Meta description (appears in search results)
     */
    description: "A special birthday website made with love just for you!",
    
    /**
     * Author name (you!)
     */
    author: "Your Name",
    
    /**
     * Favicon emoji (appears in browser tab)
     * Can be any emoji
     */
    faviconEmoji: "🎂",
  },

  // ============================================
  // SOCIAL MEDIA (Optional)
  // ============================================
  // Add links to social media profiles
  // Leave as empty strings ('') if you don't want to include them
  
  social: {
    instagram: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    // Add more as needed
  },

  // ============================================
  // LOADING SCREEN
  // ============================================
  // Customize the loading animation
  
  loading: {
    /**
     * Loading duration in milliseconds
     * How long the loading screen appears
     * @example 2000 = 2 seconds
     */
    duration: 2000,
    
    /**
     * Loading message text
     */
    message: "Loading Your Birthday Surprise...",
    
    /**
     * Loading emoji
     */
    emoji: "🎂",
  },
}

/**
 * HELPER FUNCTION
 * Checks if a section should be displayed
 * @param {string} sectionName - Name of the section to check
 * @returns {boolean} - True if section should be shown
 */
export const isSectionVisible = (sectionName) => {
  return siteConfig.sections[`show${sectionName}`] ?? true
}

/**
 * HELPER FUNCTION
 * Gets the current theme colors
 * Returns custom colors if theme mode is 'custom', otherwise returns null
 * @returns {object|null} - Color object or null
 */
export const getThemeColors = () => {
  if (siteConfig.theme.mode === 'custom') {
    return siteConfig.theme.customColors
  }
  return null
}

// Export as default for easier importing
export default siteConfig