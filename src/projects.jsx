import React, { useEffect, useState } from "react";
import { getCollection } from "./api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => { getCollection("projects").then(setProjects).catch(() => setError("دریافت پروژه‌ها ناموفق بود. تنظیمات Supabase و دسترسی جدول را بررسی کنید.")); }, []);

  return <section className="min-h-[calc(100vh-4rem)] bg-slate-950 text-white px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
    <div className="max-w-6xl mx-auto space-y-10">
      <header className="text-center space-y-3"><h2 className="text-3xl sm:text-4xl font-extrabold">پروژه‌های <span className="text-emerald-400">برگزیده</span></h2><p className="text-slate-400">نمونه‌کارهایی که در طول مسیر ساخته‌ام.</p></header>
      {error && <p className="text-center text-amber-400">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => <article key={project.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-emerald-500/40 transition flex flex-col group">
          <div className="w-full aspect-video bg-slate-800 overflow-hidden"><img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /></div>
          <div className="p-6 flex flex-col flex-grow gap-4"><div className="flex justify-between items-center gap-3"><h3 className="text-xl font-bold text-gray-200">{project.title}</h3><span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-full">{project.technology}</span></div><p className="text-sm text-slate-400 leading-relaxed flex-grow">{project.description}</p>{project.url && <a href={project.url} target="_blank" rel="noreferrer" className="block text-center py-2.5 px-4 bg-slate-950 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 font-bold text-sm rounded-lg border border-slate-700 transition">مشاهده پروژه</a>}</div>
        </article>)}
      </div>
    </div>
  </section>;
}
