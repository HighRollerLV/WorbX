import React from 'react';

const OffersSection = () => {
    return (
        <section className="py-12 bg-white text-black px-28">
            <div className="container mx-auto px-10">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Programming Offer */}
                    <div className="p-4 bg-gray-100 rounded px-10 py-16">
                        <h3 className="font-bold text-xl mb-2">Custom Software Development</h3>
                        <p>Transform your ideas into reality with our bespoke software solutions, tailored to meet the unique demands of your business.</p>
                    </div>
                    {/* Design Offer */}
                    <div className="p-4 bg-gray-100 rounded px-10 py-16">
                        <h3 className="font-bold text-xl mb-2">Innovative Design Services</h3>
                        <p>Our creative team provides cutting-edge design services that ensure your brand stands out in today's crowded market.</p>
                    </div>
                    {/* Marketing Offer */}
                    <div className="p-4 bg-gray-100 rounded px-10 py-16">
                        <h3 className="font-bold text-xl mb-2">Digital Marketing Strategies</h3>
                        <p>Expand your reach with our comprehensive digital marketing strategies that connect with your audience and drive growth.</p>
                    </div>
                    {/* Films Offer */}
                    <div className="p-4 bg-gray-100 rounded px-10 py-16">
                        <h3 className="font-bold text-xl mb-2">Film Production Excellence</h3>
                        <p>Bring your stories to life with our full-range film production services, from initial concept to final cut.</p>
                    </div>
                    {/* Production Offer */}
                    <div className="p-4 bg-gray-100 rounded px-10 py-16">
                        <h3 className="font-bold text-xl mb-2">Efficient Production Solutions</h3>
                        <p>Optimize your production workflows with our innovative solutions designed for efficiency and scalability.</p>
                    </div>
                    {/* Branding Offer */}
                    <div className="p-4 bg-gray-100 rounded px-10 py-16">
                        <h3 className="font-bold text-xl mb-2">Unique Branding</h3>
                        <p>We will brand your company and create unique themes for your liking.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OffersSection;
