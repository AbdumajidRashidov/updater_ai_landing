'use client';

import { useState, useEffect } from 'react';
import { sendToTelegram } from './actions';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Form states
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const result = await sendToTelegram(formData);

    if (result.success) {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    } else {
      setFormStatus('error');
      setErrorMessage(result.error || 'Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Change nav style after scrolling past hero section (roughly 600px)
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/50 backdrop-blur-lg shadow-md border-b border-gray-100'
        : 'bg-white/10 backdrop-blur-lg border-b border-white/30'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Updater AI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`transition-colors font-semibold ${isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}>
                Features
              </a>
              <a href="#how-it-works" className={`transition-colors font-semibold ${isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}>
                How It Works
              </a>
              <a href="#milestones" className={`transition-colors font-semibold ${isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}>
                Process
              </a>
              <a href="#faq" className={`transition-colors font-semibold ${isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}>
                FAQ
              </a>
            </div>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="gradient-orange text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block shadow-glow-hover"
              >
                Start Free Trial
              </a>
            </div>


            {/* Mobile menu button */}
            <button
              className={`md:hidden transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden pb-4 pt-4 px-4 rounded-b-2xl transition-all duration-300 ${isScrolled
              ? 'bg-white/95 backdrop-blur-lg border-t border-gray-100'
              : 'bg-gray-900/80 backdrop-blur-lg border-t border-white/10'
              }`}>
              <a
                href="#features"
                className={`block py-3 transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className={`block py-3 transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}
              >
                How It Works
              </a>
              <a
                href="#milestones"
                className={`block py-3 transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}
              >
                Process
              </a>
              <a
                href="#faq"
                className={`block py-3 transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}
              >
                FAQ
              </a>
              <a href="#contact" className="block py-4 text-orange-500 font-bold text-center border-t border-gray-100 mt-2">
                Start Free Trial
              </a>
            </div>
          )}
        </div>
      </nav>


      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 gradient-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Trusted by 100+ US Trucking Companies</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Updater AI<br />
              <span className="text-orange-400">Never Sleeps</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Automate broker calls, load tracking, and driver updates 24/7. Save $3,600+/month while your AI handles the repetitive work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#contact"
                className="gradient-orange text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 inline-block shadow-glow transform hover:scale-105"
              >
                Start 30-Day Free Trial
              </a>
              <a
                href="#how-it-works"
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-block"
              >
                Watch Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold mb-2 text-orange-400">77%</div>
                <div className="text-gray-200 text-lg font-medium">Cost Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold mb-2 text-orange-400">24/7</div>
                <div className="text-gray-200 text-lg font-medium">Always Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold mb-2 text-orange-400">$0.23</div>
                <div className="text-gray-200 text-lg font-medium">Cost Per Load</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stop Losing Money on Manual Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your team spends on repetitive tasks costs you money. Let AI handle it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Pain Points */}
            <div className="bg-white rounded-2xl shadow-xl p-10 border-2 border-red-100">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">The Old Way</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Brokers calling 24/7 asking "Where\'s my truck?"',
                  'Manually checking GPS for every load update',
                  'Calling drivers to confirm pickups and deliveries',
                  'Searching for rate confirmations during busy times',
                  'Copying data from rate confirmations by hand',
                  'Missing calls means losing loads'
                ].map((pain, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg">{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl p-10 border-2 border-orange-200">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">The AI Way</h3>
              </div>
              <div className="space-y-4">
                {[
                  'AI answers broker calls instantly with real-time updates',
                  'Automatic location tracking via your ELD system',
                  'Proactive driver calls 2 hours before pickup',
                  'Automatically finds Rate Confirmations from your email',
                  'AI extracts load details from PDFs automatically',
                  'Never miss a call or update again'
                ].map((solution, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg font-medium">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything Your Fleet Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete dispatch automation built specifically for trucking companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-orange-200">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section id="how-it-works" className="pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Set it up once, then let AI handle your dispatch 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold text-orange-500">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Broker Calls AI
              </h3>
              <div className="space-y-3">
                {[
                  'Broker calls your number',
                  'AI answers professionally',
                  'Provides real-time location & ETA',
                  'Transfers to you if needed'
                ].map((step, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Auto Load Creation
              </h3>
              <div className="space-y-3">
                {[
                  'Email arrives with rate con',
                  'AI extracts all load details',
                  'Creates load automatically',
                  'Sends to driver via Telegram'
                ].map((step, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Smart Tracking
              </h3>
              <div className="space-y-3">
                {[
                  'Calls driver before pickup',
                  'Tracks location via ELD',
                  'Auto-detects arrivals',
                  'Updates broker every 2 hours'
                ].map((step, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Milestones */}
      <section id="milestones" className="pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Path to Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started is simple. We integrate with your current workflow in four easy milestones.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line (Desktop only) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-100 via-orange-500 to-orange-100 -translate-x-1/2 hidden md:block opacity-30"></div>

            {/* Milestones Container */}
            <div className="space-y-12 md:space-y-24">
              {[
                {
                  step: '01',
                  title: 'Connect Your ELD',
                  desc: 'Sync with your Samsara account in one click. We pull real-time truck locations directly from your existing hardware.',
                  platforms: ['Samsara', 'Motive (Soon)', 'Geotab (Soon)'],
                  icon: <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17h5m10 0h-5" /></svg>
                },
                {
                  step: '02',
                  title: 'Link Your Email',
                  desc: 'Connect your Gmail or Outlook. Updater AI begins reading Rate Confirmations and extracting load details instantly.',
                  platforms: ['Gmail', 'Outlook', 'PDF Parsing'],
                  icon: <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                },
                {
                  step: '03',
                  title: 'Configure Voice',
                  desc: 'Choose your professional AI greeting. Connect your RingCentral account to handle broker calls and status updates.',
                  platforms: ['RingCentral', 'Twilio (Soon)'],
                  icon: <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                },
                {
                  step: '04',
                  title: 'Full Automation Live',
                  desc: 'Your Updater AI is live 24/7. It handles repetitive tracking calls and updates while you focus on scaling your business.',
                  platforms: ['24/7 Live', 'Auto-Scaling', 'Weekly Reports'],
                  icon: <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                }
              ].map((m, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <div className={`bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 transform transition-all hover:scale-[1.02] duration-300 ${i % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-orange-100/50">
                          {m.icon}
                        </div>
                        <div>
                          <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-1">Milestone {m.step}</span>
                          <h3 className="text-2xl font-bold text-gray-900">{m.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{m.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {m.platforms.map(p => (
                          <span key={p} className="bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200/50 uppercase tracking-tighter">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 my-8 md:my-0">
                    <div className="w-14 h-14 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,119,0,0.4)]">
                      <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              These are the questions our customers ask us most frequently
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-orange-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="gradient-bg py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Updates?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-4">
              Join 100+ trucking companies saving thousands every month
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-xl text-gray-600 mb-8">We've received your request and will contact you within 24 hours.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-orange-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
                    {errorMessage}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <input
                      name="name"
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition shadow-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Company Name *</label>
                    <input
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition shadow-sm"
                      placeholder="ABC Trucking"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition shadow-sm"
                      placeholder="john@abctrucking.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition shadow-sm"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Fleet Size</label>
                  <select
                    name="fleetSize"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition shadow-sm"
                  >
                    <option>Select your fleet size...</option>
                    <option>1-5 trucks</option>
                    <option>6-15 trucks</option>
                    <option>16-50 trucks</option>
                    <option>50+ trucks</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tell us about your needs (Optional)</label>
                  <textarea
                    name="needs"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition shadow-sm"
                    placeholder="What dispatch challenges are you facing?"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full gradient-orange text-white px-8 py-5 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 shadow-glow flex items-center justify-center ${formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Get in touch with us →'}
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    <svg className="w-4 h-4 text-gray-400 inline mr-1 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> Your information is secure. We'll contact you within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">30 Days</div>
              <div className="text-gray-200">Free Trial Period</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">15 Min</div>
              <div className="text-gray-200">Average Setup Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-200">Customer Support</div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-orange rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-white text-xl font-bold">Updater AI</div>
              </div>
              <p className="text-sm leading-relaxed">
                Automate your trucking dispatch with AI-powered voice agents. Save time, reduce costs, and never miss a call.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="hover:text-orange-400 transition">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-orange-400 transition">How It Works</a></li>
                <li><a href="#faq" className="hover:text-orange-400 transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Blog</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">&copy; 2025 Updater AI. All rights reserved.</p>
              <p className="text-sm mt-4 md:mt-0">Made for US Trucking Companies</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Data
const features = [
  {
    title: 'AI Voice Agents',
    description: 'Natural conversations with brokers and drivers. Provides real-time status, ETAs, and handles delays professionally.',
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  },
  {
    title: 'Real-Time Tracking',
    description: 'Integrates with your Samsara ELD. Always know exactly where your trucks are without manual checking.',
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  },
  {
    title: 'Smart Rate Confirmations',
    description: 'AI reads PDFs and extracts load details automatically. Creates loads with 95%+ accuracy.',
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  },
  {
    title: 'Proactive Driver Calls',
    description: 'Calls drivers 2 hours before pickup to confirm. No more missed pickups or last-minute surprises.',
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
  },
  {
    title: 'Auto-Arrival Detection',
    description: 'Geofencing automatically detects when drivers arrive. Updates sent instantly without driver input.',
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: 'Multi-Channel Updates',
    description: 'Send updates via phone, Telegram, email, or webhook. Everyone stays informed automatically.',
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
  }
];

const integrations = [
  { name: 'Samsara', purpose: 'ELD Tracking' },
  { name: 'Telegram', purpose: 'Driver Messaging' },
  { name: 'Email', purpose: 'Rate Confirmations' },
  { name: 'RingCentral', purpose: 'Voice Calls' }
];

const faqs = [
  {
    q: 'Will it replace my dispatcher?',
    a: 'No. It handles repetitive tasks (calls, updates, tracking) so your dispatcher can focus on problem-solving, customer relationships, and growing the business.'
  },
  {
    q: 'Do I need to share my Samsara or RingCentral accounts?',
    a: 'No sharing! You connect YOUR OWN accounts through the settings page. You enter your own API keys, and they\'re encrypted and stored securely.'
  },
  {
    q: 'How accurate is the voice AI?',
    a: 'The AI understands natural conversations with 95%+ accuracy, even with different accents and speaking styles. It knows when to transfer complex situations to humans.'
  },
  {
    q: 'What if my ELD system isn\'t Samsara?',
    a: 'The system is designed to work with multiple ELD providers. We start with Samsara and can add others (Motive, KeepTruckin, etc.) as needed.'
  },
  {
    q: 'How long does setup take?',
    a: 'Initial setup takes about 30 minutes. You just need to connect your API keys in the settings.'
  },
  {
    q: 'Can I customize the AI\'s responses?',
    a: 'Yes! You can adjust the AI\'s communication style, frequency of updates, and when it should transfer to a human dispatcher.'
  },
  {
    q: 'What happens if the AI makes a mistake?',
    a: 'The AI is designed to transfer uncertain situations to humans. You maintain full oversight and can intervene anytime. All actions are logged.'
  }
];
