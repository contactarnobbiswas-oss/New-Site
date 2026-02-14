export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                {/* লোগো সেকশন */}
                <a href="#!">
                    <img src="/assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                {/* ইমেইল সেকশন - আপনার দেওয়া ইমেইল আপডেট করা হয়েছে */}
                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    <a href="mailto:contact.arnobbiswas@gmail.com">contact.arnobbiswas@gmail.com</a>
                </div>
            </div>

            {/* নিচের বর্ডার এবং কপিরাইট সেকশন */}
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                
                {/* আপনার অনুরোধ করা নতুন কপিরাইট টেক্সট */}
                <p>© 2026 Arnob Biswas • All rights reserved.</p>

                {/* সোশ্যাল মিডিয়া আইকন সেকশন */}
                <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
                    <li>
                        <a target='_blank' href="#!"><img src="/assets/facebook.png" alt="Facebook" className="w-5 dark:invert" /></a>
                    </li>
                    <li>
                        <a target='_blank' href="#!"><img src="/assets/instagram.png" alt="Instagram" className="w-5 dark:invert" /></a>
                    </li>
                    <li>
                        <a target='_blank' href="#!"><img src="/assets/twitter_x.png" alt="Twitter X" className="w-5 dark:invert" /></a>
                    </li>
                    <li>
                        <a target='_blank' href="#!"><img src="/assets/youtube.png" alt="YouTube" className="w-5 dark:invert" /></a>
                    </li>
                    <li>
                        <a target='_blank' href="#!"><img src="/assets/linkedin.png" alt="LinkedIn" className="w-5 dark:invert" /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
