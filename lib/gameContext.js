import { createContext, useContext } from 'react';
import { rooms } from './rooms';

export const GameContext = createContext({
  rooms: rooms,
  gameState: null,
  setGameState: () => {},
});

export const useGameContext = () => useContext(GameContext);
