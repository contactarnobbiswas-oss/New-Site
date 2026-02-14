export default function Footer() {
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
                <a href="#!">
                    <img src="/assets/logo.png" alt="Logo" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="Logo Dark" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-white">
                    <img src="https://img.icons8.com/ios-filled/50/mail.png" alt="Mail" className="w-5 dark:invert" />
                    <a href="mailto:contact.arnobbiswas@gmail.com">contact.arnobbiswas@gmail.com</a>
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                
                <p className="text-gray-700 dark:text-white">© 2026 Arnob Biswas • All rights reserved.</p>

                <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
                    {socialIcons.map((icon, index) => (
                        <li key={index}>
                            <a target='_blank' href="#!" className="group">
                                <img 
                                    src={icon.url} 
                                    alt={icon.name} 
                                    /* - opacity-90: আপনার অনুরোধ অনুযায়ী ৯০% উজ্জ্বলতা
                                       - hover:opacity-100: মাউস নিলে পুরোপুরি উজ্জ্বল হবে
                                       - dark:invert: ডার্ক মোডে সাদা দেখাবে
                                    */
                                    className="w-6 transition-all duration-300 dark:invert opacity-90 group-hover:opacity-100 group-hover:scale-125" 
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
