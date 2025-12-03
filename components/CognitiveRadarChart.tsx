
import React, { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { COGNITIVE_CHART_DATA } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl rounded-2xl p-6 z-50 min-w-[260px] animate-in zoom-in-95 duration-200 text-white">
        <p className="font-bold text-slate-200 mb-4 text-lg pb-3 border-b border-slate-700">{label}</p>
        <div className="space-y-4">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: entry.stroke, color: entry.stroke }}></div>
                 <span className="text-slate-300 font-bold text-base">{entry.name}</span>
              </div>
              <span className="font-mono font-bold text-white text-xl">
                {entry.value}<span className="text-slate-500 text-sm ml-1 font-sans font-medium">/ 5</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const CognitiveRadarChart: React.FC = () => {
  const [hoveredRadar, setHoveredRadar] = useState<string | null>(null);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <ResponsiveContainer width="100%" height="100%" minHeight={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={COGNITIVE_CHART_DATA}>
          
          <defs>
            {/* Healthy Gradient - Clinical Blue */}
            <radialGradient id="gradHealthy" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.4} />
            </radialGradient>
            
            {/* Mild AD Gradient - Teal */}
            <radialGradient id="gradMild" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity={0.5} />
            </radialGradient>
            
            {/* Moderate AD Gradient - Indigo */}
            <radialGradient id="gradModerate" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0.6} />
            </radialGradient>
          </defs>

          {/* Technical Grid Lines */}
          <PolarGrid gridType="polygon" stroke="#e2e8f0" strokeWidth={2} />
          
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#475569', fontSize: 14, fontWeight: 800, fontFamily: 'Poppins' }}
          />
          
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 5]} 
            tickCount={6}
            tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
            axisLine={false}
            stroke="#cbd5e1" 
          />
          
          {/* Healthy Baseline */}
          <Radar
            name="Healthy Aging"
            dataKey="healthy"
            stroke="#3b82f6"
            strokeWidth={3}
            fill="url(#gradHealthy)"
            fillOpacity={0.4}
            isAnimationActive={true}
            animationDuration={1500}
            onMouseEnter={() => setHoveredRadar('Healthy Aging')}
            onMouseLeave={() => setHoveredRadar(null)}
            style={{ 
              opacity: hoveredRadar && hoveredRadar !== 'Healthy Aging' ? 0.2 : 1,
              transition: 'opacity 0.3s'
            }}
          />
          
          {/* Mild AD */}
          <Radar
            name="Mild AD"
            dataKey="mild"
            stroke="#14b8a6"
            strokeWidth={3}
            fill="url(#gradMild)"
            fillOpacity={0.5}
            isAnimationActive={true}
            animationDuration={1500}
            animationBegin={500}
            onMouseEnter={() => setHoveredRadar('Mild AD')}
            onMouseLeave={() => setHoveredRadar(null)}
            style={{ 
              opacity: hoveredRadar && hoveredRadar !== 'Mild AD' ? 0.2 : 1,
              transition: 'opacity 0.3s'
            }}
          />

          {/* Moderate AD */}
          <Radar
            name="Moderate AD"
            dataKey="moderate"
            stroke="#6366f1"
            strokeWidth={3}
            fill="url(#gradModerate)"
            fillOpacity={0.6}
            isAnimationActive={true}
            animationDuration={1500}
            animationBegin={1000}
            onMouseEnter={() => setHoveredRadar('Moderate AD')}
            onMouseLeave={() => setHoveredRadar(null)}
            style={{ 
              opacity: hoveredRadar && hoveredRadar !== 'Moderate AD' ? 0.2 : 1,
              transition: 'opacity 0.3s'
            }}
          />
          
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={false}
          />
          
          <Legend 
             wrapperStyle={{ paddingTop: '20px', fontFamily: 'Poppins' }}
             iconType="circle"
             iconSize={12}
             align="center"
             verticalAlign="bottom"
             formatter={(value, entry: any) => (
               <span 
                 className={`text-slate-600 font-bold text-xs ml-2 mr-6 uppercase tracking-wider transition-colors cursor-default ${
                   hoveredRadar === value ? 'text-slate-900 scale-105' : ''
                 }`}
               >
                 {value}
               </span>
             )}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CognitiveRadarChart;
