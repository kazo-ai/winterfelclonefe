"use client"

import { useState, useRef } from "react"
import { ChevronUp, ArrowRight, Folder } from "lucide-react"

export default function ChatBox() {
  const [input, setInput] = useState("")
  const [showTemplates, setShowTemplates] = useState(false)
  const inputRef = useRef(null)

  const isActive = input.length > 0

  const handleContainerClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="w-full max-w-2xl">
      {/* Terminal Window */}
      <div className="relative bg-neutral-950 rounded-lg border border-neutral-800 overflow-hidden shadow-2xl ">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-900 bg-[#0d0d18] max-h-[43px]">
          <div className="flex items-center gap-3">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-neutral-800" />
              <div className="w-3 h-3 rounded-full bg-neutral-800" />
              <div className="w-3 h-3 rounded-full bg-neutral-800" />
            </div>

            {/* Title */}
            <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
              <span className="text-gray-500">{">_"}</span>
              <span>winterfell.dev</span>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm">
            <div
              className={`w-2 h-2 rounded-full transition-colors ${
                isActive ? "bg-[#28c840]" : "bg-gray-500"
              }`}
            />
            <span
              className={`transition-colors ${
                isActive ? "text-[#28c840]" : "text-gray-500"
              }`}
            >
              {isActive ? "active" : "idle"}
            </span>
          </div>
        </div>

        {/* Input Area */}
        <div
          className="p-6 bg-[#000000] max-h-[112px] cursor-text"
          onClick={handleContainerClick}
        >
          <div className="flex items-start gap-2">
            <span className="text-gray-500 font-mono text-lg select-none">
              {">"}
            </span>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) =>
                setInput(e.target.value.slice(0, 200))
              }
              placeholder="create a counter contract..."
              maxLength={200}
              className="flex-1 bg-transparent text-gray-300 placeholder-gray-600 font-mono text-lg outline-none resize-none max-h-[72px] caret-gray-300"
              rows={4}
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-neutral-900 bg-[#0d0d18] max-h-[57px]">
          <div className="flex items-center gap-3">
            {/* Infinity Button */}
            <button className="flex items-center justify-center gap-1 px-3 py-1.5 rounded-full bg-[#4c1d95] hover:bg-[#5b21b6] transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-purple-300"
              >
                <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
              </svg>
              <ChevronUp className="w-3 h-3 text-purple-300" />
            </button>

            {/* Templates Button */}
            <div className="relative">
              <button
                onClick={() => setShowTemplates(!showTemplates)}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors px-3 py-2 rounded-lg hover:bg-[#1a1a2e]"
              >
                <Folder className="w-4 h-4" />
                <span className="font-mono text-sm">templates</span>
              </button>

              {/* Templates Dropdown */}
              {showTemplates && (
                <div className="absolute bottom-full left-0 mb-2 w-48 bg-[#0d0d18] border border-[#E5E5E5] rounded-lg shadow-xl overflow-hidden">
                  <div className="p-3 text-center text-gray-600 text-sm">
                    No templates yet
                  </div>
                </div>
              )}
            </div>

            {/* Counter */}
            <span className="text-gray-600 font-mono text-sm">|</span>
            <span className="text-gray-500 font-mono text-sm">
              {input.length} / 200
            </span>
          </div>

          {/* Submit Button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1a1a2e] hover:bg-[#252535] transition-colors">
            <ArrowRight className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Action Boxes */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#0d0d18]/80 border border-[#E5E5E5] rounded-lg">
          <span className="text-[#a78bfa] font-mono text-sm">{">_"}</span>
          <span className="text-gray-300 text-sm">Generate</span>
          <ArrowRight className="w-4 h-4 text-gray-500 ml-1" />
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-[#0d0d18]/80 border border-[#E5E5E5] rounded-lg">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-gray-300 text-sm">Deploy</span>
          <ArrowRight className="w-4 h-4 text-gray-500 ml-1" />
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-[#0d0d18]/80 border border-[#E5E5E5] rounded-lg">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4 text-emerald-400"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          <span className="text-gray-300 text-sm">Integrate</span>
        </div>
      </div>
    </div>
  )
}