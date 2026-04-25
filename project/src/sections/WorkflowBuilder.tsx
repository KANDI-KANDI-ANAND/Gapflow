import { useState, useCallback, useMemo } from 'react';
import {
    ReactFlow,
    Background,
    Controls,
    applyNodeChanges,
    applyEdgeChanges,
    NodeChange,
    EdgeChange,
    Node,
    Edge,
    BackgroundVariant
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion } from 'framer-motion';
import { Play, Square } from 'lucide-react';

const initialNodes: Node[] = [
    {
        id: '1',
        position: { x: 400, y: 50 },
        data: { label: 'Start: Email Received' },
        style: { background: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
    },
    {
        id: '2',
        position: { x: 400, y: 150 },
        data: { label: 'AI Sentiment Analysis' },
        style: { background: '#10B981', color: '#000', fontWeight: 'bold', border: '1px solid #10B981', borderRadius: '12px', padding: '16px', boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' },
    },
    {
        id: '3',
        position: { x: 200, y: 300 },
        data: { label: 'Action: Escalate to Human' },
        style: { background: '#ffffff', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: '12px', padding: '16px' },
    },
    {
        id: '4',
        position: { x: 600, y: 300 },
        data: { label: 'Action: Auto Reply' },
        style: { background: '#ffffff', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '12px', padding: '16px' },
    },
    {
        id: '5',
        position: { x: 400, y: 450 },
        data: { label: 'Log to Knowledge Base' },
        style: { background: '#ffffff', color: '#a855f7', border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: '12px', padding: '16px' },
    }
];

const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3', label: 'Angry / Urgent', style: { strokeOpacity: 0.5 } },
    { id: 'e2-4', source: '2', target: '4', label: 'Neutral / Positive', style: { strokeOpacity: 0.5 } },
    { id: 'e3-5', source: '3', target: '5' },
    { id: 'e4-5', source: '4', target: '5' },
];

export default function WorkflowBuilder() {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
    const [isPlaying, setIsPlaying] = useState(false);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );

    const animatedEdges = useMemo(() => {
        return edges.map((edge) => ({
            ...edge,
            animated: isPlaying,
            style: {
                ...edge.style,
                stroke: isPlaying ? '#10B981' : '#94a3b8',
                strokeWidth: isPlaying ? 2 : 1,
            },
        }));
    }, [edges, isPlaying]);

    return (
        <section className="pt-8 pb-12 lg:py-16 bg-white relative overflow-hidden text-center z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
                    >
                        Design. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#10B981]">Drag.</span> Automate.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto mb-8"
                    >
                        Build complex, multi-step agent paths with our visual canvas. Test conditional branches, API calls, and logic flows in real-time.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 ${isPlaying
                            ? 'bg-red-500/10 text-red-400 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                            : 'bg-[#10B981] text-white hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1'
                            }`}
                    >
                        {isPlaying ? (
                            <>
                                <Square className="w-5 h-5 fill-current" /> Stop Execution
                            </>
                        ) : (
                            <>
                                <Play className="w-5 h-5 fill-current" /> Simulate Workflow
                            </>
                        )}
                    </motion.button>
                </div>

                {/* Workflow Canvas */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="h-[600px] w-full rounded-3xl border border-slate-200 bg-white/50 backdrop-blur-sm overflow-hidden shadow-2xl relative"
                >
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                        <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#10B981]">
                            Agent Path Visualizer
                        </div>
                        <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-500">
                            Drag nodes to arrange
                        </div>
                    </div>

                    <ReactFlow
                        nodes={nodes}
                        edges={animatedEdges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        fitView
                        colorMode="light"
                        className="bg-transparent"
                    >
                        <Background gap={20} color="#cbd5e1" variant={BackgroundVariant.Dots} />
                        <Controls className="bg-white border border-slate-200 fill-slate-700 text-slate-700 custom-react-flow-controls" style={{ opacity: 0.7 }} />
                    </ReactFlow>
                </motion.div>
            </div>
        </section>
    );
}
