"use client";
import { useState } from "react";

export default function AuroraToggle() {
  const [variant, setVariant] = useState<'northern' | 'brown'>('northern');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
      <button
        onClick={() => setVariant('northern')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          variant === 'northern' 
            ? 'bg-white text-[#001010]' 
            : 'text-white hover:bg-white/10'
        }`}
      >
        Northern
      </button>
      <button
        onClick={() => setVariant('brown')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          variant === 'brown' 
            ? 'bg-white text-[#001010]' 
            : 'text-white hover:bg-white/10'
        }`}
      >
        Brown
      </button>
    </div>
  );
}

