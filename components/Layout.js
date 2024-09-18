import React from 'react';
import Head from 'next/head';
import RoomNavigation from './RoomNavigation';

const Layout = ({ children, userProgress }) => {
  return (
    <div className="min-h-screen bg-haunted-black text-ghostly-white">
      <Head>
        <title>The Haunted House of Cyber Terrors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-haunted-black shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-eerie-green">The Haunted House of Cyber Terrors</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-haunted-black shadow-md mt-8">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <RoomNavigation userProgress={userProgress} />
          <p className="text-eerie-green">Score: {userProgress.score}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
