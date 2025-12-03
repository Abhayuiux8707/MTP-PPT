
import React, { useState, useRef } from 'react';
import { PERSONAS, MAPPING_DATA, THERAPY_HEATMAP_DATA, THERAPY_RADAR_DATA, THERAPY_CARDS_DATA, MATRIX_STRATEGIC_INSIGHTS, SIMPLE_HYPOTHESES, TRI_IMPACT_MODEL, EXPERIMENT_PLANS, SENSORY_TRIGGER_DATA, EIMC_PHASES, EIMC_MAPPING } from '../constants';
import { ArrowRight, Music, CheckCircle, Maximize2, Download, MousePointer, Upload, PenTool, Image as ImageIcon, Edit3, Camera, Calendar, Sparkles, Mic, Lightbulb, FileText, Activity, Brain, Puzzle, Wind, BookOpen, Layers, MapIcon, Eye, Zap, Hand, ArrowDown, Target, Compass, FlaskConical, Microscope, Clock, Users, User, Heart, ChevronRight, Triangle, Fingerprint, Smile, Layout, Smartphone, AlertCircle, Frown } from 'lucide-react';
import CognitiveRadarChart from './CognitiveRadarChart';
import { TherapyRadarChart, InsightTriangle, SensoryConcentricMap, ExperienceMatrixChart, Storyboard, JourneyMap } from './Visualizations';

// --- 1. OVERVIEW ---
export const Overview: React.FC = () => {
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1606206591513-39908d8f338d?q=80&w=2070&auto=format&fit=crop");
  const [hasUploaded, setHasUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setHeroImage(e.target.result as string);
          setHasUploaded(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

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
        
        {/* Image Upload Controls */}
        <input 
            type="file" 
            ref={fileInputRef}
            className="hidden" 
            accept="image/*"
            onChange={handleImageUpload}
        />
        
        {!hasUploaded && (
            <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-12 right-12 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-slate-900 shadow-xl flex items-center gap-3 hover:scale-105 transition-all hover:bg-white text-sm border border-white/50"
            >
               <Camera size={20} /> Change Visual
            </button>
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

// --- 4. SENSORY TRIGGER MAP ---
export const SensoryTriggerView: React.FC = () => {
  return (
    <div className="h-[calc(100vh-160px)] min-h-[900px] w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col p-10">
       <div className="mb-6 border-b border-slate-100 pb-4 flex-shrink-0 flex justify-between items-end">
        <div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">Sensory Trigger Map</h2>
            <p className="text-xl text-slate-600 mt-2 font-medium">Mapping non-pharmaceutical interventions to brain regions.</p>
        </div>
        <div className="hidden xl:block">
             <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">Multi-Sensory Activation Model</span>
        </div>
      </div>
      
      <div className="flex-grow flex gap-10 min-h-0 relative">
         {/* Left: Visualization (Shifted Left) */}
         <div className="w-full xl:w-[70%] relative bg-slate-50/50 rounded-[2rem] border border-slate-100 overflow-visible flex items-center justify-center">
             {/* Scale down slightly to ensure cards fit in the column comfortably */}
             <div className="scale-95 origin-center w-full h-full">
                <SensoryConcentricMap />
             </div>
         </div>

         {/* Right: Data Panel */}
         <div className="hidden xl:flex w-[30%] flex-col gap-4 overflow-y-auto no-scrollbar pr-2 h-full">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest sticky top-0 bg-white z-10 py-2">
               Trigger Mechanisms
            </h3>
            {SENSORY_TRIGGER_DATA.map((item, idx) => (
                <div key={idx} className={`p-5 rounded-2xl border transition-all hover:scale-[1.02] cursor-default bg-white border-slate-200 hover:border-${item.color}-300 hover:shadow-md group`}>
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-${item.color}-50 text-${item.color}-600 group-hover:bg-${item.color}-100`}>
                            <item.icon size={20} />
                        </div>
                        <h4 className="font-bold text-slate-800">{item.type}</h4>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Pathway</p>
                    <p className="text-sm font-medium text-slate-600 mb-3">{item.mechanism}</p>
                    
                    <div className="flex flex-wrap gap-2">
                        {item.examples.slice(0, 2).map((ex, i) => (
                            <span key={i} className="text-xs font-bold px-2 py-1 bg-slate-50 rounded text-slate-500 border border-slate-100">{ex}</span>
                        ))}
                    </div>
                </div>
            ))}

            <div className="mt-4 p-5 rounded-2xl bg-slate-900 text-white">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Brain size={20} className="text-emerald-400" />
                    Why It Works
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                    Multi-sensory cues bypass degraded short-term memory paths by accessing deeper, older long-term memory centers in the limbic system.
                </p>
            </div>
         </div>
      </div>
    </div>
  );
};

// --- 5. EXPERIENCE BENCHMARKING ---
export const ExperienceBenchmarkingView: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col p-10 min-h-[600px] h-auto">
       <div className="mb-8 border-b border-slate-100 pb-6 flex-shrink-0">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">Experience Benchmarking</h2>
          <p className="text-xl text-slate-600 mt-2 font-medium">Finding the "Blue Ocean" — Why Sanjeevani succeeds where others fail.</p>
       </div>
       
       <div className="flex flex-col xl:flex-row gap-12 items-start h-full">
          {/* Chart Area - Static & Clean */}
          <div className="w-full xl:w-[70%] bg-slate-50 rounded-[2.5rem] border border-slate-200 p-8 relative shadow-inner h-[600px] flex items-center justify-center">
              <ExperienceMatrixChart />
          </div>
          
          {/* Strategic Insights - Clean List View */}
          <div className="w-full xl:w-[30%] flex flex-col gap-6">
              <div className="pb-4 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Target size={16} /> Strategic Analysis
                  </h3>
              </div>
              
              <div className="flex flex-col gap-4">
                  {MATRIX_STRATEGIC_INSIGHTS.map((insight, idx) => (
                      <div key={idx} className="flex gap-4 group">
                          <div className={`mt-1 p-3 h-fit rounded-xl bg-${insight.color}-50 text-${insight.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                              <insight.icon size={20} />
                          </div>
                          <div>
                              <h4 className="font-bold text-lg text-slate-900 leading-snug mb-1">{insight.title}</h4>
                              <p className="text-sm text-slate-500 font-medium leading-relaxed">{insight.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>

              <div className="mt-6 p-6 bg-slate-900 rounded-3xl text-white">
                  <h4 className="font-bold text-lg mb-2 text-emerald-400">The Winning Strategy</h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      By combining high cultural relevance with a calm, low-stimulation UI, Sanjeevani enters a market space with zero direct competitors.
                  </p>
              </div>
          </div>
       </div>
    </div>
  );
};

// --- 6. PERSONAS ---
export const Personas: React.FC = () => {
  return (
    <div className="h-full w-full bg-slate-50 rounded-[2.5rem] border border-slate-200 p-8 overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="mb-10 flex justify-between items-end border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight">User Personas</h2>
            <p className="text-2xl text-slate-500 mt-3 font-medium">The Patient-Caregiver Dyad</p>
          </div>
          <div className="flex gap-3">
             <span className="px-6 py-3 bg-white border border-indigo-200 text-indigo-700 rounded-2xl text-sm font-extrabold uppercase tracking-widest shadow-sm">Patient</span>
             <span className="px-6 py-3 bg-white border border-emerald-200 text-emerald-700 rounded-2xl text-sm font-extrabold uppercase tracking-widest shadow-sm">Caregiver</span>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10">
         {/* Arun's Card */}
         <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl flex flex-col gap-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-indigo-100/50 transition-colors"></div>

            {/* Profile Header */}
            <div className="flex items-center gap-8 relative z-10">
                <div className="relative">
                    <img src="https://images.unsplash.com/photo-1559548331-f9cb98001426?q=80&w=2070&auto=format&fit=crop" className="w-32 h-32 rounded-[2rem] object-cover shadow-lg border-4 border-white" alt="Mr. Arun Kumar" />
                    <div className="absolute -bottom-3 -right-3 bg-indigo-600 text-white p-2 rounded-xl shadow-md">
                        <User size={24} />
                    </div>
                </div>
                <div>
                    <h3 className="text-4xl font-extrabold text-slate-900">Mr. Arun Kumar</h3>
                    <p className="text-xl text-slate-500 font-bold mt-1">67 • Retired Teacher</p>
                    <span className="inline-block mt-3 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-xl text-sm font-extrabold uppercase tracking-wide">
                        Early Stage Alzheimer's
                    </span>
                </div>
            </div>

            {/* Quote - Larger and clearer */}
            <div className="relative">
                 <span className="absolute -top-4 -left-2 text-6xl text-indigo-200 font-serif">“</span>
                 <p className="text-2xl font-serif italic text-slate-800 leading-relaxed pl-8 relative z-10">
                   Where is that old song? It made evenings better... I know I used to sing it.
                 </p>
            </div>

            {/* Capabilities - Chunkier Bars */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 space-y-5">
                <div className="flex items-center gap-3 mb-2">
                    <Activity className="text-indigo-500" size={20} />
                    <h4 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest">Capabilities</h4>
                </div>
                
                {[
                    { label: 'Tech Comfort', val: 20, color: 'bg-indigo-500' },
                    { label: 'Recent Memory', val: 15, color: 'bg-rose-500' },
                    { label: 'Long-term Recall', val: 85, color: 'bg-emerald-500' },
                ].map((stat, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                           <span>{stat.label}</span>
                       </div>
                       <div className="w-full bg-slate-200 rounded-full h-3">
                           <div className={`${stat.color} h-3 rounded-full transition-all duration-1000`} style={{ width: `${stat.val}%` }}></div>
                       </div>
                    </div>
                ))}
            </div>

            {/* Frustrations & Motivations - Using Tags/Cards instead of lists */}
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-rose-50 rounded-3xl p-6 border border-rose-100">
                     <h4 className="flex items-center gap-2 text-sm font-extrabold text-rose-600 uppercase tracking-widest mb-4">
                        <Frown size={18}/> Frustrations
                     </h4>
                     <div className="flex flex-col gap-3">
                        {['Forgetting Names', 'Complex Remotes', 'Feeling "Slow"'].map((t,i) => (
                            <span key={i} className="text-slate-800 font-bold text-base leading-tight bg-white/60 px-3 py-2 rounded-xl border border-rose-100/50">
                                {t}
                            </span>
                        ))}
                     </div>
                </div>
                <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100">
                     <h4 className="flex items-center gap-2 text-sm font-extrabold text-emerald-600 uppercase tracking-widest mb-4">
                        <Smile size={18}/> Motivations
                     </h4>
                     <div className="flex flex-col gap-3">
                        {['"Main Zindagi Ka Saath"', 'Evening Tea Routine', 'Social Dignity'].map((t,i) => (
                            <span key={i} className="text-slate-800 font-bold text-base leading-tight bg-white/60 px-3 py-2 rounded-xl border border-emerald-100/50">
                                {t}
                            </span>
                        ))}
                     </div>
                </div>
            </div>

            {/* Solution Footer */}
            <div className="mt-auto bg-indigo-600 rounded-3xl p-6 text-white shadow-lg shadow-indigo-200">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 backdrop-blur rounded-2xl">
                        <Zap size={24} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-1">Design Solution</p>
                        <p className="text-lg font-bold">Nostalgia Room & One-Tap Interaction</p>
                    </div>
                </div>
            </div>
         </div>

         {/* Meera's Card */}
         <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl flex flex-col gap-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
             {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-emerald-100/50 transition-colors"></div>

             {/* Profile Header */}
             <div className="flex items-center gap-8 relative z-10">
                <div className="relative">
                    <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop" className="w-32 h-32 rounded-[2rem] object-cover shadow-lg border-4 border-white" alt="Meera" />
                    <div className="absolute -bottom-3 -right-3 bg-emerald-600 text-white p-2 rounded-xl shadow-md">
                        <Heart size={24} />
                    </div>
                </div>
                <div>
                    <h3 className="text-4xl font-extrabold text-slate-900">Meera</h3>
                    <p className="text-xl text-slate-500 font-bold mt-1">62 • Spouse</p>
                    <span className="inline-block mt-3 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-sm font-extrabold uppercase tracking-wide">
                        Primary Caregiver
                    </span>
                </div>
            </div>

            {/* Quote */}
            <div className="relative">
                 <span className="absolute -top-4 -left-2 text-6xl text-emerald-200 font-serif">“</span>
                 <p className="text-2xl font-serif italic text-slate-800 leading-relaxed pl-8 relative z-10">
                   I need something I can open and use within a minute to calm him down.
                 </p>
            </div>

            {/* Capabilities */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 space-y-5">
                <div className="flex items-center gap-3 mb-2">
                    <Activity className="text-emerald-500" size={20} />
                    <h4 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest">Capabilities</h4>
                </div>
                
                {[
                    { label: 'Tech Literacy', val: 60, color: 'bg-emerald-500' },
                    { label: 'Stress Level', val: 90, color: 'bg-rose-500' },
                    { label: 'Free Time', val: 15, color: 'bg-amber-500' },
                ].map((stat, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                           <span>{stat.label}</span>
                       </div>
                       <div className="w-full bg-slate-200 rounded-full h-3">
                           <div className={`${stat.color} h-3 rounded-full transition-all duration-1000`} style={{ width: `${stat.val}%` }}></div>
                       </div>
                    </div>
                ))}
            </div>

            {/* Pain Points & Goals */}
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100">
                     <h4 className="flex items-center gap-2 text-sm font-extrabold text-amber-600 uppercase tracking-widest mb-4">
                        <AlertCircle size={18}/> Pain Points
                     </h4>
                     <div className="flex flex-col gap-3">
                        {['Emotional Burnout', 'Unpredictable Moods', 'No Personal Time'].map((t,i) => (
                            <span key={i} className="text-slate-800 font-bold text-base leading-tight bg-white/60 px-3 py-2 rounded-xl border border-amber-100/50">
                                {t}
                            </span>
                        ))}
                     </div>
                </div>
                <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
                     <h4 className="flex items-center gap-2 text-sm font-extrabold text-blue-600 uppercase tracking-widest mb-4">
                        <Target size={18}/> Goals
                     </h4>
                     <div className="flex flex-col gap-3">
                        {['Quick Calming', 'Tracking Health', 'Finding Respite'].map((t,i) => (
                            <span key={i} className="text-slate-800 font-bold text-base leading-tight bg-white/60 px-3 py-2 rounded-xl border border-blue-100/50">
                                {t}
                            </span>
                        ))}
                     </div>
                </div>
            </div>

            {/* Solution Footer */}
            <div className="mt-auto bg-emerald-600 rounded-3xl p-6 text-white shadow-lg shadow-emerald-200">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 backdrop-blur rounded-2xl">
                        <Layout size={24} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-emerald-200 uppercase tracking-widest mb-1">Design Solution</p>
                        <p className="text-lg font-bold">Caregiver Dashboard & Quick Launch</p>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

// --- 7. DESIGN HYPOTHESES ---
export const DesignHypotheses: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6">
        <div className="flex items-center justify-between">
             <h2 className="text-3xl font-bold text-slate-900">Design Hypotheses & Validation</h2>
             <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl font-bold text-sm">Experimental Framework</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SIMPLE_HYPOTHESES.map((h, i) => (
                <div key={i} className={`bg-white rounded-3xl p-8 border-t-4 shadow-sm hover:shadow-lg transition-all ${h.color === 'indigo' ? 'border-indigo-500' : h.color === 'emerald' ? 'border-emerald-500' : 'border-amber-500'}`}>
                    <div className="flex justify-between items-start mb-6">
                        <div className={`p-4 rounded-2xl bg-${h.color}-50 text-${h.color}-600`}>
                            <h.icon size={28} />
                        </div>
                        <span className="text-6xl font-black text-slate-100 -mt-4">{h.id}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{h.title}</h3>
                    
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-4 rounded-xl">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Translation</p>
                            <p className="text-sm font-bold text-slate-700">{h.translation}</p>
                        </div>
                         <div className={`p-4 rounded-xl bg-${h.color}-50/50`}>
                            <p className={`text-xs font-bold text-${h.color}-600 uppercase tracking-widest mb-1`}>Metric</p>
                            <p className={`text-sm font-bold text-${h.color}-900`}>{h.measurable}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex gap-10 items-center relative overflow-hidden">
             <div className="relative z-10 max-w-2xl">
                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                     <FlaskConical className="text-emerald-400" /> 
                     Validation Plan: Phase 1
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {EXPERIMENT_PLANS.map((plan, i) => (
                         <div key={i} className="bg-slate-800/50 border border-slate-700 p-5 rounded-2xl">
                             <p className="text-emerald-400 font-bold text-sm mb-2">{plan.title}</p>
                             <p className="text-slate-300 text-xs leading-relaxed">{plan.method}</p>
                         </div>
                     ))}
                 </div>
             </div>
             <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-emerald-900/20 to-transparent"></div>
        </div>
    </div>
  );
};

// --- NEW EIMC LOOP VIEW ---
export const EIMCLoopView: React.FC = () => {
    const [activePhase, setActivePhase] = useState<number | null>(null);

    return (
        <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col p-10 gap-12">
            
            {/* Header */}
            <div className="border-b border-slate-100 pb-6">
                 <h2 className="text-4xl font-bold text-slate-900 leading-tight">The EIMC Loop</h2>
                 <p className="text-xl text-slate-600 mt-2 font-medium">Sensory → Emotion → Identity → Memory → Calm</p>
            </div>

            {/* Top Section: Diagram and Science */}
            <div className="flex flex-col xl:flex-row gap-12">
                
                {/* Visual Diagram */}
                <div className="w-full xl:w-1/2 flex items-center justify-center bg-slate-50/50 rounded-[3rem] p-8 border border-slate-100 relative min-h-[700px] overflow-hidden select-none">
                    
                    {/* Background Circle - Clean, concentric, no spin */}
                    <div className="absolute w-[500px] h-[500px] rounded-full border border-slate-200 opacity-60"></div>
                    <div className="absolute w-[350px] h-[350px] rounded-full border border-slate-200 opacity-40"></div>

                    {/* Main Circular Layout Container - Spacious 600px */}
                    <div className="relative w-[600px] h-[600px]">
                        
                        {/* Center Core */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 z-20">
                             <div className={`w-full h-full rounded-full flex flex-col items-center justify-center text-center p-6 border-4 transition-all duration-500 shadow-2xl
                                ${activePhase ? 'bg-white border-slate-100' : 'bg-slate-900 border-emerald-400 shadow-emerald-500/20'}
                             `}>
                                {activePhase ? (
                                     // Show Detail - Calm fade in
                                     <div className="animate-in fade-in duration-500">
                                        <p className={`text-xs font-bold uppercase tracking-widest mb-2 text-${EIMC_PHASES[activePhase-1].color}-600`}>
                                            Phase {activePhase}
                                        </p>
                                        <p className="text-slate-900 font-bold text-lg leading-tight">
                                            {EIMC_PHASES[activePhase-1].desc}
                                        </p>
                                     </div>
                                ) : (
                                     // Default State
                                     <>
                                        <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Core Engine</p>
                                        <p className="text-white font-bold text-base leading-snug">Therapeutic <br/> Micro-Recovery <br/> Moment</p>
                                     </>
                                )}
                             </div>
                        </div>

                        {/* Nodes */}
                        {EIMC_PHASES.map((phase, index) => {
                             const isTop = index === 0;
                             const isRight = index === 1;
                             const isBottom = index === 2;
                             const isLeft = index === 3;
                             
                             let posClass = '';
                             if(isTop) posClass = 'top-0 left-1/2 -translate-x-1/2';
                             if(isRight) posClass = 'top-1/2 right-0 -translate-y-1/2';
                             if(isBottom) posClass = 'bottom-0 left-1/2 -translate-x-1/2';
                             if(isLeft) posClass = 'top-1/2 left-0 -translate-y-1/2';

                             return (
                                 <div 
                                    key={phase.id}
                                    className={`absolute ${posClass} flex flex-col items-center cursor-pointer group z-30 w-44`}
                                    onMouseEnter={() => setActivePhase(phase.id)}
                                    onMouseLeave={() => setActivePhase(null)}
                                 >
                                     <div className={`
                                        w-24 h-24 rounded-2xl flex items-center justify-center border-4 shadow-xl transition-all duration-300 relative z-20
                                        ${activePhase === phase.id ? `bg-${phase.color}-500 border-${phase.color}-300 text-white` : `bg-white border-white text-${phase.color}-500 hover:border-${phase.color}-100`}
                                     `}>
                                         <phase.icon size={36} />
                                     </div>
                                     
                                     {/* Label Pill */}
                                     <div className={`
                                        mt-4 px-5 py-3 rounded-xl backdrop-blur-md border shadow-sm transition-all duration-300 text-center min-w-[160px] relative z-10
                                        ${activePhase === phase.id ? `bg-${phase.color}-50 border-${phase.color}-200` : 'bg-white/90 border-slate-200'}
                                     `}>
                                         <p className={`font-bold text-lg leading-none mb-1.5 ${activePhase === phase.id ? `text-${phase.color}-900` : 'text-slate-700'}`}>{phase.title}</p>
                                         <p className={`text-[10px] font-bold uppercase tracking-widest ${activePhase === phase.id ? `text-${phase.color}-600` : 'text-slate-400'}`}>{phase.subtitle}</p>
                                     </div>
                                 </div>
                             )
                        })}
                        
                        {/* Static Flow Indicators */}
                        <div className="absolute top-[15%] right-[15%] text-slate-300 transform rotate-45"><ArrowRight size={24} /></div>
                        <div className="absolute bottom-[15%] right-[15%] text-slate-300 transform rotate-135"><ArrowRight size={24} /></div>
                        <div className="absolute bottom-[15%] left-[15%] text-slate-300 transform rotate-[225deg]"><ArrowRight size={24} /></div>
                        <div className="absolute top-[15%] left-[15%] text-slate-300 transform rotate-[315deg]"><ArrowRight size={24} /></div>

                    </div>
                </div>

                {/* Why It Works Card */}
                <div className="w-full xl:w-1/2 flex flex-col gap-6">
                    <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Brain className="text-emerald-400" />
                                Why This Works
                            </h3>
                            <div className="space-y-4 text-slate-300 font-medium leading-relaxed text-lg">
                                <p>Alzheimer’s damages the <span className="text-white font-bold">hippocampus</span> (short-term logic) first, but emotional memories stored in the <span className="text-emerald-300 font-bold">amygdala</span> remain intact longer.</p>
                                <p>The EIMC loop bypasses logic and uses <span className="text-white font-bold">emotion as a gateway</span> to unlock identity anchors.</p>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-10">
                            <Brain size={200} />
                        </div>
                    </div>

                    {/* Micro Transitions Grid */}
                    <div className="flex-grow bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Micro-Transitions (The invisible flow)</h4>
                        <div className="space-y-6">
                            {[
                                { from: 'Sensory', to: 'Emotion', desc: 'Recognition Spark → Eye Focus', color: 'blue', id: 1 },
                                { from: 'Emotion', to: 'Identity', desc: '“This feels safe” → “This is mine”', color: 'rose', id: 2 },
                                { from: 'Identity', to: 'Memory', desc: 'Self-Activation → Story Fragment', color: 'amber', id: 3 },
                                { from: 'Memory', to: 'Calm', desc: 'Anxiety Drop → Connection', color: 'emerald', id: 4 },
                            ].map((step, i) => (
                                <div key={i} className={`flex items-center gap-4 transition-opacity duration-300 ${activePhase && activePhase !== step.id ? 'opacity-30' : 'opacity-100'}`}>
                                    <div className={`w-2 h-2 rounded-full bg-${step.color}-500`}></div>
                                    <div className="flex-grow flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                        <span className="text-xs font-bold text-slate-400 uppercase">{step.from}</span>
                                        <ArrowRight size={14} className="text-slate-300" />
                                        <span className="text-xs font-bold text-slate-400 uppercase">{step.to}</span>
                                        <div className="h-4 w-[1px] bg-slate-200 mx-2"></div>
                                        <span className={`text-sm font-bold text-${step.color}-700`}>{step.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Phases Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {EIMC_PHASES.map((phase) => (
                     <div 
                        key={phase.id} 
                        className={`bg-white rounded-3xl p-6 border-t-4 shadow-sm hover:shadow-lg transition-all border-${phase.color}-500 ${activePhase === phase.id ? 'ring-2 ring-offset-2 ring-indigo-100' : ''}`}
                        onMouseEnter={() => setActivePhase(phase.id)}
                        onMouseLeave={() => setActivePhase(null)}
                     >
                         <div className={`w-12 h-12 rounded-xl bg-${phase.color}-50 text-${phase.color}-600 flex items-center justify-center mb-4`}>
                             <phase.icon size={24} />
                         </div>
                         <h3 className="text-xl font-bold text-slate-900 mb-1">{phase.title}</h3>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{phase.subtitle}</p>
                         <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">{phase.desc}</p>
                         <div className="flex flex-wrap gap-2">
                             {phase.examples.map((ex, i) => (
                                 <span key={i} className={`px-2 py-1 bg-${phase.color}-50 text-${phase.color}-700 text-[10px] font-bold uppercase rounded-md`}>
                                     {ex}
                                 </span>
                             ))}
                         </div>
                     </div>
                 ))}
            </div>

            {/* Level Mapping Table */}
            <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-8 py-4 border-b border-slate-100">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                        <Layout size={18} className="text-slate-400"/>
                        Game Mechanics Mapping
                    </h3>
                </div>
                <div className="grid grid-cols-1 divide-y divide-slate-100">
                    {EIMC_MAPPING.map((row, i) => (
                        <div key={i} className="grid grid-cols-12 px-8 py-5 items-center hover:bg-slate-50/50 transition-colors">
                            <div className="col-span-3 font-bold text-slate-900">{row.phase}</div>
                            <div className="col-span-1 flex justify-center"><ArrowRight size={16} className="text-slate-300"/></div>
                            <div className="col-span-3 font-bold text-indigo-600">{row.level}</div>
                            <div className="col-span-5 text-slate-500 font-medium text-sm italic border-l-2 border-slate-100 pl-4">{row.mechanic}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Quote */}
            <div className="bg-emerald-50 rounded-2xl p-8 text-center border border-emerald-100">
                <p className="text-xl font-bold text-emerald-900 leading-relaxed">
                    “The EIMC Loop transforms a simple sensory cue into a moment of emotional safety, identity connection, and memory retrieval — creating micro-healing episodes inside Sanjeevani.”
                </p>
            </div>

        </div>
    )
}

// --- 8. LEVEL FLOW ---
export const LevelFlow: React.FC = () => {
    return (
        <div className="h-[calc(100vh-160px)] min-h-[600px] w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden p-10 flex flex-col">
            <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-900">Level 1: The Nostalgia Room</h2>
                <p className="text-xl text-slate-600 mt-2 font-medium">User Flow & Interaction Mechanics</p>
            </div>
            
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden">
                {/* Visual Flow Representation */}
                <div className="flex items-center gap-4 w-full max-w-6xl px-10">
                    {[
                        { step: 'Entry', icon: User, label: 'Identify', desc: 'Facial Recog / Voice', color: 'slate' },
                        { step: 'Lobby', icon: Layers, label: 'Menu', desc: 'Simple 3-Option Grid', color: 'indigo' },
                        { step: 'Action', icon: Music, label: 'Trigger', desc: 'Select "Old Radio"', color: 'rose' },
                        { step: 'Reward', icon: Sparkles, label: 'Recall', desc: 'Audio Plays + Visual Bloom', color: 'emerald' },
                        { step: 'Exit', icon: CheckCircle, label: 'Log', desc: 'Mood Recorded', color: 'slate' },
                    ].map((node, i, arr) => (
                        <React.Fragment key={i}>
                            <div className="flex flex-col items-center gap-4 text-center group relative z-10">
                                <div className={`w-24 h-24 rounded-3xl bg-white border-2 border-${node.color}-100 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <node.icon size={32} className={`text-${node.color}-500`} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{node.step}</p>
                                    <h4 className="text-lg font-bold text-slate-800">{node.label}</h4>
                                    <p className="text-sm text-slate-500 font-medium">{node.desc}</p>
                                </div>
                            </div>
                            {i < arr.length - 1 && (
                                <div className="flex-grow h-[2px] bg-slate-200 relative mx-4">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-300 rounded-full"></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
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
