/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
          'red' : "#fff"
        },
        extend: {
          colors : {
              red : {
                  200 : '#000',
                  100 : '#fff'
              }
          }
        },
    },
    plugins: [],
}

