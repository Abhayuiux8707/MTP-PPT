
import React from 'react';
import { MAPPING_DATA } from '../constants';

const MappingTable: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden ring-1 ring-slate-100">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100">
          <thead>
            <tr className="bg-slate-50/80">
              <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest border-r border-slate-100 last:border-0">
                Cognitive Domain
              </th>
              <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest border-r border-slate-100 last:border-0">
                Clinical Symptom
              </th>
              <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest border-r border-slate-100 last:border-0">
                Design Prescription
              </th>
              <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Application Level
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {MAPPING_DATA.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50/60 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-800 border-r border-slate-100/50">
                  {row.domain}
                </td>
                <td className="px-6 py-4 text-sm text-slate-500 font-medium border-r border-slate-100/50">
                  {row.struggle}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-indigo-600 border-r border-slate-100/50 bg-indigo-50/10 group-hover:bg-indigo-50/30 transition-colors">
                  {row.implication}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wide border ${
                    row.level.includes('All') 
                      ? 'bg-slate-100 text-slate-600 border-slate-200' 
                      : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                  }`}>
                    {row.level}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MappingTable;
