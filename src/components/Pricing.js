import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        '1 course',
        'Up to 50 students',
        'Basic analytics',
        'Community support',
        'Mobile app access',
        'Basic customization'
      ],
      limitations: [
        'Limited storage (1GB)',
        'LearnSphere branding',
        'Basic email support'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Pro',
      description: 'Best for growing educators',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Unlimited courses',
        'Unlimited students',
        'Advanced analytics',
        'Email support',
        'Custom branding',
        'Payment integration',
        'Certificates',
        'Email automation',
        'Custom domain',
        'Advanced quizzes'
      ],
      limitations: [],
      cta: 'Start Pro Trial',
      popular: true,
      color: 'border-primary-500'
    },
    {
      name: 'Enterprise',
      description: 'For agencies and large teams',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Everything in Pro',
        'Priority support',
        'Custom integrations',
        'Dedicated manager',
        'White-label solution',
        'Advanced security',
        'API access',
        'Custom reporting',
        'SSO integration',
        'Bulk user management'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-gray-200'
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
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
            Simple,{' '}
            <span className="text-primary">Transparent Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Choose the perfect plan for your needs. Start free and upgrade as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 px-4 sm:px-0">
            <span className={`font-medium text-sm sm:text-base ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 touch-target ${
                isYearly ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium text-sm sm:text-base ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mobile-pricing-grid"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`pricing-card ${plan.popular ? 'featured' : ''} relative ${
                plan.popular ? 'md:scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{plan.description}</p>
                
                <div className="mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 ml-2">
                    {plan.monthlyPrice === 0 ? 'forever' : isYearly ? '/year' : '/month'}
                  </span>
                </div>

                {isYearly && plan.monthlyPrice > 0 && (
                  <div className="text-xs sm:text-sm text-green-600 font-medium">
                    Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="mb-6 sm:mb-8">
                <ul className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0 text-sm"></i>
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-start opacity-60">
                      <i className="fas fa-minus text-gray-400 mt-1 mr-3 flex-shrink-0 text-sm"></i>
                      <span className="text-xs sm:text-sm text-gray-500">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 touch-target text-sm sm:text-base ${
                  plan.popular
                    ? 'btn-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>

              {/* Additional Info */}
              {plan.name === 'Free' && (
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  No credit card required
                </p>
              )}
              {plan.name === 'Pro' && (
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  14-day free trial included
                </p>
              )}
              {plan.name === 'Enterprise' && (
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  Custom pricing available
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 px-4 sm:px-0">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-sm sm:text-base">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-sm sm:text-base">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Is there a setup fee?</h4>
              <p className="text-gray-600 text-sm sm:text-base">No setup fees for any plan. You only pay the monthly or yearly subscription fee.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Can I cancel anytime?</h4>
              <p className="text-gray-600 text-sm sm:text-base">Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.</p>
            </div>
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-gray-200 mx-4 sm:mx-0"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-4">
            <i className="fas fa-shield-alt text-green-600 text-xl sm:text-2xl"></i>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">30-Day Money-Back Guarantee</h3>
          <p className="text-sm sm:text-base text-gray-600">
            Try LearnSphere risk-free. If you're not completely satisfied within 30 days, we'll refund your money.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;