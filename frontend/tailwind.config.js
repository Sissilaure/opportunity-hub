/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Fond neutre froid (plus "application pro" que le beige chaud générique).
        canvas: "#F3F5FA",
        surface: "#FFFFFF",
        ink: "#10182B",
        muted: "#5B6272",
        line: "rgba(16, 24, 43, 0.08)",
        // Bleu marine et or : repris directement du logo, pour une identité cohérente.
        primary: { DEFAULT: "#14284A", dark: "#0A1729", light: "#E7ECF5" },
        accent: { DEFAULT: "#C89B3C", light: "#FBF2DD" },
        success: { DEFAULT: "#1F8A54", bg: "#E7F5EC" },
        danger: { DEFAULT: "#B3302B", bg: "#FBEAEA" },
        // Violet réservé aux concours : différencie les catégories entre elles, sans virer à l'arc-en-ciel.
        feature: { DEFAULT: "#6D4AA6", bg: "#F1ECFA" },
        // Alias conservés pour compatibilité avec les usages existants.
        cream: "#F3F5FA",
        gold: "#C89B3C",
        alert: { bg: "#FBEAEA", text: "#B3302B" },
        verified: { bg: "#E7F5EC", text: "#1F8A54" },
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "14px" },
      boxShadow: {
        card: "0 1px 2px rgba(18,22,43,0.05), 0 1px 1px rgba(18,22,43,0.04)",
        "card-hover": "0 16px 32px -14px rgba(18,22,43,0.28), 0 2px 6px rgba(18,22,43,0.06)",
        header: "0 1px 0 rgba(18,22,43,0.06), 0 8px 24px -16px rgba(18,22,43,0.18)",
      },
      backgroundImage: {
        glow:
          "radial-gradient(680px circle at 12% -15%, rgba(20,40,74,0.12), transparent 55%), radial-gradient(520px circle at 92% -10%, rgba(200,155,60,0.14), transparent 50%)",
      },
    },
  },
  plugins: [],
};
