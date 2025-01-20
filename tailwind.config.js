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

/*
Migration guide:

h1: text-3xl font-bold
    ( font-size: 2em;)
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;

modal-icons: text-3xl text-light fixed right-4 cursor-pointer
    &.rotate {
        bottom:1em;
    }
    &.close {
        top:1em;
    }

modal: fixed z-modal top-0 left-0 w-screen h-screen bg-black/80

modal-image-parent: flex h-full w-full flex-col items-center justify-center

caption: text-center text-light text-xs p-4 rounded-2xl
    &.in-modal { -> fixed bottom-4 bg-black/50 text-white
        position: fixed;
        bottom:1em;
        background-color: #00000082;
        color: #fffefe;
    }

Portrait:
    desc: text-secondary leading-6
    bio-desc: text-lg text-justify self-start

    body texts: text-relative-xl xs:text-relative-lg md:text-relative-xs
    caption texts: text-relative-base xs:text-relative-sm md:text-relative-xxs

    links: flex flex-col gap-4 justify-center items-center

    image: w-full flex justify-center items-center gap-8 pb-8
    image-parent: w-40vw max-h-52

    bio-image: border-2 border-primary border-solid rounded-full
    images-portrait: max-h-full object-cover align-bottom (h-auto? (inherit))

    section-parent




}
*/
