import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Progress from '../components/Progress';
import { rooms } from '../lib/rooms';
import { useItem } from '../utils/useItem';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [gameState, setGameState] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedState = localStorage.getItem('gameState');
    if (storedState) {
      setGameState(JSON.parse(storedState));
    } else {
      const initialState = {
        currentRoom: 0,
        inventory: rooms.flatMap(room => room.collectibleItems),
        completedRooms: [],
      };
      setGameState(initialState);
      localStorage.setItem('gameState', JSON.stringify(initialState));
    }
  }, []);

  const handleUseItem = (item, roomData) => {
    const result = useItem(item, roomData);
    
    if (result.success) {
      const newState = {
        ...gameState,
        inventory: gameState.inventory.filter(i => i.name !== item.name),
        completedRooms: [...gameState.completedRooms, roomData.id],
      };
      setGameState(newState);
      localStorage.setItem('gameState', JSON.stringify(newState));
    }

    return result;
  };

  const handleRoomComplete = (roomId) => {
    const newState = {
      ...gameState,
      currentRoom: roomId + 1,
    };
    setGameState(newState);
    localStorage.setItem('gameState', JSON.stringify(newState));

    if (roomId < rooms.length - 1) {
      router.push(`/room/${roomId + 1}`);
    } else {
      router.push('/completion');
    }
  };

  if (!gameState) return null; // Or a loading spinner

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-3xl font-bold mb-2 text-purple-300">The Haunted House of Cyber Terrors</h1>
        <Progress currentRoom={gameState.currentRoom} totalRooms={rooms.length} />
      </header>
      <main className="flex-grow overflow-hidden">
        <Component 
          {...pageProps} 
          roomData={rooms[gameState.currentRoom]}
          inventory={gameState.inventory}
          onUseItem={handleUseItem}
          onRoomComplete={handleRoomComplete}
        />
      </main>
    </div>
  );
}

export default MyApp;
