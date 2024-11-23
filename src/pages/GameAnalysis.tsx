import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { ChessboardAnalysis } from '../components/ChessboardAnalysis';

export const GameAnalysis = () => {
  const { gameId } = useParams();
  const [currentMove, setCurrentMove] = React.useState(0);

  // Mock data - replace with actual API calls
  const analysis = {
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7',
    cheatScore: 75,
    blunders: 2,
    inaccuracies: 3,
    bestMoveMatches: 85,
    timeConsistency: 68,
    eloConsistency: 92,
    suggestedImprovements: [
      'Consider taking more time on critical positions',
      'Review opening theory for the Sicilian Defense',
      'Practice endgame techniques',
    ],
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Analysis Section */}
            <div className="lg:col-span-2">
              <ChessboardAnalysis
                pgn={analysis.pgn}
                onMoveChange={setCurrentMove}
              />
            </div>

            {/* Analysis Sidebar */}
            <div className="space-y-8">
              {/* Cheating Probability */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Analysis Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Cheat Score</span>
                    <span className="font-semibold text-red-600">{analysis.cheatScore}%</span>
                  </div>
                  {analysis.cheatScore > 70 && (
                    <div className="flex items-center space-x-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                      <AlertTriangle className="w-4 h-4" />
                      <span>High probability of computer assistance</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Blunders</span>
                    <span className="font-semibold">{analysis.blunders}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Inaccuracies</span>
                    <span className="font-semibold">{analysis.inaccuracies}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Move Matches</span>
                    <span className="font-semibold">{analysis.bestMoveMatches}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Consistency</span>
                    <span className="font-semibold">{analysis.timeConsistency}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Elo Consistency</span>
                    <span className="font-semibold">{analysis.eloConsistency}%</span>
                  </div>
                </div>
              </div>

              {/* Improvement Suggestions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Improvement Suggestions</h3>
                <ul className="space-y-3">
                  {analysis.suggestedImprovements.map((suggestion, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="font-medium text-indigo-600">•</span>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};