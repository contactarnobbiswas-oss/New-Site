/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation: {
                spin_slow: 'spin 6s linear infinite'
            },
            colors: {
                // আপনার ব্র্যান্ডের জন্য কাস্টমাইজড কালার
                primary: '#ad0d2f',      // সিগনেচার রেড
                darkTheme: '#1c1c1c',    // প্রিমিয়াম ব্ল্যাক
                lightBG: '#f4f4f4',      // হালকা ব্যাকগ্রাউন্ড
                lightHover: '#ffebee',   // রেডিশ হোয়াইট হোভার
                darkHover: '#ad0d2f',    // হোভার করলে রেড হবে
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}