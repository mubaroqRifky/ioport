/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            cpp: "#D2A92A",

            primary: "#C40001",
            primaryTransparent: "#F8EBEC",
            primaryOutline: "#ee632c59",

            secondary: "#019549",
            secondaryTransparent: "#019549c2",
            secondaryOutline: "#01954957",

            white: "#ffffff",
            gray: "#dddddd",
            softGray: "#F2F2F2",
            lightGray: "#E9E9E9",
            darkGray: "#9ca3af",

            danger: "#C92E2E",
            dangerOutline: "#de48486b",
            warning: "#FEC108",
            success: "#2299DC",
            transparent: "#00000085",

            "blue-light": "#8AC1E9",
            "green-dark": "#138968c2",
            "green-soft": "#8AE9DD",
            "green-light": "#A1E976",
            "orange-light": "#FFC178",
            "red-light": "#F8AAB3",
            "gray-dark": "#273444",
        },
        fontFamily: {
            sans: ["Open Sans", "sans-serif"],
        },
        extend: {
            spacing: {
                "4xl": "30rem",
                "5xl": "34.375rem",
                "6xl": "40rem",
                "7xl": "60rem",
                "8xl": "96rem",
                "9xl": "128rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            gridRow: {
                "span-10": "span 10 / span 10",
                "span-7": "span 7 / span 7",
            },
        },
    },
    plugins: [],
};
