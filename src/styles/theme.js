export const theme = {
  colors: {
    // Primary lab colors
    labPrimary: '#00ff9d',      // Bright green for main indicators
    labSecondary: '#ff00e5',    // Neon pink for accents
    labTertiary: '#00f0ff',     // Cyan for additional highlights
    
    // Background layers
    bgDark: '#0a0a0a',          // Base dark
    bgPanel: '#111111',         // Panel background
    bgTerminal: '#0c0c0c',      // Terminal background
    
    // Status colors
    success: '#00ff9d',         // Happy/Positive states
    warning: '#ffff00',         // Medium states (rarely used)
    error: '#ff00e5',           // Used for emphasis, not actual errors
    
    // Text colors
    textPrimary: '#ffffff',     // Main text
    textSecondary: '#b3b3b3',   // Secondary text
    textAccent: '#00ff9d',      // Highlighted text
  },
  
  // Glass-like panel effect
  glassEffect: {
    background: 'rgba(10, 10, 10, 0.8)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(0, 255, 157, 0.1)',
  },
  
  // Terminal styling
  terminal: {
    background: '#0c0c0c',
    fontFamily: 'JetBrains Mono, monospace',
    textColor: '#00ff9d',
  },
  
  // Animation durations
  animation: {
    fast: '0.2s',
    medium: '0.5s',
    slow: '1s',
  }
}
