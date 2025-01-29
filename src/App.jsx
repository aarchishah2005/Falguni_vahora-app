import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Heading from './components/heading';
import Button from './components/button';
import CoachingSection from './components/coachingsection';
import FinancialPrograms from './components/financialprogram';
import FinancialCards from './components/FinancialCards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in-visible'); // Add animation class
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Select all elements with the "zoom-in-element" class
    const elements = document.querySelectorAll('.zoom-in-element');
    elements.forEach((el) => observer.observe(el));

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    
    <div className="App">
      <div className="background">
          <Header />

          {/* <div style={{ backgroundColor: '#3b3531' }}> */}
              <Heading />

       {/* <div style={{ backgroundColor: '#3b3531' }}> */}
          <Button text="Explore Now" />
          {/*   </div> */}

        <div className="zoom-in-element coaching-component">
          <CoachingSection />
        </div>

        {/* <div className="zoom-in-element financial-programs-component"> */}
          <FinancialPrograms />
        {/* </div> */}

        {/* <div className="zoom-in-element financial-cards-component"> */}
          <FinancialCards />
        {/* </div> */}

        <div className="zoom-in-element contact-form-component">
          <ContactForm />
        </div>

          <Footer />
      </div>
    </div>
  );
}

export default App;
