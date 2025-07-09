import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-video',
      title: 'Video Lessons Hosting',
      description: 'Upload and stream high-quality video content effortlessly with our advanced video player and CDN.',
      color: 'text-blue-600'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Quizzes & Certificates',
      description: 'Create engaging quizzes and award professional certificates to boost student motivation.',
      color: 'text-green-600'
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Student Analytics',
      description: 'Track student progress and engagement with detailed insights and comprehensive reports.',
      color: 'text-purple-600'
    },
    {
      icon: 'fas fa-envelope-open-text',
      title: 'Email Automation',
      description: 'Automate student communication with personalized emails and drip campaigns.',
      color: 'text-red-600'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'Payment Integration',
      description: 'Seamless payments with Stripe, PayPal, and more. Handle subscriptions and one-time payments.',
      color: 'text-yellow-600'
    },
    {
      icon: 'fas fa-palette',
      title: 'Custom Branding',
      description: 'Personalize your course with your logo, colors, and custom domain for a professional look.',
      color: 'text-indigo-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
            Everything you need to{' '}
            <span className="text-primary">run your course</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Our comprehensive platform provides all the tools you need to create, manage, and scale your online education business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mobile-card-grid"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="feature-card group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gray-100 group-hover:bg-primary-500 transition-all duration-300 mb-4 sm:mb-6`}>
                <i className={`${feature.icon} text-xl sm:text-2xl ${feature.color} group-hover:text-white transition-colors duration-300`}></i>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-primary-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white mx-4 sm:mx-0"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Plus 50+ more features to power your online business
          </h3>
          <p className="text-base sm:text-lg opacity-90 mb-4 sm:mb-6 max-w-2xl mx-auto">
            From advanced course builders to comprehensive student management, we've got everything covered.
          </p>
          <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 touch-target">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;