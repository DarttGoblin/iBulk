import React from 'react'
import './Services.css'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import Service from '../../Components/Service/Service'

import coach from '../../Media/Services.Media/coach.png'
import nurse from '../../Media/Services.Media/nurse.png'
import guru from '../../Media/Services.Media/guru.png'
import club from '../../Media/Services.Media/club.png'
import books from '../../Media/Services.Media/books.png'
import protein from '../../Media/Services.Media/protein.png'
import clothes from '../../Media/Services.Media/clothes.png'
import equipment from '../../Media/Services.Media/equipment.png'

const Services = () => {
    const services = [
        {
            available: true,
            onClick: () => window.location.href = '',
            image: coach,
            color: 'rgba(85, 150, 255, 0.3)',
            title: 'Personal Trainer',
            description: "Get personalized workout plans and one-on-one coaching to unlock your full fitness potential."
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: nurse,
            color: 'rgba(120, 200, 160, 0.3)',
            title: 'HealthBoost Clinic',
            description: "Personalized medical care and wellness programs to build a stronger, healthier, and happier life."
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: guru,
            color: 'rgba(174, 0, 52, 0.3)',
            title: 'MotivateGuru',
            description: "Gain lasting motivation with expert guidance to overcome barriers and achieve personal growth."
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: club,
            color: 'rgba(255, 246, 151, 0.3)',
            title: 'Momentum Fitness Club',
            description: "Join a vibrant community dedicated to helping you reach your fitness goals with passion and purpose."
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: books,
            color: 'rgba(160, 130, 255, 0.3)',
            title: 'Sweat & Wisdom',
            description: "Discover inspiring fitness and wellness books that educate, motivate, and elevate your daily habits."
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: protein,
            color: 'rgba(210, 119, 0, 0.3)',
            title: 'Elite Nutrition',
            description: "Premium supplements and healthy foods crafted to boost your performance and overall well-being."
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: clothes,
            color: 'rgba(251, 51, 188, 0.3)',
            title: 'StyleHub',
            description: "Step into fashion excellence where every outfit expresses your unique personality and confidence."
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: equipment,
            color: 'rgba(98, 98, 98, 0.3)',
            title: 'The Iron Vault',
            description: "Explore premium gym equipment built for strength, endurance, and achieving your dream physique."
        },
    ];

    return (
        <>
            <Nav />
            <section className="services-section">
                <div className='services-text-container'>
                    <span className='services-title'>Your Path to Peak Performance</span>
                    <span className='services-description'>Explore our professional fitness services designed to help<br/>you reach your goals effectively and safely.</span>
                </div>

                <div className="services-container">
                    {services.map((service, index) => (
                        <Service
                            key={index}
                            available={service.available}
                            onClick={service.onClick}
                            image={service.image}
                            color={service.color}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>

                <div className='special-service-container'>
                    <span className='special-service-title'>Looking For A Special Service?</span>
                    <textarea className='special-service-input' placeholder='Express your needs...'></textarea>
                    <button className='special-service-send'>Send</button>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Services