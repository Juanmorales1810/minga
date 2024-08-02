import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/components/(button|code|image|input|kbd|link|listbox|navbar|snippet|toggle|popover|ripple|spinner|divider).js",
    ],
    theme: {
        extend: {
            fontFamily: {
                Avenir: ["Avenir", "normal"],
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
