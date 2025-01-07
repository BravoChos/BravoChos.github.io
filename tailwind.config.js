/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-gradient": "linear-gradient(to right, #4880EC, #39d2fd)",
      },
      colors: {
        "custom-blue": "#3a7bd5", // 사용자 정의 색상 추가
      },
    },
  },
  plugins: [],
};
