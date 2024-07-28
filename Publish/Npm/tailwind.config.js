const plugin = require('tailwindcss/plugin')

module.exports = {
    darkMode: 'class',
    mode: 'jit',
    purge: [
        // Path to my php view it will only purge stuf we goin to use
        "./vendor/mariojgt/admin-skeleton/src/views/**/*.php",
        "./resources/vendor/SkeletonAdmin/js/**/*.vue",
        "./resources/vendor/Builder/**/*.vue",
        "./node_modules/flowbite/**/*.js",
        "./node_modules/@mariojgt/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                'comic': ['"Comic Sans MS"', 'cursive'],
                'roboto': ['Roboto', 'sans-serif'],
                'roboto-mono': ['"Roboto Mono"', 'monospace'],
              }
        },
        colors: {
            'master' : {
                100: "#f5f5f5",
                200: "#ffdd55",
                300: "#ffd251",
                400: "#ffc74e",
                500: "#febc4b",
                600: "#fdb14a",
                700: "#faa64a",
                800: "#f79c4a",
                900: "#f3914a",
            },
            'dark': {
                100: "#0a0f19",
                200: "#0d1523",
                300: "#10192d",
                400: "#131d37",
                500: "#162141",
                600: "#19254b",
                700: "#1c2955",
                800: "#1f2d5f",
                900: "#223169",
            },
            'dark-blue': {
                100: "#0f1b2e",
                200: "#122038",
                300: "#152442",
                400: "#18284c",
                500: "#1b2c56",
                600: "#1e3060",
                700: "#21346a",
                800: "#243874",
                900: "#273c7e",
            },
        },
    },
    variants: {
        extend: {
            textOpacity: ['dark']
        }
    },
    plugins: [
        require('daisyui'),
        require('flowbite/plugin')
    ],
    daisyui: {
        themes: [
            "forest",
            {
                master: {
                    "primary": "#180533",
                    "secondary": "#3f1043",
                    "tertiary": "#661a4e",
                    "accent": "#f9ff76",
                    "neutral": "#ffffff",
                    "base-100": "#100b2d",
                    "info": "#22acf3",
                    "success": "#4cc8ad",
                    "warning": "#f4a522",
                    "error": "#f14774",
                },
                admin: {
                    "primary": "#e86d5e",
                    "secondary": "#ff975f",
                    "tertiary": "#ffe69d",
                    "accent": "#6a7e69",
                    "neutral": "#393f5f",
                    "base-100": "#100b2d",
                    "info": "#22acf3",
                    "success": "#4cc8ad",
                    "warning": "#f4a522",
                    "error": "#f14774",
                }
            },
        ],
    },
}
