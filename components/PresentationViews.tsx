
import React, { useState } from 'react';
import { PERSONAS, MAPPING_DATA, THERAPY_HEATMAP_DATA, THERAPY_RADAR_DATA, THERAPY_CARDS_DATA, MATRIX_STRATEGIC_INSIGHTS, SIMPLE_HYPOTHESES, TRI_IMPACT_MODEL, EXPERIMENT_PLANS, SENSORY_TRIGGER_DATA, EIMC_PHASES, EIMC_MAPPING } from '../constants';
import { ArrowRight, Music, CheckCircle, Maximize2, Download, MousePointer, Upload, PenTool, Image as ImageIcon, Edit3, Camera, Calendar, Sparkles, Mic, Lightbulb, FileText, Activity, Brain, Puzzle, Wind, BookOpen, Layers, MapIcon, Eye, Zap, Hand, ArrowDown, Target, Compass, FlaskConical, Microscope, Clock, Users, User, Heart, ChevronRight, Triangle, Fingerprint, Smile, Layout, Smartphone, AlertCircle } from 'lucide-react';
import CognitiveRadarChart from './CognitiveRadarChart';
import { TherapyRadarChart, InsightTriangle, SensoryConcentricMap, ExperienceMatrixChart, Storyboard, JourneyMap } from './Visualizations';

// --- 1. OVERVIEW ---
export const Overview: React.FC = () => {
  return (
    <div className="h-[calc(100vh-160px)] min-h-[600px] w-full bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden flex flex-row">
      <div className="w-[45%] flex flex-col justify-center p-16 relative z-10 bg-white border-r border-slate-100">
        <div className="absolute top-12 left-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-100 rounded-full border border-slate-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">Phase 1.0 Research</span>
          </div>
        </div>
        <div className="space-y-10">
          <h1 className="text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Sanjeevani
          </h1>
          <div className="w-32 h-3 bg-emerald-500 rounded-full"></div>
          <h2 className="text-4xl font-light text-slate-600 leading-snug">
            Therapeutic Design for <br/>
            <span className="font-bold text-emerald-700">Early-Stage Alzheimer's</span>
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed max-w-lg font-medium">
            A design-research framework reducing agitation through nostalgic resonance and bio-adaptive UX environments.
          </p>
        </div>
        
        <div className="mt-16 flex gap-16">
           <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Target</p>
              <p className="font-bold text-slate-900 text-xl">Mild Cognitive Impairment</p>
           </div>
           <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Method</p>
              <p className="font-bold text-slate-900 text-xl">Reminiscence Therapy</p>
           </div>
        </div>
      </div>
      <div className="w-[55%] relative h-full bg-slate-100 group">
        <img 
          src="https://images.unsplash.com/photo-1606206591513-39908d8f338d?q=80&w=2070&auto=format&fit=crop" 
          alt="Hero" 
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent"></div>
        <button className="absolute bottom-12 right-12 bg-white/95 backdrop-blur px-8 py-4 rounded-2xl font-bold text-slate-900 shadow-xl flex items-center gap-3 hover:scale-105 transition-transform text-lg">
           <Camera size={24} /> Change Visual
        </button>
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
    <div className="h-full flex flex-col xl:flex-row gap-8">
        {/* Arun's Card */}
        <div className="flex-1 bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm flex flex-col group">
            {/* Header Image Area */}
            <div className="h-64 relative bg-slate-100">
                 <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop" className="w-full h-full object-cover object-top" alt="Arun Kumar" />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                     <h2 className="text-3xl font-bold text-white mb-1">Arun Kumar, 67</h2>
                     <p className="text-emerald-300 font-bold text-lg">Mild Alzheimer's (Early Stage)</p>
                 </div>
                 <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-widest border border-white/30">Primary User</div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col gap-8">
                {/* Quote */}
                <div className="relative pl-6 border-l-4 border-indigo-500">
                    <p className="text-xl font-serif italic text-slate-700 leading-relaxed">“Where is that old song? It made evenings better.”</p>
                </div>

                {/* Grid Details */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Occupation</p>
                        <p className="font-bold text-slate-800">Retired School Teacher</p>
                    </div>
                     <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Lives With</p>
                        <p className="font-bold text-slate-800">Spouse (Meera)</p>
                    </div>
                    <div className="col-span-2">
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Typical Day</p>
                         <p className="text-sm font-medium text-slate-600 leading-snug">After morning tea he enjoys sitting on the veranda but often forgets the day’s events.</p>
                    </div>
                </div>

                {/* Behavioral & Emotional */}
                 <div className="space-y-4">
                     <h4 className="flex items-center gap-2 text-sm font-bold text-indigo-600 uppercase tracking-wide"><Brain size={16}/> Behavioral Profile</h4>
                     <div className="grid grid-cols-1 gap-3">
                         <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex gap-3 items-start">
                             <Clock size={16} className="text-slate-400 mt-1 shrink-0" />
                             <div><span className="font-bold text-slate-700 block text-sm">Attention Span</span><span className="text-xs text-slate-500">Short bursts (2–4 mins)</span></div>
                         </div>
                         <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex gap-3 items-start">
                             <Smartphone size={16} className="text-slate-400 mt-1 shrink-0" />
                             <div><span className="font-bold text-slate-700 block text-sm">Tech Comfort</span><span className="text-xs text-slate-500">Minimal; uses remote with help</span></div>
                         </div>
                     </div>
                 </div>

                 <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-rose-600 uppercase tracking-wide"><Heart size={16}/> Emotional Profile</h4>
                      <div className="flex flex-wrap gap-2">
                          {['Fears Abandonment', 'Loves Old Songs', 'Enjoy Festivals'].map(t => (
                              <span key={t} className="px-3 py-1 bg-rose-50 text-rose-700 rounded-lg text-xs font-bold border border-rose-100">{t}</span>
                          ))}
                      </div>
                 </div>

                 {/* How Sanjeevani Helps */}
                 <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 mt-auto">
                     <h4 className="text-indigo-900 font-bold mb-3 flex items-center gap-2"><Zap size={18} className="fill-indigo-600 text-indigo-600"/> Sanjeevani Intervention</h4>
                     <ul className="space-y-2 text-sm text-indigo-800 font-medium">
                         <li className="flex gap-2 items-start"><CheckCircle size={14} className="mt-1 shrink-0"/> Nostalgia Room anchors with object + song.</li>
                         <li className="flex gap-2 items-start"><CheckCircle size={14} className="mt-1 shrink-0"/> Garden reduces evening restlessness.</li>
                     </ul>
                 </div>
            </div>
        </div>

        {/* Meera's Card */}
        <div className="flex-1 bg-slate-50 rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm flex flex-col group">
             {/* Header Image Area */}
            <div className="h-64 relative bg-slate-200">
                 <img src="https://images.unsplash.com/photo-1551185887-a5a14384d1d1?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover object-center" alt="Meera" />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                     <h2 className="text-3xl font-bold text-white mb-1">Meera, 62</h2>
                     <p className="text-emerald-300 font-bold text-lg">Primary Caregiver (Spouse)</p>
                 </div>
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-widest border border-white/30">Secondary User</div>
            </div>

            <div className="p-8 flex-grow flex flex-col gap-8">
                {/* Quote */}
                <div className="relative pl-6 border-l-4 border-emerald-500">
                    <p className="text-xl font-serif italic text-slate-700 leading-relaxed">“I need something I can open and use within a minute.”</p>
                </div>

                {/* Grid Details */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Role</p>
                        <p className="font-bold text-slate-800">Spouse & Caregiver</p>
                    </div>
                     <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Responsibilities</p>
                        <p className="font-bold text-slate-800">Medication, Routine</p>
                    </div>
                </div>

                {/* Pain Points */}
                 <div className="space-y-4">
                     <h4 className="flex items-center gap-2 text-sm font-bold text-amber-600 uppercase tracking-wide"><AlertCircle size={16}/> Pain Points</h4>
                     <ul className="space-y-3">
                         {['Emotional burnout from repetitive tasks.', 'Difficulty calming Arun in late afternoons.', 'Needs quick interventions she trusts.'].map((pt, i) => (
                             <li key={i} className="bg-white p-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 shadow-sm flex gap-3">
                                 <span className="text-amber-500 font-bold">•</span> {pt}
                             </li>
                         ))}
                     </ul>
                 </div>

                 {/* Needs */}
                 <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-wide"><Target size={16}/> Design Needs</h4>
                      <div className="flex flex-wrap gap-2">
                          {['One-tap tools', 'Simple tags', 'Short note field', 'Quick summaries'].map(t => (
                              <span key={t} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-bold border border-emerald-100">{t}</span>
                          ))}
                      </div>
                 </div>

                 {/* How Sanjeevani Helps */}
                 <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mt-auto">
                     <h4 className="text-slate-900 font-bold mb-3 flex items-center gap-2"><Layout size={18} className="text-emerald-500"/> Sanjeevani Solution</h4>
                     <p className="text-sm text-slate-600 font-medium leading-relaxed">
                         Caregiver dashboard (tags, notes) reduces guesswork and helps show progress over time.
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
