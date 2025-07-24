import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import TrustedCarriers from '../components/TrustedCarriers';

// --- Icons ---
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-16 w-16 text-brand-gold mx-auto mb-4">{children}</div>
);

const ShieldIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
        </svg>
    </IconWrapper>
);

const OakTreeIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75a9 9 0 019 9h-3.375M12 3.75a9 9 0 00-9 9H12m0-9v1.5M12 12.75a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 12.75v-1.5m0 0a3.375 3.375 0 00-3.375-3.375H12m0 0a3.375 3.375 0 013.375 3.375M9 12.75h3.375m0 0a3.375 3.375 0 013.375 3.375m-6.75 0a3.375 3.375 0 003.375 3.375m-3.375 0h-1.5m1.5 0v-1.5m0 0a3.375 3.375 0 00-3.375-3.375H9m6.75 0v-1.5m0 0a3.375 3.375 0 013.375 3.375m-3.375 0h1.5m-1.5 0v1.5m0 0a3.375 3.375 0 003.375 3.375m-3.375-3.375a3.375 3.375 0 01-3.375-3.375m6.75 0a3.375 3.375 0 00-3.375 3.375" />
        </svg>
    </IconWrapper>
);

const GiftBoxIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H7.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875L15.75 9h-7.5L12 4.875z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v12m-8.25-6.75h16.5" />
        </svg>
    </IconWrapper>
);

const GearsIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
    </IconWrapper>
);

// --- Card Data ---
const cardData = [
    // ... (card data remains the same)
];

// --- Main Component ---
const SolutionsPage: React.FC = () => {
    // ... (state and useEffect hooks remain the same)

    return (
        <>
            {/* ... (active card overlay remains the same) */}
            <div className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-6">
                    
                    {/* ... (header and trusted carriers sections remain the same) */}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* ... (card mapping logic remains the same) */}
                    </div>

                    {/* Budget Tool Section */}
                    <section id="budget-tool" ref={budgetToolRef} className="mt-24 scroll-mt-20">
                        <div className="text-center mb-12">
                             <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
                                Ready to Start? A Smart Plan Begins with a <span className="text-brand-gold">Smart Budget.</span>
                            </h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-body-text">
                               You don't need a huge budget to protect your family. Tell me what you're comfortable with, and I'll show you what's possible.
                            </p>
                        </div>
                         <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl border-2 border-brand-gold">
                            <h3 className="text-2xl font-bold text-center text-brand-navy mb-6">Generate My Possibility Report</h3>
                            
                            {/* --- CORRECTED FORM AND NEW FIELDS BELOW --- */}
                            <form name="budget-tool" method="POST" action="/thank-you" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true">
                                <input type="hidden" name="form-name" value="budget-tool" />
                                <p className="hidden">
                                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                                </p>
                                
                                <div className="mb-6">
                                    <label htmlFor="budget-name" className="block text-brand-body-text font-semibold mb-2">Full Name</label>
                                    <input type="text" id="budget-name" name="name" className="w-full bg-white border border-gray-300 rounded-lg p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition" required />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="budget-email" className="block text-brand-body-text font-semibold mb-2">Email Address</label>
                                    <input type="email" id="budget-email" name="email" className="w-full bg-white border border-gray-300 rounded-lg p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition" required />
                                </div>

                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="birthdate" className="block text-brand-body-text font-semibold mb-2">Date of Birth</label>
                                        <input type="date" id="birthdate" name="birthdate" className="w-full bg-white border border-gray-300 rounded-lg p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition" required />
                                    </div>
                                    <div>
                                        <label htmlFor="gender" className="block text-brand-body-text font-semibold mb-2">Gender</label>
                                        <select id="gender" name="gender" className="w-full bg-white border border-gray-300 rounded-lg p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition" required>
                                            <option value="">Select...</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="mb-8">
                                    <label htmlFor="budget" className="block text-brand-body-text font-semibold mb-2">Monthly Budget ($)</label>
                                    <input type="number" id="budget" name="budget" placeholder="e.g., 100" className="w-full bg-white border border-gray-300 rounded-lg p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition" required />
                                </div>
                                
                                <div data-netlify-recaptcha="true" className="mb-8"></div>

                                <button type="submit" className="w-full py-4 bg-brand-gold text-brand-navy font-bold text-lg rounded-lg shadow-lg shadow-brand-gold/20 transform hover:scale-105 hover:bg-brand-gold-dark transition-all duration-300">
                                    Show Me My Options
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default SolutionsPage;
