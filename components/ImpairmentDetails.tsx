
import React from 'react';
import { Info } from 'lucide-react';
import { MAPPING_DATA } from '../constants';

const ImpairmentDetails: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
          Cognitive Mapping
        </h2>
        <p className="text-base text-slate-500 font-medium leading-relaxed border-l-4 border-slate-200 pl-5 py-1">
          Understanding the specific decay of cognitive functions allows us to engineer therapeutic environments that compensate for deficits while maximizing remaining abilities.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex items-center justify-between backdrop-blur-sm">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Clinical Declines</h3>
          <span className="bg-white border border-slate-200 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
            {MAPPING_DATA.length} DOMAINS
          </span>
        </div>
        
        <div className="divide-y divide-slate-100">
          {MAPPING_DATA.map((item, idx) => (
            <div key={idx} className="p-5 hover:bg-slate-50/80 transition-all duration-300 flex items-start gap-5 group cursor-default">
              <div className={`mt-1 p-2.5 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 group-hover:shadow-md transition-all`}>
                <item.icon size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">{item.domain}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.struggle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl flex gap-4 items-start shadow-sm">
        <div className="bg-indigo-100 p-2 rounded-full">
            <Info className="text-indigo-600" size={20} />
        </div>
        <div>
           <h4 className="font-bold text-indigo-900 text-sm mb-1.5">Architectural Insight</h4>
           <p className="text-indigo-800/80 text-sm leading-relaxed font-medium">
             We do not treat generalized "dementia". We design specific mechanics for specific deficits—creating "prosthetic environments" for the mind.
           </p>
        </div>
      </div>
    </div>
  );
};

export default ImpairmentDetails;
