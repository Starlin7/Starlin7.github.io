import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { cx: 200, cy: 120, r: 6 },
  { cx: 300, cy: 80, r: 5 },
  { cx: 350, cy: 180, r: 7 },
  { cx: 150, cy: 220, r: 5 },
  { cx: 280, cy: 260, r: 6 },
  { cx: 100, cy: 150, r: 4 },
  { cx: 380, cy: 100, r: 4 },
  { cx: 250, cy: 170, r: 8 },
];

const connections = [
  [0, 1], [0, 5], [0, 7], [1, 2], [1, 6],
  [2, 4], [2, 7], [3, 0], [3, 5], [4, 3], [4, 7], [7, 6],
];

const bars = [
  { x: 60, h: 80, delay: 0 },
  { x: 90, h: 120, delay: 0.1 },
  { x: 120, h: 60, delay: 0.2 },
  { x: 150, h: 100, delay: 0.3 },
  { x: 180, h: 140, delay: 0.4 },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-md aspect-square">
      <svg viewBox="0 0 450 380" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines */}
        {connections.map(([a, b], i) => (
          <motion.line
            key={`line-${i}`}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.08 }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#3B82F6"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
          />
        ))}

        {/* Pulsing center node */}
        <motion.circle
          cx={250}
          cy={170}
          r={12}
          fill="none"
          stroke="#22D3EE"
          strokeWidth="2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* Bar Chart */}
        {bars.map((bar, i) => (
          <motion.rect
            key={`bar-${i}`}
            x={bar.x}
            y={380 - bar.h - 30}
            width="22"
            height={bar.h}
            rx="4"
            fill="url(#barGrad)"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.5 + bar.delay }}
            style={{ transformOrigin: `${bar.x + 11}px ${380 - 30}px` }}
          />
        ))}

        {/* Pie/Donut segment */}
        <motion.path
          d="M370 300 A40 40 0 1 1 370 299.99"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0.75 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.path
          d="M370 300 A40 40 0 0 1 405 320"
          fill="none"
          stroke="#22D3EE"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        />

        {/* Trend Line */}
        <motion.polyline
          points="260,340 290,310 320,325 350,290 380,270"
          fill="none"
          stroke="#22D3EE"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        />
        {[
          { x: 260, y: 340 },
          { x: 290, y: 310 },
          { x: 320, y: 325 },
          { x: 350, y: 290 },
          { x: 380, y: 270 },
        ].map((pt, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={pt.x}
            cy={pt.y}
            r="3.5"
            fill="#22D3EE"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 + i * 0.15 }}
          />
        ))}
      </svg>
    </div>
  );
}
