export default function Services() {
    const services = [
        {
            name: 'YouTube Editing',
            icon: '/assets/web-icon.png',
            description: 'Engaging storytelling with fast-paced cuts, captions, and sound design.',
        },
        {
            name: 'Commercial Ads',
            icon: '/assets/mobile-icon.png',
            description: 'High-conversion video ads for social media and business growth.',
        },
        {
            name: 'Shorts/Reels',
            icon: '/assets/ui-icon.png',
            description: 'High-retention editing with viral hooks, dynamic captions, and trendy transitions.',
        },
        {
            name: 'YouTube Automation',
            icon: '/assets/graphics-icon.png',
            description: 'Complete faceless channel management and niche-specific growth strategies.',
        }
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Expert video editing solutions tailored for modern creators and businesses. I focus on the technical details so you can focus on creating the content that matters.
            </p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
