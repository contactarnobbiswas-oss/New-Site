'use client'
import { useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully!");
            event.target.reset();
        } else {
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <input type="hidden" name="subject" value="Arnob Biswas - New Portfolio Submission" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        name="name"
                        required 
                        className="flex-1 px-4 py-3 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-[#181818] dark:text-white focus:ring-0 duration-500" 
                    />

                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        name="email"
                        required 
                        className="flex-1 px-4 py-3 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-[#181818] dark:text-white focus:ring-0 duration-500" 
                    />
                </div>

                <textarea 
                    rows="6" 
                    placeholder="Enter your message" 
                    name="message"
                    required 
                    className="w-full px-4 py-3 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-[#181818] dark:text-white focus:ring-0 duration-500"
                ></textarea>

                {/* বাটনটি আপডেট করা হয়েছে */}
                <button 
                    type='submit' 
                    // লাইট মোডে বর্ডার এবং ডার্ক মোডে রেড ব্যাকগ্রাউন্ড সেট করা হয়েছে
                    className="py-3 px-10 w-max flex items-center justify-between gap-2 border border-gray-500 rounded-full mx-auto hover:bg-lightHover duration-500 dark:bg-[#8c0522] dark:text-white dark:border-none transition-all"
                >
                    Submit now
                    {/* লাইট মোডে কালো অ্যারো এবং ডার্ক মোডে সাদা অ্যারো আইকন */}
                    <img src="/assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                    <img src="/assets/right-arrow-white.png" alt="" className="w-4 hidden dark:block" />
                </button>

                <p className='mt-4 text-center text-gray-600 dark:text-white/70'>{result}</p>
            </form>
        </div>
    )
}
