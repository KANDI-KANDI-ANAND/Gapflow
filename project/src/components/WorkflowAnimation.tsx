import React, { useState, useEffect, useRef } from 'react';

const nodes = [
  { id: 'brightpattern', label: 'Bright Pattern', angle: 0, color: '#3B82F6', size: 56 },
  { id: 'dynamics', label: 'Dynamics 365', angle: 40, color: '#8B5CF6', size: 52 },
  { id: 'salesforce', label: 'Salesforce', angle: 80, color: '#06B6D4', size: 58 },
  { id: 'powerbi', label: 'Power BI', angle: 120, color: '#F59E0B', size: 54 },
  { id: 'openai', label: 'OpenAI', angle: 160, color: '#10B981', size: 60 },
  { id: 'servicenow', label: 'ServiceNow', angle: 200, color: '#EC4899', size: 52 },
  { id: 'slack', label: 'Slack', angle: 240, color: '#EF4444', size: 56 },
  { id: 'azure', label: 'Azure', angle: 280, color: '#0EA5E9', size: 54 },
  { id: 'aws', label: 'AWS', angle: 320, color: '#F97316', size: 58 }
];

const WorkflowAnimation: React.FC = () => {
  const centerX = 400;
  const centerY = 400;
  const radius = 240;

  const [globalAngle, setGlobalAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef<number>();

  const animate = () => {
    setGlobalAngle((prev) => (prev + 0.15) % 360);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isHovered) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto">
      <svg
        viewBox="0 0 800 800"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {nodes.map((node) => (
            <React.Fragment key={`gradient-${node.id}`}>
              <radialGradient id={`nodeGlow-${node.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={node.color} stopOpacity="1" />
                <stop offset="70%" stopColor={node.color} stopOpacity="0.6" />
                <stop offset="100%" stopColor={node.color} stopOpacity="0" />
              </radialGradient>
            </React.Fragment>
          ))}

          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#059669" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="12" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="ultraGlow">
            <feGaussianBlur stdDeviation="20" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx={centerX}
          cy={centerY}
          r="350"
          fill="url(#centerGlow)"
          opacity="0.15"
        >
          <animate
            attributeName="r"
            values="350;380;350"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.15;0.25;0.15"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        <g className="orbital-rings">
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="rgba(107,75,255,0.15)"
            strokeWidth="1"
            opacity="0.15"
            strokeDasharray="10 10"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${centerX} ${centerY}`}
              to={`360 ${centerX} ${centerY}`}
              dur="60s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx={centerX}
            cy={centerY}
            r={radius + 40}
            fill="none"
            stroke="rgba(107,75,255,0.1)"
            strokeWidth="1"
            opacity="0.1"
            strokeDasharray="5 15"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`360 ${centerX} ${centerY}`}
              to={`0 ${centerX} ${centerY}`}
              dur="80s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        <g className="particles">
          {[...Array(40)].map((_, i) => {
            const angle = (i / 40) * 360;
            const r = 150 + Math.random() * 200;
            const baseX = centerX + r * Math.cos((angle * Math.PI) / 180);
            const baseY = centerY + r * Math.sin((angle * Math.PI) / 180);

            return (
              <circle
                key={i}
                cx={baseX}
                cy={baseY}
                r={Math.random() * 1.5 + 0.5}
                fill={i % 3 === 0 ? '#32D38A' : '#10B981'}
                opacity={Math.random() * 0.4 + 0.2}
                filter="url(#softGlow)"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0,0; ${Math.random() * 40 - 20},${Math.random() * 40 - 20}; 0,0`}
                  dur={`${20 + Math.random() * 15}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values={`${Math.random() * 0.2};${Math.random() * 0.6 + 0.2};${Math.random() * 0.2}`}
                  dur={`${5 + Math.random() * 5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </g>

        <g className="connectors">
          {nodes.map((node, index) => {
            const effectiveAngle = node.angle + globalAngle;
            const x = centerX + radius * Math.cos((effectiveAngle * Math.PI) / 180);
            const y = centerY + radius * Math.sin((effectiveAngle * Math.PI) / 180);
            const midX = centerX + (radius / 2) * Math.cos((effectiveAngle * Math.PI) / 180);
            const midY = centerY + (radius / 2) * Math.sin((effectiveAngle * Math.PI) / 180);

            return (
              <g key={node.id}>
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke={node.color}
                  strokeWidth="2"
                  opacity="0.3"
                  filter="url(#softGlow)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.2;0.5;0.2"
                    dur={`${6 + Math.random() * 3}s`}
                    repeatCount="indefinite"
                  />
                </line>

                <circle r="5" fill={node.color} filter="url(#glow)">
                  <animateMotion
                    dur={`${6 + (index * 0.4)}s`}
                    repeatCount="indefinite"
                  >
                    <mpath href={`#path-${node.id}`} />
                  </animateMotion>
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                <circle r="3" fill="white" opacity="0.8">
                  <animateMotion
                    dur={`${6 + (index * 0.4)}s`}
                    repeatCount="indefinite"
                    begin={`${index * 0.3}s`}
                  >
                    <mpath href={`#path-${node.id}`} />
                  </animateMotion>
                </circle>

                <path
                  id={`path-${node.id}`}
                  d={`M ${x} ${y} L ${centerX} ${centerY}`}
                  fill="none"
                  stroke="none"
                />

                <circle
                  cx={midX}
                  cy={midY}
                  r="8"
                  fill={node.color}
                  opacity="0"
                  filter="url(#glow)"
                >
                  <animate
                    attributeName="opacity"
                    values="0;0.6;0"
                    dur="4s"
                    begin={`${index * 0.5}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values="4;12;4"
                    dur="4s"
                    begin={`${index * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </g>

        <g className="nodes">
          {nodes.map((node, index) => {
            const effectiveAngle = node.angle + globalAngle;
            const x = centerX + radius * Math.cos((effectiveAngle * Math.PI) / 180);
            const y = centerY + radius * Math.sin((effectiveAngle * Math.PI) / 180);
            const size = node.size;

            return (
              <g key={node.id} className="node">
                <circle
                  cx={x}
                  cy={y}
                  r={size / 2 + 15}
                  fill={`url(#nodeGlow-${node.id})`}
                  opacity="0.3"
                  filter="url(#glow)"
                >
                  <animate
                    attributeName="r"
                    values={`${size / 2 + 12};${size / 2 + 20};${size / 2 + 12}`}
                    dur="4s"
                    begin={`${index * 0.3}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.2;0.4;0.2"
                    dur="4s"
                    begin={`${index * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </circle>

                <rect
                  x={x - size / 2}
                  y={y - size / 2}
                  width={size}
                  height={size}
                  rx="14"
                  fill={node.color}
                  filter="url(#glow)"
                  opacity="0.95"
                >
                  <animate
                    attributeName="opacity"
                    values="0.9;1;0.9"
                    dur={`${3 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                  />
                </rect>

                <rect
                  x={x - size / 2 + 2}
                  y={y - size / 2 + 2}
                  width={size - 4}
                  height={size - 4}
                  rx="12"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1.5"
                />

                <circle
                  cx={x}
                  cy={y}
                  r={size / 2 + 6}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="2"
                  opacity="0"
                  filter="url(#softGlow)"
                >
                  <animate
                    attributeName="r"
                    values={`${size / 2 + 4};${size / 2 + 12};${size / 2 + 4}`}
                    dur="3s"
                    begin={`${index * 0.4}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.7;0"
                    dur="3s"
                    begin={`${index * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>

                <text
                  x={x}
                  y={y + size / 2 + 24}
                  textAnchor="middle"
                  fill="#E3E6EF"
                  fontSize="13"
                  fontWeight="600"
                  opacity="0.9"
                  filter="url(#softGlow)"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </g>

        <g className="center-node">
          <circle
            cx={centerX}
            cy={centerY}
            r="140"
            fill="url(#centerGlow)"
            opacity="0.2"
            filter="url(#ultraGlow)"
          >
            <animate
              attributeName="r"
              values="140;160;140"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx={centerX}
            cy={centerY}
            r="80"
            fill="url(#primaryGradient)"
            filter="url(#strongGlow)"
            opacity="0.95"
          >
            <animate
              attributeName="r"
              values="78;84;78"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx={centerX}
            cy={centerY}
            r="75"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
          />

          <circle
            cx={centerX}
            cy={centerY}
            r="100"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            opacity="0"
          >
            <animate
              attributeName="r"
              values="90;110;90"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.5;0"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx={centerX}
            cy={centerY}
            r="120"
            fill="none"
            stroke="url(#primaryGradient)"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="8 8"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${centerX} ${centerY}`}
              to={`360 ${centerX} ${centerY}`}
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>

          <text
            x={centerX}
            y={centerY - 5}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="32"
            fontWeight="700"
            letterSpacing="1"
            filter="url(#softGlow)"
          >
            Gapflow
          </text>

          <text
            x={centerX}
            y={centerY + 20}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgba(255,255,255,0.6)"
            fontSize="11"
            fontWeight="500"
            letterSpacing="2"
          >
            AI ENGINE
          </text>
        </g>

        <g className="connection-sweeps">
          {nodes.map((node, index) => {
            if (index % 3 !== 0) return null;
            const effectiveAngle = node.angle + globalAngle;
            const x = centerX + radius * Math.cos((effectiveAngle * Math.PI) / 180);
            const y = centerY + radius * Math.sin((effectiveAngle * Math.PI) / 180);

            return (
              <line
                key={`sweep-${node.id}`}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke={node.color}
                strokeWidth="4"
                opacity="0"
                filter="url(#strongGlow)"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.8;0"
                  dur="5s"
                  begin={`${index * 1.5}s`}
                  repeatCount="indefinite"
                />
              </line>
            );
          })}
        </g>

        {/* Precise Circular Hover Hitbox */}
        <circle
          cx={centerX}
          cy={centerY}
          r="360"
          fill="transparent"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ cursor: "default", pointerEvents: "all" }}
        />
      </svg>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .node circle,
          .particles circle,
          .connection-sweeps line,
          .orbital-rings circle {
            animation: none !important;
          }
          animate,
          animateMotion,
          animateTransform {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkflowAnimation;
