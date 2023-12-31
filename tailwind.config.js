/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
    },
    colors: {
      blue: "#1fb6ff",
      brown: {
        50: "#f3f1f1",
        100: "#e5e2df",
        200: "#cac4c1",
        300: "#aea59f",
        400: "#6e5145",
        500: "#503e32",
        600: "#423129",
        700: "#362721",
        800: "#2b1f1b",
        900: "#1e1610",
      },
      purple: {
        50: "#f5e1fc",
        100: "#e0c3f8",
        200: "#ad6eb8", // Sua cor personalizada
        300: "#9366b3",
        400: "#7943bf", // Sua cor personalizada
        500: "#663fb3",
        600: "#5a38a1",
        700: "#5130a0",
        800: "#513b74", // Sua cor personalizada
        900: "#36264f",
      },
      pink: {
        50: "#fff0f6",
        100: "#ffdeeb",
        200: "#fcc2d7",
        300: "#faa2c1",
        400: "#f88da9",
        500: "#f66994",
        600: "#f45d8a",
        700: "#f2437a",
        800: "#ed124b",
        900: "#b61a38",
      },
      orange: {
        50: "#fff7ed",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ff9c1a",
        500: "#cf763c",
        600: "#e78910",
        700: "#da8a07",
        800: "#ae7001",
        900: "#935f00",
      },
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: {
        50: "#f9fafb",
        100: "#f4f5f7",
        200: "#e5e7eb",
        300: "#d2d6dc",
        400: "#758196",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        gradient: "gradient 5s ease infinite",
        'border-orange': 'border-orange 4s linear infinite',
        'border-purple': 'border-purple 4s linear infinite',
        'border-gray': 'border-gray 4s linear infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      },
      keyframes: {
        gradient: {
          "0%": {
            "background-position": "100% 50%",
          },
          "50%": {
            "background-position": "0% 50%",
          },
          "100%": {
            "background-position": "100% 50%",
          },
        },
        'border-orange': {
          "0%": {
            "border-color": "#ff9c1a"
          },
          "50%": {
            "border-color": "#935f00"
          },
          "100%": {
            "border-color": "#ff9c1a"
          }
        },
        'border-gray': {
          "0%": {
            "border-color": "#1f2937"
          },
          "50%": {
            "border-color": "#6b7280"
          },
          "100%": {
            "border-color": "#1f2937"
          }
        },
        'border-purple': {
          "0%": {
            "border-color": "#7943bf"
          },
          "50%": {
            "border-color": "#f88da9"
          },
          "100%": {
            "border-color": "#7943bf"
          }
        },
      },
      backgroundSize: {
        xp: "300% 100%",
      },
      fontFamily: {
        sans: ['"Chakra Petch"', '"sans-serif"'],
      },
      dropShadow: {
        profile: '2px 8px 10px black'
      }
    },
  },
  plugins: [],
};
