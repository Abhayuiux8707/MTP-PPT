
import React, { useState, useRef, useEffect } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ReferenceArea, ReferenceLine, Customized, ZAxis } from 'recharts';
import { JOURNEY_DATA, EXPERIENCE_MATRIX_POINTS, STORYBOARD_STEPS, THERAPY_TRIANGLE_DATA, SENSORY_TRIGGER_DATA, HYPOTHESIS_NODES, HYPOTHESIS_LINKS, THERAPY_RADAR_DATA } from '../constants';
import { AlertCircle, Zap, Smile, CheckCircle, Tablet, Radio, Volume2, CloudDrizzle, CloudLightning, Sun, Activity, Upload, Image as ImageIcon, Music, Heart, Eye, Hand, Wind, Brain, User, ArrowUpRight, Target, Star, Hexagon, ZoomIn, ZoomOut, RotateCcw, Move, MousePointer2, UserCircle, Clock, AlertTriangle, Check, ArrowRight, MessageSquare, Sunset, Coffee, Frown, Mic, HelpCircle, UserPlus, Music2, Wifi, Trash2 } from 'lucide-react';

const COLOR_MAP: Record<string, string> = {
  indigo: '#4f46e5',
  emerald: '#10b981',
  amber: '#f59e0b',
  rose: '#f43f5e',
  teal: '#14b8a6',
  blue: '#3b82f6',
  slate: '#64748b',
};

// ... (Existing components: JourneyMap, SensoryConcentricMap, etc. remain unchanged) ...

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

// --- NEW SKETCH COMPONENT FOR STORYBOARD ---
const SketchFrame = ({ type, id }: { type: 'trigger' | 'intervention' | 'recall' | 'calm', id: string }) => {
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Load stored image on mount
        const storedImage = localStorage.getItem(`sanjeevani_sketch_${id}`);
        if (storedImage) {
            setImage(storedImage);
        }
    }, [id]);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result as string;
                setImage(result);
                localStorage.setItem(`sanjeevani_sketch_${id}`, result);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerUpload = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="bg-white p-4 rounded-xl border-2 border-slate-200 shadow-md transform rotate-1 transition-transform hover:rotate-0 hover:scale-[1.02] duration-300 relative group">
             {/* Paper Texture */}
             <div className="absolute inset-2 border border-slate-100 border-dashed rounded-lg z-0"></div>
             
             {/* Content Area */}
             <div 
                className="aspect-[4/3] bg-slate-50 relative overflow-hidden rounded-lg z-10 flex items-center justify-center cursor-pointer"
                onClick={triggerUpload}
             >
                 <input 
                    type="file" 
                    ref={fileInputRef}
                    className="hidden" 
                    accept="image/*"
                    onChange={handleUpload}
                 />

                 {image ? (
                     <div className="w-full h-full relative group">
                        <img src={image} alt="Sketch" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white/90 px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 flex items-center gap-2">
                                <Upload size={14} /> Change
                            </span>
                        </div>
                     </div>
                 ) : (
                     <div className="relative w-full h-full flex items-center justify-center">
                         {type === 'trigger' && (
                             <div className="relative w-full h-full flex items-center justify-center">
                                 {/* Background Elements */}
                                 <Sunset className="text-orange-300 absolute top-4 right-4 w-16 h-16 opacity-50" />
                                 <div className="w-full h-1/3 bg-orange-50 absolute bottom-0"></div>
                                 
                                 {/* Character Composition */}
                                 <div className="relative flex flex-col items-center mt-8">
                                     <div className="relative">
                                         <User className="w-20 h-20 text-slate-700 stroke-[1.5]" />
                                         <HelpCircle className="w-8 h-8 text-orange-500 absolute -top-2 -right-2 animate-bounce" />
                                     </div>
                                     <p className="text-[10px] font-mono text-slate-400 mt-2">Arun (Confused)</p>
                                 </div>
                             </div>
                         )}

                         {type === 'intervention' && (
                             <div className="relative w-full h-full flex items-center justify-center gap-4">
                                  {/* Elements */}
                                  <div className="flex flex-col items-center opacity-60">
                                      <UserPlus className="w-16 h-16 text-slate-400" />
                                      <p className="text-[10px] font-mono text-slate-300">Meera</p>
                                  </div>
                                  
                                  <ArrowRight className="text-slate-300 w-6 h-6" />

                                  <div className="relative">
                                      <Tablet className="w-20 h-24 text-emerald-600 fill-emerald-50" />
                                      <Hand className="w-8 h-8 text-slate-700 absolute bottom-0 right-0 transform translate-y-2 translate-x-2 fill-slate-200" />
                                      <div className="absolute inset-0 flex items-center justify-center">
                                           <Radio className="w-8 h-8 text-emerald-600/50" />
                                      </div>
                                  </div>
                             </div>
                         )}

                         {type === 'recall' && (
                             <div className="relative w-full h-full flex items-center justify-center bg-amber-50/30">
                                 {/* Radio Active */}
                                 <Radio className="w-24 h-24 text-amber-600 stroke-[1.5]" />
                                 
                                 {/* Waves */}
                                 <Wifi className="w-12 h-12 text-amber-400 absolute top-4 right-8 rotate-12 animate-pulse" />
                                 <Music className="w-8 h-8 text-amber-500 absolute bottom-6 left-8 -rotate-12" />
                                 <Music2 className="w-6 h-6 text-amber-500 absolute top-6 left-12 rotate-45" />
                                 
                                 <p className="absolute bottom-2 font-serif italic text-amber-800/40 text-xs">"AIR News..."</p>
                             </div>
                         )}

                         {type === 'calm' && (
                             <div className="relative w-full h-full flex items-center justify-center">
                                 <div className="absolute inset-0 bg-gradient-to-t from-emerald-50 to-transparent opacity-50"></div>
                                 
                                 <div className="relative z-10 flex flex-col items-center">
                                     <div className="relative">
                                         <User className="w-20 h-20 text-slate-700 stroke-[1.5]" />
                                         <Smile className="w-8 h-8 text-emerald-500 fill-white absolute -bottom-1 -right-1" />
                                     </div>
                                     <div className="mt-4 flex gap-2">
                                         <div className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-200">HR: 72</div>
                                         <div className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full border border-slate-200">Stable</div>
                                     </div>
                                 </div>
                             </div>
                         )}
                         
                         {/* Upload Overlay (Hover) */}
                         <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                <Upload size={14} /> Upload Sketch
                            </div>
                        </div>
                     </div>
                 )}

             </div>
             
             {/* Caption Area */}
             <div className="mt-3 flex justify-between items-center border-t border-slate-100 pt-2">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sketch</span>
                 <span className="text-xs font-serif italic text-slate-600">
                     {type === 'trigger' && '01: Disorientation'}
                     {type === 'intervention' && '02: Assistance'}
                     {type === 'recall' && '03: Connection'}
                     {type === 'calm' && '04: Resolution'}
                 </span>
             </div>
        </div>
    )
}

export const Storyboard: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#fdfbf7] p-8 md:p-12 rounded-[2.5rem] overflow-y-auto no-scrollbar border border-stone-200 shadow-sm relative">
       {/* Background Grid for Sketchbook feel */}
       <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

       <div className="max-w-5xl mx-auto relative z-10">
           
           {/* Header */}
           <div className="text-center mb-16 space-y-4">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-widest mb-2 border border-amber-200">
                  Scenario 01
               </div>
               <h2 className="text-5xl font-bold text-stone-900 font-serif tracking-tight">Evening Confusion</h2>
               <p className="text-xl text-stone-500 font-medium max-w-2xl mx-auto">
                   A step-by-step narrative of how the Nostalgia Room intervenes during a sundowning episode.
               </p>
           </div>

           {/* Story Timeline */}
           <div className="relative space-y-24 before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-stone-300 before:-translate-x-1/2 hidden md:block">
               
               {/* Scene 1 */}
               <div className="relative flex items-center justify-between gap-12 group">
                   {/* Time Marker */}
                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#fdfbf7] border-4 border-orange-200 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
                        <span className="text-xs font-bold text-orange-800 text-center leading-tight">5:30<br/>PM</span>
                   </div>
                   
                   {/* Visual Left */}
                   <div className="w-1/2 pr-12 text-right">
                       <SketchFrame type="trigger" id="scene_trigger" />
                   </div>
                   
                   {/* Text Right */}
                   <div className="w-1/2 pl-12">
                       <h3 className="text-2xl font-bold text-stone-800 mb-3">The Trigger</h3>
                       <p className="text-lg text-stone-600 font-serif italic leading-relaxed mb-4">
                           "Is it morning? Where is everyone?"
                       </p>
                       <p className="text-stone-500 text-sm leading-relaxed">
                           The sun sets. Shadows lengthen. Arun becomes visibly restless, repeating questions and pacing (Sundowning).
                       </p>
                       <div className="flex gap-2 mt-4">
                            <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-bold uppercase rounded border border-orange-100">Agitation</span>
                            <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs font-bold uppercase rounded border border-stone-200">Disorientation</span>
                       </div>
                   </div>
               </div>

               {/* Scene 2 (Reversed) */}
               <div className="relative flex items-center justify-between gap-12 group flex-row-reverse">
                   {/* Time Marker */}
                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#fdfbf7] border-4 border-indigo-200 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
                        <span className="text-xs font-bold text-indigo-800 text-center leading-tight">5:32<br/>PM</span>
                   </div>
                   
                   {/* Visual Right (now first in flex-row-reverse) */}
                   <div className="w-1/2 pl-12">
                       <SketchFrame type="intervention" id="scene_intervention" />
                   </div>
                   
                   {/* Text Left */}
                   <div className="w-1/2 pr-12 text-right">
                       <h3 className="text-2xl font-bold text-stone-800 mb-3">The Intervention</h3>
                       <p className="text-lg text-stone-600 font-serif italic leading-relaxed mb-4">
                           Meera notices. She doesn't correct him. She opens Sanjeevani.
                       </p>
                       <p className="text-stone-500 text-sm leading-relaxed">
                           Instead of arguing ("No, it's evening"), she hands him the tablet showing the Nostalgia Room. She taps the <span className="font-bold text-stone-700">Old Radio</span>.
                       </p>
                        <div className="flex gap-2 mt-4 justify-end">
                            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase rounded border border-indigo-100">Action</span>
                            <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs font-bold uppercase rounded border border-stone-200">Distraction</span>
                       </div>
                   </div>
               </div>

               {/* Scene 3 */}
               <div className="relative flex items-center justify-between gap-12 group">
                   {/* Time Marker */}
                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#fdfbf7] border-4 border-amber-200 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
                        <span className="text-xs font-bold text-amber-800 text-center leading-tight">5:33<br/>PM</span>
                   </div>
                   
                   {/* Visual Left */}
                   <div className="w-1/2 pr-12 text-right">
                        <SketchFrame type="recall" id="scene_recall" />
                   </div>
                   
                   {/* Text Right */}
                   <div className="w-1/2 pl-12">
                       <h3 className="text-2xl font-bold text-stone-800 mb-3">The Recall</h3>
                       <p className="text-lg text-stone-600 font-serif italic leading-relaxed mb-4">
                           "I know this tune... AIR News?"
                       </p>
                       <p className="text-stone-500 text-sm leading-relaxed">
                           The familiar static and 1980s jingle act as an auditory anchor. His pacing stops. He sits down, leaning toward the sound.
                       </p>
                       <div className="flex gap-2 mt-4">
                            <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-bold uppercase rounded border border-amber-100">Memory</span>
                            <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs font-bold uppercase rounded border border-stone-200">Focus</span>
                       </div>
                   </div>
               </div>

                {/* Scene 4 (Reversed) */}
               <div className="relative flex items-center justify-between gap-12 group flex-row-reverse">
                   {/* Time Marker */}
                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#fdfbf7] border-4 border-emerald-200 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
                        <span className="text-xs font-bold text-emerald-800 text-center leading-tight">5:35<br/>PM</span>
                   </div>
                   
                   {/* Visual Right */}
                   <div className="w-1/2 pl-12">
                       <SketchFrame type="calm" id="scene_calm" />
                   </div>
                   
                   {/* Text Left */}
                   <div className="w-1/2 pr-12 text-right">
                       <h3 className="text-2xl font-bold text-stone-800 mb-3">The Calm</h3>
                       <p className="text-lg text-stone-600 font-serif italic leading-relaxed mb-4">
                           Breathing stabilizes. A bridge to the past is built.
                       </p>
                       <p className="text-stone-500 text-sm leading-relaxed">
                           Arun is grounded. Meera logs the session as "Positive" in the dashboard. The evening is saved from panic.
                       </p>
                       <div className="flex gap-2 mt-4 justify-end">
                            <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded border border-emerald-100">Success</span>
                            <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs font-bold uppercase rounded border border-stone-200">Relief</span>
                       </div>
                   </div>
               </div>

           </div>

           {/* Mobile View Fallback (Simple Stack) */}
           <div className="md:hidden space-y-12">
                {/* Scene 1 */}
                <div className="flex flex-col gap-4">
                    <div className="text-center"><span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-bold">5:30 PM</span></div>
                    <SketchFrame type="trigger" id="mobile_scene_trigger" />
                    <div>
                        <h3 className="text-xl font-bold text-stone-800">The Trigger</h3>
                        <p className="text-stone-600 italic">"Is it morning? Where is everyone?"</p>
                    </div>
                </div>
                 {/* Scene 2 */}
                <div className="flex flex-col gap-4">
                    <div className="text-center"><span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-bold">5:32 PM</span></div>
                    <SketchFrame type="intervention" id="mobile_scene_intervention" />
                    <div>
                        <h3 className="text-xl font-bold text-stone-800">The Intervention</h3>
                        <p className="text-stone-600 italic">Meera acts. One tap.</p>
                    </div>
                </div>
           </div>

       </div>
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
