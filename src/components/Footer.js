import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: 'newsletter',
          name: '',
          message: 'Newsletter signup from footer'
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 3000);
      } else {
        console.error('Newsletter subscription failed:', data.message);
        // You could show an error message to the user here
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      // You could show an error message to the user here
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    product: [
      { name: 'Features', action: () => scrollToSection('features') },
      { name: 'How It Works', action: () => scrollToSection('how-it-works') },
      { name: 'Pricing', action: () => scrollToSection('pricing') },
      { name: 'Templates', href: '#' },
      { name: 'Integrations', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Video Tutorials', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Webinars', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Security', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'fab fa-twitter', href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: 'fab fa-instagram', href: '#', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: 'fab fa-youtube', href: '#', color: 'hover:text-red-500' },
    { name: 'Facebook', icon: 'fab fa-facebook', href: '#', color: 'hover:text-blue-500' }
  ];

  return (
    <>
      {/* Final CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white px-4 sm:px-0"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Start Teaching?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-90 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Join thousands of educators and launch your course today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => scrollToSection('hero')}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-base sm:text-lg touch-target"
              >
                <i className="fas fa-rocket mr-2"></i>
                Get Started Free
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-base sm:text-lg touch-target">
                <i className="fas fa-calendar mr-2"></i>
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-custom">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid lg:grid-cols-6 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-white text-sm"></i>
                  </div>
                  <span className="text-2xl font-bold">LearnSphere</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Empowering educators worldwide to create, manage, and sell online courses effortlessly. 
                  Transform your expertise into a thriving online business.
                </p>
                
                {/* Newsletter Signup */}
                <div>
                  <h4 className="font-semibold mb-4">Stay Updated</h4>
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                    <button
                      type="submit"
                      disabled={isSubscribed}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        isSubscribed
                          ? 'bg-green-500 text-white'
                          : 'bg-primary-600 hover:bg-primary-700 text-white'
                      }`}
                    >
                      {isSubscribed ? <i className="fas fa-check"></i> : 'Subscribe'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h4 className="font-semibold mb-6">Product</h4>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      {link.action ? (
                        <button
                          onClick={link.action}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="font-semibold mb-6">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h4 className="font-semibold mb-6">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h4 className="font-semibold mb-6">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-400 text-center lg:text-left">
                <p>&copy; 2024 LearnSphere. All rights reserved.</p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm">
                <a
                  href="mailto:support@learnsphere.com"
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  support@learnsphere.com
                </a>
                <a
                  href="tel:+1-555-123-4567"
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  +1 (555) 123-4567
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200 text-xl`}
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;