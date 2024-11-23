import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Award, Users, Target, Sword } from 'lucide-react';

export const About = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About ChessKramnik
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to maintaining the integrity of chess through advanced analysis and anti-cheating detection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At ChessKramnik, we believe in preserving the beauty and integrity of chess. Our platform combines cutting-edge technology with deep chess expertise to provide players and organizers with reliable tools for game analysis and fair play monitoring.
            </p>
            <div className="flex items-center space-x-4 text-indigo-600">
              <Target className="w-8 h-8" />
              <span className="text-lg font-semibold">Ensuring fair play in every game</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80"
              alt="Chess pieces"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: 'Advanced Protection',
              description: 'State-of-the-art algorithms to detect potential cheating patterns',
            },
            {
              icon: Brain,
              title: 'Deep Analysis',
              description: 'Comprehensive game analysis with detailed insights and improvements',
            },
            {
              icon: Award,
              title: 'Trusted Results',
              description: 'Reliable and accurate assessments trusted by chess communities worldwide',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
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
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-6">
              Be part of a growing community dedicated to fair and enjoyable chess.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6" />
                <span className="text-xl font-semibold">10,000+ Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sword className="w-6 h-6" />
                <span className="text-xl font-semibold">50,000+ Games Analyzed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};