
import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Area, ComposedChart, Line, ReferenceArea } from 'recharts';
import { JOURNEY_DATA, EXPERIENCE_MATRIX_POINTS, STORYBOARD_STEPS, THERAPY_TRIANGLE_DATA, SENSORY_TRIGGER_DATA, THERAPY_RADAR_DATA } from '../constants';
import { AlertCircle, Zap, Smile, CheckCircle, Tablet, Radio, Volume2, CloudDrizzle, Activity, Image as ImageIcon, Music, Heart, Wind, Brain, User, Target, Layers, Ban, Wand2, Loader2, MousePointerClick, AlertTriangle, UserCircle, Hand, Coffee, Glasses } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const COLOR_MAP: Record<string, string> = {
  indigo: '#4f46e5',
  emerald: '#10b981',
  amber: '#f59e0b',
  rose: '#f43f5e',
  teal: '#14b8a6',
  blue: '#3b82f6',
  slate: '#64748b',
};

const ADVANCED_JOURNEY_DATA = [
  {
    stage: 'Stage 1: Before',
    title: 'Confused Evening',
    subtitle: 'Sundowning Onset',
    emotionScore: 2,
    hrValue: 95,
    hr: '95 bpm',
    emoji: '😫',
    actions: ['Pacing', 'Repetitive questions', 'Window gazing'],
    pain: ['High cognitive load', 'Disorientation', 'Panic (light transition)'],
    cognitive: 'Impaired orientation, Short-term failure',
    emotional: 'High Anxiety, Fear, Loss of control',
    physio: 'Elevated HR, Irregular breathing',
    ux_req: 'Fast access, Zero text',
    marker: null
  },
  {
    stage: 'Stage 2: During',
    title: 'Intervention',
    subtitle: 'Launching Sanjeevani',
    emotionScore: 4,
    hrValue: 88,
    hr: '88 bpm',
    emoji: '😰',
    actions: ['Caregiver reaches for tablet', 'Opens App', 'Selects "Radio"'],
    pain: ['Caregiver stress', 'Time pressure', 'Digital friction risk'],
    cognitive: 'Confusion loop, Cannot follow logic',
    emotional: 'Ambivalent, Slight anxiety reduction',
    physio: 'Mild shift in facial tension',
    ux_req: 'Large targets, Auto-play',
    marker: null
  },
  {
    stage: 'Stage 3: Interaction',
    title: 'Sensory Cue',
    subtitle: 'Object Tap',
    emotionScore: 7,
    hrValue: 78,
    hr: '78 bpm',
    emoji: '😮',
    actions: ['Hears AIR static', 'Sees glowing radio', 'Focuses attention'],
    pain: ['Overstimulation risk', 'Cognitive fatigue risk'],
    cognitive: 'Limbic processing activated, Hippocampus bypass',
    emotional: 'Micro-recognition, Softening',
    physio: 'Shoulders relax, Pupil dilation',
    ux_req: 'Zero-scroll, Soft glow',
    marker: 'TTS: Time to Smile (8-20s)'
  },
  {
    stage: 'Stage 4: Emotion',
    title: 'Recognition',
    subtitle: 'Identity Moment',
    emotionScore: 9,
    hrValue: 72,
    hr: '72 bpm',
    emoji: '🥹',
    actions: ['Sits down', 'Smiles gently', 'Leans in'],
    pain: ['Memory fragmentation', 'Emotional fragility'],
    cognitive: 'Identity activation, Long-term retrieval',
    emotional: 'Nostalgia, Warmth, Clarity',
    physio: 'Slower breathing, Relaxed muscles',
    ux_req: 'Empathetic microcopy',
    marker: 'HRV Normalization (30-60s)'
  },
  {
    stage: 'Stage 5: After',
    title: 'Calm State',
    subtitle: 'Post-Intervention',
    emotionScore: 8,
    hrValue: 68,
    hr: '68 bpm',
    emoji: '😌',
    actions: ['Rests calmly', 'Caregiver logs session', 'Peaceful sitting'],
    pain: ['Temporary duration', 'Need for routine'],
    cognitive: 'Stability, Improved grounding',
    emotional: 'Relief, Safety, Connection',
    physio: 'Stable HR, Smooth breathing',
    ux_req: 'Auto-save insights',
    marker: null
  },
];

const EmojiLabel = (props: any) => {
  const { x, y, value } = props;
  return (
    <g>
      <circle cx={x} cy={y - 25} r={20} fill="white" stroke="#e2e8f0" strokeWidth={2} style={{filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.1))'}} />
      <text x={x} y={y - 25} dy={7} textAnchor="middle" fontSize={22}>
        {value}
      </text>
    </g>
  );
};

export const JourneyMap: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <div className="h-full flex flex-col bg-white rounded-[2.5rem] border-2 border-slate-900 shadow-2xl overflow-hidden">
      <div className="p-8 border-b-2 border-slate-200 flex justify-between items-end bg-slate-50 flex-shrink-0">
          <div>
            <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-indigo-700 rounded-xl text-white shadow-lg"><Activity size={32} /></div>
                <span className="text-base font-extrabold text-indigo-800 uppercase tracking-widest bg-indigo-100 px-4 py-1.5 rounded-full border border-indigo-200">Clinical UX Model</span>
            </div>
            <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight">User Journey Map</h2>
            <p className="text-2xl text-slate-600 font-bold mt-2">Sundowning Episode → Level 1 Intervention → Recovery</p>
          </div>
          <div className="text-right">
             <div className="flex gap-8 text-sm font-extrabold text-slate-500 uppercase tracking-widest mb-2 bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm">
                 <span className="flex items-center gap-3"><span className="w-4 h-4 rounded-full bg-rose-500 ring-2 ring-rose-200"></span> High Anxiety</span>
                 <span className="flex items-center gap-3"><span className="w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-emerald-200"></span> Stable Calm</span>
             </div>
          </div>
      </div>

      <div className="flex-grow overflow-y-auto scroll-smooth no-scrollbar p-10 bg-[#f8fafc]">
         <div className="h-[450px] w-full mb-12 relative bg-white rounded-3xl p-6 border border-slate-200 shadow-md">
             <div className="flex justify-between items-center mb-4">
                 <h3 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest">
                     Clinical Correlation: Emotion vs. Physiology
                 </h3>
                 <div className="flex gap-4">
                     <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                         <span className="text-xs font-bold text-slate-500">Emotional State</span>
                     </div>
                     <div className="flex items-center gap-2">
                         <div className="w-6 h-1 bg-rose-500 rounded-full border-t border-dashed border-white"></div>
                         <span className="text-xs font-bold text-slate-500">Heart Rate</span>
                     </div>
                 </div>
             </div>
             
             <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={ADVANCED_JOURNEY_DATA} margin={{ top: 40, right: 20, left: 20, bottom: 20 }}>
                    <defs>
                        <linearGradient id="emotionGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#f43f5e" stopOpacity={0.6}/>
                            <stop offset="40%" stopColor="#fbbf24" stopOpacity={0.6}/>
                            <stop offset="100%" stopColor="#10b981" stopOpacity={0.8}/>
                        </linearGradient>
                         <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity={0.2}/> 
                            <stop offset="100%" stopColor="#f43f5e" stopOpacity={0.05}/> 
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#e2e8f0" strokeWidth={1} />
                    <XAxis dataKey="title" axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 14, fontWeight: 700, dy: 15 }} />
                    <YAxis yAxisId="left" orientation="left" domain={[0, 10]} hide />
                    <YAxis yAxisId="right" orientation="right" domain={[60, 110]} tick={{ fill: '#f43f5e', fontSize: 12, fontWeight: 600 }} axisLine={false} tickLine={false} unit=" bpm"/>
                    <Tooltip content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                    <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border-2 border-slate-700 text-base min-w-[200px]">
                                        <div className="flex items-center gap-3 mb-3 border-b border-slate-700 pb-2">
                                            <span className="text-2xl">{data.emoji}</span>
                                            <p className="font-bold text-xl">{data.title}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-emerald-400 font-bold text-sm">Emotion</span>
                                                <span className="font-mono text-white text-lg">{data.emotionScore}/10</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-rose-400 font-bold text-sm">Heart Rate</span>
                                                <span className="font-mono text-white text-lg">{data.hr}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <Area yAxisId="left" type="monotone" dataKey="emotionScore" stroke="url(#emotionGradient)" fill="url(#fillGradient)" strokeWidth={6} activeDot={{ r: 10, strokeWidth: 0, fill: '#10b981' }}>
                        <LabelList dataKey="emoji" content={<EmojiLabel />} />
                    </Area>
                    <Line yAxisId="right" type="monotone" dataKey="hrValue" stroke="#f43f5e" strokeWidth={4} strokeDasharray="10 10" dot={{ r: 6, fill: '#f43f5e', stroke: '#fff', strokeWidth: 2 }} />
                </ComposedChart>
             </ResponsiveContainer>
         </div>

         <div className="grid grid-cols-5 gap-6 pb-16">
             {ADVANCED_JOURNEY_DATA.map((stage, i) => (
                 <div key={i} className={`flex flex-col gap-4 group transition-all duration-300 ${activeStage === i ? 'scale-[1.02] -translate-y-2' : ''}`} onMouseEnter={() => setActiveStage(i)} onMouseLeave={() => setActiveStage(null)}>
                     <div className={`p-6 rounded-3xl border-t-8 shadow-md h-full flex flex-col ${i === 0 ? 'bg-rose-50 border-rose-500' : i === 4 ? 'bg-emerald-50 border-emerald-500' : 'bg-white border-slate-400'}`}>
                         <div className="mb-6">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{stage.stage}</span>
                                <span className="text-2xl">{stage.emoji}</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 leading-tight mt-2">{stage.title}</h3>
                            <p className="text-sm font-bold text-slate-500 italic mt-1">{stage.subtitle}</p>
                         </div>
                         <div className="bg-blue-50 p-5 rounded-2xl border-2 border-blue-100 space-y-4 mb-4">
                             <div className="flex items-center gap-2 border-b-2 border-blue-100 pb-2">
                                <Brain size={20} className="text-blue-600" />
                                <span className="text-xs font-black text-blue-700 uppercase tracking-wider">Cognitive</span>
                             </div>
                             <p className="text-sm text-slate-800 font-bold leading-snug">{stage.cognitive}</p>
                             <div className="flex items-center gap-2 border-b-2 border-blue-100 pb-2 pt-2">
                                <Heart size={20} className="text-rose-500" />
                                <span className="text-xs font-black text-rose-700 uppercase tracking-wider">Physio</span>
                             </div>
                             <div className="bg-white px-3 py-2 rounded-lg border border-blue-100 shadow-sm flex items-center justify-between">
                                 <span className="text-sm font-black text-slate-700 block">{stage.hr}</span>
                                 <Activity size={16} className={i < 2 ? "text-rose-500 animate-pulse" : "text-emerald-500"} />
                             </div>
                         </div>
                         <div className="bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 space-y-4 flex-grow">
                             <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2">
                                <MousePointerClick size={20} className="text-slate-600" />
                                <span className="text-xs font-black text-slate-600 uppercase tracking-wider">Action</span>
                             </div>
                             <ul className="text-sm text-slate-700 font-bold space-y-2">
                                 {stage.actions.map((act, idx) => <li key={idx} className="leading-tight">• {act}</li>)}
                             </ul>
                             <div className="mt-4 pt-4 border-t-2 border-slate-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertTriangle size={18} className="text-amber-600" />
                                    <span className="text-xs font-black text-amber-700 uppercase tracking-wider">Limitations</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {stage.pain.map((p, idx) => (
                                        <span key={idx} className="inline-block bg-amber-100 text-amber-900 text-[10px] font-black px-2 py-1 rounded border border-amber-200 uppercase leading-tight">
                                            {p}
                                        </span>
                                    ))}
                                </div>
                             </div>
                             <div className="mt-4 pt-2">
                                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">UX Requirement</span>
                                 <p className="text-sm font-bold text-indigo-700 bg-indigo-50 p-2 rounded-lg border border-indigo-100 border-l-4 border-l-indigo-500">
                                     {stage.ux_req}
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>
             ))}
         </div>
         <div className="mt-8 bg-slate-900 text-white p-10 rounded-[2.5rem] flex items-center gap-8 shadow-2xl border-4 border-slate-800">
             <div className="p-6 bg-emerald-500/20 rounded-3xl border-2 border-emerald-500/50 flex-shrink-0">
                 <CheckCircle size={48} className="text-emerald-400" />
             </div>
             <div>
                 <p className="text-sm font-black text-emerald-400 uppercase tracking-[0.2em] mb-4">Scientific Summary</p>
                 <p className="text-3xl font-bold leading-relaxed font-serif">
                     “The Sanjeevani intervention converts a <span className="text-rose-400 underline decoration-2 decoration-rose-400/30 underline-offset-4">declining emotional state</span> into a <span className="text-emerald-400 underline decoration-2 decoration-emerald-400/30 underline-offset-4">stabilized calm state</span> within 60–120 seconds.”
                 </p>
             </div>
         </div>
      </div>
    </div>
  );
};

export const SensoryImpactChart: React.FC = () => {
    const data = [
        { name: 'Smell', x: 20, y: 95, z: 100, status: 'excluded', fill: '#f43f5e', label: 'Strongest but Hard' },
        { name: 'Taste', x: 10, y: 70, z: 50, status: 'excluded', fill: '#f43f5e', label: 'Not Scalable' },
        { name: 'Touch', x: 50, y: 50, z: 60, status: 'optional', fill: '#f59e0b', label: 'Optional' },
        { name: 'Visuals', x: 90, y: 60, z: 80, status: 'included', fill: '#3b82f6', label: 'Required Base' },
        { name: 'Sound', x: 95, y: 90, z: 90, status: 'included', fill: '#10b981', label: 'Sweet Spot' },
    ];

    return (
        <div className="h-full w-full relative">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 30, bottom: 40, left: 30 }}>
                    <defs>
                        <linearGradient id="gradSweetSpot" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#ecfdf5" stopOpacity={0.8} /> 
                            <stop offset="100%" stopColor="#d1fae5" stopOpacity={0.2} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={true} vertical={true} />
                    <XAxis type="number" dataKey="x" name="Feasibility" domain={[0, 100]} tick={false} axisLine={{ stroke: '#94a3b8', strokeWidth: 2 }} label={{ value: 'Implementation Feasibility →', position: 'bottom', fill: '#64748b', fontSize: 13, fontWeight: 700, offset: 0 }} />
                    <YAxis type="number" dataKey="y" name="Memory Impact" domain={[0, 100]} tick={false} axisLine={{ stroke: '#94a3b8', strokeWidth: 2 }} label={{ value: 'Memory Trigger Strength →', angle: -90, position: 'left', fill: '#64748b', fontSize: 13, fontWeight: 700, offset: 0 }} />
                    <ReferenceArea x1={60} x2={100} y1={60} y2={100} fill="url(#gradSweetSpot)" stroke="none" />
                    <ReferenceArea x1={60} x2={100} y1={60} y2={100} stroke="none" label={{ value: "PHASE 1 CORE", position: 'insideTopRight', fill: '#059669', fontSize: 16, fontWeight: 900, dx: -10, dy: 10 }} />
                    <ReferenceArea x1={0} x2={50} y1={60} y2={100} stroke="none" label={{ value: "PHASE 2 (HARDWARE)", position: 'insideTopLeft', fill: '#e11d48', fontSize: 14, fontWeight: 700, dx: 10, dy: 10 }} />
                    <ReferenceArea x1={0} x2={100} y1={0} y2={50} stroke="none" label={{ value: "LOW IMPACT ZONE", position: 'insideBottom', fill: '#94a3b8', fontSize: 14, fontWeight: 700 }} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                    <div className="bg-slate-900 text-white p-4 rounded-xl shadow-xl border border-slate-700 z-50">
                                        <p className="font-bold text-lg mb-1" style={{color: data.fill}}>{data.name}</p>
                                        <p className="text-xs text-slate-300 uppercase tracking-widest font-bold mb-2">{data.label}</p>
                                        <div className="space-y-1 text-xs font-mono text-slate-400">
                                            <div>Impact: {data.y}%</div>
                                            <div>Feasibility: {data.x}%</div>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <Scatter data={data} shape={(props: any) => {
                        const { cx, cy, fill, payload } = props;
                        const isIncluded = payload.status === 'included';
                        return (
                            <g className="cursor-pointer hover:scale-110 transition-transform duration-300">
                                {isIncluded && (
                                    <circle cx={cx} cy={cy} r={35} fill={fill} fillOpacity={0.2} className="animate-pulse" />
                                )}
                                <circle cx={cx} cy={cy} r={isIncluded ? 25 : 18} fill={fill} stroke="white" strokeWidth={3} className="shadow-lg drop-shadow-md" />
                                <text x={cx} y={cy + (isIncluded ? 40 : 32)} textAnchor="middle" fill={fill} fontWeight={800} fontSize={12}>
                                    {payload.name}
                                </text>
                                {isIncluded && (
                                    <CheckCircle x={cx + 12} y={cy - 25} size={16} className="text-emerald-600 fill-white" />
                                )}
                                {payload.status === 'excluded' && (
                                    <Ban x={cx + 8} y={cy - 18} size={14} className="text-rose-800 fill-white/80" />
                                )}
                            </g>
                        );
                    }} />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export const SensoryConcentricMap: React.FC = () => {
  const [activeSense, setActiveSense] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-100 rounded-full opacity-50 animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-slate-200 rounded-full opacity-60"></div>
      
      <div className="relative w-[240px] h-[240px] z-20 flex-shrink-0">
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center z-30 border-4 border-slate-50 group">
             <UserCircle size={60} className={`text-slate-300 transition-colors duration-500 ${activeSense !== null ? `text-${SENSORY_TRIGGER_DATA[activeSense].color}-500` : ''}`} />
             <div className={`absolute inset-0 rounded-full border-4 opacity-0 transition-all duration-500 ${activeSense !== null ? `border-${SENSORY_TRIGGER_DATA[activeSense].color}-400 scale-125 opacity-100 animate-ping` : ''}`}></div>
             
             {activeSense !== null && (
                 <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap animate-in slide-in-from-top-2">
                     {SENSORY_TRIGGER_DATA[activeSense].type} Input
                 </div>
             )}
         </div>

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

export const CrossModalMap: React.FC = () => {
  const senses = [
    { id: 'sound', label: 'Sound', sub: 'Primary Trigger', status: 'included', color: 'emerald', icon: Music },
    { id: 'visual', label: 'Visuals', sub: 'Scene Setter', status: 'included', color: 'blue', icon: ImageIcon },
    { id: 'touch', label: 'Touch', sub: 'Grounding', status: 'optional', color: 'amber', icon: Hand },
    { id: 'smell', label: 'Smell', sub: 'Deep Memory', status: 'excluded', color: 'slate', icon: Wind },
    { id: 'taste', label: 'Taste', sub: 'Comfort', status: 'excluded', color: 'slate', icon: Coffee },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-3xl relative overflow-hidden p-8 border border-slate-200 shadow-sm">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-slate-100 rounded-full z-0 opacity-60"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-100 rounded-full z-0 opacity-60"></div>

       <div className="z-10 mb-10 relative">
           <div className="w-40 h-40 bg-slate-900 rounded-full flex flex-col items-center justify-center shadow-2xl border-8 border-slate-100 relative z-20 hover:scale-105 transition-transform duration-300">
               <Brain size={48} className="text-emerald-400 mb-2" />
               <span className="text-white font-bold text-sm tracking-widest uppercase">Memory</span>
               <span className="text-slate-400 text-[10px] font-bold uppercase">Activation</span>
           </div>
           <div className="absolute top-full left-1/2 -translate-x-1/2 h-10 w-0.5 bg-slate-200 z-0"></div>
       </div>

       <div className="flex justify-center gap-6 w-full z-20 flex-wrap">
           {senses.map((sense) => (
               <div key={sense.id} className={`
                   flex flex-col items-center justify-center w-36 h-48 rounded-2xl border-2 transition-all duration-300 relative group cursor-default
                   ${sense.status === 'included' 
                        ? `bg-white border-${sense.color}-200 shadow-lg scale-105 hover:-translate-y-2 ring-1 ring-${sense.color}-100` 
                        : 'bg-slate-50 border-slate-200 opacity-70 grayscale-[0.8] hover:grayscale-0 hover:opacity-100 hover:bg-white'}
               `}>
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-200 rounded-full border-2 border-white z-10"></div>
                   <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${sense.status === 'included' ? `bg-${sense.color}-50 text-${sense.color}-600` : 'bg-slate-100 text-slate-400'}`}>
                       <sense.icon size={28} />
                   </div>
                   <h4 className="font-bold text-slate-800 text-lg">{sense.label}</h4>
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-3">{sense.sub}</p>
                   
                   <div className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1
                       ${sense.status === 'included' ? 'bg-emerald-100 text-emerald-700' : 
                         sense.status === 'excluded' ? 'bg-slate-100 text-slate-500' : 'bg-amber-100 text-amber-700'}
                   `}>
                       {sense.status === 'included' && <CheckCircle size={10} />}
                       {sense.status === 'excluded' && <Ban size={10} />}
                       {sense.status === 'optional' && <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>}
                       {sense.status === 'included' ? 'Core' : sense.status === 'excluded' ? 'Later' : 'Maybe'}
                   </div>
               </div>
           ))}
       </div>
       
       <p className="absolute bottom-6 text-slate-400 text-xs font-medium uppercase tracking-widest">
           Cross-Modal Integration Pathways
       </p>
    </div>
  )
}

export const SketchFrame: React.FC<{type: string, id: string, promptContext: string}> = ({type, id, promptContext}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(() => {
    // Load persisted image on mount
    return localStorage.getItem(`sketch_${id}`);
  });
  const [loading, setLoading] = useState(false);

  const generateSketch = async () => {
    if (!process.env.API_KEY) return;
    setLoading(true);
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        let promptPrefix = "";
        
        // Intelligent prompt construction based on context keywords
        if (promptContext.toLowerCase().includes("wireframe") || promptContext.toLowerCase().includes("ui") || promptContext.toLowerCase().includes("pov")) {
            // New Prompt Logic for VR/AR as per user request
            promptPrefix = "Photorealistic VR/AR First-Person View (POV). The scene is inside a warm, nostalgic Indian home (1970s style), NOT a sci-fi void. Realistic lighting, vintage furniture. The UI is minimal, large, and accessible, overlaid on the real environment (Augmented Reality). No futuristic holograms, no blue grid lines. Warm, comforting aesthetic for elderly users. Scene:";
        } else {
            promptPrefix = "Minimalist pencil sketch storyboard frame. CHARACTER CONSISTENCY REQUIRED: Arun is an elderly Indian man with white beard wearing a white Kurta. Meera is an elderly Indian woman wearing a Saree. Scene description:";
        }

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: [
              {
                parts: [
                  { text: `${promptPrefix} ${promptContext}` }
                ]
              }
            ],
            config: {
              imageConfig: {
                aspectRatio: "4:3"
              }
            }
        });
        
        const part = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
        if (part?.inlineData) {
            const url = `data:image/png;base64,${part.inlineData.data}`;
            setImageUrl(url);
            // Save to localStorage
            localStorage.setItem(`sketch_${id}`, url);
        }
    } catch (e) {
        console.error("Sketch generation failed:", e);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="w-full h-full bg-slate-100 rounded-xl overflow-hidden relative group flex items-center justify-center border-2 border-dashed border-slate-200">
        {imageUrl ? (
            <img src={imageUrl} alt={promptContext} className="w-full h-full object-cover" />
        ) : (
            <div className="text-center p-4">
                <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{type}</p>
                <button 
                    onClick={generateSketch} 
                    disabled={loading} 
                    className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2 mx-auto"
                >
                    {loading ? <Loader2 className="animate-spin" size={12}/> : <Wand2 size={12}/>}
                    Generate
                </button>
            </div>
        )}
    </div>
  );
};

export const Storyboard: React.FC = () => {
    const getIcon = (iconName: string) => {
        switch(iconName) {
            case 'cloud-drizzle': return <CloudDrizzle size={24} />;
            case 'tablet': return <Tablet size={24} />;
            case 'radio': return <Radio size={24} />;
            case 'volume-2': return <Volume2 size={24} />;
            case 'smile': return <Smile size={24} />;
            case 'check-circle': return <CheckCircle size={24} />;
            case 'glasses': return <Glasses size={24} />;
            case 'hand': return <Hand size={24} />;
            default: return <Activity size={24} />;
        }
    };

    return (
        <div className="h-[85vh] w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden p-10 flex flex-col">
            <div className="mb-8 border-b border-slate-100 pb-6 flex-shrink-0">
                <h2 className="text-4xl font-bold text-slate-900">Scenario Storyboard</h2>
                <p className="text-xl text-slate-600 mt-2 font-medium">A Typical Interaction: The Sundowning Episode</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-y-auto no-scrollbar pb-10 pr-2">
                {STORYBOARD_STEPS.map((step, i) => (
                    <div key={i} className="flex flex-col gap-4 group">
                        <div className="flex justify-between items-end border-b border-slate-100 pb-3">
                            <h3 className="text-xl font-bold text-slate-900 leading-tight w-2/3">{step.title}</h3>
                            <span className="text-4xl font-black text-slate-200 select-none group-hover:text-indigo-100 transition-colors">0{i + 1}</span>
                        </div>
                        
                        <div className="w-full aspect-[4/3] bg-slate-50 rounded-2xl border-2 border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                           <SketchFrame type={step.type || "scene"} id={`s${i+1}`} promptContext={step.desc} />
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <div className="flex gap-3 items-start">
                                <div className="mt-1 min-w-fit text-indigo-500">
                                    {getIcon(step.icon)}
                                </div>
                                <p className="text-sm text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export const TherapyRadarChart: React.FC<{ data: any[]; color?: string }> = ({ data, color = 'indigo' }) => {
    const hexColor = COLOR_MAP[color] || color;
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }} />
                <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                <Radar
                    name="Therapy Profile"
                    dataKey="A"
                    stroke={hexColor}
                    strokeWidth={3}
                    fill={hexColor}
                    fillOpacity={0.3}
                />
                <Tooltip />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export const InsightTriangle: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
                <XAxis type="number" dataKey="x" hide domain={[0, 100]} />
                <YAxis type="number" dataKey="y" hide domain={[0, 100]} />
                <Scatter data={THERAPY_TRIANGLE_DATA} fill="#8884d8">
                    <LabelList dataKey="label" position="top" style={{ fontSize: '10px', fontWeight: 'bold' }} />
                    {THERAPY_TRIANGLE_DATA.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={COLOR_MAP['indigo']} />
                    ))}
                </Scatter>
            </ScatterChart>
        </ResponsiveContainer>
    );
}

export const ExperienceMatrixChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="x" name="Calmness" domain={[0, 10]} label={{ value: 'Calmness (Low Stimulation)', position: 'bottom', offset: 0, fontSize: 12, fontWeight: 700 }} />
                <YAxis type="number" dataKey="y" name="Cultural Relevance" domain={[0, 10]} label={{ value: 'Cultural Relevance', angle: -90, position: 'left', fontSize: 12, fontWeight: 700 }} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} 
                     content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                                <div className="bg-white p-3 border border-slate-200 shadow-xl rounded-xl">
                                    <p className="font-bold text-slate-900">{data.name}</p>
                                    <p className="text-xs text-slate-500">{data.desc}</p>
                                </div>
                            );
                        }
                        return null;
                    }}
                />
                <Scatter name="Competitors" data={EXPERIENCE_MATRIX_POINTS} fill="#8884d8">
                    {EXPERIENCE_MATRIX_POINTS.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.type === 'hero' ? '#10b981' : '#94a3b8'} />
                    ))}
                    <LabelList dataKey="name" position="top" style={{ fontSize: '10px', fontWeight: 'bold', fill: '#475569' }} />
                </Scatter>
            </ScatterChart>
        </ResponsiveContainer>
    );
};

export const Benchmarking: React.FC = () => {
    return (
        <div className="p-10 h-full flex flex-col">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Competitive Landscape</h2>
            <div className="flex-grow bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
                 <ExperienceMatrixChart />
            </div>
        </div>
    );
};
