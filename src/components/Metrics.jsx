import React from 'react';
import { Zap, HardDrive, ShieldCheck, Lock } from 'lucide-react';

export default function Metrics() {
  const metrics = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      value: "< 1.5s",
      label: "Tiempo de Carga",
      description: "Carga ultrarrápida en catálogos modulares y tarjetas utilizando renderizado directo JSON."
    },
    {
      icon: <HardDrive className="w-6 h-6 text-cyan-400" />,
      value: "60%",
      label: "Optimización de Espacio",
      description: "Ahorro de almacenamiento en desarrollo local mediante entornos monorepo con pnpm."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
      value: "100%",
      label: "Integridad de Transacciones",
      description: "Operaciones ACID cruzadas entre bases de datos con rollback en caliente ante fallos."
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-400" />,
      value: "Zero Trust",
      label: "Aislamiento de BD",
      description: "Separación total de bases de datos administrativas y credenciales de clientes."
    }
  ];

  return (
    <section className="py-20 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
            Rendimiento & Métricas
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Impacto Técnico Cuantificable
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Estándares de calidad y optimización aplicados en la infraestructura del software.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-between"
            >
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 mb-4">
                {m.icon}
              </div>
              <div className="text-3xl font-extrabold text-white font-mono mb-1">
                {m.value}
              </div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                {m.label}
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
