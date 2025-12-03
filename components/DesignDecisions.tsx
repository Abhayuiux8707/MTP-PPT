
import React from 'react';
import { ArrowRight, Clock, Map as MapIcon, Monitor, Music, MousePointer2, Zap, BookOpen, Eye } from 'lucide-react';

const DesignDecisions: React.FC = () => {
  const decisions = [
    {
      cause: 'Memory impairment',
      effect: 'Nostalgic anchors',
      icon: <Clock className="w-5 h-5 text-indigo-600" />,
      bg: 'bg-indigo-50 border-indigo-100',
    },
    {
      cause: 'Attention decline',
      effect: 'Minimalist UI',
      icon: <Eye className="w-5 h-5 text-amber-600" />,
      bg: 'bg-amber-50 border-amber-100',
    },
    {
      cause: 'Spatial confusion',
      effect: 'Clear landmarks',
      icon: <MapIcon className="w-5 h-5 text-emerald-600" />,
      bg: 'bg-emerald-50 border-emerald-100',
    },
    {
      cause: 'Language decline',
      effect: 'Iconography',
      icon: <Monitor className="w-5 h-5 text-blue-600" />,
      bg: 'bg-blue-50 border-blue-100',
    },
    {
      cause: 'Emotional instability',
      effect: 'Soothing palettes',
      icon: <Music className="w-5 h-5 text-pink-600" />,
      bg: 'bg-pink-50 border-pink-100',
    },
    {
      cause: 'Sensory overload',
      effect: 'Acoustic damping',
      icon: <Zap className="w-5 h-5 text-yellow-600" />,
      bg: 'bg-yellow-50 border-yellow-100',
    },
    {
      cause: 'Executive decline',
      effect: 'Linear flows',
      icon: <MousePointer2 className="w-5 h-5 text-rose-600" />,
      bg: 'bg-rose-50 border-rose-100',
    },
    {
      cause: 'Learning difficulty',
      effect: 'Repetitive mechanics',
      icon: <BookOpen className="w-5 h-5 text-cyan-600" />,
      bg: 'bg-cyan-50 border-cyan-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 h-full">
      {decisions.map((item, idx) => (
        <div key={idx} className="group relative bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
               <div className={`p-2.5 rounded-xl border ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                 {item.icon}
               </div>
               <div className="min-w-0">
                 <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                   Constraint
                 </p>
                 <p className="text-xs font-bold text-slate-700 truncate">
                   {item.cause}
                 </p>
               </div>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
             <div>
               <p className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest mb-0.5">
                 Solution
               </p>
               <p className="text-sm font-bold text-slate-900">
                 {item.effect}
               </p>
             </div>
             <ArrowRight size={14} className="text-slate-300 group-hover:text-slate-500 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignDecisions;
