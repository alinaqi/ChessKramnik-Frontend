import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Perfect for casual players',
      features: [
        'Up to 5 game analyses per month',
        'Basic cheat detection',
        'Standard analysis speed',
        'Email support',
        '7-day analysis history',
      ],
      icon: Zap,
      color: 'bg-gray-100',
      buttonColor: 'bg-gray-600 hover:bg-gray-700',
    },
    {
      name: 'Platinum',
      price: '$4',
      period: 'per month',
      description: 'Great for regular players',
      features: [
        'Up to 50 game analyses per month',
        'Advanced cheat detection',
        'Priority analysis speed',
        'Priority email support',
        '30-day analysis history',
        'Detailed statistical insights',
        'Export reports in PDF',
      ],
      icon: Crown,
      color: 'bg-indigo-600',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
      popular: true,
    },
    {
      name: 'Premium',
      price: '$12',
      period: 'per month',
      description: 'For professionals and organizations',
      features: [
        'Unlimited game analyses',
        'Enterprise-grade cheat detection',
        'Instant analysis speed',
        '24/7 priority support',
        'Unlimited analysis history',
        'Advanced statistical insights',
        'Custom report formats',
        'Team management features',
        'API access',
      ],
      icon: Crown,
      color: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
    },
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your chess analysis needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-xl shadow-sm overflow-hidden ${
                plan.popular ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-sm font-medium">
                  Popular
                </div>
              )}
              <div className={`${plan.color} p-8 text-white`}>
                <plan.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm opacity-80">/{plan.period}</span>
                  )}
                </div>
                <p className="opacity-80">{plan.description}</p>
              </div>
              <div className="bg-white p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className={`block w-full py-3 px-4 rounded-lg text-center text-white font-medium ${plan.buttonColor} transition-colors`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-6">
            Contact us for custom enterprise plans tailored to your organization's needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
          >
            <span>Contact Sales</span>
            <Crown className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};