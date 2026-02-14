export default function Footer() {
    // ইউনিফর্ম সার্কুলার আইকন ব্যবহার করা হয়েছে
    const socialIcons = [
        { name: 'Facebook', url: 'https://img.icons8.com/ios-filled/50/facebook-circled--v1.png' },
        { name: 'Instagram', url: 'https://img.icons8.com/ios-filled/50/instagram-circled--v1.png' },
        { name: 'Twitter X', url: 'https://img.icons8.com/ios-filled/50/x-circled.png' },
        { name: 'YouTube', url: 'https://img.icons8.com/ios-filled/50/youtube-circled--v1.png' },
        { name: 'LinkedIn', url: 'https://img.icons8.com/ios-filled/50/linkedin-circled--v1.png' }
    ];

    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!">
                    <img src="/assets/logo.png" alt="Logo" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="Logo Dark" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto text-gray-600 dark:text-white/90">
                    <img src="https://img.icons8.com/ios-filled/50/mail.png" alt="Mail" className="w-5 dark:invert opacity-80" />
                    <a href="mailto:contact.arnobbiswas@gmail.com">contact.arnobbiswas@gmail.com</a>
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-300 dark:border-white/20 mx-[10%] mt-12 py-7">
                
                {/* টেক্সট কালার এখন আইকনের সাথে ১০০% ম্যাচ করবে */}
                <p className="text-gray-600 dark:text-white/80 text-sm">© 2026 Arnob Biswas • All rights reserved.</p>

                <ul className="flex items-center gap-5 justify-center mt-4 sm:mt-0">
                    {socialIcons.map((icon, index) => (
                        <li key={index}>
                            <a target='_blank' href="#!" className="group">
                                <img 
                                    src={icon.url} 
                                    alt={icon.name} 
                                    /* - opacity-60 (Light): টেক্সট কালারের সাথে মিলবে
                                      - dark:opacity-90 (Dark): ডার্ক মোডে উজ্জ্বল দেখাবে
                                      - Circular Icons: সব আইকন এখন ইউনিফর্ম শেপের
                                    */
                                    className="w-6 transition-all duration-300 dark:invert opacity-60 dark:opacity-90 group-hover:opacity-100 group-hover:scale-125 group-hover:filter group-hover:drop-shadow-sm" 
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
