import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { rooms } from '../lib/rooms';
import { useItem } from '../utils/useItem';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [gameState, setGameState] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const initializeGameState = () => {
      const storedState = localStorage.getItem('gameState');
      if (storedState) {
        const parsedState = JSON.parse(storedState);
        // Ensure usedItems exists and is an array
        parsedState.usedItems = parsedState.usedItems || [];
        // Ensure the inventory is always full
        const fullInventory = rooms.flatMap(room => room.collectibleItems);
        parsedState.inventory = fullInventory.filter(item => 
          !parsedState.usedItems.includes(item.name)
        );
        setGameState(parsedState);
      } else {
        const initialState = {
          currentRoom: 0,
          inventory: rooms.flatMap(room => room.collectibleItems),
          usedItems: [],
          completedRooms: [],
        };
        setGameState(initialState);
        localStorage.setItem('gameState', JSON.stringify(initialState));
      }
    };

    initializeGameState();
  }, []);

  const handleUseItem = (item, roomData) => {
    if (!gameState) return { success: false, message: "Game not initialized" };

    const result = useItem(item, roomData);
    
    if (result.success) {
      const newState = {
        ...gameState,
        usedItems: [...gameState.usedItems, item.name],
        inventory: gameState.inventory.filter(i => i.name !== item.name),
        completedRooms: [...gameState.completedRooms, roomData.id],
      };
      setGameState(newState);
      localStorage.setItem('gameState', JSON.stringify(newState));
    }

    return result;
  };

  const handleRoomComplete = (roomId) => {
    if (!gameState) return;

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

  if (!gameState) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="bg-gradient-haunted p-4">
        <h1 className="text-3xl font-bold mb-2 text-purple-300 text-shadow-glow">The Haunted House of Cyber Terrors</h1>
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
