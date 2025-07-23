
import React from 'react';

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);
const ReportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const DecisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const FreeAuditPage: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy">
            Let's Make Sure You Have the <span className="text-brand-gold">Best Plan.</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-body-text">
            Your existing policy might have hidden gaps or costly inefficiencies. Our free, no-obligation audit gives you the clarity you deserve in three simple steps.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20 text-center">
            <div className="flex flex-col items-center">
                <UploadIcon />
                <h3 className="text-xl font-bold text-brand-navy mt-4">1. Upload Securely</h3>
                <p className="text-brand-body-text mt-2">Upload a copy of your current policy statement. Our platform is secure and your data is kept confidential.</p>
            </div>
            <div className="flex flex-col items-center">
                <ReportIcon />
                <h3 className="text-xl font-bold text-brand-navy mt-4">2. Get Your Report</h3>
                <p className="text-brand-body-text mt-2">Our experts analyze your policy against current market offerings, identifying potential savings and coverage improvements.</p>
            </div>
            <div className="flex flex-col items-center">
                <DecisionIcon />
                <h3 className="text-xl font-bold text-brand-navy mt-4">3. Make a Decision</h3>
                <p className="text-brand-body-text mt-2">We provide a clear, actionable report. The choice to switch or stay is always yours—no pressure, just honest advice.</p>
            </div>
        </div>


        {/* Form Section */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl border-2 border-brand-gold">
            <h2 className="text-3xl font-bold text-center text-brand-navy mb-6">Get Your Free Audit Started</h2>
            <form name="policy-audit" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true" action=>
              <input type="hidden" name="form-name" value="policy-audit" />
              <p className="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
              </p>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-brand-body-text font-semibold mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full bg-white border border-gray-300 rounded-lg p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition" required />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-brand-body-text font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full bg-white border border-gray-300 rounded-lg p-3 text-brand-navy focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition" required />
              </div>

              <div className="mb-8">
                <label htmlFor="policy-file" className="block text-brand-body-text font-semibold mb-2">Upload Policy Document (PDF, JPG, PNG)</label>
                 <input type="file" id="policy-file" name="policy-file" className="w-full text-sm text-brand-body-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-gold file:text-brand-navy hover:file:bg-brand-gold-dark" required />
              </div>
              
              <div data-netlify-recaptcha="true" className="mb-8"></div>

              <button type="submit" className="w-full py-4 bg-brand-gold text-brand-navy font-bold text-lg rounded-lg shadow-lg shadow-brand-gold/20 transform hover:scale-105 hover:bg-brand-gold-dark transition-all duration-300">
                Submit for My Free Analysis
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default FreeAuditPage;
