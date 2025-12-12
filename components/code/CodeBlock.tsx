"use client";

import { useEffect, useRef, useState } from 'react';

export type CodeBlockProps = {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
};

export function CodeBlock({ code, language = 'bash', showLineNumbers = false }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Placeholder for syntax highlighting integration (Prism.js / Highlight.js)
  }, [code, language]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch {
      setCopied(false);
    }
  };

  const renderWithLines = () => {
    const lines = code.split('\n');
    return (
      <div className="grid grid-cols-[auto_1fr] gap-3">
        <div className="select-none text-right text-xs text-neutral-500">
          {lines.map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <div className="text-sm font-mono whitespace-pre-wrap">{code}</div>
      </div>
    );
  };

  return (
    <div className="relative">
      <button type="button" className="btn-outline absolute right-3 top-3 z-10" onClick={onCopy} aria-label="Copy code">
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre ref={preRef} className="card overflow-auto p-4">
        <code className={`language-${language}`}>{showLineNumbers ? renderWithLines() : code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
