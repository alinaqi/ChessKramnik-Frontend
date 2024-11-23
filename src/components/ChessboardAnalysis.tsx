import React, { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { ChevronLeft, ChevronRight, SkipBack, SkipForward } from 'lucide-react';

interface ChessboardAnalysisProps {
  pgn: string;
  onMoveChange?: (move: number) => void;
}

export const ChessboardAnalysis: React.FC<ChessboardAnalysisProps> = ({ pgn, onMoveChange }) => {
  const [game, setGame] = useState(new Chess());
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [moves, setMoves] = useState<string[]>([]);
  const [boardWidth, setBoardWidth] = useState(480);
  const [moveHistory, setMoveHistory] = useState<{ from: string; to: string; promotion?: string }[]>([]);

  useEffect(() => {
    const newGame = new Chess();
    try {
      newGame.loadPgn(pgn);
      const history = newGame.history({ verbose: true });
      setMoveHistory(history.map(move => ({
        from: move.from,
        to: move.to,
        promotion: move.promotion,
      })));
      setMoves(newGame.history());
      setCurrentMoveIndex(0);
      setGame(new Chess()); // Reset to initial position
    } catch (error) {
      console.error('Invalid PGN:', error);
    }
  }, [pgn]);

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('chessboard-container');
      if (container) {
        const width = Math.min(480, container.offsetWidth - 32);
        setBoardWidth(width);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToMove = (moveIndex: number) => {
    const newGame = new Chess();
    
    // Reset to initial position
    if (moveIndex < 0) moveIndex = 0;
    if (moveIndex > moveHistory.length) moveIndex = moveHistory.length;

    // Play moves up to the selected index
    for (let i = 0; i < moveIndex; i++) {
      const move = moveHistory[i];
      newGame.move(move);
    }

    setGame(newGame);
    setCurrentMoveIndex(moveIndex);
    onMoveChange?.(moveIndex);
  };

  const renderMoveList = () => {
    const moveRows = [];
    for (let i = 0; i < moves.length; i += 2) {
      const moveNumber = Math.floor(i / 2) + 1;
      const whiteMove = moves[i];
      const blackMove = moves[i + 1];
      
      moveRows.push(
        <div
          key={i}
          className="grid grid-cols-3 text-sm border-b border-gray-100 last:border-0"
        >
          <span className="p-2 text-gray-500">{moveNumber}.</span>
          <button
            className={`p-2 text-left hover:bg-gray-50 ${
              i === currentMoveIndex ? 'bg-indigo-50 text-indigo-600' : ''
            }`}
            onClick={() => goToMove(i)}
          >
            {whiteMove}
          </button>
          {blackMove && (
            <button
              className={`p-2 text-left hover:bg-gray-50 ${
                i + 1 === currentMoveIndex ? 'bg-indigo-50 text-indigo-600' : ''
              }`}
              onClick={() => goToMove(i + 1)}
            >
              {blackMove}
            </button>
          )}
        </div>
      );
    }
    return moveRows;
  };

  return (
    <div className="space-y-4">
      <div id="chessboard-container" className="bg-white rounded-xl shadow-sm p-6">
        <div className="max-w-[480px] mx-auto">
          <Chessboard
            position={game.fen()}
            boardWidth={boardWidth}
            areArrowsAllowed={true}
            customBoardStyle={{
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          />
        </div>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <button
            onClick={() => goToMove(0)}
            className="p-2 hover:bg-gray-100 rounded-lg"
            title="First move"
          >
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={() => goToMove(currentMoveIndex - 1)}
            className="p-2 hover:bg-gray-100 rounded-lg"
            title="Previous move"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-mono">
            Move: {currentMoveIndex}/{moves.length}
          </span>
          <button
            onClick={() => goToMove(currentMoveIndex + 1)}
            className="p-2 hover:bg-gray-100 rounded-lg"
            title="Next move"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => goToMove(moves.length)}
            className="p-2 hover:bg-gray-100 rounded-lg"
            title="Last move"
          >
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Move List</h3>
        <div className="max-h-[300px] overflow-y-auto">
          {renderMoveList()}
        </div>
      </div>
    </div>
  );
};