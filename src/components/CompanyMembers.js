import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CompanyMembers = () => {
    const members = [
        {
            name: 'John Doe',
            role: 'CEO',
            description: 'Visionary leader and entrepreneur with a passion for innovation.',
            imageUrl: '/images/Members/CEO.jpg'
        },
        {
            name: 'Andrew Hill',
            role: 'Programmer',
            description: 'Innovative solution specialist.',
            imageUrl: '/images/Members/Programmer1.jpg'
        },
        {
            name: 'Brad Oak',
            role: 'Designer',
            description: 'Modern Designer with a passion for aesthetics.',
            imageUrl: '/images/Members/Designer1.jpg'
        },
        {
            name: 'Hugh Dorothy',
            role: 'Designer',
            description: 'Open minded and Forward Coming Designer.',
            imageUrl: '/images/Members/Designer2.jpg'
        },
    ];

    return (
        <section className="bg-white text-white py-48">
            <div className="container mx-auto">
                <h2 className="text-5xl text-black font-bold mb-20 text-center">Meet the Team</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    speed={600}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="swiper-full"
                >
                    {members.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center h-[70vh] flex flex-col lg:flex-row items-center justify-center gap-20">
                                <img src={member.imageUrl} alt={member.name}
                                     className="w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl mb-4 hover:scale-110 transition-transform duration-500"/>
                                <div>
                                    <p className="text-2xl font-bold text-white">{member.name}</p>
                                    <p className="text-lg text-white">{member.role}</p>
                                    <p className="text-lg text-white">{member.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CompanyMembers;

