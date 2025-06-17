'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const selectTile = (condition: string) => {
    setSelectedCondition(condition);
    setTimeout(() => {
      setShowStickyCTA(true);
    }, 500);
  };

  const startAssessment = () => {
    if (selectedCondition) {
      alert(`Starting assessment for: ${selectedCondition.replace('-', ' ')}`);
    } else {
      alert('Starting general health assessment');
    }
  };

  const browseTreatments = () => {
    alert('Browsing available treatments');
  };

  const tiles = [
    {
      id: 'erectile-dysfunction',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      text: 'Trouble with erections'
    },
    {
      id: 'peyronies',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      text: 'Curved or painful penis'
    },
    {
      id: 'enhancement',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      text: 'Enhancement goals'
    },
    {
      id: 'performance',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: 'Boosting performance'
    },
    {
      id: 'grooming',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      text: 'Grooming/aesthetic interest'
    },
    {
      id: 'browsing',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      text: 'Just browsing'
    }
  ];

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen relative shadow-lg font-sans">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-700 via-purple-800 to-slate-800 text-white">
        <div className="px-8 py-12 text-center">
          {/* Logo */}
          <div className={`mb-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h1 className="text-3xl font-bold tracking-tight">Novus.Health</h1>
          </div>

          {/* Founder Photo & Info */}
          <div className={`mb-8 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="mb-4">
              <img
                src="https://storage.googleapis.com/msgsndr/csRV4PYkwviHER2OUZPO/media/68487ed72e44b51f2ee95cfa.jpeg"
                alt="Dr. Stephanie PA"
                className="w-30 h-30 mx-auto rounded-full object-cover border-4 border-slate-300 shadow-lg transition-all duration-300 hover:border-slate-200"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">Dr. Stephanie</h2>
              <p className="text-sm text-slate-200 font-medium">Founder & Medical Director</p>
            </div>
          </div>

          {/* Headlines */}
          <div className={`mb-10 transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h1 className="text-3xl font-bold mb-4 leading-tight tracking-tight">
              Welcome to Novus.Health — Let's talk about men's health.
            </h1>
            <p className="text-lg text-slate-100 font-medium">
              Private. Fast. Backed by real licenced medical providers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`space-y-4 transform transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button 
              onClick={startAssessment}
              className="w-full bg-white text-slate-700 py-5 px-10 rounded-xl text-lg font-bold transition-colors duration-300 hover:bg-slate-50 shadow-lg flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Start My Assessment</span>
            </button>
            <button 
              onClick={browseTreatments}
              className="w-full bg-purple-700 text-white py-4 px-8 rounded-xl text-base font-semibold border border-purple-600 transition-colors duration-300 hover:bg-purple-600 flex items-center justify-center space-x-2"
            >
              <span>Browse Treatments</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-16 px-8 bg-gradient-to-b from-white to-slate-50">
        <div className={`transform transition-all duration-1000 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">What brings you in today?</h2>
            <div className="w-10 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {tiles.map((tile, index) => (
              <div
                key={tile.id}
                onClick={() => selectTile(tile.id)}
                className={`bg-white border-2 rounded-xl p-7 text-center cursor-pointer transition-all duration-300 ${
                  selectedCondition === tile.id 
                    ? 'border-purple-600 bg-purple-50 shadow-md' 
                    : 'border-slate-200 hover:border-purple-400 hover:bg-purple-50'
                } transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    selectedCondition === tile.id 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-slate-100 text-slate-600 group-hover:bg-purple-100'
                  }`}>
                    {tile.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <p className={`text-lg font-semibold transition-colors duration-300 ${
                      selectedCondition === tile.id 
                        ? 'text-slate-900 font-bold' 
                        : 'text-slate-700'
                    }`}>
                      {tile.text}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        selectedCondition === tile.id 
                          ? 'text-purple-600' 
                          : 'text-slate-400'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-16 px-8 border-t border-slate-200">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Trusted by thousands of men nationwide</h2>
          <p className="text-slate-600 font-medium leading-relaxed">Our platform combines clinical expertise with modern convenience to deliver personalized men's health solutions.</p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-5 mb-10">
          {[
            { 
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ), 
              text: 'HIPAA Compliant' 
            },
            { 
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ), 
              text: 'US Based' 
            },
            { 
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              ), 
              text: 'Discreet Shipping' 
            }
          ].map((badge, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200 transition-colors duration-300 hover:bg-slate-50">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-600/20">
                {badge.icon}
              </div>
              <p className="text-xs font-semibold text-slate-700">{badge.text}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-5">
          {[
            {
              text: "Finally found a service that takes men's health seriously. The process was professional and completely confidential.",
              author: "Michael R., Verified Patient"
            },
            {
              text: "The convenience of online consultations with real doctors made all the difference. Highly recommend.",
              author: "David K., Verified Patient"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-7 border-l-4 border-purple-600 shadow-sm transition-colors duration-300 hover:bg-purple-50">
              <p className="text-slate-700 mb-3 leading-relaxed font-medium">{testimonial.text}</p>
              <p className="text-sm font-semibold text-slate-500">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-slate-800 via-purple-900 to-slate-900 text-white py-16 px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3 tracking-tight">Get Started in 2 Minutes</h2>
          <p className="text-lg text-slate-200 mb-8 font-medium">Complete a quick, confidential assessment</p>
          <button 
            onClick={startAssessment}
            className="bg-purple-600 text-white py-5 px-10 rounded-xl text-lg font-bold border border-purple-500 transition-colors duration-300 hover:bg-purple-500 shadow-lg shadow-purple-600/20"
          >
            Begin Assessment Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 px-8 border-t border-slate-200">
        <div className="grid grid-cols-2 gap-4 text-sm mb-8">
          {['Conditions', 'About', 'Blog', 'FAQ', 'Privacy', 'Terms', 'Contact', 'Support'].map((link) => (
            <a key={link} href="#" className="text-slate-600 hover:text-slate-800 transition-colors duration-300 font-medium">
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-500 leading-relaxed font-normal">
          This information is not intended to replace professional medical advice. 
          Consult your physician before starting any treatment. Novus.Health connects 
          patients with licensed healthcare providers.
        </p>
      </footer>

      {/* Sticky CTA */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white p-5 shadow-lg z-50 border-t border-slate-200">
          <button 
            onClick={startAssessment}
            className="w-full bg-purple-600 text-white py-4 px-8 rounded-xl text-lg font-bold transition-colors duration-300 hover:bg-purple-500 shadow-lg shadow-purple-600/20 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Start Assessment</span>
          </button>
        </div>
      )}
    </div>
  );
}