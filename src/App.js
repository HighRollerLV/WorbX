// App.js
import React, { useRef } from 'react';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ItemsSection from "./components/ItemsSection";
import OffersSection from "./components/OffersSection";
import CompanyMembers from "./components/CompanyMembers";
import Footer from "./components/Footer";
import './index.css';

const App = () => {
    const heroSectionRef = useRef(null);
    const itemsSectionRef = useRef(null);
    const offersSectionRef = useRef(null);
    const companyMembersRef = useRef(null);

    return (
        <div className="flex flex-col min-h-screen">
            <Header
                heroSectionRef={heroSectionRef}
                itemsSectionRef={itemsSectionRef}
                offersSectionRef={offersSectionRef}
                companyMembersRef={companyMembersRef}
            />
            <main className="flex-grow">
                <div ref={heroSectionRef}><HeroSection /></div>
                <div ref={itemsSectionRef}><ItemsSection /></div>
                <div ref={offersSectionRef}><OffersSection /></div>
                <div ref={companyMembersRef}><CompanyMembers /></div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
