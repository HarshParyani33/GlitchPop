// frontend/src/hooks/useAudio.js
import { useCallback, useRef } from 'react';

export const useAudio = () => {
  const audioCtx = useRef(new (window.AudioContext || window.webkitAudioContext)());

  const playSound = useCallback((frequency, type = 'sine', duration = 0.2) => {
    const osc = audioCtx.current.createOscillator();
    const gain = audioCtx.current.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, audioCtx.current.currentTime);
    
    // Kick Drum Effect: Rapidly drop frequency
    if (type === 'triangle') {
      osc.frequency.exponentialRampToValueAtTime(0.01, audioCtx.current.currentTime + duration);
    }

    gain.gain.setValueAtTime(0.5, audioCtx.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.current.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.current.destination);

    osc.start();
    osc.stop(audioCtx.current.currentTime + duration);
  }, []);

  return { playSound };
};