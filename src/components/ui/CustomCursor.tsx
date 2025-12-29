import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import yenCursor from "@/assets/cursor-yen.png";
import rupeeCursor from "@/assets/cursor-rupee.png";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0
      );
    };
    checkTouchDevice();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isClickable = 
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('a') ||
      target.closest('button') ||
      target.getAttribute('role') === 'button' ||
      target.style.cursor === 'pointer' ||
      window.getComputedStyle(target).cursor === 'pointer';
    
    setIsHovering(!!isClickable);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, [isTouchDevice, handleMouseMove, handleMouseEnter, handleMouseDown, handleMouseUp, handleMouseLeave]);

  if (isTouchDevice || !isVisible) return null;

  const scale = isClicking ? 0.85 : isHovering ? 1.2 : 1;
  
  // Yen for Japanese, Rupee for English
  const cursorImage = language === 'jp' ? yenCursor : rupeeCursor;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${scale})`,
        transition: 'transform 0.15s ease, left 0.08s ease-out, top 0.08s ease-out',
      }}
    >
      <img 
        src={cursorImage} 
        alt="" 
        className="w-6 h-6 object-contain"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
        }}
      />
    </div>
  );
};