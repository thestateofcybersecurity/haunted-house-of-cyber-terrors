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
      const allItems = rooms.flatMap(room => room.collectibleItems);
      
      if (storedState) {
        const parsedState = JSON.parse(storedState);
        console.log('Stored state:', parsedState);
        
        // Ensure usedItems exists and is an array
        parsedState.usedItems = parsedState.usedItems || [];
        
        // Always refill the inventory with all items not in usedItems
        parsedState.inventory = allItems.filter(item => 
          !parsedState.usedItems.includes(item.name)
        );
        
        console.log('Updated state:', parsedState);
        setGameState(parsedState);
      } else {
        const initialState = {
          currentRoom: 0,
          inventory: allItems,
          usedItems: [],
          completedRooms: [],
        };
        console.log('Initial state:', initialState);
        setGameState(initialState);
        localStorage.setItem('gameState', JSON.stringify(initialState));
      }
    };

    initializeGameState();
  }, []);

  useEffect(() => {
    if (gameState) {
      console.log('Current game state:', gameState);
    }
  }, [gameState]);

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
      console.log('New state after using item:', newState);
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
    console.log('New state after completing room:', newState);
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
