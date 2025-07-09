import React from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Online Fitness Trainer',
      company: 'FitLife Academy',
      quote: 'I launched my course in one day — no tech headaches! LearnSphere made it incredibly simple to get started.',
      rating: 5,
      revenue: '$15K in first month',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-700'
    },
    {
      name: 'Michael Chen',
      role: 'Language Instructor',
      company: 'Global Language Hub',
      quote: 'The analytics helped me improve student engagement by 30%. I can see exactly where students struggle.',
      rating: 5,
      students: '2,500+ students',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Digital Marketer',
      company: 'Marketing Mastery',
      quote: 'Custom branding made my course look professional. My students think I have a whole development team!',
      rating: 5,
      courses: '12 courses published',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700'
    }
  ];

  const stats = [
    {
      number: '10,000+',
      label: 'Active Educators',
      icon: 'fas fa-users'
    },
    {
      number: '500K+',
      label: 'Students Enrolled',
      icon: 'fas fa-graduation-cap'
    },
    {
      number: '$2M+',
      label: 'Revenue Generated',
      icon: 'fas fa-dollar-sign'
    },
    {
      number: '99.9%',
      label: 'Uptime',
      icon: 'fas fa-server'
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
    <section id="social-proof" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{' '}
            <span className="text-primary">Educators Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful educators who have transformed their expertise into thriving online businesses.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                <i className={`${stat.icon} text-white text-xl`}></i>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-gray-50 p-8 rounded-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-200">
                <i className="fas fa-quote-right text-3xl"></i>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-sm mr-1"></i>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="mr-4">
                  <ImagePlaceholder
                    width={48}
                    height={48}
                    text={testimonial.name.split(' ').map(n => n[0]).join('')}
                    bgColor={testimonial.bgColor}
                    textColor={testimonial.textColor}
                    className="rounded-full"
                    showDimensions={false}
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-600 font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mt-4 inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                <i className="fas fa-trophy mr-2"></i>
                {testimonial.revenue || testimonial.students || testimonial.courses}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 mb-8">Featured in and trusted by leading platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400 hover:opacity-100 transition-opacity duration-300">
              TechCrunch
            </div>
            <div className="text-2xl font-bold text-gray-400 hover:opacity-100 transition-opacity duration-300">
              Forbes
            </div>
            <div className="text-2xl font-bold text-gray-400 hover:opacity-100 transition-opacity duration-300">
              Entrepreneur
            </div>
            <div className="text-2xl font-bold text-gray-400 hover:opacity-100 transition-opacity duration-300">
              EdTech Hub
            </div>
            <div className="text-2xl font-bold text-gray-400 hover:opacity-100 transition-opacity duration-300">
              Product Hunt
            </div>
          </div>
        </motion.div>

        {/* Success Story CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary-600 rounded-2xl p-8 lg:p-12 text-center text-white"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to join our success stories?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Start your journey today and become the next educator to transform lives through online learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Read More Stories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;