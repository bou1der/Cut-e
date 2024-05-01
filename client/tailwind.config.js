import react from "@vitejs/plugin-react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/*.{js,jsx,ts,tsx}","./src/components/**/*.{js,jsx,ts,tsx}"],
  // content:["./src/components/notification/notification.tsx"],
  theme: {
    colors:{
      "White":"#FFFFFF",
      "Black":"#000000",
      "CreamPink":"#FFD2CF",
      "StrongPink":"#FFC4C4",
      "MainTextColor":"#8A5B4A",
      "BackTextColor":"#FF0000",
      "HoverButtons":"rgb(0,0,0)"
    },
    screens:{
      "sm":"640px",
      md:"1024px",
      lg:"1280px",
      xl:"1440px",
      xxl:"1920px",
    },
    fontFamily:{
      Itim:["Itim","cursive"],
      NotoSans:["Noto Sans","sans-serif"],
      MainFont:["Itim","Noto Sans","cursive"]
    },
    borderRadius:{
      sm:"15px",
      md:"20px",
      lg:"25px"
    },
    fontSize:{
      "10":"10px",
      "12":"12px",
      "14":"14px",
      "16":"16px",
      "18":"18px",
      "20":"20px",
      "24":"24px",
      "30":"30px",
      "36":"36px",
      "96":"96px",
    },


    extend: {},
  },
  plugins: [],
}

