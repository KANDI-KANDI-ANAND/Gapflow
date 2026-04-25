import { useState } from 'react';

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
        transformStyle: 'preserve-3d',
      }}
    >
      <defs>
        <linearGradient id="darkGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
        <linearGradient id="medGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="lightGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id="brightGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#6ee7b7" />
        </linearGradient>
        <linearGradient id="whiteHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#f0fdf4" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Three-tiered platform base */}
      <g style={{
        transition: 'transform 0.5s ease',
        transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
      }}>
        {/* Bottom tier - darkest */}
        <path
          d="M 30 85 L 60 100 L 90 85 L 60 70 Z"
          fill="url(#darkGreen)"
        />
        <path
          d="M 30 85 L 60 70 L 90 85 L 90 88 L 60 103 L 30 88 Z"
          fill="#064e3b"
          opacity="0.8"
        />
      </g>

      <g style={{
        transition: 'transform 0.5s ease',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}>
        {/* Middle tier */}
        <path
          d="M 35 70 L 60 82 L 85 70 L 60 58 Z"
          fill="url(#medGreen)"
        />
        <path
          d="M 35 70 L 60 58 L 85 70 L 85 73 L 60 85 L 35 73 Z"
          fill="#047857"
          opacity="0.7"
        />
      </g>

      <g style={{
        transition: 'transform 0.5s ease',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
      }}>
        {/* Top tier */}
        <path
          d="M 40 58 L 60 68 L 80 58 L 60 48 Z"
          fill="url(#lightGreen)"
        />
        <path
          d="M 40 58 L 60 48 L 80 58 L 80 60 L 60 70 L 40 60 Z"
          fill="#059669"
          opacity="0.6"
        />
      </g>

      {/* Central connecting piece */}
      <g style={{
        transition: 'transform 0.5s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      }}>
        <path
          d="M 50 45 L 60 40 L 70 45 L 60 50 Z"
          fill="url(#brightGreen)"
        />
        <path
          d="M 50 45 L 60 50 L 70 45 L 70 42 L 60 37 L 50 42 Z"
          fill="#10b981"
        />
      </g>

      {/* Left curved ribbon */}
      <g style={{
        transition: 'transform 0.5s ease',
        transform: isHovered ? 'translateY(-5px) translateX(-1px)' : 'translateY(0)',
      }}>
        {/* Left ribbon - dark green face */}
        <path
          d="M 35 20 Q 32 25 35 30 L 45 35 Q 48 30 45 20 Z"
          fill="url(#medGreen)"
        />
        {/* Left ribbon - light highlight face */}
        <path
          d="M 45 20 Q 48 25 45 35 L 52 38 L 55 28 Q 52 20 48 18 Z"
          fill="url(#whiteHighlight)"
        />
        {/* Left ribbon - connecting curve */}
        <path
          d="M 45 35 L 52 38 L 55 42 L 50 45 L 45 40 Z"
          fill="url(#lightGreen)"
        />
      </g>

      {/* Right curved ribbon */}
      <g style={{
        transition: 'transform 0.5s ease',
        transform: isHovered ? 'translateY(-5px) translateX(1px)' : 'translateY(0)',
      }}>
        {/* Right ribbon - light highlight face */}
        <path
          d="M 65 18 Q 62 20 65 28 L 68 38 L 75 35 Q 78 25 75 20 Z"
          fill="url(#whiteHighlight)"
        />
        {/* Right ribbon - dark green face */}
        <path
          d="M 75 20 Q 78 25 75 30 L 85 35 Q 88 30 85 20 Z"
          fill="url(#medGreen)"
        />
        {/* Right ribbon - connecting curve */}
        <path
          d="M 65 42 L 68 38 L 75 35 L 75 40 L 70 45 Z"
          fill="url(#lightGreen)"
        />
      </g>
    </svg>
  );
}
