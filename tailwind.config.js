/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0036ff",
          "primary-content": "#cadeff",
          "secondary": "#007900",
          "secondary-content": "#d2e4d0",
          "accent": "#00f19e",
          "accent-content": "#001409",
          "neutral": "#2b291e",
          "neutral-content": "#d0d0cd",
          "base-100": "#fff2ef",
          "base-200": "#ded2d0",
          "base-300": "#beb4b1",
          "base-content": "#161414",
          "info": "#00f6ff",
          "info-content": "#001516",
          "success": "#00955e",
          "success-content": "#000803",
          "warning": "#ff8000",
          "warning-content": "#160600",
          "error": "#ff4e6f",
          "error-content": "#160204",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}