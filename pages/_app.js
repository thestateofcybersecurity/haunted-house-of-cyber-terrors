import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Progress from '../components/Progress';
import { rooms } from '../lib/rooms';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [gameState, setGameState] = useState({
    currentRoom: 0,
    inventory: [],
  });

  const router = useRouter();

  useEffect(() => {
    const fetchProgress = async () => {
      const res = await fetch('/api/getprogress?userId=user123');
      if (res.ok) {
        const progress = await res.json();
        setGameState(progress);
      } else {
        // If no progress, start with all items
        setGameState({
          currentRoom: 0,
          inventory: rooms.flatMap(room => room.collectibleItems),
        });
      }
    };
    fetchProgress();
  }, []);

  const handleUseItem = (item, room) => {
    const correctItem = room.collectibleItems.find(i => i.name === item.name);

    if (correctItem) {
      const newInventory = gameState.inventory.filter(i => i.name !== item.name);
      const newState = { ...gameState, inventory: newInventory };
      setGameState(newState);
      saveProgress(newState);
      return {
        success: true,
        message: `You used ${item.name} successfully! ${correctItem.description}`
      };
    } else {
      const spookyMessages = [
        "The shadows seem to laugh at your mistake...",
        "A chill runs down your spine as you realize your error.",
        "The room grows colder, mocking your incorrect choice.",
        "An eerie whisper tells you to try again...",
        "The flickering lights seem to spell out 'WRONG CHOICE'."
      ];
      const randomMessage = spookyMessages[Math.floor(Math.random() * spookyMessages.length)];
      return {
        success: false,
        message: `${randomMessage} The ${item.name} doesn't seem to work here.`
      };
    }
  };

  const handleRoomComplete = (roomId) => {
    const newState = {
      ...gameState,
      currentRoom: roomId + 1,
    };
    setGameState(newState);
    saveProgress(newState);

    if (roomId < rooms.length - 1) {
      router.push(`/room/${roomId + 1}`);
    } else {
      router.push('/completion');
    }
  };

  const saveProgress = async (progress) => {
    await fetch('/api/saveprogress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'user123', progress }),
    });
  };

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
