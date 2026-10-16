import React from 'react';

export default function Skills() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-slate-950 text-white px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* سربرگ بخش مهارت‌ها */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100">
            دانش فنی و <span className="text-emerald-400">مهارت‌ها</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            مجموعه ابزارها و فناوری‌هایی که در طول این دوره به صورت عملی فرا گرفته‌ام.
          </p>
        </div>

        {/* شبکه دسته‌بندی مهارت‌ها (بدون مپ زدن - چیدمان مستقیم) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* کارت اول: بخش ری‌آکت */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md hover:border-emerald-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-emerald-400 mb-6 border-b border-slate-800 pb-3 tracking-wide" dir="ltr">
              React & Core Frontend
            </h3>
            <ul className="space-y-3 p-0 m-0 list-none text-right" dir="ltr">
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>React.js</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>JavaScript </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>React Router</span>
              </li>
             
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>React Hooks(useState, useEffect)</span>
              </li>
            </ul>
          </div>

          {/* کارت دوم: ابزارهای استایل‌دهی */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md hover:border-emerald-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-emerald-400 mb-6 border-b border-slate-800 pb-3 tracking-wide" dir="ltr">
              Styling & UI Tools
            </h3>
            <ul className="space-y-3 p-0 m-0 list-none text-right" dir="ltr">
              
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Responsive Design</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>HTML5 & CSS</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Flexbox & Grid</span>
              </li>
            </ul>
          </div>

          {/* کارت سوم: ابزارهای توسعه */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md hover:border-emerald-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-emerald-400 mb-6 border-b border-slate-800 pb-3 tracking-wide" dir="ltr">
              Development Workflow
            </h3>
            <ul className="space-y-3 p-0 m-0 list-none text-right" dir="ltr">
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Git & GitHub</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Vercel</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Netlify</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>VS Code Debugging</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
