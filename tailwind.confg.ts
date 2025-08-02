import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors:{
                black:{
                    DEFAULT: '#000000',
                    100: '#000319',
                }
            }
        },
    },
    plugins: [],
};

export default config;