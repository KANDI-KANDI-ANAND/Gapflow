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
import { Play, Square } from 'lucide-react';
 
 const initialNodes: Node[] = [
     {
         id: '1',
         position: { x: 400, y: 50 },
         data: { label: 'Start: Inquiry Received' },
         style: { background: '#ffffff', color: '#0f172a', border: '1px solid #f1f5f9', borderRadius: '12px', padding: '12px', fontWeight: 'bold', fontSize: '11px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' },
     },
     {
         id: '2',
         position: { x: 400, y: 150 },
         data: { label: 'AI Sentiment Analysis' },
         style: { background: '#10B981', color: '#ffffff', fontWeight: 'bold', border: 'none', borderRadius: '12px', padding: '12px', fontSize: '11px' },
     },
     {
         id: '3',
         position: { x: 200, y: 300 },
         data: { label: 'Action: Escalate to Support' },
         style: { background: '#ffffff', color: '#64748b', border: '1px solid #f1f5f9', borderRadius: '12px', padding: '12px', fontWeight: 'bold', fontSize: '11px' },
     },
     {
         id: '4',
         position: { x: 600, y: 300 },
         data: { label: 'Action: Auto Reply' },
         style: { background: '#ffffff', color: '#64748b', border: '1px solid #f1f5f9', borderRadius: '12px', padding: '12px', fontWeight: 'bold', fontSize: '11px' },
     },
     {
         id: '5',
         position: { x: 400, y: 450 },
         data: { label: 'Sync to CRM & Knowledge' },
         style: { background: '#ffffff', color: '#64748b', border: '1px solid #f1f5f9', borderRadius: '12px', padding: '12px', fontWeight: 'bold', fontSize: '11px' },
     }
 ];
 
 const initialEdges: Edge[] = [
     { id: 'e1-2', source: '1', target: '2' },
     { id: 'e2-3', source: '2', target: '3', label: 'Urgent', style: { strokeOpacity: 0.5 } },
     { id: 'e2-4', source: '2', target: '4', label: 'General', style: { strokeOpacity: 0.5 } },
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
                 stroke: isPlaying ? '#10B981' : '#e2e8f0',
                 strokeWidth: isPlaying ? 2 : 1,
             },
         }));
     }, [edges, isPlaying]);
 
     return (
         <section className="section-padding bg-slate-50/50 border-y border-slate-100 overflow-hidden">
             <div className="container-standard">
                 <div className="text-center mb-16 lg:mb-20">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 mb-6">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                         <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Visual Canvas</span>
                     </div>
                     <h2 className="heading-section mb-6">
                         Design Logic.<br />
                         <span className="text-slate-300">Deploy At Scale.</span>
                     </h2>
                     <p className="text-subcopy max-w-2xl mx-auto mb-10">
                         Build complex, multi-step agent paths with our visual canvas. Test conditional branches, API calls, and logic flows in real-time.
                     </p>
  
                     <button
                         onClick={() => setIsPlaying(!isPlaying)}
                         className={`btn-primary inline-flex items-center gap-3 ${isPlaying ? 'bg-slate-100 !text-slate-900 shadow-none' : ''}`}
                     >
                         {isPlaying ? (
                             <>
                                 <Square className="w-4 h-4 fill-current" /> Stop Execution
                             </>
                         ) : (
                             <>
                                 <Play className="w-4 h-4 fill-current" /> Simulate Flow
                             </>
                         )}
                     </button>
                 </div>
 
                 <div className="h-[500px] lg:h-[600px] w-full rounded-[2rem] border border-slate-200 bg-white overflow-hidden relative shadow-2xl shadow-slate-200/50">
                     <div className="absolute top-6 left-6 z-20 flex gap-2">
                         <div className="px-3 py-1 bg-white border border-slate-100 rounded-full text-[9px] font-bold tracking-widest uppercase text-slate-400">
                             Flow Engine v1.0
                         </div>
                         <div className="px-3 py-1 bg-white border border-slate-100 rounded-full text-[9px] font-bold tracking-widest uppercase text-[#10B981]">
                             Interactive Mode
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
                         <Background gap={20} color="#f8fafc" variant={BackgroundVariant.Lines} />
                         <Controls className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm !m-6 scale-90" />
                     </ReactFlow>
                 </div>
             </div>
         </section>
     );
 }
