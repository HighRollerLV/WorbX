// CompanyMembers.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CompanyMembers = () => {
    const members = [
        // Add members here with image URLs
        {
            name: 'John Doe',
            role: 'CEO',
            description: 'Visionary leader and entrepreneur with a passion for innovation.',
            imageUrl: '/images/Members/CEO.jpg' // Add the correct path
        },
        {
            name: 'Andrew Hill',
            role: 'Programmer',
            description: 'Innovative solution specialist.',
            imageUrl: '/images/Members/Programmer1.jpg' // Add the correct path
        },
        {
            name: 'Brad Oak',
            role: 'Designer',
            description: 'Modern Designer with a passion for aesthetics.',
            imageUrl: '/images/Members/Designer1.jpg' // Add the correct path
        },
        {
            name: 'Hugh Dorothy',
            role: 'Designer',
            description: 'Open minded and Forward Coming Designer.',
            imageUrl: '/images/Members/Designer2.jpg' // Add the correct path
        },
    ];

    return (
        <section className="py-12 bg-black text-white">
            <div className="container mx-auto px-8">
                <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                >
                    {members.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center">
                                <img src={member.imageUrl} alt={member.name} className="mx-auto w-40 h-40 object-cover rounded-full shadow-lg mb-4"/>
                                <p className="text-xl font-bold">{member.name}</p>
                                <p className="text-md">{member.role}</p>
                                <p className="text-md">{member.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CompanyMembers;


