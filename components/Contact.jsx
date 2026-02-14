'use client'
import { useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        
        const formData = new FormData(event.target);

        // আপনার Web3 Forms Access key এখানে বসান
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
            console.log("Error", data);
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
                {/* সাবজেক্ট লাইনটি আপনার নামে আপডেট করা হয়েছে */}
                <input type="hidden" name="subject" value="Arnob Biswas - New Portfolio Submission" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        name="name"
                        required 
                        // ডার্ক মোডে লাল রঙ সরিয়ে ডার্ক গ্রে করা হয়েছে
                        className="flex-1 px-4 py-3 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-[#111111] dark:text-white focus:border-primary duration-500" 
                    />

                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        name="email"
                        required 
                        className="flex-1 px-4 py-3 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-[#111111] dark:text-white focus:border-primary duration-500" 
                    />
                </div>

                <textarea 
                    rows="6" 
                    placeholder="Enter your message" 
                    name="message"
                    required 
                    className="w-full px-4 py-3 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-[#111111] dark:text-white focus:border-primary duration-500"
                ></textarea>

                {/* ক্যাপচা ডিভটি এখান থেকে মুছে ফেলা হয়েছে */}

                <button 
                    type='submit' 
                    className="py-3 px-10 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-[#8c0522] duration-500 dark:bg-transparent dark:border dark:border-white/50 dark:hover:bg-[#8c0522] dark:hover:border-transparent"
                >
                    Submit now
                    <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                </button>

                <p className='mt-4 text-center text-gray-600 dark:text-white/70'>{result}</p>
            </form>
        </div>
    )
}
