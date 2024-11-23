import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileUpload } from '../components/FileUpload';
import { Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface GameSummary {
  id: string;
  date: string;
  playerElo: number;
  cheatScore: number;
  status: 'clean' | 'suspicious' | 'likely_cheating';
}

const mockGames: GameSummary[] = [
  {
    id: '1',
    date: '2024-03-15',
    playerElo: 1850,
    cheatScore: 15,
    status: 'clean',
  },
  {
    id: '2',
    date: '2024-03-14',
    playerElo: 2100,
    cheatScore: 75,
    status: 'likely_cheating',
  },
  {
    id: '3',
    date: '2024-03-13',
    playerElo: 1950,
    cheatScore: 45,
    status: 'suspicious',
  },
];

const getStatusColor = (status: GameSummary['status']) => {
  switch (status) {
    case 'clean':
      return 'text-green-600 bg-green-50';
    case 'suspicious':
      return 'text-yellow-600 bg-yellow-50';
    case 'likely_cheating':
      return 'text-red-600 bg-red-50';
  }
};

const getStatusIcon = (status: GameSummary['status']) => {
  switch (status) {
    case 'clean':
      return CheckCircle;
    case 'suspicious':
      return Clock;
    case 'likely_cheating':
      return AlertTriangle;
  }
};

export const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 text-blue-600">
                <Activity className="w-6 h-6" />
                <h3 className="font-semibold">Total Games</h3>
              </div>
              <p className="text-2xl font-bold mt-2">24</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 text-yellow-600">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="font-semibold">Suspicious Games</h3>
              </div>
              <p className="text-2xl font-bold mt-2">3</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 text-green-600">
                <CheckCircle className="w-6 h-6" />
                <h3 className="font-semibold">Clean Games</h3>
              </div>
              <p className="text-2xl font-bold mt-2">21</p>
            </div>
          </div>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload New Game</h2>
          <FileUpload />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Games</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Player Elo</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Cheat Score</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockGames.map((game) => {
                  const StatusIcon = getStatusIcon(game.status);
                  return (
                    <tr key={game.id} className="border-b border-gray-100">
                      <td className="px-6 py-4 text-sm">{game.date}</td>
                      <td className="px-6 py-4 text-sm">{game.playerElo}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(game.status)}`}>
                          <StatusIcon className="w-4 h-4 mr-1" />
                          {game.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{game.cheatScore}%</td>
                      <td className="px-6 py-4 text-sm">
                        <Link
                          to={`/analysis/${game.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View Analysis
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};