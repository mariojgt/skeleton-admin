const plugin = require('tailwindcss/plugin')

module.exports = {
    darkMode: 'class',
    mode: 'jit',
    purge: [
        // Path to my php view it will only purge stuf we goin to use
        "./vendor/mariojgt/admin-skeleton/src/views/**/*.php",
        "./resources/vendor/SkeletonAdmin/js/**/*.vue",
        "./resources/vendor/Builder/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            textOpacity: ['dark']
        }
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
        ],
    },
}
