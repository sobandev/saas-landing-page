import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
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
          message: 'Newsletter signup from hero section'
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error('Submission failed:', data.message);
        // You could show an error message to the user here
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You could show an error message to the user here
    }
  };

  return (
    <section id="hero" className="bg-blue-50 min-h-screen flex items-center pt-16 sm:pt-20 safe-area-top">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mobile-no-image">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mobile-text-responsive font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Launch Your{' '}
              <span className="text-primary">Online Course</span>{' '}
              in Minutes
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mobile-subtext-responsive text-gray-600 mb-6 sm:mb-8 leading-relaxed"
            >
              All-in-one platform to host lessons, track progress & engage students.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <button className="btn-primary w-full sm:w-auto touch-target">
                <i className="fas fa-rocket mr-2"></i>
                Try for Free
              </button>
              <button className="btn-secondary w-full sm:w-auto touch-target">
                <i className="fas fa-play mr-2"></i>
                Watch Demo
              </button>
            </motion.div>

            {/* Email Signup Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onSubmit={handleSubmit}
              className="mobile-form max-w-md mx-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="mobile-input"
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full sm:w-auto px-6 py-3 rounded-lg font-semibold transition-all duration-300 touch-target ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                }`}
              >
                {isSubmitted ? (
                  <i className="fas fa-check"></i>
                ) : (
                  'Get Started'
                )}
              </button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xs sm:text-sm text-gray-500 mt-3"
            >
              No credit card required • Free 14-day trial
            </motion.p>
          </motion.div>

          {/* Right Column - Visual - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0 hidden sm:block"
          >
            <div className="relative z-10">
              <ImagePlaceholder
                width={600}
                height={400}
                text="Course Dashboard Preview"
                icon="fas fa-chart-line"
                bgColor="bg-blue-100"
                textColor="text-blue-700"
                className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Live: 1,247</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <i className="fas fa-chart-line text-primary-600 text-xs sm:text-sm"></i>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">$12,450</span>
                </div>
              </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 sm:mt-16 lg:mt-24"
        >
          <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Trusted by 10,000+ educators worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">Coursera</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">Udemy</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400 mobile-hidden">Skillshare</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400 mobile-hidden">MasterClass</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;