import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const Screenshots = () => {
  const [activeTab, setActiveTab] = useState(0);

  const screenshots = [
    {
      title: 'Course Builder',
      description: 'Build courses effortlessly with our intuitive drag-and-drop interface',
      width: 800,
      height: 500,
      icon: 'fas fa-edit',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
      features: ['Drag & Drop Builder', 'Live Preview', 'Template Library', 'Custom Styling']
    },
    {
      title: 'Student Dashboard',
      description: 'Students get a beautiful, easy-to-navigate learning experience',
      width: 800,
      height: 500,
      icon: 'fas fa-user-graduate',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
      features: ['Progress Tracking', 'Course Library', 'Certificates', 'Discussion Forums']
    },
    {
      title: 'Mobile Experience',
      description: 'Fully responsive design that works perfectly on all devices',
      width: 400,
      height: 600,
      icon: 'fas fa-mobile-alt',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      features: ['Mobile Optimized', 'Offline Downloads', 'Push Notifications', 'Touch Gestures']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Get detailed insights into student engagement and course performance',
      width: 800,
      height: 500,
      icon: 'fas fa-chart-bar',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-700',
      features: ['Real-time Data', 'Revenue Reports', 'Student Insights', 'Export Options']
    }
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="screenshots" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
            See{' '}
            <span className="text-primary">LearnSphere</span>{' '}
            in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Explore our intuitive interface and discover how easy it is to create, manage, and sell your online courses.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
        >
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base touch-target ${
                activeTab === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {screenshot.title}
            </button>
          ))}
        </motion.div>

        {/* Screenshot Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Screenshot Image */}
              <div className="relative px-4 sm:px-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Mobile: Smaller images */}
                  <div className="block sm:hidden">
                    <ImagePlaceholder
                      width={activeTab === 2 ? 200 : 350}
                      height={activeTab === 2 ? 300 : 220}
                      text={screenshots[activeTab].title}
                      icon={screenshots[activeTab].icon}
                      bgColor={screenshots[activeTab].bgColor}
                      textColor={screenshots[activeTab].textColor}
                      className={`rounded-xl shadow-lg mx-auto ${
                        activeTab === 2 ? 'max-w-[200px]' : 'max-w-[350px]'
                      }`}
                      showDimensions={false}
                    />
                  </div>
                  
                  {/* Tablet and Desktop: Full size images */}
                  <div className="hidden sm:block">
                    <ImagePlaceholder
                      width={screenshots[activeTab].width}
                      height={screenshots[activeTab].height}
                      text={screenshots[activeTab].title}
                      icon={screenshots[activeTab].icon}
                      bgColor={screenshots[activeTab].bgColor}
                      textColor={screenshots[activeTab].textColor}
                      className={`rounded-2xl shadow-2xl ${
                        activeTab === 2 ? 'max-w-sm mx-auto' : ''
                      }`}
                    />
                    
                    {/* Floating UI Elements - Only on larger screens */}
                    {activeTab === 0 && (
                      <>
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg"
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-semibold">Auto-saved</span>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                          className="absolute bottom-4 left-4 bg-primary-600 text-white p-3 rounded-lg shadow-lg"
                        >
                          <span className="text-sm font-semibold">Drag to reorder</span>
                        </motion.div>
                      </>
                    )}
                    
                    {activeTab === 1 && (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-1/2 right-4 bg-white p-3 rounded-full shadow-lg"
                      >
                        <i className="fas fa-play text-primary-600 text-xl"></i>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {screenshots[activeTab].title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {screenshots[activeTab].description}
                </p>

                {/* Features List */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {screenshots[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full">
                        <i className="fas fa-check text-primary-600 text-sm"></i>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <button className="btn-primary">
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Try This Feature
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <i className="fas fa-mobile-alt text-blue-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Mobile First</h4>
            <p className="text-gray-600">Optimized for all devices with responsive design</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <i className="fas fa-bolt text-green-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h4>
            <p className="text-gray-600">Built for speed with optimized performance</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <i className="fas fa-shield-alt text-purple-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h4>
            <p className="text-gray-600">Enterprise-grade security and 99.9% uptime</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Screenshots;