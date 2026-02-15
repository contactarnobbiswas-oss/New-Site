import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    title: "Arnob Biswas - Visual Editor",
    description: "Arnob Biswas is a Professional Video Editor & Visual Storyteller. He specializes in cinematic editing, YouTube content, and commercial ads with over 6 years of experience in creating viral visuals.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                {children}
            </body>
        </html>
    );
}
