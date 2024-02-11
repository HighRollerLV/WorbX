// App.js
import React from 'react';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ItemsSection from "./components/ItemsSection";
import OffersSection from "./components/OffersSection";
import CompanyMembers from "./components/CompanyMembers";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <ItemsSection />
          <OffersSection />
          <CompanyMembers />
        </main>
        <Footer />
      </div>
  );
};

export default App;