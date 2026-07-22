import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Replace with a valid pirate-themed music URL if available
  const audioUrl = 'https://www.image2url.com/r2/default/audio/1784737086624-23bc57dd-e06f-45a8-bcb5-469a56eb4490.mp3';

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      <audio ref={audioRef} src={audioUrl} loop />
      <button
        onClick={togglePlay}
        className="h-12 w-12 bg-slate-950/80 backdrop-blur-md border border-amber-900/30 rounded-full flex items-center justify-center shadow-2xl relative hover:border-amber-500/50 transition-all text-amber-400"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
