export default function Footer() {
    // অনলাইন আইকন লিঙ্কগুলো এখানে সেট করা হয়েছে
    const socialIcons = [
        { name: 'Facebook', url: 'https://img.icons8.com/ios-filled/50/facebook-new.png' },
        { name: 'Instagram', url: 'https://img.icons8.com/ios-filled/50/instagram-new.png' },
        { name: 'Twitter X', url: 'https://img.icons8.com/ios-filled/50/twitterx--v2.png' },
        { name: 'YouTube', url: 'https://img.icons8.com/ios-filled/50/youtube-play.png' },
        { name: 'LinkedIn', url: 'https://img.icons8.com/ios-filled/50/linkedin.png' }
    ];

    return (
        <div className="mt-20">
            <div className="text-center">
                {/* লোগো সেকশন */}
                <a href="#!">
                    <img src="/assets/logo.png" alt="Logo" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="Logo Dark" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                {/* ইমেইল সেকশন */}
                <div className="w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-white/80">
                    <img src="https://img.icons8.com/ios-filled/50/mail.png" alt="Mail" className="w-5 dark:invert" />
                    <a href="mailto:contact.arnobbiswas@gmail.com">contact.arnobbiswas@gmail.com</a>
                </div>
            </div>

            {/* নিচের বর্ডার এবং কপিরাইট সেকশন */}
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                
                {/* আপনার নাম এবং কপিরাইট */}
                <p className="text-gray-600 dark:text-white/70">© 2026 Arnob Biswas • All rights reserved.</p>

                {/* সোশ্যাল মিডিয়া আইকন - যা সরাসরি অনলাইন থেকে লোড হবে */}
                <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
                    {socialIcons.map((icon, index) => (
                        <li key={index}>
                            <a target='_blank' href="#!" className="group">
                                <img 
                                    src={icon.url} 
                                    alt={icon.name} 
                                    // dark:invert ক্লাসের মাধ্যমে ডার্ক মোডে আইকনগুলো সাদা হয়ে যাবে
                                    className="w-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 duration-300 dark:invert transition-all" 
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
