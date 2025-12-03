
import React, { useState, useRef } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ReferenceArea, ReferenceLine, Customized, ZAxis } from 'recharts';
import { JOURNEY_DATA, EXPERIENCE_MATRIX_POINTS, STORYBOARD_STEPS, THERAPY_TRIANGLE_DATA, SENSORY_TRIGGER_DATA, HYPOTHESIS_NODES, HYPOTHESIS_LINKS, THERAPY_RADAR_DATA } from '../constants';
import { AlertCircle, Zap, Smile, CheckCircle, Tablet, Radio, Volume2, CloudDrizzle, CloudLightning, Sun, Activity, Upload, Image as ImageIcon, Music, Heart, Eye, Hand, Wind, Brain, User, ArrowUpRight, Target, Star, Hexagon, ZoomIn, ZoomOut, RotateCcw, Move, MousePointer2, UserCircle } from 'lucide-react';

const COLOR_MAP: Record<string, string> = {
  indigo: '#4f46e5',
  emerald: '#10b981',
  amber: '#f59e0b',
  rose: '#f43f5e',
  teal: '#14b8a6',
  blue: '#3b82f6',
  slate: '#64748b',
};

export const JourneyMap: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="h-full flex flex-col">
      <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-slate-800 flex items-center gap-4">
               <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600"><Activity size={28} /></div>
               User Journey: The "Sundowning" Episode
            </h3>
            <div className="flex gap-6 text-sm font-bold text-slate-500">
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> Positive Peak</span>
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-slate-300"></span> Baseline</span>
            </div>
        </div>
        
        {/* Graph Container */}
        <div className="relative flex-grow flex flex-col justify-center">
            <div className="h-64 w-full relative mb-12">
                {/* SVG Curve */}
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="40%" stopColor="#fbbf24" />
                    <stop offset="70%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                </defs>
                <path 
                    d="M 50 200 C 200 200, 300 180, 500 100 S 800 40, 1100 60 L 1400 60" 
                    fill="none" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                />
                </svg>

                {/* Nodes */}
                <div className="absolute inset-0 grid grid-cols-5 items-center">
                    {JOURNEY_DATA.map((step, idx) => {
                        const positions = ['80%', '40%', '20%', '15%', '20%']; 
                        return (
                            <div key={idx} className="flex justify-center h-full relative pointer-events-none">
                                <div 
                                    style={{ top: positions[idx] }} 
                                    className={`absolute w-8 h-8 rounded-full border-4 border-white shadow-lg cursor-pointer pointer-events-auto transition-all hover:scale-125 ${activeStep === idx ? 'scale-125 ring-4 ring-emerald-200' : ''}`}
                                    onMouseEnter={() => setActiveStep(idx)}
                                    onMouseLeave={() => setActiveStep(null)}
                                >
                                    <div className={`w-full h-full rounded-full ${idx > 2 ? 'bg-emerald-500' : idx === 2 ? 'bg-yellow-500' : 'bg-slate-400'}`}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Labels */}
            <div className="grid grid-cols-5 gap-8">
                {JOURNEY_DATA.map((step, idx) => (
                    <div key={idx} className={`text-center transition-opacity duration-300 ${activeStep !== null && activeStep !== idx ? 'opacity-30' : 'opacity-100'}`}>
                        <div className="mb-4">
                             <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest">{step.stage}</span>
                        </div>
                        <h4 className="font-bold text-slate-800 text-xl mb-4 leading-tight">{step.action}</h4>
                        <div className="bg-rose-50 p-3 rounded-xl border border-rose-100 mb-2">
                            <p className="text-xs font-bold text-rose-500 uppercase mb-1">Pain Point</p>
                            <p className="text-sm font-medium text-slate-700">{step.pain}</p>
                        </div>
                         <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                            <p className="text-xs font-bold text-emerald-500 uppercase mb-1">Opportunity</p>
                            <p className="text-sm font-medium text-slate-700">{step.opp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export const SensoryConcentricMap: React.FC = () => {
  const [activeSense, setActiveSense] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      
      {/* Background Atmosphere Rings - Centered via Transform */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-100 rounded-full opacity-50 animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-slate-200 rounded-full opacity-60"></div>
      
      {/* Interactive Core */}
      <div className="relative w-[240px] h-[240px] z-20 flex-shrink-0">
         {/* Center Human Node */}
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center z-30 border-4 border-slate-50 group">
             <UserCircle size={60} className={`text-slate-300 transition-colors duration-500 ${activeSense !== null ? `text-${SENSORY_TRIGGER_DATA[activeSense].color}-500` : ''}`} />
             {/* Neural Pulse Animation */}
             <div className={`absolute inset-0 rounded-full border-4 opacity-0 transition-all duration-500 ${activeSense !== null ? `border-${SENSORY_TRIGGER_DATA[activeSense].color}-400 scale-125 opacity-100 animate-ping` : ''}`}></div>
             
             {/* Dynamic Center Text */}
             {activeSense !== null && (
                 <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap animate-in slide-in-from-top-2">
                     {SENSORY_TRIGGER_DATA[activeSense].type} Input
                 </div>
             )}
         </div>

         {/* Quadrants */}
         <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-slate-50 border border-slate-200">
             {SENSORY_TRIGGER_DATA.map((trigger, idx) => (
                 <div 
                    key={idx}
                    onMouseEnter={() => setActiveSense(idx)}
                    onMouseLeave={() => setActiveSense(null)}
                    onClick={() => setActiveSense(idx === activeSense ? null : idx)}
                    className={`absolute w-1/2 h-1/2 transition-all duration-300 cursor-pointer flex items-center justify-center group
                        ${idx === 0 ? 'top-0 left-0 bg-indigo-50/50 hover:bg-indigo-100' : ''}
                        ${idx === 1 ? 'top-0 right-0 bg-rose-50/50 hover:bg-rose-100' : ''}
                        ${idx === 2 ? 'bottom-0 left-0 bg-emerald-50/50 hover:bg-emerald-100' : ''}
                        ${idx === 3 ? 'bottom-0 right-0 bg-amber-50/50 hover:bg-amber-100' : ''}
                    `}
                 >
                     <trigger.icon 
                        size={28} 
                        className={`opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 text-${trigger.color}-600 transform
                           ${idx === 0 ? '-translate-x-1 -translate-y-1' : ''}
                           ${idx === 1 ? 'translate-x-1 -translate-y-1' : ''}
                           ${idx === 2 ? '-translate-x-1 translate-y-1' : ''}
                           ${idx === 3 ? 'translate-x-1 translate-y-1' : ''}
                        `} 
                     />
                 </div>
             ))}
         </div>
      </div>

      {/* Floating Detail Cards */}
      {SENSORY_TRIGGER_DATA.map((trigger, idx) => {
         const isLeft = idx % 2 === 0;
         const isTop = idx < 2;
         
         const posStyle: React.CSSProperties = {};
         if (isTop) posStyle.bottom = '50%'; else posStyle.top = '50%';
         if (isLeft) posStyle.right = '50%'; else posStyle.left = '50%';
         
         const margin = '130px';
         if (isTop) posStyle.marginBottom = margin; else posStyle.marginTop = margin;
         if (isLeft) posStyle.marginRight = margin; else posStyle.marginLeft = margin;

         return (
             <div 
                key={idx}
                className={`absolute w-[280px] bg-white/95 backdrop-blur-xl p-5 rounded-2xl border-l-4 shadow-xl transition-all duration-500 ease-out z-40
                    ${activeSense === idx ? 'opacity-100 scale-100 translate-y-0' : 'opacity-30 scale-90 blur-sm pointer-events-none'}
                    border-${trigger.color}-500
                `}
                style={{
                    ...posStyle,
                    transformOrigin: `${isTop ? 'bottom' : 'top'} ${isLeft ? 'right' : 'left'}`
                }}
             >
                 <div className="flex items-center gap-3 mb-3">
                     <div className={`p-2 rounded-lg bg-${trigger.color}-100 text-${trigger.color}-700`}>
                         <trigger.icon size={20} />
                     </div>
                     <div>
                         <h4 className="font-bold text-slate-800 text-lg leading-none">{trigger.type}</h4>
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{trigger.mechanism}</p>
                     </div>
                 </div>
                 
                 <div className="space-y-2">
                     {trigger.examples.map((ex, i) => (
                         <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                             <span className={`w-1.5 h-1.5 rounded-full bg-${trigger.color}-400`}></span> {ex}
                         </div>
                     ))}
                 </div>
             </div>
         );
      })}

    </div>
  )
};

export const Storyboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full overflow-y-auto pb-4">
      {STORYBOARD_STEPS.map((step, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="mb-4 text-emerald-600 font-bold text-sm uppercase tracking-widest">Step {idx + 1}</div>
            <h3 className="text-lg font-bold mb-2 text-slate-800">{step.title}</h3>
            <p className="text-slate-600 font-medium">{step.desc}</p>
        </div>
      ))}
    </div>
  );
};

export const Benchmarking: React.FC = () => {
    return (
        <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
             <h3 className="text-2xl font-bold mb-6">Benchmarking Analysis</h3>
             <div className="space-y-4">
                 {EXPERIENCE_MATRIX_POINTS.map((point, i) => (
                     <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                         <span className="font-bold text-slate-700">{point.name}</span>
                         <span className="text-sm text-slate-500">{point.desc}</span>
                     </div>
                 ))}
             </div>
        </div>
    )
};

export const TherapyRadarChart: React.FC<{ data?: any[]; color?: string }> = ({ data, color = 'indigo' }) => {
  const chartData = data || THERAPY_RADAR_DATA.reminiscence;
  const hexColor = COLOR_MAP[color] || COLOR_MAP['indigo'];

  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 13, fontWeight: 700 }} />
        <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
        <Radar name="Therapy" dataKey="A" stroke={hexColor} strokeWidth={3} fill={hexColor} fillOpacity={0.3} />
        <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: hexColor, fontWeight: 'bold' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export const InsightTriangle: React.FC = () => {
  return (
    <div className="w-full h-full relative select-none">
       <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 40, right: 40, bottom: 40, left: 40 }}>
            <XAxis type="number" dataKey="x" hide domain={[0, 100]} />
            <YAxis type="number" dataKey="y" hide domain={[0, 100]} />
            <ZAxis range={[60, 100]} />
            <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                            <div className="bg-slate-900/90 text-white p-3 rounded-lg text-xs font-bold shadow-xl backdrop-blur-sm">
                                {data.label}
                            </div>
                        );
                    }
                    return null;
                }}
            />
            <Scatter data={THERAPY_TRIANGLE_DATA} shape={(props: any) => {
               const { cx, cy, payload } = props;
               const isVertex = ['memory', 'identity', 'emotion'].includes(payload.id);
               
               if (isVertex) {
                   return (
                       <g>
                           <circle cx={cx} cy={cy} r={24} fill="white" stroke="#94a3b8" strokeWidth={2} className="drop-shadow-sm" />
                           <text x={cx} y={cy} dy={4} textAnchor="middle" className="text-[9px] font-extrabold fill-slate-500 uppercase tracking-widest">
                               {payload.label}
                           </text>
                       </g>
                   )
               }
               return (
                  <g className="group cursor-pointer">
                      <circle cx={cx} cy={cy} r={10} fill={payload.x > 50 ? '#10b981' : '#6366f1'} className="group-hover:scale-125 transition-transform origin-center shadow-sm" />
                      <text x={cx} y={cy} dy={-18} textAnchor="middle" className="text-[10px] font-bold fill-slate-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white">
                          {payload.label}
                      </text>
                  </g>
               );
            }} />
        </ScatterChart>
       </ResponsiveContainer>
       {/* Background Triangle Connection Lines */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
            {/* 
               Based on standard Recharts margin 40px and domain 0-100.
               Approximate relative positions:
               Memory (10,10) -> Left-Bottom
               Identity (50,90) -> Center-Top
               Emotion (90,10) -> Right-Bottom
               
               In SVG coordinate space (0,0 is top-left):
               Memory: 10% x, 90% y
               Identity: 50% x, 10% y
               Emotion: 90% x, 90% y
            */}
            <path d="M 10% 90% L 50% 10% L 90% 90% Z" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="8 4" />
       </svg>
    </div>
  )
};

const CustomScatterShape = (props: any) => {
  const { cx, cy, fill, payload } = props;
  const isHero = payload.type === 'hero';

  return (
    <g style={{ cursor: 'pointer' }}>
      {/* Invisible hit area for easier hovering */}
      <circle cx={cx} cy={cy} r={24} fill="transparent" />
      
      {isHero ? (
        <g>
          {/* Subtle stable glow instead of erratic ping */}
          <circle cx={cx} cy={cy} r={28} fill={fill} fillOpacity={0.15} />
          <circle cx={cx} cy={cy} r={22} fill={fill} fillOpacity={0.25} className="animate-pulse" />
          <circle cx={cx} cy={cy} r={12} fill={fill} stroke="#ffffff" strokeWidth={3} className="shadow-lg" />
          <Star x={cx - 6} y={cy - 6} size={12} fill="#ffffff" stroke="none" />
        </g>
      ) : (
        <g className="transition-all duration-300 hover:scale-125">
             <circle 
                cx={cx} 
                cy={cy} 
                r={8} 
                fill={fill} 
                stroke="#ffffff" 
                strokeWidth={2} 
                className="drop-shadow-sm"
            />
        </g>
      )}
    </g>
  );
};

export const ExperienceMatrixChart: React.FC = () => {
    return (
        <div className="h-full w-full relative">
            <ResponsiveContainer width="100%" height="100%" minHeight={400}>
                <ScatterChart margin={{ top: 20, right: 30, bottom: 40, left: 30 }}>
                    <defs>
                        {/* Vibrant yet subtle quadrant gradients */}
                        <linearGradient id="gradAnxiety" x1="0" y1="1" x2="1" y2="0">
                            <stop offset="0%" stopColor="#fff1f2" stopOpacity={0.9} /> 
                            <stop offset="100%" stopColor="#fff1f2" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="gradGeneric" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#eff6ff" stopOpacity={0.9} /> 
                            <stop offset="100%" stopColor="#eff6ff" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="gradMismatch" x1="1" y1="1" x2="0" y2="0">
                            <stop offset="0%" stopColor="#fffbeb" stopOpacity={0.9} /> 
                            <stop offset="100%" stopColor="#fffbeb" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="gradBlueOcean" x1="1" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ecfdf5" stopOpacity={1} /> 
                            <stop offset="100%" stopColor="#d1fae5" stopOpacity={0.4} />
                        </linearGradient>
                    </defs>
                    
                    {/* Background Grids - Softer */}
                    <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" horizontal={true} vertical={true} opacity={0.5} />
                    
                    {/* Axes */}
                    <XAxis 
                        type="number" 
                        dataKey="x" 
                        name="Cultural Relevance" 
                        domain={[0, 10]} 
                        tickCount={6}
                        tickLine={false}
                        axisLine={{ stroke: '#94a3b8', strokeWidth: 2 }}
                        label={{ value: 'Cultural Relevance →', position: 'bottom', fill: '#64748b', fontSize: 13, fontWeight: 600, offset: 0 }} 
                    />
                    <YAxis 
                        type="number" 
                        dataKey="y" 
                        name="Emotional Comfort" 
                        domain={[0, 10]} 
                        tickCount={6}
                        tickLine={false}
                        axisLine={{ stroke: '#94a3b8', strokeWidth: 2 }}
                        label={{ value: 'Emotional Comfort →', angle: -90, position: 'left', fill: '#64748b', fontSize: 13, fontWeight: 600, offset: 0 }} 
                    />

                    {/* Quadrant Backgrounds - Full Color */}
                    <ReferenceArea x1={0} x2={5} y1={0} y2={5} fill="url(#gradAnxiety)" />
                    <ReferenceArea x1={0} x2={5} y1={5} y2={10} fill="url(#gradGeneric)" />
                    <ReferenceArea x1={5} x2={10} y1={0} y2={5} fill="url(#gradMismatch)" />
                    <ReferenceArea x1={5} x2={10} y1={5} y2={10} fill="url(#gradBlueOcean)" />
                    
                    {/* Quadrant Labels - Balanced & Cornered */}
                    <ReferenceArea x1={0} x2={5} y1={0} y2={5} stroke="none" label={{ value: "Anxiety Zone", position: 'insideTopLeft', fill: '#be123c', fontSize: 14, fontWeight: 700, dx: 20, dy: 20 }} />
                    <ReferenceArea x1={0} x2={5} y1={5} y2={10} stroke="none" label={{ value: "Generic / Calm", position: 'insideBottomLeft', fill: '#1d4ed8', fontSize: 14, fontWeight: 700, dx: 20, dy: -20 }} />
                    <ReferenceArea x1={5} x2={10} y1={0} y2={5} stroke="none" label={{ value: "Cultural Mismatch", position: 'insideTopRight', fill: '#b45309', fontSize: 14, fontWeight: 700, dx: -20, dy: 20 }} />
                    <ReferenceArea x1={5} x2={10} y1={5} y2={10} stroke="none" label={{ value: "Blue Ocean", position: 'insideBottomRight', fill: '#047857', fontSize: 14, fontWeight: 700, dx: -20, dy: -20 }} />

                    {/* Crosshair Lines */}
                    <ReferenceLine x={5} stroke="#94a3b8" strokeWidth={1} strokeDasharray="5 5" />
                    <ReferenceLine y={5} stroke="#94a3b8" strokeWidth={1} strokeDasharray="5 5" />

                    {/* Tooltip */}
                    <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }} 
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                    <div className="bg-slate-900 text-white p-3 rounded-xl shadow-xl border border-slate-700 z-50">
                                        <div className="flex items-center gap-2 mb-1">
                                            {data.type === 'hero' && <Star size={12} className="text-emerald-400" fill="currentColor" />}
                                            <p className="font-bold text-sm">{data.name}</p>
                                        </div>
                                        <p className="text-xs text-slate-400 italic">{data.desc}</p>
                                        <div className="mt-2 text-[10px] text-slate-500 font-mono">
                                            ({data.x}, {data.y})
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        }} 
                    />

                    {/* Data Points */}
                    <Scatter name="Competitors" data={EXPERIENCE_MATRIX_POINTS} shape={<CustomScatterShape />}>
                        {EXPERIENCE_MATRIX_POINTS.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.type === 'hero' ? '#10b981' : '#64748b'} />))}
                        <LabelList 
                            dataKey="name" 
                            position="top" 
                            offset={15} 
                            style={{ fill: '#334155', fontSize: '12px', fontWeight: '700', fontFamily: 'Poppins', pointerEvents: 'none', textShadow: '0 2px 8px rgba(255,255,255,0.8)' }} 
                        />
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export const HypothesisConstellation: React.FC = () => {
  return null; // Deprecated view
};
