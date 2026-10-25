import React, { useEffect, useState } from "react";
import { getCollection } from "./api";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => { getCollection("skills").then(setSkills).catch(() => setError("دریافت مهارت‌ها ناموفق بود. تنظیمات Supabase و دسترسی جدول را بررسی کنید.")); }, []);
  const groups = skills.reduce((result, skill) => { (result[skill.category || "سایر مهارت‌ها"] ||= []).push(skill); return result; }, {});
  return <section className="min-h-[calc(100vh-4rem)] bg-slate-950 text-white px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
    <div className="max-w-6xl mx-auto space-y-10"><header className="text-center space-y-3"><h2 className="text-3xl sm:text-4xl font-extrabold">دانش فنی و <span className="text-emerald-400">مهارت‌ها</span></h2><p className="text-slate-400">ابزارها و فناوری‌هایی که با آن‌ها کار می‌کنم.</p></header>
      {error && <p className="text-center text-amber-400">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{Object.entries(groups).map(([category, items]) => <article key={category} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md hover:border-emerald-500/30 transition"><h3 className="text-xl font-bold text-emerald-400 mb-6 border-b border-slate-800 pb-3" dir="auto">{category}</h3><ul className="space-y-3 list-none m-0 p-0" dir="ltr">{items.map((skill) => <li key={skill.id} className="flex items-center gap-3 text-gray-300 font-medium"><span className="w-2 h-2 rounded-full bg-emerald-400"/><span>{skill.name}</span></li>)}</ul></article>)}</div>
    </div>
  </section>;
}
