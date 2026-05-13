export default function WorkflowBuilder() {
    return (
        <section className="section-padding bg-slate-50/50 border-y border-slate-100 overflow-hidden">
            <div className="container-standard">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Visual Canvas</span>
                    </div>
                    <h2 className="heading-section mb-6">
                        Design Logic.<br />
                        <span className="text-slate-300">Deploy At Scale.</span>
                    </h2>
                    <p className="text-subcopy max-w-2xl mx-auto">
                        Build complex, multi-step agent paths with our visual canvas. Test conditional branches, API calls, and logic flows in real-time.
                    </p>
                </div>
            </div>
        </section>
    );
}
