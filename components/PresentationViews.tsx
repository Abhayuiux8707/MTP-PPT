import React, { useState, useRef } from 'react';
import { PERSONAS, MAPPING_DATA, THERAPY_HEATMAP_DATA, THERAPY_RADAR_DATA, THERAPY_CARDS_DATA, MATRIX_STRATEGIC_INSIGHTS, SIMPLE_HYPOTHESES, TRI_IMPACT_MODEL, EXPERIMENT_PLANS, SENSORY_TRIGGER_DATA, EIMC_PHASES, EIMC_MAPPING, SENSORY_HIERARCHY_DATA, COST_IMPACT_DATA } from '../constants';
import { ArrowRight, Music, CheckCircle, Maximize2, Download, MousePointer, Upload, PenTool, Image as ImageIcon, Edit3, Camera, Calendar, Sparkles, Mic, Lightbulb, FileText, Activity, Brain, Puzzle, Wind, BookOpen, Layers, MapIcon, Eye, Zap, Hand, ArrowDown, Target, Compass, FlaskConical, Microscope, Clock, Users, User, Heart, ChevronRight, Triangle, Fingerprint, Smile, Layout, Smartphone, AlertCircle, Frown, Check, X, Ban, Loader2, Wand2, Settings, Database, PlayCircle, Glasses, Monitor, MousePointerClick, ShieldCheck, ClipboardCheck, Stethoscope } from 'lucide-react';
import CognitiveRadarChart from './CognitiveRadarChart';
import { TherapyRadarChart, InsightTriangle, SensoryConcentricMap, ExperienceMatrixChart, Storyboard, JourneyMap, CrossModalMap, SketchFrame } from './Visualizations';
import { GoogleGenAI } from "@google/genai";

// --- 1. OVERVIEW ---
export const Overview: React.FC = () => {
  const [heroImage, setHeroImage] = useState(() => {
    return localStorage.getItem('hero_image') || "https://images.unsplash.com/photo-1606206591513-39908d8f338d?q=80&w=2070&auto=format&fit=crop";
  });
  const [hasUploaded, setHasUploaded] = useState(() => {
      return !!localStorage.getItem('hero_image');
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const result = e.target.result as string;
          setHeroImage(result);
          setHasUploaded(true);
          localStorage.setItem('hero_image', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generateHeroImage = async () => {
    if (!process.env.API_KEY) return;
    setIsGenerating(true);
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: [{ parts: [{ text: "Cinematic photorealistic shot of an elderly Indian man wearing a white VR headset (Virtual Reality goggles) in a warm, sunlit living room. An elderly Indian woman in a saree sits next to him, smiling and observing his reaction gently. High quality, warm lighting, 8k resolution, emotional connection. No tablets, focus on VR experience." }] }],
             config: {
              imageConfig: {
                aspectRatio: "16:9"
              }
            }
        });
        const part = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
        if (part?.inlineData) {
            const url = `data:image/png;base64,${part.inlineData.data}`;
            setHeroImage(url);
            localStorage.setItem('hero_image', url);
            setHasUploaded(true);
        }
    } catch(e) {
        console.error(e);
    } finally {
        setIsGenerating(false);
    }
  }

  return (
    <div className="h-[calc(100vh-160px)] min-h-[600px] w-full bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden flex flex-row">
      {/* Left Content - Reduced width to 40% */}
      <div className="w-[40%] flex flex-col justify-between pl-20 pr-12 py-16 relative z-10 bg-white border-r border-slate-100">
        
        {/* Header Tags */}
        <div className="flex flex-col gap-4 items-start">
           <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 rounded-lg shadow-lg shadow-slate-200">
             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
             <span className="text-sm font-bold text-white uppercase tracking-widest">Masters Thesis Project</span>
           </div>
           <span className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-1">
             M.Des Batch 2024–26
           </span>
        </div>

        {/* Main Title Area */}
        <div className="space-y-8">
          <h1 className="text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Sanjeevani
          </h1>
          <div className="w-24 h-2 bg-emerald-500 rounded-full"></div>
          <div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Topic</p>
            <h2 className="text-2xl font-medium text-slate-600 leading-normal max-w-xl">
              Phase-1 Therapeutic Experience Design Framework for <span className="font-bold text-slate-900 block mt-2 text-3xl">Alzheimer’s Care</span>
            </h2>
          </div>
        </div>
        
        {/* Footer Details */}
        <div className="space-y-8">
           <div className="border-l-4 border-slate-200 pl-6 py-2">
              <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">Department</p>
              <p className="font-bold text-slate-800 text-sm leading-relaxed">
                DEPARTMENT OF DESIGN<br/>
                INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI
              </p>
           </div>

           <div className="flex gap-12 border-t border-slate-100 pt-8">
               <div>
                  <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1">Guided By</p>
                  <p className="font-bold text-slate-900 text-lg">Dr. Manoj Majhi</p>
               </div>
               <div>
                  <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1">Student</p>
                  <p className="font-bold text-slate-900 text-lg">Abhay Singh</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">Roll No: 244205002</p> 
               </div>
           </div>
        </div>
      </div>

      {/* Right Image - Increased width to 60% */}
      <div className="w-[60%] relative h-full bg-slate-100 group overflow-hidden">
        <img 
          src={heroImage} 
          alt="Hero" 
          className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" 
        />
        
        {/* Image Upload & Generation Controls */}
        <input 
            type="file" 
            ref={fileInputRef}
            className="hidden" 
            accept="image/*"
            onChange={handleImageUpload}
        />
        
        {!hasUploaded && (
            <div className="absolute bottom-12 right-12 flex gap-4">
                <button 
                    onClick={generateHeroImage}
                    disabled={isGenerating}
                    className="bg-indigo-600/90 backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-white shadow-xl flex items-center gap-3 hover:scale-105 transition-all hover:bg-indigo-700 text-sm border border-indigo-400/50"
                >
                {isGenerating ? <Loader2 size={20} className="animate-spin" /> : <Wand2 size={20} />} 
                Generate with AI
                </button>
                <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-slate-900 shadow-xl flex items-center gap-3 hover:scale-105 transition-all hover:bg-white text-sm border border-white/50"
                >
                <Upload size={20} /> Upload Visual
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

// --- 2. COGNITIVE MAP ---
export const CognitiveMapping: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col p-10">
      <div className="mb-6 border-b border-slate-100 pb-4 flex-shrink-0">
        <h2 className="text-4xl font-bold text-slate-900 leading-tight">Cognitive Impairment Map</h2>
        <p className="text-xl text-slate-600 mt-2 font-medium">Why Level 1 focuses on Memory & Attention</p>
      </div>
      
      <div className="flex flex-col xl:flex-row gap-10 items-start">
        {/* Chart Column */}
        <div className="w-full xl:w-1/2 bg-slate-50 rounded-[2.5rem] border border-slate-200 p-6 relative shadow-inner min-h-[500px] h-[600px] xl:sticky xl:top-32">
             <div className="w-full h-full">
                <CognitiveRadarChart />
             </div>
        </div>

        {/* Insights Column */}
        <div className="w-full xl:w-1/2 space-y-6 flex flex-col">
           <div className="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100">
              <h3 className="text-base font-bold text-indigo-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                 <Sparkles size={20} /> Key Finding
              </h3>
              <p className="text-2xl text-indigo-900 font-bold leading-tight">
                Memory and attention <span className="underline decoration-4 decoration-indigo-300">decline sharply</span> in early stages.
              </p>
              <p className="mt-4 text-lg text-indigo-800 font-medium leading-relaxed">
                This is why Level 1 prioritizes strong long-term memory cues (Reminiscence) and short, focused micro-interactions to bypass short-term memory deficits.
              </p>
           </div>

           <div className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2 pb-2 border-b border-slate-50">
                <PenTool size={18} /> Design Implications
              </h3>
              <ul className="space-y-4">
                 {MAPPING_DATA.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200">
                       <div className={`p-3 rounded-full flex-shrink-0 ${item.bg} ${item.color}`}>
                          <item.icon size={20} />
                       </div>
                       <div>
                          <span className="block text-lg text-slate-900 font-bold mb-1">{item.domain}</span>
                          <span className="block text-base text-slate-600 font-medium mb-2">{item.struggle}</span>
                          <span className={`inline-block text-sm font-bold px-3 py-1 rounded-lg ${item.bg} ${item.color}`}>
                             → {item.implication}
                          </span>
                       </div>
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. THERAPEUTIC BENCHMARKING (REBUILT) ---
export const TherapeuticBenchmarking: React.FC = () => {
  const [activeRadar, setActiveRadar] = useState('reminiscence');
  const activeTherapy = THERAPY_HEATMAP_DATA.find(t => t.id === activeRadar);

  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col min-h-[600px]">
      {/* 1. Header & Overview */}
      <div className="p-10 border-b border-slate-100 bg-white rounded-t-[2.5rem] z-20">
         <div className="flex justify-between items-start">
            <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100"><Layers size={32} /></div>
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Therapeutic Method Benchmarking — <span className="text-slate-500 font-light">A Multi-Layer Evaluation</span></h2>
                    <p className="text-xl text-slate-600 font-medium mt-2">Mapping evidence-based therapies to experiential design opportunities for Alzheimer’s.</p>
                </div>
            </div>
         </div>
         <div className="mt-8 bg-indigo-50/50 rounded-2xl p-6 border-l-4 border-indigo-500 flex items-start gap-4">
            <div className="p-1 rounded-full bg-indigo-100 text-indigo-600"><Sparkles size={16} /></div>
            <p className="text-lg font-serif italic text-indigo-900 leading-relaxed font-medium">
                “Not all therapies are equal — some repair identity, some regulate emotion, some stimulate cognition. Sanjeevani blends the highest-impact elements.”
            </p>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col xl:flex-row border-b border-slate-200 bg-white">
          
          {/* Layer 1: Heatmap Table */}
          <div className="w-full xl:w-[60%] border-r border-slate-200 p-8 flex flex-col bg-white">
              <div className="mb-6 flex items-center justify-between">
                 <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Target size={16} /> Layer 1: Method × Evidence Heatmap
                 </h3>
                 <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Select row to view Radar</span>
              </div>

              <div className="flex flex-col gap-2">
                  {/* Header Row */}
                  <div className="grid grid-cols-12 px-4 py-4 text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50 rounded-t-xl">
                      <div className="col-span-4 pl-2">Therapy</div>
                      <div className="col-span-1 text-center">Cog</div>
                      <div className="col-span-1 text-center">Emo</div>
                      <div className="col-span-1 text-center">Id</div>
                      <div className="col-span-5 pl-4">Opportunity</div>
                  </div>

                  {/* Data Rows */}
                  {THERAPY_HEATMAP_DATA.map((row, idx) => (
                      <div 
                          key={idx} 
                          onClick={() => setActiveRadar(row.id)}
                          className={`grid grid-cols-12 px-4 py-5 items-center rounded-xl cursor-pointer transition-all duration-200 border border-transparent group ${
                              activeRadar === row.id 
                                  ? 'bg-indigo-50 border-indigo-200 shadow-sm relative z-10' 
                                  : 'hover:bg-slate-50 hover:border-slate-100'
                          }`}
                      >
                          <div className="col-span-4 flex items-center gap-3 pl-2">
                              <div className={`p-2 rounded-lg bg-white border border-slate-100 ${activeRadar === row.id ? 'text-indigo-600' : `text-${row.color}-600`}`}>
                                  <row.icon size={18} />
                              </div>
                              <span className={`font-bold text-base ${activeRadar === row.id ? 'text-indigo-900' : 'text-slate-800'}`}>
                                  {row.method}
                              </span>
                          </div>

                          <div className="col-span-1 text-center flex justify-center">
                              <div className={`w-3 h-3 rounded-sm ${row.cognitive === 'High' ? 'bg-emerald-500' : row.cognitive === 'Medium' ? 'bg-amber-400' : 'bg-slate-200'}`}></div>
                          </div>
                          <div className="col-span-1 text-center flex justify-center">
                              <div className={`w-3 h-3 rounded-sm ${row.emotional === 'High' ? 'bg-emerald-500' : row.emotional === 'Medium' ? 'bg-amber-400' : 'bg-slate-200'}`}></div>
                          </div>
                          <div className="col-span-1 text-center flex justify-center">
                              <div className={`w-3 h-3 rounded-sm ${row.identity === 'High' ? 'bg-emerald-500' : row.identity === 'Medium' ? 'bg-amber-400' : 'bg-slate-200'}`}></div>
                          </div>
                           <div className="col-span-5 pl-4">
                              <span className={`text-sm font-medium whitespace-normal block ${activeRadar === row.id ? 'text-indigo-800' : 'text-slate-600'}`}>{row.opp}</span>
                          </div>
                      </div>
                  ))}
                  
                  <div className="mt-6 flex gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest px-4">
                      <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-emerald-500 rounded-sm"></div> High Evidence</span>
                      <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-amber-400 rounded-sm"></div> Medium</span>
                      <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-slate-200 rounded-sm"></div> Low/Weak</span>
                  </div>
              </div>
          </div>

          {/* Layer 2: Radar Chart */}
          <div className="w-full xl:w-[40%] bg-slate-50 p-8 flex flex-col">
              <div className="mb-4">
                   <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Activity size={16} /> Layer 2: UX Opportunity Profile
                 </h3>
              </div>
              <div className="relative flex-grow bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[450px]">
                  <div className="absolute top-6 left-6 z-10">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Selected Method</span>
                      <h3 className={`text-2xl font-bold text-${activeTherapy?.color || 'indigo'}-600`}>{activeTherapy?.method}</h3>
                  </div>
                  <TherapyRadarChart 
                      data={THERAPY_RADAR_DATA[activeRadar as keyof typeof THERAPY_RADAR_DATA]} 
                      color={activeTherapy?.color}
                  />
              </div>
          </div>
      </div>
      
      {/* LAYER 3: Cards & Blueprint (Below Fold) */}
      <div className="p-12 space-y-16">
          
          {/* Design Translation Cards */}
          <section>
              <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-lg">2</div>
                  <h3 className="text-3xl font-bold text-slate-900">Layer 2: Design Translation Map</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {THERAPY_CARDS_DATA.map((card, idx) => (
                      <div key={idx} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                          <div className="flex items-center gap-4 mb-6">
                              <div className={`p-4 rounded-2xl bg-${card.color}-50 text-${card.color}-600 group-hover:scale-110 transition-transform`}>
                                  <card.icon size={28} />
                              </div>
                              <h4 className="font-bold text-slate-900 text-xl leading-tight">{card.title}</h4>
                          </div>
                          <div className="space-y-6 flex-grow">
                              <p className="text-base font-medium text-slate-600 italic leading-relaxed border-l-2 border-slate-200 pl-4">"{card.evidence}"</p>
                              <div className={`p-6 rounded-2xl bg-${card.color}-50/30 border border-${card.color}-100`}>
                                  <p className={`text-xs font-bold text-${card.color}-700 uppercase tracking-widest mb-3`}>Design Feature</p>
                                  <ul className="space-y-3">
                                      {card.translation.map((t, i) => (
                                          <li key={i} className={`text-base font-bold text-${card.color}-900 flex items-center gap-3`}>
                                              <span className={`w-1.5 h-1.5 rounded-full bg-${card.color}-500 shrink-0`}></span> {t}
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          </div>
                          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Level Impact</span>
                              <span className="text-sm font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">{card.level}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </section>

          {/* Final Blueprint Table */}
          <section className="bg-slate-50 border-2 border-slate-200 rounded-[3rem] p-12 shadow-inner">
              <div className="mb-10 text-center">
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Therapy → Level Design Blueprint</h3>
                  <p className="text-slate-500 text-lg font-medium">The master plan connecting clinical theory to game mechanics.</p>
              </div>
              
              <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="grid grid-cols-12 bg-slate-100 p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">
                      <div className="col-span-3">Game Level</div>
                      <div className="col-span-4">Therapy Source</div>
                      <div className="col-span-5">Why It Fits</div>
                  </div>
                  {[
                     { lvl: 'Level 1 — Nostalgia Room', source: 'Reminiscence + Music', why: 'Strong emotional + memory trigger', color: 'indigo' },
                     { lvl: 'Level 2 — Garden of Memories', source: 'Sensory Integration + Green Therapy', why: 'Regulates mood + anchors calm', color: 'emerald' },
                     { lvl: 'Level 3 — Identity Moment', source: 'Narrative Identity', why: 'Strengthens personal identity', color: 'blue' },
                     { lvl: 'Level 4 — Puzzle Play', source: 'CST (Cognitive Stimulation)', why: 'Soft cognitive stimulation', color: 'amber' },
                     { lvl: 'Level 5 — Caregiver Reflection', source: 'Observational Psychotherapy', why: 'Helps caregivers track emotional health', color: 'slate' },
                 ].map((item, i) => (
                     <div key={i} className="grid grid-cols-12 p-6 border-b border-slate-50 hover:bg-slate-50 transition-colors items-center last:border-0">
                         <div className="col-span-3 font-bold text-slate-900 text-lg">{item.lvl}</div>
                         <div className="col-span-4 flex items-center gap-2">
                             <div className={`w-2 h-2 rounded-full bg-${item.color}-500`}></div>
                             <span className="font-bold text-slate-600">{item.source}</span>
                         </div>
                         <div className="col-span-5 text-slate-500 font-medium italic">"{item.why}"</div>
                     </div>
                 ))}
              </div>
          </section>

      </div>
    </div>
  );
};

// --- 4. PERSONAS ---
export const Personas: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col p-10 min-h-[600px]">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-4xl font-bold text-slate-900 leading-tight">User Personas</h2>
        <p className="text-xl text-slate-600 mt-2 font-medium">The Primary User and The Facilitator</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">
         {/* Primary Persona */}
         <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full hover:shadow-lg transition-all duration-300">
             <div className="flex items-start justify-between mb-6">
                 <div className="flex items-center gap-4">
                     <div className="w-20 h-20 rounded-2xl bg-slate-200 overflow-hidden shadow-sm">
                         <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" alt="Arun" className="w-full h-full object-cover" />
                     </div>
                     <div>
                         <h3 className="text-2xl font-bold text-slate-900">{PERSONAS.primary.name}</h3>
                         <p className="text-slate-500 font-bold">{PERSONAS.primary.role}, {PERSONAS.primary.age} yrs</p>
                     </div>
                 </div>
                 <span className="bg-rose-100 text-rose-700 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-lg">
                     {PERSONAS.primary.condition}
                 </span>
             </div>
             
             <div className="mb-8 relative">
                 <span className="text-6xl text-slate-200 absolute -top-4 -left-2 font-serif">“</span>
                 <p className="text-xl text-slate-700 italic font-medium leading-relaxed pl-8 relative z-10">
                     {PERSONAS.primary.quote}
                 </p>
             </div>

             <div className="space-y-6 flex-grow">
                 <div className="bg-white p-5 rounded-2xl border border-slate-100">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Heart size={14} /> Core Needs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {PERSONAS.primary.needs.map((n, i) => (
                            <span key={i} className="bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-bold border border-slate-200">{n}</span>
                        ))}
                    </div>
                 </div>
                 <div className="bg-white p-5 rounded-2xl border border-slate-100">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <AlertCircle size={14} /> Pain Points
                    </h4>
                    <ul className="space-y-2">
                        {PERSONAS.primary.painPoints.map((p, i) => (
                            <li key={i} className="text-slate-600 text-sm font-medium flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> {p}
                            </li>
                        ))}
                    </ul>
                 </div>
             </div>
         </div>

         {/* Caregiver Persona */}
         <div className="bg-indigo-50/50 rounded-[2rem] p-8 border border-indigo-100 flex flex-col h-full hover:shadow-lg transition-all duration-300">
             <div className="flex items-start justify-between mb-6">
                 <div className="flex items-center gap-4">
                     <div className="w-20 h-20 rounded-2xl bg-indigo-200 overflow-hidden shadow-sm">
                         <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" alt="Meera" className="w-full h-full object-cover" />
                     </div>
                     <div>
                         <h3 className="text-2xl font-bold text-indigo-900">{PERSONAS.caregiver.name}</h3>
                         <p className="text-indigo-600/80 font-bold">{PERSONAS.caregiver.role}, {PERSONAS.caregiver.age} yrs</p>
                     </div>
                 </div>
                 <span className="bg-amber-100 text-amber-700 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-lg">
                     {PERSONAS.caregiver.condition}
                 </span>
             </div>
             
             <div className="mb-8 relative">
                 <span className="text-6xl text-indigo-200 absolute -top-4 -left-2 font-serif">“</span>
                 <p className="text-xl text-indigo-800 italic font-medium leading-relaxed pl-8 relative z-10">
                     {PERSONAS.caregiver.quote}
                 </p>
             </div>

             <div className="space-y-6 flex-grow">
                 <div className="bg-white/80 p-5 rounded-2xl border border-indigo-100 backdrop-blur-sm">
                    <h4 className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Target size={14} /> Core Needs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {PERSONAS.caregiver.needs.map((n, i) => (
                            <span key={i} className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-bold border border-indigo-100">{n}</span>
                        ))}
                    </div>
                 </div>
                 <div className="bg-white/80 p-5 rounded-2xl border border-indigo-100 backdrop-blur-sm">
                    <h4 className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                         <Smile size={14} /> The Gain
                    </h4>
                    <p className="text-indigo-800 text-sm font-medium leading-relaxed">
                        {PERSONAS.caregiver.gain}
                    </p>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

// --- 5. SENSORY TRIGGER VIEW ---
export const SensoryTriggerView: React.FC = () => {
    return (
        <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col p-10 min-h-[700px]">
             <div className="mb-8 border-b border-slate-100 pb-6 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 leading-tight">Sensory Trigger Map</h2>
                    <p className="text-xl text-slate-600 mt-2 font-medium">Hyper-localized Cultural Inputs</p>
                </div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                    Indian Context • 1960s-1980s
                </div>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 h-full">
                {/* Visual Map */}
                <div className="h-[500px] xl:h-auto bg-slate-50 rounded-[2.5rem] border border-slate-200 relative overflow-hidden">
                     <SensoryConcentricMap />
                </div>

                {/* Details List */}
                <div className="flex flex-col gap-6 justify-center">
                    <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100">
                        <p className="text-xl text-indigo-900 font-medium leading-relaxed font-serif italic mb-4">
                            "To trigger a memory in a dementia patient, you don't need a loud shout. You need a specific whisper."
                        </p>
                        <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                            <Brain size={18} />
                            <span>Principle: Specificity over Intensity</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {SENSORY_TRIGGER_DATA.map((trigger, idx) => (
                            <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors flex flex-col gap-4">
                                <div className={`w-12 h-12 rounded-xl bg-${trigger.color}-50 text-${trigger.color}-600 flex items-center justify-center`}>
                                    <trigger.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">{trigger.type}</h4>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{trigger.mechanism}</p>
                                </div>
                                <div className="mt-auto">
                                    <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                        Examples: <span className="text-slate-900">{trigger.examples.slice(0, 2).join(", ")}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 6. EXPERIENCE BENCHMARKING ---
export const ExperienceBenchmarkingView: React.FC = () => {
    return (
        <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col p-10 min-h-[700px]">
             <div className="mb-8 border-b border-slate-100 pb-6">
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">Experience Benchmarking</h2>
                <p className="text-xl text-slate-600 mt-2 font-medium">Finding the Blue Ocean: Calmness vs. Culture</p>
            </div>

            <div className="flex flex-col xl:flex-row gap-10 h-full">
                <div className="w-full xl:w-2/3 bg-slate-50 rounded-[2.5rem] border border-slate-200 p-6 min-h-[500px]">
                    <ExperienceMatrixChart />
                </div>
                
                <div className="w-full xl:w-1/3 flex flex-col gap-6">
                     {MATRIX_STRATEGIC_INSIGHTS.map((insight, idx) => (
                         <div key={idx} className={`p-6 rounded-2xl border border-${insight.color}-100 bg-${insight.color}-50/30 flex gap-4`}>
                             <div className={`mt-1 p-3 rounded-full bg-${insight.color}-100 text-${insight.color}-600 shrink-0 h-fit`}>
                                 <insight.icon size={20} />
                             </div>
                             <div>
                                 <h4 className={`text-lg font-bold text-${insight.color}-900 mb-2 leading-tight`}>{insight.title}</h4>
                                 <p className={`text-sm font-medium text-${insight.color}-800/80 leading-relaxed`}>{insight.desc}</p>
                             </div>
                         </div>
                     ))}
                     
                     <div className="mt-auto bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 shadow-xl">
                         <div className="flex items-center gap-3 mb-3">
                             <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Strategy</span>
                         </div>
                         <p className="text-lg font-bold leading-relaxed">
                             Build for the "Sweet Spot": <span className="text-emerald-400">High Cultural Resonance</span> + <span className="text-emerald-400">Low Cognitive Load</span>.
                         </p>
                     </div>
                </div>
            </div>
        </div>
    );
};

// --- 7. DESIGN HYPOTHESES ---
export const DesignHypotheses: React.FC = () => {
    return (
        <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col p-10 min-h-[700px]">
            <div className="mb-8 border-b border-slate-100 pb-6 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 leading-tight">Design Hypotheses</h2>
                    <p className="text-xl text-slate-600 mt-2 font-medium">Core assumptions to be validated in Phase 1</p>
                </div>
                <div className="flex gap-2">
                    <span className="bg-indigo-50 text-indigo-700 text-xs font-black uppercase tracking-widest px-3 py-2 rounded-lg border border-indigo-100 flex items-center gap-2">
                        <FlaskConical size={14} /> 3 Hypotheses
                    </span>
                    <span className="bg-slate-50 text-slate-700 text-xs font-black uppercase tracking-widest px-3 py-2 rounded-lg border border-slate-200 flex items-center gap-2">
                        <Microscope size={14} /> Validation Ready
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {SIMPLE_HYPOTHESES.map((h, idx) => (
                    <div key={idx} className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <span className={`text-4xl font-black text-${h.color}-100`}>{h.id}</span>
                            <div className={`p-3 rounded-xl bg-${h.color}-50 text-${h.color}-600`}>
                                <h.icon size={24} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight min-h-[3.5rem]">{h.title}</h3>
                        
                        <div className="space-y-4 flex-grow">
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Design Translation</span>
                                <p className="text-sm font-medium text-slate-700 leading-snug">{h.translation}</p>
                            </div>
                            <div className={`bg-${h.color}-50/50 p-4 rounded-xl border border-${h.color}-100`}>
                                <span className={`text-[10px] font-black text-${h.color}-400 uppercase tracking-widest block mb-1`}>Metric</span>
                                <p className={`text-sm font-bold text-${h.color}-700 leading-snug`}>{h.measurable}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide mb-6 flex items-center gap-3">
                    <ClipboardCheck size={20} className="text-slate-400" /> Validation Plan
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {EXPERIMENT_PLANS.map((plan, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-400 shrink-0 text-sm">{idx + 1}</div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">{plan.title}</h4>
                                <p className="text-sm text-slate-500 mb-2">{plan.method}</p>
                                <p className="text-xs font-bold text-indigo-600 bg-indigo-50 inline-block px-2 py-1 rounded">Measure: {plan.measure}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- 8. EIMC LOOP VIEW ---
export const EIMCLoopView: React.FC = () => {
    return (
        <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col p-10 min-h-[700px]">
            <div className="mb-10 border-b border-slate-100 pb-6 flex items-end justify-between">
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 leading-tight">The EIMC Loop</h2>
                    <p className="text-xl text-slate-600 mt-2 font-medium">Emotion → Identity → Memory → Calm</p>
                </div>
                <div className="bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-slate-200">
                    Core Theoretical Model
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center h-full flex-grow">
                 {/* The Loop Visualization */}
                 <div className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center">
                      {/* Central Core */}
                      <div className="absolute z-20 w-32 h-32 bg-white rounded-full shadow-2xl border-4 border-slate-50 flex flex-col items-center justify-center text-center p-2">
                           <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Outcome</span>
                           <span className="text-lg font-bold text-emerald-600 leading-none mt-1">Lucid Calm</span>
                      </div>

                      {/* Orbital Nodes */}
                      {EIMC_PHASES.map((phase, idx) => {
                          const angle = (idx * 360) / EIMC_PHASES.length - 90; // Start top
                          const radius = 160;
                          const x = radius * Math.cos((angle * Math.PI) / 180);
                          const y = radius * Math.sin((angle * Math.PI) / 180);

                          return (
                              <React.Fragment key={idx}>
                                  {/* Connector Line */}
                                  <div 
                                    className="absolute h-0.5 bg-slate-200 origin-left z-0"
                                    style={{
                                        width: radius,
                                        transform: `rotate(${angle}deg)`,
                                        left: '50%',
                                        top: '50%'
                                    }}
                                  ></div>
                                  
                                  {/* Node */}
                                  <div 
                                    className={`absolute w-40 p-4 bg-white rounded-2xl border-2 border-${phase.color}-100 shadow-lg z-10 flex flex-col items-center text-center transition-transform hover:scale-110`}
                                    style={{
                                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                                    }}
                                  >
                                      <div className={`w-10 h-10 rounded-full bg-${phase.color}-50 text-${phase.color}-600 flex items-center justify-center mb-2`}>
                                          <phase.icon size={20} />
                                      </div>
                                      <h4 className="text-sm font-bold text-slate-900 leading-tight">{phase.title}</h4>
                                      <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{phase.subtitle}</p>
                                  </div>
                              </React.Fragment>
                          );
                      })}
                      
                      {/* Circular Path */}
                      <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-slate-100 border-dashed z-0"></div>
                 </div>

                 {/* Logic Mapping */}
                 <div className="w-full lg:w-1/2 flex flex-col gap-4">
                     {EIMC_MAPPING.map((step, idx) => (
                         <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 transition-colors">
                             <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm shrink-0">
                                 {idx + 1}
                             </div>
                             <div>
                                 <h4 className="text-sm font-bold text-slate-900">{step.phase}</h4>
                                 <div className="flex flex-col sm:flex-row sm:gap-4 text-xs mt-1">
                                     <span className="font-bold text-slate-500">{step.level}</span>
                                     <span className="hidden sm:inline text-slate-300">|</span>
                                     <span className="text-indigo-600 font-medium">{step.mechanic}</span>
                                 </div>
                             </div>
                         </div>
                     ))}
                     
                     <div className="mt-6 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-indigo-900 text-sm font-medium leading-relaxed">
                         <span className="font-bold block mb-2 text-indigo-700 uppercase tracking-wide text-xs">Theory of Change</span>
                         Most interventions try to fix Memory directly (Cognitive). Sanjeevani starts with <span className="font-bold underline">Emotion</span> to unlock Identity, which then naturally allows Memory to surface, resulting in Calm.
                     </div>
                 </div>
            </div>
        </div>
    );
};

// --- NEW SENSORY HIERARCHY VIEW ---
export const SensoryHierarchyView: React.FC = () => {
    
    // Status Helper
    const getStatus = (sense: string) => {
        if (['Sound', 'Visuals'].some(s => sense.includes(s))) return { label: 'INCLUDED IN PHASE 1', color: 'emerald', icon: CheckCircle };
        if (sense.includes('Touch')) return { label: 'OPTIONAL / SECONDARY', color: 'amber', icon: AlertCircle };
        return { label: 'EXCLUDED / FUTURE', color: 'rose', icon: Ban };
    };

    return (
        <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col p-10 gap-10">
            {/* 1. Header & One-Slide Summary */}
            <div className="border-b border-slate-100 pb-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 leading-tight">Sensory Hierarchy & Cross-Modal Framework</h2>
                        <p className="text-xl text-slate-600 mt-2 font-medium">Selecting the most efficient therapeutic inputs for Phase-1.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-100">
                            <CheckCircle size={16} className="text-emerald-600"/>
                            <span className="text-xs font-extrabold text-emerald-700 uppercase">Included</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-lg border border-rose-100">
                            <Ban size={16} className="text-rose-600"/>
                            <span className="text-xs font-extrabold text-rose-700 uppercase">Excluded</span>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 rounded-2xl p-6 text-white border-l-4 border-emerald-400">
                    <p className="text-lg font-medium leading-relaxed font-serif italic">
                        “Different senses trigger memory, emotion, and identity at different strengths. To design Sanjeevani efficiently, we prioritize inputs that are powerful, portable, and cross-modally active.”
                    </p>
                </div>
            </div>

            {/* 2. Impact Analysis Row */}
            <div className="flex flex-col xl:flex-row gap-10 min-h-[600px]">
                {/* Left: The Strategic Chart */}
                <div className="w-full xl:w-[60%] flex flex-col gap-6">
                     <div className="flex items-center gap-3 mb-2">
                         <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Target size={20} /></div>
                         <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Cross-Modal Memory Activation Map</h3>
                     </div>
                     
                     <div className="bg-slate-50 rounded-[2.5rem] border border-slate-200 h-full min-h-[500px] relative overflow-hidden shadow-inner p-6">
                         <CrossModalMap />
                     </div>
                     <div className="bg-white p-5 rounded-2xl border border-slate-200 text-sm text-slate-600 leading-relaxed shadow-sm flex items-start gap-4">
                         <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Brain size={18} /></div>
                         <p><span className="font-bold text-slate-900">Key Insight:</span> While Smell is the strongest trigger, it has low feasibility. Sound offers the "Sweet Spot" of High Impact and High Feasibility, making it the core of Phase 1.</p>
                     </div>
                </div>

                {/* Right: The Data Table */}
                <div className="w-full xl:w-[40%] flex flex-col gap-6">
                     <div className="flex items-center gap-3 mb-2">
                         <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Layers size={20} /></div>
                         <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Cost vs Impact Analysis</h3>
                     </div>
                     <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm h-full">
                         <div className="grid grid-cols-12 bg-slate-50 p-4 text-xs font-extrabold text-slate-500 uppercase tracking-widest border-b border-slate-200">
                             <div className="col-span-4">Sense</div>
                             <div className="col-span-4">Memory Impact</div>
                             <div className="col-span-4 text-right">Decision</div>
                         </div>
                         <div className="overflow-y-auto max-h-[500px]">
                             {COST_IMPACT_DATA.map((row, idx) => (
                                 <div key={idx} className={`grid grid-cols-12 p-5 items-center border-b border-slate-100 last:border-0 transition-colors ${row.status === 'success' ? 'bg-emerald-50/40 hover:bg-emerald-50/60' : 'hover:bg-slate-50 opacity-80'}`}>
                                     <div className="col-span-4">
                                         <span className="font-bold text-slate-900 text-lg block">{row.sense}</span>
                                         <span className="text-[10px] text-slate-400 font-bold uppercase">{row.feasibility} Feasibility</span>
                                     </div>
                                     <div className="col-span-4 text-sm font-bold text-slate-600">
                                         {row.memory}
                                     </div>
                                     <div className="col-span-4 text-right">
                                         {row.status === 'success' ? (
                                             <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg uppercase tracking-wide shadow-sm border border-emerald-200 inline-block">Included</span>
                                         ) : row.status === 'fail' ? (
                                             <span className="text-xs font-bold text-rose-500 bg-rose-50 px-3 py-1.5 rounded-lg uppercase tracking-wide border border-rose-100 inline-block">Excluded</span>
                                         ) : (
                                             <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg uppercase tracking-wide border border-amber-100 inline-block">Optional</span>
                                         )}
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>
                </div>
            </div>

            {/* 3. Cross Modal Logic Footer */}
            <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 border-r border-slate-100 pr-8">
                        <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <Wind size={20} className="text-slate-400" />
                            The "Phantom Smell" Effect
                        </h4>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            We don't need expensive scent diffusers. Research shows that high-fidelity <span className="font-bold text-emerald-600">Audio</span> can trigger visual imagination, which in turn activates the olfactory cortex.
                        </p>
                    </div>
                    <div className="w-full md:w-2/3 flex items-center justify-around">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 text-emerald-600 shadow-sm border border-emerald-200"><Music size={32} /></div>
                            <span className="text-xs font-bold text-slate-900 uppercase">Sound Input</span>
                        </div>
                        <ArrowRight size={24} className="text-slate-300" />
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 text-indigo-600 shadow-sm border border-indigo-200"><Brain size={32} /></div>
                            <span className="text-xs font-bold text-slate-900 uppercase">Imagination</span>
                        </div>
                        <ArrowRight size={24} className="text-slate-300" />
                        <div className="text-center opacity-50 grayscale">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-500 border border-slate-200"><Wind size={32} /></div>
                            <span className="text-xs font-bold text-slate-900 uppercase">Smell Recall</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Final Recommendation Footer */}
            <div className="bg-indigo-600 rounded-[2rem] p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-indigo-200">
                <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl flex-shrink-0">
                    <CheckCircle size={32} className="text-white" />
                </div>
                <div>
                    <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-2">Phase-1 Recommendation</p>
                    <p className="text-2xl font-bold leading-tight">
                        Use Sound + Visuals as the primary input. It delivers <span className="text-emerald-300 underline decoration-2 underline-offset-4">90% of the impact</span> at <span className="text-emerald-300 underline decoration-2 underline-offset-4">10% of the cost</span> with zero hardware dependency.
                    </p>
                </div>
            </div>

        </div>
    )
}

// --- 8. LEVEL FLOW (REBUILT FOR JURY) ---
export const LevelFlow: React.FC = () => {
    // Phase 0 Data: Protocol & Consent
    const PROTOCOL_STEPS = [
        {
            title: "Informed Consent",
            subtitle: "Caregiver Authorization",
            status: "Mandatory",
            icon: ShieldCheck,
            color: "slate",
            visual: "Close up photorealistic shot of a medical tablet screen displaying a 'Caregiver Consent Form' with a large blue 'Agree' button. Clean, clinical white UI.",
            data: ["✓ Ethics Committee Approved", "✓ Data Privacy Clause", "✓ Emergency Stop Protocol"]
        },
        {
            title: "Mood Baseline",
            subtitle: "QoL-AD Assessment",
            status: "Pre-Check",
            icon: ClipboardCheck,
            color: "indigo",
            visual: "Close up photorealistic shot of a digital questionnaire on a tablet. The screen shows a 'Mood Check' slider with smiley and sad face icons. Realistic UI style.",
            data: ["• Anxiety Level (1-10)", "• Confusion Marker", "• Physical Comfort"]
        },
        {
            title: "VR Calibration",
            subtitle: "Hardware Setup",
            status: "System Ready",
            icon: Settings,
            color: "emerald",
            visual: "Photorealistic close-up of a white VR headset lens with a green 'Calibration OK' status light glowing softly. Technical medical device aesthetic.",
            data: ["• IPD Adjustment", "• Seated Height Lock", "• Audio Level: 60dB"]
        }
    ];

    // Phase 1 Data: The Loop
    const FLOW_STEPS = [
        {
            id: 'flow-trigger',
            phase: "01. The Trigger",
            role: "System Action",
            desc: "Radio glows to attract attention.",
            visual: "Photorealistic POV shot of a vintage wooden radio sitting on a table in a sunlit room. The radio has a soft, magical golden glow around it. Cinematic lighting.",
            tech: "Eye Tracking > 2000ms",
            clinical: "Initiation",
            icon: Eye,
            color: "amber",
            bg: "bg-amber-50"
        },
        {
            id: 'flow-action',
            phase: "02. User Action",
            role: "Patient Input",
            desc: "Patient rotates the knob.",
            visual: "Photorealistic close-up of an elderly Indian hand turning a vintage radio knob. High detail on skin texture and wood grain. Cinematic depth of field.",
            tech: "Haptic Feedback (Controller)",
            clinical: "Fine Motor",
            icon: Hand,
            color: "indigo",
            bg: "bg-indigo-50"
        },
        {
            id: 'flow-response',
            phase: "03. System Response",
            role: "Therapy Output",
            desc: "Music plays & memory projects.",
            visual: "Photorealistic POV shot of a living room wall displaying a sepia-toned family photo projection. The room is filled with warm light. Nostalgic atmosphere.",
            tech: "Audio: AIR_1975.mp3",
            clinical: "Reminiscence",
            icon: Music,
            color: "rose",
            bg: "bg-rose-50"
        }
    ];

    return (
        <div className="min-h-screen w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            
            {/* Header Section */}
            <div className="p-10 border-b border-slate-100 bg-white sticky top-0 z-20 shadow-sm flex justify-between items-center">
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 leading-tight">Level 1: Clinical Protocol & Flow</h2>
                    <p className="text-xl text-slate-600 mt-2 font-medium">Standard Operating Procedure (SOP) for Nostalgia Therapy</p>
                </div>
                <div className="flex gap-3">
                     <span className="px-4 py-2 bg-slate-100 text-slate-600 font-bold rounded-xl text-sm border border-slate-200">Phase 1 Trial</span>
                     <span className="px-4 py-2 bg-emerald-50 text-emerald-700 font-bold rounded-xl text-sm border border-emerald-100 flex items-center gap-2"><CheckCircle size={16}/> Ethics Clear</span>
                </div>
            </div>

            <div className="flex-grow bg-slate-50 p-10 overflow-y-auto space-y-12">
                
                {/* PHASE 0: PRE-SESSION PROTOCOL */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">0</div>
                        <h3 className="text-2xl font-bold text-slate-900">Pre-Session Protocol (Consent & Check)</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {PROTOCOL_STEPS.map((step, idx) => (
                            <div key={idx} className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-xl bg-${step.color}-50 text-${step.color}-600`}>
                                        <step.icon size={24} />
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-${step.color}-50 text-${step.color}-700 border border-${step.color}-100`}>
                                        {step.status}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h4>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-4">{step.subtitle}</p>
                                
                                {/* Realistic Visual for Consent/Questionnaire */}
                                <div className="w-full h-40 rounded-xl overflow-hidden border border-slate-100 mb-4 bg-slate-50">
                                     <SketchFrame type="Protocol UI" id={`proto-${idx}`} promptContext={step.visual} />
                                </div>

                                <ul className="space-y-2 mt-auto bg-slate-50 p-4 rounded-xl">
                                    {step.data.map((item, i) => (
                                        <li key={i} className="text-xs font-bold text-slate-600 flex items-center gap-2">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="w-full border-t border-slate-200 border-dashed"></div>

                {/* PHASE 1: INTERACTION LOGIC */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                         <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">1</div>
                         <h3 className="text-2xl font-bold text-slate-900">The Nostalgia Loop (Interaction Logic)</h3>
                    </div>

                    <div className="space-y-6 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-slate-200 border-l-2 border-dashed border-slate-300 z-0"></div>

                        {FLOW_STEPS.map((step, idx) => (
                            <div key={idx} className="relative z-10 grid grid-cols-12 gap-8 items-center group">
                                {/* Timeline Node */}
                                <div className="col-span-1 flex justify-center">
                                    <div className={`w-14 h-14 rounded-full bg-white border-4 border-${step.color}-200 text-${step.color}-600 flex items-center justify-center shadow-sm z-10 group-hover:scale-110 transition-transform`}>
                                        <step.icon size={24} />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="col-span-11 bg-white rounded-[2rem] border border-slate-200 p-2 shadow-sm flex overflow-hidden hover:shadow-lg transition-shadow">
                                    
                                    {/* Visual (Left) */}
                                    <div className="w-1/4 h-full min-h-[180px] rounded-l-[1.5rem] overflow-hidden relative">
                                        <SketchFrame type="POV Scene" id={step.id} promptContext={step.visual} />
                                    </div>

                                    {/* Details (Right) */}
                                    <div className="w-3/4 p-6 flex flex-col justify-between">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900">{step.phase}</h4>
                                                <p className="text-slate-500 font-medium">{step.desc}</p>
                                            </div>
                                            <span className={`px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest bg-${step.color}-50 text-${step.color}-700 border border-${step.color}-100`}>
                                                {step.role}
                                            </span>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Monitor size={14} className="text-slate-400" />
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Logic</span>
                                                </div>
                                                <p className="text-xs font-mono font-bold text-indigo-600">{step.tech}</p>
                                            </div>
                                            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Activity size={14} className="text-emerald-400" />
                                                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Clinical Goal</span>
                                                </div>
                                                <p className="text-xs font-bold text-emerald-800">{step.clinical}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

// --- 9. WIREFRAMES ---
export const Wireframes: React.FC = () => {
    return (
        <div className="h-[calc(100vh-160px)] min-h-[600px] w-full bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden p-10 flex flex-col items-center justify-center text-center relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
             
             <div className="relative z-10 max-w-2xl">
                 <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                     <ImageIcon className="text-white w-10 h-10" />
                 </div>
                 <h2 className="text-5xl font-bold text-white mb-6">High-Fidelity Wireframes</h2>
                 <p className="text-2xl text-slate-400 leading-relaxed mb-10">
                     Interactive prototypes are currently being rendered in Figma. <br/>
                     Key screens include: <span className="text-emerald-400 font-bold">The Radio Interface</span>, <span className="text-emerald-400 font-bold">The Family Wall</span>, and <span className="text-emerald-400 font-bold">The Mood Dashboard</span>.
                 </p>
                 <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
                     <ArrowRight size={20} /> View in Figma
                 </button>
             </div>
        </div>
    );
};