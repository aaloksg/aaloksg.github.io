/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,vue,ts}', './projects/**/*.{html,js,vue,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#c45911',
                muted: '#424242',
                light: '#bcbcbc',
                accent: '#ff8738',
                dark: '#424242',
                secondary: '#616161',
            },
            screens: {
                xs: '480px',
            },
            fontSize: {
                'relative-xxs': '0.75vw',
                'relative-xs': '1vw',
                'relative-sm': '2vw',
                'relative-base': '3.5vw',
                'relative-lg': '3.8vw',
                'relative-xl': '4.5vw',
            },
            spacing: {
                '40vw': '40vw',
                '90vw': '90vw',
            },
            zIndex: {
                modal: '1000',
            },
        },
    },
    plugins: [],
};
