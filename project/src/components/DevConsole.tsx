import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check } from 'lucide-react';

interface Snippet {
    title: string;
    lang: string;
    code: string;
}

const snippets: Record<string, Snippet> = {
    sdk: {
        title: 'Custom Node SDK',
        lang: 'python',
        code: `from gapflow import Node

class SentimentNode(Node):
    def execute(self, text):
        # Trigger native AI model
        score = self.ai.analyze(text)
        return {"sentiment": score}`
    },
    cli: {
        title: 'Gapflow CLI',
        lang: 'bash',
        code: `$ gapflow login
$ gapflow deploy --env production
$ gapflow logs -f --node main

[READY] Agent deployed to v1.0.4`
    },
    webhooks: {
        title: 'Webhook Payload',
        lang: 'json',
        code: `{
  "event": "workflow.success",
  "timestamp": "2024-04-24T12:00:00Z",
  "payload": {
    "agent_id": "gf_88xo",
    "status": "COMPLETED"
  }
}`
    },
    import_export: {
        title: 'Workflow Blueprint',
        lang: 'yaml',
        code: `version: 1.0
nodes:
  - id: entry
    type: webhook
    config:
      path: /v1/incoming
  - id: logic
    type: custom.SentimentNode`
    },
    local_dev: {
        title: 'Local Environment',
        lang: 'bash',
        code: `# Spin up local runtime
$ gapflow dev --local

Starting local server at :8080
Watching for changes in src/`
    }
};

interface DevConsoleProps {
    activeId: string;
}

const DevConsole: React.FC<DevConsoleProps> = ({ activeId }) => {
    const [copied, setCopied] = React.useState(false);
    const snippet = snippets[activeId] || snippets.sdk;

    const handleCopy = () => {
        navigator.clipboard.writeText(snippet.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Minimal syntax highlighter
    const renderCode = (code: string) => {
        return code.split('\n').map((line, i) => (
            <div key={i} className="flex">
                <span className="w-12 inline-block text-slate-700 select-none text-right pr-4 font-mono text-xs">{i + 1}</span>
                <span className="text-slate-300 font-mono text-sm leading-relaxed whitespace-pre">
                    {line.split(' ').map((word, j) => {
                        if (['from', 'import', 'class', 'def', 'return', 'if', 'version:', 'nodes:'].includes(word)) {
                            return <span key={j} className="text-[#10B981]">{word} </span>;
                        }
                        if (word.startsWith('$')) {
                            return <span key={j} className="text-blue-400">{word} </span>;
                        }
                        if (word.startsWith('"') || word.startsWith("'")) {
                            return <span key={j} className="text-amber-400">{word} </span>;
                        }
                        return word + ' ';
                    })}
                </span>
            </div>
        ));
    };

    return (
        <div className="w-full h-full min-h-[400px] flex flex-col bg-[#0F172A] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono">
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1E293B] border-b border-slate-800">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="ml-4 flex items-center gap-2 text-slate-400">
                        <Terminal size={14} />
                        <span className="text-xs font-medium uppercase tracking-wider">{snippet.title}</span>
                    </div>
                </div>
                <button
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-white transition-colors"
                >
                    {copied ? <Check size={16} className="text-[#10B981]" /> : <Copy size={16} />}
                </button>
            </div>

            {/* Code Editor Body */}
            <div className="relative flex-grow p-6 overflow-auto custom-scrollbar">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="w-full"
                    >
                        {renderCode(snippet.code)}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2 h-4 bg-[#10B981] align-middle ml-1"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottom Status Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#1E293B]/50 border-t border-slate-800 text-[10px] text-slate-500">
                <div className="flex items-center gap-4">
                    <span>UTF-8</span>
                    <span>{snippet.lang === 'python' ? 'Python 3.9' : snippet.lang.toUpperCase()}</span>
                </div>
                <span>Ln 1, Col 1</span>
            </div>
        </div>
    );
};

export default DevConsole;
