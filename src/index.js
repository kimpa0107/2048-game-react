import React from 'react';
import { createRoot } from 'react-dom/client';
import BoardView from './components/Board';

import './main.scss';
import './styles.scss';

const App = () => {
  return <BoardView />;
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
