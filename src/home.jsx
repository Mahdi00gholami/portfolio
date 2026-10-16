

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-950 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center space-y-6 sm:space-y-8">
        
        {/* متن خوش‌آمدگویی کوچک */}
        <p className="text-emerald-400 font-mono text-sm sm:text-base tracking-widest uppercase">
          سلام و خوش آمدید به پورتفولیو من
        </p>

        {/* نام و عنوان شغلی شما */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-100 tracking-tight">
            من <span className="text-emerald-400">مهدی</span> هستم
          </h1>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-400">
            توسعه‌دهنده جونیور React / Frontend Developer
          </h2>
        </div>

        {/* بیوگرافی یا معرفی کوتاه حرفه‌ای */}
        <p className="text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed" dir="rtl">
          من مشتاق خلق تجربه‌های وب پویا، سریع و واکنش‌گرا هستم. در طول این دوره آموزشی، مهارت‌های کاربردی متعددی در زمینه معماری کامپوننت‌های React و استایل‌دهی مدرن با Tailwind CSS کسب کرده‌ام که آن‌ها را در پروژه‌های واقعی پیاده‌سازی کرده‌ام.
        </p>

        {/* دکمه‌های فراخوان یا Call to Action (کاملاً واضح بر اساس سند تکلیف) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* دکمه هدایت به پروژه‌ها */}
          <Link 
            to="/projects" 
            className="w-full sm:w-auto px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 text-center"
          >
            مشاهده پروژه‌ها
          </Link>

          {/* دکمه هدایت به فرم تماس با من */}
          <Link 
            to="/contact" 
            className="w-full sm:w-auto px-8 py-3 bg-slate-900 hover:bg-slate-800 text-emerald-400 font-semibold rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 text-center"
          >
            ارتباط با من
          </Link>

        </div>

      </div>
    </section>
  );
}
