import { useState, useEffect } from 'react';
import Enemy from './components/Enemy';
import Striker from './components/Striker';
import { useAudio } from './hooks/useAudio';

function App() {
  const [enemies, setEnemies] = useState([]);
  const [score, setScore] = useState(0);
  const { playSound } = useAudio();

  // 1. Spawner Loop
  useEffect(() => {
    const spawnInterval = setInterval(() => {
      const newEnemy = {
        id: Date.now(),
        side: Math.random() > 0.5 ? 'left' : 'right',
        type: Math.random() > 0.8 ? 'boss' : 'kick', // Randomize types
        spawnTime: Date.now()
      };
      setEnemies(prev => [...prev, newEnemy]);
    }, 2000); // New enemy every 2 seconds

    return () => clearInterval(spawnInterval);
  }, []);

  // 2. Kill Logic
  const handleStrike = (side, type) => {
    // Check if any enemy is close enough to be hit
    setEnemies(prev => {
      const hitIndex = prev.findIndex(e => e.side === side);
      if (hitIndex !== -1) {
        const newEnemies = [...prev];
        newEnemies.splice(hitIndex, 1);
        setScore(s => s + 10);
        return newEnemies;
      }
      return prev;
    });
  };

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <div className="absolute top-10 left-10 text-white text-2xl">Score: {score}</div>
      
      {/* The Striker */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Striker />
      </div>

      {/* The Enemies */}
      {enemies.map(enemy => (
        <Enemy key={enemy.id} {...enemy} />
      ))}
    </div>
  );
}

export default App;