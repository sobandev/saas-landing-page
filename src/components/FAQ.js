import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I use my own domain?',
      answer: 'Yes, Pro and Enterprise plans support custom domains. You can connect your existing domain or purchase a new one through our platform. We provide step-by-step guidance to set it up.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, our Free Plan lets you start without a credit card. You can create one course and host up to 50 students. Pro and Enterprise plans also include a 14-day free trial with full access to all features.'
    },
    {
      question: 'Do I need coding skills?',
      answer: 'No, our drag-and-drop builder is completely code-free. You can create professional-looking courses using our intuitive interface. We also provide templates and design tools to make the process even easier.'
    },
    {
      question: 'Can I integrate with my existing tools?',
      answer: 'Yes, we support Zapier and direct integrations with popular tools like Mailchimp, ConvertKit, Google Analytics, Facebook Pixel, and more. Our API also allows custom integrations for Enterprise customers.'
    },
    {
      question: 'How secure is my data?',
      answer: 'We use industry-standard encryption (SSL/TLS) and store all data in secure, SOC 2 compliant data centers. We perform regular backups and security audits. Your content and student data are always protected.'
    },
    {
      question: 'What payment gateways are supported?',
      answer: 'Stripe, PayPal, and Razorpay are included in all paid plans. We support one-time payments, subscriptions, payment plans, and multiple currencies. Transaction fees are handled by the payment processors.'
    },
    {
      question: 'Can I migrate from another platform?',
      answer: 'Yes, we provide free migration assistance for Pro and Enterprise customers. Our team will help you transfer your courses, students, and data from platforms like Teachable, Thinkific, or Kajabi.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'Free plan includes community support. Pro plan gets email support with 24-hour response time. Enterprise customers receive priority support with dedicated account managers and phone support.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
            Frequently Asked{' '}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <i className="fas fa-chevron-down text-primary-600 text-lg"></i>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our friendly support team is here to help. Get in touch and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                <i className="fas fa-comments mr-2"></i>
                Start Live Chat
              </button>
              <button className="btn-secondary">
                <i className="fas fa-envelope mr-2"></i>
                Email Support
              </button>
            </div>
          </div>
        </motion.div>

        {/* Help Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <i className="fas fa-book text-blue-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Documentation</h4>
            <p className="text-gray-600 mb-4">
              Comprehensive guides and tutorials to help you get the most out of LearnSphere.
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Browse Docs <i className="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <i className="fas fa-video text-green-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Video Tutorials</h4>
            <p className="text-gray-600 mb-4">
              Step-by-step video guides to help you master every feature of the platform.
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Watch Videos <i className="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <i className="fas fa-users text-purple-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Community</h4>
            <p className="text-gray-600 mb-4">
              Join thousands of educators sharing tips, strategies, and success stories.
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Join Community <i className="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;