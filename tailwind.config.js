/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                orange: {
                    50: '#FFF6EE',
                    100: '#ffedd5',
                    500: '#F97316',
                    600: '#EA580C', // Dark Orange Hover
                }
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                sans: ['Poppins', 'sans-serif'], // Set as default sans
            }
        },
    },
    plugins: [],
}
