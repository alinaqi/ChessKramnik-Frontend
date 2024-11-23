import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  History,
  BarChart,
  Clock,
  Upload,
  Download,
  Users,
  Zap,
  Award,
} from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Analysis',
      description: 'Deep game analysis with move-by-move evaluation and improvement suggestions',
      color: 'text-blue-600',
    },
    {
      icon: Shield,
      title: 'Cheat Detection',
      description: 'Sophisticated algorithms to identify potential computer assistance',
      color: 'text-indigo-600',
    },
    {
      icon: History,
      title: 'Game History',
      description: 'Comprehensive history of all your analyzed games with detailed statistics',
      color: 'text-purple-600',
    },
    {
      icon: BarChart,
      title: 'Statistical Insights',
      description: 'Detailed statistical analysis of your playing patterns and performance',
      color: 'text-green-600',
    },
    {
      icon: Clock,
      title: 'Time Analysis',
      description: 'Analysis of move timing patterns to detect inconsistencies',
      color: 'text-yellow-600',
    },
    {
      icon: Upload,
      title: 'Bulk Upload',
      description: 'Upload and analyze multiple games simultaneously',
      color: 'text-red-600',
    },
    {
      icon: Download,
      title: 'Export Reports',
      description: 'Download detailed analysis reports in multiple formats',
      color: 'text-teal-600',
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Manage and monitor multiple players for tournaments and clubs',
      color: 'text-orange-600',
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Instant feedback and analysis as you upload your games',
      color: 'text-pink-600',
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
            Powerful Features for Chess Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of tools designed to enhance your chess game and ensure fair play.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl shadow-lg p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Game?</h2>
            <p className="text-lg mb-6">
              Join thousands of players who trust ChessKramnik for their game analysis and improvement.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};