/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulseCustom: "pulseCustom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounceCustom: "bounceCustom 1s infinite", // ✅ Added bounce animation
      },
      keyframes: {
        pulseCustom: {
          "50%": { opacity: "0.5" },
        },
        bounceCustom: { // ✅ Added bounce keyframes
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    }, // ✅ Correctly closed `extend`
  }, // ✅ Correctly closed `theme`
  plugins: [],
};
