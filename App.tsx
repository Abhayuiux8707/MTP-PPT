
import React, { useState, useRef, useEffect } from 'react';
import { NAV_TABS } from './constants';
import { Overview, CognitiveMapping, Personas, DesignHypotheses, LevelFlow, Wireframes, TherapeuticBenchmarking, SensoryTriggerView, ExperienceBenchmarkingView, EIMCLoopView } from './components/PresentationViews';
import { JourneyMap, Storyboard, Benchmarking } from './components/Visualizations';
import ChatPanel from './components/ChatPanel';
import { Flower } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navRef = useRef<HTMLElement>(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Overview />;
      case 'cognitive': return <CognitiveMapping />;
      case 'therapeutic': return <TherapeuticBenchmarking />;
      case 'sensory': return <SensoryTriggerView />;
      case 'benchmarking': return <ExperienceBenchmarkingView />;
      case 'personas': return <Personas />;
      case 'storyboard': return <Storyboard />;
      case 'journey': return <JourneyMap />;
      case 'hypotheses': return <DesignHypotheses />;
      case 'eimc': return <EIMCLoopView />;
      case 'benchmarking-old': return <Benchmarking />; // Kept as fallback if needed
      case 'levelflow': return <LevelFlow />;
      case 'wireframes': return <Wireframes />;
      case 'chat': return <ChatPanel />;
      default: return <Overview />;
    }
  };

  // Enable horizontal scrolling with mouse wheel
  const handleNavWheel = (e: React.WheelEvent) => {
    if (navRef.current) {
      navRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      
      {/* Sticky Navigation - Fixed Height */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm h-24">
        <div className="w-full max-w-[1920px] mx-auto px-8 h-full flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4 pr-10 border-r-2 border-slate-100 min-w-fit">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 hover:scale-105 transition-transform cursor-pointer" onClick={() => setActiveTab('overview')}>
              <Flower className="text-white w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight leading-none">Sanjeevani</h1>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">v2.1</span>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Phase 1 Design Deck</p>
            </div>
          </div>

          {/* Nav Tabs - Horizontally Scrollable with Wheel Support */}
          <nav 
            ref={navRef}
            onWheel={handleNavWheel}
            className="flex-grow overflow-x-auto no-scrollbar flex items-center gap-2 px-6 h-full mask-linear-fade"
            style={{ scrollBehavior: 'smooth' }}
          >
            {NAV_TABS.map((tab) => {
               const Icon = tab.icon;
               const isActive = activeTab === tab.id;
               return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-700 shadow-sm ring-1 ring-emerald-100 scale-105' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-emerald-600' : 'text-slate-400'} />
                  {tab.label}
                </button>
               );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-[1920px] mx-auto px-8 pt-32 pb-12">
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards min-h-full">
          {renderContent()}
        </div>
      </main>
      
    </div>
  );
};

export default App;
