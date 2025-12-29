import { useEffect, useState } from "react";

interface Coin {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  drift: number;
}

export const FallingCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const sizes = [12, 16, 20, 24];
    const generatedCoins: Coin[] = [];
    
    for (let i = 0; i < 18; i++) {
      generatedCoins.push({
        id: i,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        left: Math.random() * 100,
        delay: Math.random() * 8, // Reduced delay so coins appear faster
        duration: 12 + Math.random() * 8, // 12-20 seconds
        drift: (Math.random() - 0.5) * 100, // -50 to 50px horizontal drift
      });
    }
    
    setCoins(generatedCoins);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="absolute rounded-full coin-fall dark:bg-[#8B5CF6] bg-[#D0A651]"
          style={{
            width: coin.size,
            height: coin.size,
            left: `${coin.left}%`,
            top: -30,
            opacity: 0.5,
            animationDuration: `${coin.duration}s`,
            animationDelay: `${coin.delay}s`,
            '--drift': `${coin.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};
