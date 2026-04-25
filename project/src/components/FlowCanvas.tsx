import { useEffect, useRef } from 'react';

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  icon: string;
  state: 'idle' | 'active' | 'success';
}

interface Edge {
  from: string;
  to: string;
  animated: boolean;
}

interface FlowCanvasProps {
  nodes: Node[];
  edges: Edge[];
}

export default function FlowCanvas({ nodes, edges }: FlowCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    let animationProgress = 0;

    const draw = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      edges.forEach(edge => {
        const fromNode = nodes.find(n => n.id === edge.from);
        const toNode = nodes.find(n => n.id === edge.to);

        if (!fromNode || !toNode) return;

        ctx.strokeStyle = edge.animated ? 'rgba(107, 75, 255, 0.6)' : 'rgba(154, 104, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.setLineDash(edge.animated ? [5, 5] : []);
        ctx.lineDashOffset = -animationProgress;

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
      });

      nodes.forEach(node => {
        const stateColors = {
          idle: '#9AA0A6',
          active: '#10B981',
          success: '#32D38A'
        };

        ctx.fillStyle = stateColors[node.state];
        ctx.beginPath();
        ctx.arc(node.x, node.y, 24, 0, Math.PI * 2);
        ctx.fill();

        if (node.state === 'active') {
          ctx.strokeStyle = 'rgba(107, 75, 255, 0.3)';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 28 + Math.sin(animationProgress / 10) * 4, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.fillStyle = '#fff';
        ctx.font = '10px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + 45);
      });

      animationProgress += 1;
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodes, edges]);

  return (
    <div className="flow-canvas">
      <canvas
        ref={canvasRef}
        id="flow-hero"
        style={{ width: '100%', height: '100%' }}
        data-graph={JSON.stringify({ nodes, edges })}
      />
    </div>
  );
}
