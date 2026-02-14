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
                // আপনার পছন্দের Deep Red কালারটি এখানে সেট করা হয়েছে
                primary: '#8c0522',      // মেইন ডিপ রেড
                darkTheme: '#1c1c1c',    // প্রিমিয়াম ব্ল্যাক
                lightBG: '#f4f4f4',      // হালকা ব্যাকগ্রাউন্ড
                lightHover: '#fff5f7',   // রেডিশ হোয়াইট হোভার
                darkHover: '#8c0522',    // হোভার করলে এই ডিপ রেড হবে
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
