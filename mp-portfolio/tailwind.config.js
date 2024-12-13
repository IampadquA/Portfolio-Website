/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": {
          "white": "#F2F2F2",
          "black": "#0D0D0D",
        },
        "blue": {
          "primary" : "#36D0F2",
          "accent" : "#1CF2F2",
        },
        "purple": {
          "primary" : "#400235",
          "accent" : "#D74EDA",
        },
        "text":{
          "p1" : "#0D0D0D",
          "p2" : "rgba(13, 13, 13, 0.7)",
          "p3" : "rgba(13, 13, 13, 0.4)",
          "p4" : "rgba(13, 13, 13, 0.1)",
        },
        "placeholder" : "#D9D9D9",
        "error" :"#F2364C",
      },

      fontFamily: {
        "urbanist": ["Urbanist", "sans-serif"],
        "Onest": ["Onest", "sans-serif"],
      },
    },
  },
  plugins: [],
};
