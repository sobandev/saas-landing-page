import React from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Create a Course',
      description: 'Set up your course with our intuitive drag-and-drop builder. No technical skills required.',
      icon: 'fas fa-plus-circle',
      placeholderIcon: 'fas fa-edit',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700'
    },
    {
      number: '02',
      title: 'Add Lessons & Quizzes',
      description: 'Upload videos, documents, and interactive quizzes to create engaging learning experiences.',
      icon: 'fas fa-upload',
      placeholderIcon: 'fas fa-video',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700'
    },
    {
      number: '03',
      title: 'Share and Track',
      description: 'Launch your course and monitor performance with detailed analytics and student insights.',
      icon: 'fas fa-rocket',
      placeholderIcon: 'fas fa-chart-bar',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
            Get Started in{' '}
            <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Launch your online course in minutes, not months. Our streamlined process makes it easy for anyone to become an online educator.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 lg:space-y-24"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full text-white font-bold text-xl mr-4">
                    {step.number}
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full">
                    <i className={`${step.icon} text-primary-600 text-xl`}></i>
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {step.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {step.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {index === 0 && (
                    <>
                      <div className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span>Drag-and-drop course builder</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span>Pre-built course templates</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span>Custom branding options</span>
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span>HD video hosting & streaming</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span>Interactive quiz builder</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span>File & document uploads</span>
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span>Real-time student analytics</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span>Revenue tracking & reports</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span>Automated email campaigns</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} px-4 sm:px-0`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Mobile: Smaller images */}
                  <div className="block sm:hidden">
                    <ImagePlaceholder
                      width={300}
                      height={200}
                      text={step.title}
                      icon={step.placeholderIcon}
                      bgColor={step.bgColor}
                      textColor={step.textColor}
                      className="rounded-xl shadow-lg mx-auto max-w-xs"
                      showDimensions={false}
                    />
                  </div>
                  
                  {/* Tablet and Desktop: Full size images */}
                  <div className="hidden sm:block">
                    <ImagePlaceholder
                      width={500}
                      height={350}
                      text={step.title}
                      icon={step.placeholderIcon}
                      bgColor={step.bgColor}
                      textColor={step.textColor}
                      className="rounded-2xl shadow-2xl"
                    />
                    
                    {/* Floating Badge - Only on larger screens */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-gray-700">
                          {index === 0 && 'Building...'}
                          {index === 1 && 'Uploading...'}
                          {index === 2 && 'Live!'}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Ready to create your first course?
          </h3>
          <button className="btn-primary text-lg">
            <i className="fas fa-play mr-2"></i>
            Start Building Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;