/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
        './index.html'
    ],
    theme: {
        extend: {
            colors: {},
            backgroundImage: {
                galaxy: "url('./Background-Galaxy.jpg')",
                'nlw-gradient': 'linear-gradient(80.00deg, #9572FC 25.00%, #43E7AD 50.00%, #43E7AD 65.00%, #E1D55D 90.00%)',
                'game-gradient': 'linear-gradient(180.00deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 68%)'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            }
        },
    },
    plugins: [],
}