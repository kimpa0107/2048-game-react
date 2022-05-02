import React from 'react';
import TryAginLogo from '../assets/img/try-again.gif';

function GameOverlay({ onRestart, board }) {
  if (board.hasWon()) {
    return <div className='tile2048'></div>;
  } else if (board.hasLost()) {
    return (
      <div className='gameOver' onClick={onRestart}>
        <img
          src={TryAginLogo}
          style={{
            width: '100%',
            height: '100%',
            cursor: 'pointer',
          }}
          alt="Try again"
        />
      </div>
    );
  }
  return null;
}

export default GameOverlay;
